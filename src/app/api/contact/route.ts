import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/emails';
import { ClientContact } from '@/lib/emails/templates/client-contact';
import { contactFormSchema } from '@/lib/validations/contact';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const data = contactFormSchema.parse(body);

        const sanitizedData = {
            name: data.name.trim(),
            email: data.email.trim().toLowerCase(),
            subject: data.subject,
            message: data.message.trim(),
        };

        const response = await sendMail({
            email: 'jp.dupuis@dps-solution.com',
            subject: `Nouveau message - ${sanitizedData.subject}`,
            react: ClientContact(sanitizedData),
        });

        if (response.error) {
            return NextResponse.json(
                { error: response.error },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Message envoyé avec succès',
        });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
