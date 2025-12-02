'use client';

import { IconBrandGithub } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Calendar,
    ExternalLink,
    Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense, use } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { projects } from '@/constants';
import { MDXErrorBoundary } from './_components/mdx-error-boundary';
import { ProjectMDXContent } from './_components/project-mdx-content';

interface ProjectPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const { id } = use(params);
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        notFound();
    }

    const currentIndex = projects.findIndex((p) => p.id === parseInt(id));
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject =
        currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    const Icon = project.icon;

    return (
        <div className="relative min-h-screen bg-background">
            {/* Subtle grid background */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[64px_64px] opacity-10 mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,var(--foreground)_70%,transparent_110%)]" />

            <div className="relative">
                {/* Hero Section */}
                <section className="mx-auto max-w-5xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Breadcrumb */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                            >
                                <ArrowLeft className="size-4" />
                                <span>Retour aux projets</span>
                            </Link>
                            <span>/</span>
                            <span className="text-foreground">
                                {project.title}
                            </span>
                        </motion.div>

                        {/* Title & Category */}
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3">
                                <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                                    {project.category}
                                </span>
                                {project.featured && (
                                    <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 border border-yellow-500/20">
                                        ⭐ Mis en avant
                                    </span>
                                )}
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                                {project.title}
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {project.description}
                        </motion.p>

                        {/* Meta Info & Actions */}
                        <motion.div
                            className="flex flex-wrap items-center gap-6 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="size-4" />
                                <span>{project.year}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                {project.metadata?.url && (
                                    <Button asChild className="rounded-full">
                                        <Link
                                            href={
                                                project.metadata.url as string
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="size-4 mr-2" />
                                            Voir le site
                                        </Link>
                                    </Button>
                                )}
                                {project.metadata?.github && (
                                    <Button
                                        variant="outline"
                                        asChild
                                        className="rounded-full"
                                    >
                                        <Link
                                            href={
                                                project.metadata
                                                    .github as string
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <IconBrandGithub className="size-4 mr-2" />
                                            Code source
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Main Image */}
                {project.metadata?.image && (
                    <section className="mx-auto max-w-6xl px-6 pb-16">
                        <motion.div
                            className="relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-sm shadow-2xl"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <AspectRatio ratio={16 / 9}>
                                <Image
                                    src={`/projects/${project.metadata.image}`}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </AspectRatio>
                        </motion.div>
                    </section>
                )}

                {/* Project Image with Icon fallback */}
                {!project.metadata?.image && (
                    <section className="mx-auto max-w-6xl px-6 pb-16">
                        <motion.div
                            className={`relative overflow-hidden rounded-3xl border border-border shadow-2xl h-[500px] flex items-center justify-center ${project.gradient}`}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <motion.div
                                className={`size-32 rounded-3xl flex items-center justify-center ${project.iconBg}`}
                                whileHover={{ rotate: 12, scale: 1.1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 20,
                                }}
                            >
                                <Icon className="size-16 text-white" />
                            </motion.div>
                        </motion.div>
                    </section>
                )}

                {/* Content Grid */}
                <section className="mx-auto max-w-5xl px-6 pb-16">
                    <div className="grid gap-16 md:grid-cols-3">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <MDXErrorBoundary>
                                    <Suspense
                                        fallback={
                                            <div className="text-center py-16 text-muted-foreground">
                                                <p>Chargement du contenu...</p>
                                            </div>
                                        }
                                    >
                                        <ProjectMDXContent id={id} />
                                    </Suspense>
                                </MDXErrorBoundary>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Project Info Card */}
                            <motion.div
                                className="sticky top-24 space-y-6 p-4 rounded-3xl bg-card border border-border"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-lg font-bold">
                                    Informations
                                </h3>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <p className="text-sm text-muted-foreground">
                                            Année
                                        </p>
                                        <p className="font-medium">
                                            {project.year}
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm text-muted-foreground">
                                            Catégorie
                                        </p>
                                        <p className="font-medium">
                                            {project.category}
                                        </p>
                                    </div>

                                    {project.metadata?.role && (
                                        <div className="space-y-2">
                                            <p className="text-sm text-muted-foreground">
                                                Rôle
                                            </p>
                                            <p className="font-medium">
                                                {project.metadata.role}
                                            </p>
                                        </div>
                                    )}

                                    {project.metadata?.team && (
                                        <div className="space-y-2">
                                            <p className="text-sm text-muted-foreground">
                                                Équipe
                                            </p>
                                            <p className="font-medium flex items-center gap-2">
                                                <Users className="size-4" />
                                                {project.metadata.team}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {(project.metadata?.url ||
                                    project.metadata?.github) && (
                                    <div className="pt-4 border-t border-border space-y-3">
                                        {project.metadata.url && (
                                            <Button
                                                asChild
                                                className="w-full rounded-full"
                                            >
                                                <Link
                                                    href={
                                                        project.metadata
                                                            .url as string
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="size-4 mr-2" />
                                                    Visiter le site
                                                </Link>
                                            </Button>
                                        )}
                                        {project.metadata.github && (
                                            <Button
                                                variant="outline"
                                                asChild
                                                className="w-full rounded-full"
                                            >
                                                <Link
                                                    href={
                                                        project.metadata
                                                            .github as string
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <IconBrandGithub className="size-4 mr-2" />
                                                    Voir le code
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Additional Images Gallery */}
                {(() => {
                    const gallery = project.metadata?.gallery;
                    if (
                        gallery &&
                        Array.isArray(gallery) &&
                        gallery.length > 0
                    ) {
                        return (
                            <section className="mx-auto max-w-6xl px-6 pb-16">
                                <motion.div
                                    className="space-y-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="text-2xl font-bold">
                                        Galerie
                                    </h2>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        {gallery.map((image, i) => (
                                            <motion.div
                                                key={i}
                                                className="relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
                                                initial={{
                                                    opacity: 0,
                                                    y: 20,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                    margin: '-100px',
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: i * 0.1,
                                                }}
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <AspectRatio ratio={16 / 9}>
                                                    <Image
                                                        src={`/projects/${image}`}
                                                        alt={`${project.title} - Image ${i + 1}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </AspectRatio>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </section>
                        );
                    }
                    return null;
                })()}

                {/* Navigation to other projects */}
                <section className="border-t border-border py-16">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            {prevProject && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Link
                                        href={`/projects/${prevProject.id}`}
                                        className="group block p-6 rounded-2xl border border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <ArrowLeft className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                            <span className="text-sm text-muted-foreground">
                                                Projet précédent
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {prevProject.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                            {prevProject.description}
                                        </p>
                                    </Link>
                                </motion.div>
                            )}

                            {nextProject && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={
                                        !prevProject ? 'md:col-start-2' : ''
                                    }
                                >
                                    <Link
                                        href={`/projects/${nextProject.id}`}
                                        className="group block p-6 rounded-2xl border border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg"
                                    >
                                        <div className="flex items-center justify-end gap-3 mb-3">
                                            <span className="text-sm text-muted-foreground">
                                                Projet suivant
                                            </span>
                                            <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-right group-hover:text-primary transition-colors">
                                            {nextProject.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-2 text-right line-clamp-2">
                                            {nextProject.description}
                                        </p>
                                    </Link>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-t border-border py-24">
                    <motion.div
                        className="mx-auto max-w-3xl px-6 text-center space-y-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Travaillons ensemble
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Vous avez un projet similaire en tête ? Discutons de
                            la manière dont je peux vous aider à le concrétiser.
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap items-center justify-center gap-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90 hover:gap-3"
                            >
                                Me contacter
                                <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-base font-medium transition-all hover:bg-accent"
                            >
                                Voir tous les projets
                                <ArrowUpRight className="size-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
