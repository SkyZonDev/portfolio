import { IconBrandGithub, IconStarFilled } from '@tabler/icons-react';
import {
    ArrowRight,
    ArrowUpRight,
    Code2,
    ExternalLink,
    Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projects } from '@/constants';
import { cn } from '@/lib/utils';

export default function Home() {
    return (
        <div className="relative min-h-screen bg-background">
            {/* Subtle grid background */}
            <div
                className="fixed inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[64px_64px] opacity-10 mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,var(--foreground)_70%,transparent_110%)]"
                aria-hidden="true"
            />

            <div className="relative">
                {/* Hero Section */}
                <section
                    className="mx-auto max-w-5xl px-4 sm:px-6 pt-20 sm:pt-32 pb-16 sm:pb-24 md:pt-40 md:pb-32"
                    aria-labelledby="hero-heading"
                >
                    <div className="space-y-6 sm:space-y-8">
                        {/* Subtle badge */}
                        <div
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-3 py-1.5 text-xs sm:text-sm text-muted-foreground shadow-sm"
                            role="status"
                            aria-label="Statut de disponibilité"
                        >
                            <div
                                className="size-1.5 rounded-full bg-primary animate-pulse"
                                aria-hidden="true"
                            />
                            <span className="font-medium">
                                Disponible pour de nouveaux projets
                            </span>
                        </div>

                        {/* Main heading - clean and bold */}
                        <div className="space-y-3 sm:space-y-4">
                            <h1
                                id="hero-heading"
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]"
                            >
                                Créateur d'expériences
                                <span className="block text-primary">
                                    numériques.
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                            Développeur full-stack spécialisé dans la création
                            d'interfaces web modernes avec React, Next.js et
                            TypeScript.
                        </p>

                        {/* Minimal CTA */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-xl w-full sm:w-auto"
                            >
                                <Link href="/contact">
                                    Discutons de votre projet
                                    <ArrowRight
                                        className="size-4"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                asChild
                                className="w-full sm:w-auto"
                            >
                                <Link href="/projects">
                                    Voir mes projets
                                    <ArrowUpRight
                                        className="size-4"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Featured Work Section */}
                <section
                    className="border-t border-border py-16 sm:py-20 md:py-24"
                    aria-labelledby="projects-heading"
                >
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <div className="mb-12 sm:mb-16">
                            <h2
                                id="projects-heading"
                                className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3"
                            >
                                Projets sélectionnés
                            </h2>
                            <p className="text-2xl sm:text-3xl font-semibold text-foreground">
                                Quelques réalisations récentes
                            </p>
                        </div>

                        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                            {projects
                                .filter((project) => project.featured)
                                .map((project, idx) => {
                                    const Icon = project.icon;
                                    return (
                                        <article
                                            key={project.id || idx}
                                            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/50 bg-linear-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-border hover:-translate-y-2 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                                        >
                                            <div className="block focus:outline-none">
                                                {/* Image Background */}
                                                <div className="relative aspect-video overflow-hidden">
                                                    {project.metadata?.image ? (
                                                        <div className="relative w-full h-full">
                                                            <Image
                                                                src={`/projects/${project.metadata.image}`}
                                                                alt={`Aperçu du projet ${project.title}`}
                                                                fill
                                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className={cn(
                                                                'w-full h-full flex items-center justify-center',
                                                                project.gradient
                                                            )}
                                                            aria-hidden="true"
                                                        >
                                                            <div
                                                                className={cn(
                                                                    'size-16 sm:size-20 rounded-2xl sm:rounded-3xl flex items-center justify-center rotate-3 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110',
                                                                    project.iconBg
                                                                )}
                                                            >
                                                                <Icon
                                                                    className="size-8 sm:size-10 text-white"
                                                                    aria-hidden="true"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Gradient Overlay */}
                                                    <div
                                                        className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent"
                                                        aria-hidden="true"
                                                    />

                                                    {/* Category Badge */}
                                                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                                                        <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold bg-background/90 backdrop-blur-md text-foreground border border-border/50 shadow-lg">
                                                            {project.category}
                                                        </span>
                                                    </div>

                                                    {/* Star Badge - Featured */}
                                                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                                                        <div className="p-1.5 sm:p-2 rounded-full bg-background/90 backdrop-blur-md border border-border/50 shadow-lg">
                                                            <IconStarFilled
                                                                className="size-3.5 sm:size-4 text-yellow-500"
                                                                aria-hidden="true"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Hover Overlay avec Actions */}
                                                    <div className="absolute inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                                                        {project.metadata
                                                            ?.url &&
                                                            typeof project
                                                                .metadata
                                                                .url ===
                                                                'string' && (
                                                                <Button
                                                                    size="icon"
                                                                    className="rounded-full p-4 sm:p-5 transform translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300"
                                                                    asChild
                                                                    aria-label={`Ouvrir ${project.title} dans un nouvel onglet`}
                                                                >
                                                                    <Link
                                                                        href={
                                                                            project
                                                                                .metadata
                                                                                .url
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        <ExternalLink
                                                                            className="size-4 sm:size-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </Link>
                                                                </Button>
                                                            )}
                                                        {project.metadata
                                                            ?.github &&
                                                            typeof project
                                                                .metadata
                                                                .github ===
                                                                'string' && (
                                                                <Button
                                                                    size="icon"
                                                                    variant="outline"
                                                                    className="rounded-full p-4 sm:p-5 transform translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300 delay-75"
                                                                    asChild
                                                                    aria-label={`Voir le code source de ${project.title} sur GitHub`}
                                                                >
                                                                    <Link
                                                                        href={
                                                                            project
                                                                                .metadata
                                                                                .github
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            e.stopPropagation()
                                                                        }
                                                                    >
                                                                        <IconBrandGithub
                                                                            className="size-4 sm:size-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </Link>
                                                                </Button>
                                                            )}
                                                    </div>
                                                </div>

                                                {/* Content Area */}
                                                <div className="flex flex-col justify-between p-4 sm:p-6 space-y-3 sm:space-y-4">
                                                    {/* Title & Description */}
                                                    <div className="space-y-1.5 sm:space-y-2">
                                                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-card-foreground group-hover:text-primary transition-colors duration-300">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                                            {
                                                                project.description
                                                            }
                                                        </p>
                                                    </div>

                                                    <div className="space-y-3 sm:space-y-4">
                                                        {/* Tech Stack Pills */}
                                                        <div
                                                            className="flex flex-wrap gap-1.5 sm:gap-2"
                                                            role="list"
                                                            aria-label="Technologies utilisées"
                                                        >
                                                            {project.tech.map(
                                                                (
                                                                    techItem,
                                                                    i
                                                                ) => (
                                                                    <span
                                                                        key={
                                                                            techItem
                                                                        }
                                                                        role="listitem"
                                                                        className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs font-medium bg-muted/80 text-muted-foreground border border-border/50"
                                                                    >
                                                                        {
                                                                            techItem
                                                                        }
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>

                                                        {/* Footer avec Year et CTA */}
                                                        <Link
                                                            href={`/projects/${project.id}`}
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border/50"
                                                        >
                                                            <time
                                                                className="text-xs sm:text-sm font-medium text-muted-foreground"
                                                                dateTime={project.year.toString()}
                                                            >
                                                                {project.year}
                                                            </time>
                                                            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2 sm:group-hover:gap-3">
                                                                Découvrir
                                                                <ArrowUpRight
                                                                    className="size-3.5 sm:size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                                                    aria-hidden="true"
                                                                />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                        </div>

                        <div className="mt-10 sm:mt-12 text-center">
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                            >
                                Voir tous les projets
                                <ArrowRight
                                    className="size-4"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services Section - Clean list */}
                <section
                    className="border-t border-border py-16 sm:py-20 md:py-24"
                    aria-labelledby="expertise-heading"
                >
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <div className="mb-12 sm:mb-16">
                            <h2
                                id="expertise-heading"
                                className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3"
                            >
                                Expertises
                            </h2>
                            <p className="text-2xl sm:text-3xl font-semibold text-foreground">
                                Ce que je fais de mieux
                            </p>
                        </div>

                        <div className="grid gap-px bg-border sm:grid-cols-2 md:grid-cols-3 rounded-xl sm:rounded-2xl overflow-hidden">
                            <article className="bg-card p-6 sm:p-8 space-y-3">
                                <div
                                    className="size-10 rounded-full bg-muted flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <Code2 className="size-5 text-foreground" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-card-foreground">
                                    Développement Frontend
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Interfaces React modernes, performantes et
                                    accessibles avec Next.js et TypeScript.
                                </p>
                            </article>

                            <article className="bg-card p-6 sm:p-8 space-y-3">
                                <div
                                    className="size-10 rounded-full bg-muted flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <Sparkles className="size-5 text-foreground" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-card-foreground">
                                    Design Systems
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Création de composants réutilisables et
                                    cohérents avec Tailwind CSS.
                                </p>
                            </article>

                            <article className="bg-card p-6 sm:p-8 space-y-3 sm:col-span-2 md:col-span-1">
                                <div
                                    className="size-10 rounded-full bg-muted flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <ArrowUpRight className="size-5 text-foreground" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-card-foreground">
                                    Optimisation
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Performance web, SEO et amélioration
                                    continue des Core Web Vitals.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* CTA Section - Ultra minimal */}
                <section
                    className="border-t border-border py-20 sm:py-24 md:py-32"
                    aria-labelledby="cta-heading"
                >
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
                        <h2
                            id="cta-heading"
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight"
                        >
                            Un projet en tête ?
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                            Transformons votre vision en réalité. Discutons de
                            vos objectifs et créons quelque chose d'exceptionnel
                            ensemble.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-primary-foreground transition-all hover:opacity-90 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            Démarrer la conversation
                            <ArrowRight
                                className="size-4 sm:size-5 transition-transform group-hover:translate-x-0.5"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
