import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function ClientContact({
    name,
    email,
    subject,
    message,
}: ContactFormData) {
    return (
        <Html>
            <Head />
            <Preview>Nouveau message de contact - {subject}</Preview>
            <Body
                style={{
                    backgroundColor: '#fafafa',
                    fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
                    margin: 0,
                    padding: 0,
                }}
            >
                <Container
                    style={{
                        backgroundColor: '#fafafa',
                        margin: '0 auto',
                        padding: '40px 20px',
                        maxWidth: '600px',
                    }}
                >
                    {/* Badge "Nouveau message" */}
                    <Section
                        style={{
                            textAlign: 'center' as const,
                            marginBottom: '24px',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-block',
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '9999px',
                                padding: '6px 12px',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: '12px',
                                    margin: '0',
                                    color: '#6b7280',
                                    fontWeight: '500',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                }}
                            >
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '6px',
                                        height: '6px',
                                        backgroundColor: '#8b5cf6',
                                        borderRadius: '50%',
                                    }}
                                />
                                Nouveau message
                            </Text>
                        </div>
                    </Section>

                    {/* Header principal */}
                    <Section
                        style={{
                            textAlign: 'center' as const,
                            marginBottom: '32px',
                        }}
                    >
                        <Heading
                            style={{
                                color: '#111827',
                                fontSize: '32px',
                                fontWeight: '700',
                                margin: '0 0 8px 0',
                                lineHeight: '1.2',
                            }}
                        >
                            Message de contact
                        </Heading>
                        <Text
                            style={{
                                fontSize: '16px',
                                lineHeight: '24px',
                                margin: '0',
                                color: '#6b7280',
                            }}
                        >
                            Vous avez reçu un nouveau message depuis votre
                            portfolio
                        </Text>
                    </Section>

                    {/* Carte principale */}
                    <Section
                        style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            border: '1px solid #e5e7eb',
                            overflow: 'hidden',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        {/* Barre accent */}
                        <div
                            style={{
                                height: '4px',
                                background:
                                    'linear-gradient(90deg, #8b5cf6 0%, #a78bfa 100%)',
                            }}
                        />

                        {/* Contenu */}
                        <Section style={{ padding: '32px' }}>
                            {/* Informations expéditeur - Carte */}
                            <Section
                                style={{
                                    backgroundColor: '#f9fafb',
                                    padding: '20px',
                                    borderRadius: '12px',
                                    marginBottom: '24px',
                                    border: '1px solid #f3f4f6',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: '11px',
                                        lineHeight: '16px',
                                        margin: '0 0 12px 0',
                                        color: '#9ca3af',
                                        fontWeight: '600',
                                        textTransform: 'uppercase' as const,
                                        letterSpacing: '0.5px',
                                    }}
                                >
                                    Expéditeur
                                </Text>
                                <Text
                                    style={{
                                        fontSize: '18px',
                                        lineHeight: '28px',
                                        margin: '0 0 4px 0',
                                        color: '#111827',
                                        fontWeight: '600',
                                    }}
                                >
                                    {name}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        margin: '0',
                                        color: '#8b5cf6',
                                        fontWeight: '500',
                                    }}
                                >
                                    {email}
                                </Text>
                            </Section>

                            {/* Sujet */}
                            <Section style={{ marginBottom: '24px' }}>
                                <Text
                                    style={{
                                        fontSize: '11px',
                                        lineHeight: '16px',
                                        margin: '0 0 8px 0',
                                        color: '#9ca3af',
                                        fontWeight: '600',
                                        textTransform: 'uppercase' as const,
                                        letterSpacing: '0.5px',
                                    }}
                                >
                                    Sujet
                                </Text>
                                <Text
                                    style={{
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        margin: '0',
                                        color: '#111827',
                                        fontWeight: '600',
                                    }}
                                >
                                    {subject}
                                </Text>
                            </Section>

                            <Hr
                                style={{
                                    borderColor: '#f3f4f6',
                                    margin: '24px 0',
                                }}
                            />

                            {/* Message */}
                            <Section>
                                <Text
                                    style={{
                                        fontSize: '11px',
                                        lineHeight: '16px',
                                        margin: '0 0 12px 0',
                                        color: '#9ca3af',
                                        fontWeight: '600',
                                        textTransform: 'uppercase' as const,
                                        letterSpacing: '0.5px',
                                    }}
                                >
                                    Message
                                </Text>
                                <Text
                                    style={{
                                        fontSize: '15px',
                                        lineHeight: '26px',
                                        margin: '0',
                                        color: '#374151',
                                    }}
                                >
                                    {message}
                                </Text>
                            </Section>
                        </Section>
                    </Section>

                    {/* Call to action - Répondre */}
                    <Section
                        style={{
                            textAlign: 'center' as const,
                            marginTop: '32px',
                        }}
                    >
                        <a
                            href={`mailto:${email}?subject=Re: ${subject}`}
                            style={{
                                display: 'inline-block',
                                backgroundColor: '#8b5cf6',
                                color: '#ffffff',
                                fontSize: '14px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                padding: '12px 32px',
                                borderRadius: '12px',
                                transition: 'all 0.2s',
                            }}
                        >
                            Répondre au message
                        </a>
                    </Section>

                    {/* Footer */}
                    <Section
                        style={{
                            marginTop: '40px',
                            textAlign: 'center' as const,
                            paddingTop: '32px',
                            borderTop: '1px solid #e5e7eb',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: '13px',
                                lineHeight: '20px',
                                margin: '0 0 4px 0',
                                color: '#6b7280',
                                fontWeight: '500',
                            }}
                        >
                            Portfolio • Jean-Pierre Dupuis
                        </Text>
                        <Text
                            style={{
                                fontSize: '12px',
                                lineHeight: '16px',
                                margin: '0',
                                color: '#9ca3af',
                            }}
                        >
                            Message reçu via le formulaire de contact
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

export default ClientContact;
