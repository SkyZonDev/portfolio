'use client';

import { useForm } from '@tanstack/react-form';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { ErrorForm } from '@/components/shared/error-form';
import { Button } from '@/components/ui/button';
import {
    InputGroup,
    InputGroupInput,
    InputGroupTextarea,
} from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { contactFormSchema } from '@/lib/validations/contact';

export function ContactForm() {
    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        onSubmit: async ({ value }) => {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(value),
            });
            if (response.ok) {
                toast.success('Message envoyé avec succès');
            } else {
                toast.error("Erreur lors de l'envoi du message");
            }
        },
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
            className="space-y-6"
        >
            {/* Nom Input */}
            <form.Field
                name="name"
                validators={{
                    onChange: contactFormSchema.shape.name,
                }}
            >
                {(field) => (
                    <div className="space-y-2">
                        <Label htmlFor={field.name}>Nom complet</Label>
                        <InputGroup>
                            <InputGroupInput
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                                placeholder="Jean Dupont"
                                aria-invalid={
                                    field.state.meta.errors.length > 0
                                }
                            />
                        </InputGroup>
                        {field.state.meta.errors.length > 0 && (
                            <ErrorForm
                                error={field.state.meta.errors[0]?.message}
                            />
                        )}
                    </div>
                )}
            </form.Field>

            {/* Email Input */}
            <form.Field
                name="email"
                validators={{
                    onChange: contactFormSchema.shape.email,
                }}
            >
                {(field) => (
                    <div className="space-y-2">
                        <Label htmlFor={field.name}>Email</Label>
                        <InputGroup>
                            <InputGroupInput
                                id={field.name}
                                name={field.name}
                                type="email"
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                                placeholder="jean.dupont@exemple.fr"
                                aria-invalid={
                                    field.state.meta.errors.length > 0
                                }
                            />
                        </InputGroup>
                        {field.state.meta.errors.length > 0 && (
                            <ErrorForm
                                error={field.state.meta.errors[0]?.message}
                            />
                        )}
                    </div>
                )}
            </form.Field>

            {/* Sujet Input */}
            <form.Field
                name="subject"
                validators={{
                    onChange: contactFormSchema.shape.subject,
                }}
            >
                {(field) => (
                    <div className="space-y-2">
                        <Label htmlFor={field.name}>Sujet</Label>
                        <InputGroup>
                            <InputGroupInput
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                                placeholder="Nouveau projet web"
                                aria-invalid={
                                    field.state.meta.errors.length > 0
                                }
                            />
                        </InputGroup>
                        {field.state.meta.errors.length > 0 && (
                            <ErrorForm
                                error={field.state.meta.errors[0]?.message}
                            />
                        )}
                    </div>
                )}
            </form.Field>

            {/* Message Textarea */}
            <form.Field
                name="message"
                validators={{
                    onChange: contactFormSchema.shape.message,
                }}
            >
                {(field) => (
                    <div className="space-y-2">
                        <Label htmlFor={field.name}>Message</Label>
                        <InputGroup>
                            <InputGroupTextarea
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                                placeholder="Parlez-moi de votre projet..."
                                aria-invalid={
                                    field.state.meta.errors.length > 0
                                }
                            />
                        </InputGroup>
                        {field.state.meta.errors.length > 0 && (
                            <ErrorForm
                                error={field.state.meta.errors[0]?.message}
                            />
                        )}
                    </div>
                )}
            </form.Field>

            {/* Submit Button */}
            <form.Subscribe
                selector={(state) => ({
                    isSubmitting: state.isSubmitting,
                    values: state.values,
                })}
            >
                {({ isSubmitting, values }) => {
                    const canSubmit =
                        contactFormSchema.safeParse(values).success;
                    return (
                        <Button
                            className="group"
                            disabled={isSubmitting || !canSubmit}
                        >
                            {isSubmitting ? (
                                <>
                                    <Spinner />
                                    Envoi en cours
                                </>
                            ) : (
                                <>
                                    Envoyer le message
                                    <Send className="size-4 transition-transform group-hover:translate-y-px group-hover:rotate-45" />
                                </>
                            )}
                        </Button>
                    );
                }}
            </form.Subscribe>
        </form>
    );
}
