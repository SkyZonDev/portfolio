'use server';
import { render } from '@react-email/components';
import { createTransport } from 'nodemailer';
import { ReactElement } from 'react';
import { Resend } from 'resend';

const config = {
    host: 'localhost',
    port: 1025,
    secure: false,
};

const transporter = createTransport(config);

const getResendClient = () => {
    if (!process.env.RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY is not configured');
    }
    return new Resend(process.env.RESEND_API_KEY);
};

interface EmailProps {
    email: string;
    subject: string;
    react: ReactElement;
}

export async function sendTestEmail({ email, subject, react }: EmailProps) {
    try {
        const html = await render(react, {
            pretty: true,
        });
        const mail = await transporter.sendMail({
            from: 'DPS-Solution <contact@dps-solution.com>',
            to: email,
            subject,
            html,
        });

        return {
            data: mail,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error as Error,
        };
    }
}

export async function sendMail({ email, subject, react }: EmailProps) {
    if (process.env.NODE_ENV === 'development') {
        return await sendTestEmail({ email, subject, react });
    }

    const resend = getResendClient();
    const { data, error } = await resend.emails.send({
        from: 'DPS-Solution <contact@dps-solution.com>',
        to: email,
        subject,
        react,
    });

    return {
        data,
        error,
    };
}
