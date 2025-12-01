import { ArrowRight, Home, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="relative min-h-screen bg-background">
            {/* Subtle grid background */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[64px_64px] opacity-10 mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,var(--foreground)_70%,transparent_110%)]" />

            <div className="relative">
                {/* Main Content */}
                <section className="mx-auto max-w-5xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
                    <div className="flex flex-col items-center justify-center text-center space-y-8 min-h-[60vh]">
                        {/* 404 Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground shadow-sm">
                            <Search className="size-4" />
                            <span className="font-medium">Erreur 404</span>
                        </div>

                        {/* Main heading */}
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                                Page
                                <span className="block text-primary">
                                    introuvable.
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                            Désolé, la page que vous recherchez n'existe pas ou
                            a été déplacée. Elle a peut-être été supprimée ou
                            l'URL est incorrecte.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link
                                href="/"
                                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:gap-3"
                            >
                                <Home className="size-4" />
                                Retour à l'accueil
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground transition-all hover:border-border hover:bg-muted"
                            >
                                En savoir plus sur moi
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Helpful Links Section */}
                <section className="border-t border-border py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-12 text-center">
                            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                                Navigation
                            </h2>
                            <p className="text-3xl font-semibold text-foreground">
                                Pages disponibles
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Link
                                href="/"
                                className="group p-6 rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:shadow-border/50 hover:border-border"
                            >
                                <div className="space-y-3">
                                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Home className="size-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-card-foreground">
                                        Accueil
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Retournez à la page d'accueil pour
                                        découvrir mon portfolio
                                    </p>
                                </div>
                            </Link>

                            <Link
                                href="/about"
                                className="group p-6 rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:shadow-border/50 hover:border-border"
                            >
                                <div className="space-y-3">
                                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Search className="size-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-card-foreground">
                                        À propos
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Découvrez mon parcours, mes compétences
                                        et mes expériences
                                    </p>
                                </div>
                            </Link>

                            <Link
                                href="/projects"
                                className="group p-6 rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:shadow-border/50 hover:border-border"
                            >
                                <div className="space-y-3">
                                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <ArrowRight className="size-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-card-foreground">
                                        Projets
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Explorez mes réalisations et projets
                                        récents
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
