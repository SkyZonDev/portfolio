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
            <div className="fixed inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[64px_64px] opacity-10 mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,var(--foreground)_70%,transparent_110%)]" />

            <div className="relative">
                {/* Hero Section */}
                <section className="mx-auto max-w-5xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
                    <div className="space-y-8">
                        {/* Subtle badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-3 py-1.5 text-sm text-muted-foreground shadow-sm">
                            <div className="size-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="font-medium">
                                Disponible pour de nouveaux projets
                            </span>
                        </div>

                        {/* Main heading - clean and bold */}
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                                Créateur d'expériences
                                <span className="block text-primary">
                                    numériques.
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                            Développeur full-stack spécialisé dans la création
                            d'interfaces web modernes avec React, Next.js et
                            TypeScript.
                        </p>

                        {/* Minimal CTA */}
                        <div className="flex items-center gap-4 pt-4">
                            <Button asChild size="lg" className="rounded-xl">
                                <Link href="/contact">
                                    Discutons de votre projet
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href="/projects">
                                    Voir mes projets
                                    <ArrowUpRight className="size-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Featured Work Section */}
                <section className="border-t border-border py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-16">
                            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                                Projets sélectionnés
                            </h2>
                            <p className="text-3xl font-semibold text-foreground">
                                Quelques réalisations récentes
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {projects
                                .filter((project) => project.featured)
                                .map((project, idx) => {
                                    const Icon = project.icon;
                                    return (
                                        <Link
                                            key={idx}
                                            href={`/projects/${project.id}`}
                                            className="group relative overflow-hidden rounded-3xl border border-border/50 bg-linear-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-border hover:-translate-y-2"
                                        >
                                            {/* Image Background */}
                                            <div className="relative aspect-video overflow-hidden">
                                                {project.metadata?.image ? (
                                                    <div className="relative w-full h-full">
                                                        <Image
                                                            src={`/projects/${project.metadata.image}`}
                                                            alt={project.title}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div
                                                        className={cn(
                                                            'w-full h-full flex items-center justify-center',
                                                            project.gradient
                                                        )}
                                                    >
                                                        <div
                                                            className={cn(
                                                                'size-20 rounded-3xl flex items-center justify-center rotate-3 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110',
                                                                project.iconBg
                                                            )}
                                                        >
                                                            <Icon className="size-10 text-white" />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />

                                                {/* Category Badge */}
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-background/90 backdrop-blur-md text-foreground border border-border/50 shadow-lg">
                                                        {project.category}
                                                    </span>
                                                </div>

                                                {/* Star Badge - Featured */}
                                                <div className="absolute top-4 right-4">
                                                    <div className="p-2 rounded-full bg-background/90 backdrop-blur-md border border-border/50 shadow-lg">
                                                        <IconStarFilled className="size-4 text-yellow-500" />
                                                    </div>
                                                </div>

                                                {/* Hover Overlay avec Actions */}
                                                <div className="absolute inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    {project.metadata?.url && (
                                                        <Button
                                                            size="icon"
                                                            className="rounded-full p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                                            asChild
                                                        >
                                                            <span>
                                                                <ExternalLink className="size-5" />
                                                            </span>
                                                        </Button>
                                                    )}
                                                    {project.metadata
                                                        ?.github && (
                                                        <Button
                                                            size="icon"
                                                            variant="outline"
                                                            className="rounded-full p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                                                            asChild
                                                        >
                                                            <span>
                                                                <IconBrandGithub className="size-5" />
                                                            </span>
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Content Area */}
                                            <div className="flex flex-col justify-between p-6 space-y-4">
                                                {/* Title & Description */}
                                                <div className="space-y-2">
                                                    <h3 className="text-2xl font-bold tracking-tight text-card-foreground group-hover:text-primary transition-colors duration-300">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                                        {project.description}
                                                    </p>
                                                </div>

                                                <div className="space-y-4">
                                                    {/* Tech Stack Pills */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tech.map(
                                                            (techItem, i) => (
                                                                <span
                                                                    key={
                                                                        techItem
                                                                    }
                                                                    className="px-3 py-1 rounded-lg text-xs font-medium bg-muted/80 text-muted-foreground border border-border/50 hover:bg-muted hover:border-border transition-all duration-200 hover:scale-105 hover:-translate-y-0.5"
                                                                    style={{
                                                                        transitionDelay: `${i * 50}ms`,
                                                                    }}
                                                                >
                                                                    {techItem}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>

                                                    {/* Footer avec Year et CTA */}
                                                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                                        <span className="text-sm font-medium text-muted-foreground">
                                                            {project.year}
                                                        </span>
                                                        <div className="flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                                                            Découvrir
                                                            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                        </div>

                        <div className="mt-12 text-center">
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Voir tous les projets
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services Section - Clean list */}
                <section className="border-t border-border py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-16">
                            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                                Expertises
                            </h2>
                            <p className="text-3xl font-semibold text-foreground">
                                Ce que je fais de mieux
                            </p>
                        </div>

                        <div className="grid gap-px bg-border md:grid-cols-3 rounded-2xl overflow-hidden">
                            <div className="bg-card p-8 space-y-3">
                                <div className="size-10 rounded-full bg-muted flex items-center justify-center">
                                    <Code2 className="size-5 text-foreground" />
                                </div>
                                <h3 className="text-lg font-semibold text-card-foreground">
                                    Développement Frontend
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Interfaces React modernes, performantes et
                                    accessibles avec Next.js et TypeScript.
                                </p>
                            </div>

                            <div className="bg-card p-8 space-y-3">
                                <div className="size-10 rounded-full bg-muted flex items-center justify-center">
                                    <Sparkles className="size-5 text-foreground" />
                                </div>
                                <h3 className="text-lg font-semibold text-card-foreground">
                                    Design Systems
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Création de composants réutilisables et
                                    cohérents avec Tailwind CSS.
                                </p>
                            </div>

                            <div className="bg-card p-8 space-y-3">
                                <div className="size-10 rounded-full bg-muted flex items-center justify-center">
                                    <ArrowUpRight className="size-5 text-foreground" />
                                </div>
                                <h3 className="text-lg font-semibold text-card-foreground">
                                    Optimisation
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Performance web, SEO et amélioration
                                    continue des Core Web Vitals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section - Ultra minimal */}
                <section className="border-t border-border py-32">
                    <div className="mx-auto max-w-3xl px-6 text-center space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                            Un projet en tête ?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            Transformons votre vision en réalité. Discutons de
                            vos objectifs et créons quelque chose d'exceptionnel
                            ensemble.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90 hover:gap-3"
                        >
                            Démarrer la conversation
                            <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
