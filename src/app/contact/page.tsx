import { Mail, MessageSquare, Send } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from './_components/contact-form';

export default function Contact() {
    return (
        <div className="relative min-h-screen bg-background">
            {/* Subtle grid background */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[64px_64px] opacity-10 mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,var(--foreground)_70%,transparent_110%)]" />

            <div className="relative">
                {/* Hero Section */}
                <section className="mx-auto max-w-5xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="space-y-8">
                        {/* Main heading */}
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                                Discutons de
                                <span className="block text-primary">
                                    votre projet.
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                            Vous avez une idée ? Un projet ? Ou simplement envie
                            d'échanger ? Je serais ravi de vous répondre.
                        </p>
                    </div>
                </section>

                {/* Contact Form and Info Section */}
                <section className="border-t border-border py-16 md:py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="grid gap-12 lg:grid-cols-5">
                            {/* Contact Form */}
                            <div className="lg:col-span-3">
                                <ContactForm />
                            </div>

                            {/* Contact Info */}
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                                        Autres moyens de contact
                                    </h2>
                                    <div className="space-y-4">
                                        {/* Email */}
                                        <Link
                                            href="mailto:contact@example.com"
                                            className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-border/50"
                                        >
                                            <div className="size-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                                                <Mail className="size-5 text-foreground" />
                                            </div>
                                            <div className="space-y-1 min-w-0">
                                                <h3 className="text-sm font-semibold text-card-foreground">
                                                    Email
                                                </h3>
                                                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors truncate">
                                                    contact@example.com
                                                </p>
                                            </div>
                                        </Link>

                                        {/* Response Time */}
                                        <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
                                            <div className="size-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                                                <MessageSquare className="size-5 text-foreground" />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-sm font-semibold text-card-foreground">
                                                    Délai de réponse
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Généralement sous 24-48h
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Availability Badge */}
                                <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm space-y-3">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1.5 text-sm">
                                        <div className="size-1.5 rounded-full bg-primary animate-pulse" />
                                        <span className="font-medium text-muted-foreground">
                                            Disponible
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Je suis actuellement disponible pour de
                                        nouveaux projets et collaborations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="border-t border-border py-16 md:py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-12">
                            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                                Questions fréquentes
                            </h2>
                            <p className="text-3xl font-semibold text-foreground">
                                Ce que vous devez savoir
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm space-y-3">
                                <h3 className="text-lg font-semibold text-card-foreground">
                                    Quel est votre processus de travail ?
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Je commence par comprendre vos besoins, puis
                                    je propose une solution technique adaptée.
                                    Nous itérons ensemble jusqu'au résultat
                                    final.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm space-y-3">
                                <h3 className="text-lg font-semibold text-card-foreground">
                                    Quels sont vos tarifs ?
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Les tarifs varient selon la complexité et la
                                    durée du projet. Contactez-moi pour obtenir
                                    un devis personnalisé.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm space-y-3">
                                <h3 className="text-lg font-semibold text-card-foreground">
                                    Travaillez-vous à distance ?
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Oui, je travaille principalement à distance
                                    mais reste ouvert aux rencontres en
                                    présentiel si nécessaire.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm space-y-3">
                                <h3 className="text-lg font-semibold text-card-foreground">
                                    Proposez-vous de la maintenance ?
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Absolument. Je propose des contrats de
                                    maintenance pour assurer la pérennité et les
                                    évolutions de votre projet.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
