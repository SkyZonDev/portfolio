'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, FolderX } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { MotionButton } from '@/components/ui/button-motion';
import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty';
import { projects, stats } from '@/constants';

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('Tous');

    const categories = [
        'Tous',
        'Web App',
        'UI Library',
        'E-commerce',
        'Analytics',
        'Mobile',
        'Backend',
    ];

    const filteredProjects =
        selectedCategory === 'Tous'
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              );

    return (
        <div className="relative min-h-screen bg-background">
            {/* Subtle grid background */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[64px_64px] opacity-10 mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,var(--foreground)_70%,transparent_110%)]" />

            <div className="relative">
                {/* Hero Section */}
                <section className="mx-auto max-w-5xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Breadcrumb/Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <ArrowUpRight className="size-4 rotate-180" />
                                <span>Retour à l'accueil</span>
                            </Link>
                        </motion.div>

                        {/* Main heading */}
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                                Projets
                                <span className="block text-primary">
                                    sélectionnés.
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            className="max-w-2xl text-lg text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Une collection de projets sur lesquels j'ai
                            travaillé, allant des applications web aux design
                            systems en passant par les solutions e-commerce.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Filter Section */}
                <section className="border-t border-border py-12">
                    <div className="mx-auto max-w-5xl px-6">
                        <motion.div
                            className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {categories.map((category, index) => (
                                <MotionButton
                                    key={category}
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.5 + index * 0.05,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        rounded-2xl
                                        ${
                                            category === selectedCategory
                                                ? 'text-primary-foreground'
                                                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                                        }
                                    `}
                                >
                                    {category}
                                </MotionButton>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-12 pb-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCategory}
                                className="grid gap-8 md:grid-cols-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map((project, index) => {
                                        const Icon = project.icon;
                                        return (
                                            <motion.div
                                                key={project.id}
                                                layout
                                                initial={{
                                                    opacity: 0,
                                                    y: 30,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: -50,
                                                }}
                                                transition={{
                                                    duration: 0,
                                                    delay: index * 0.1,
                                                    ease: [
                                                        0.21, 0.47, 0.32, 0.98,
                                                    ],
                                                }}
                                                whileHover={{
                                                    y: -8,
                                                    transition: {
                                                        duration: 0.1,
                                                    },
                                                }}
                                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg hover:shadow-border/50"
                                            >
                                                {/* Project Image/Icon Area */}
                                                <div
                                                    className={`aspect-16/10 bg-linear-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}
                                                >
                                                    <motion.div
                                                        className={`size-16 rounded-2xl ${project.iconBg} flex items-center justify-center rotate-3`}
                                                        whileHover={{
                                                            rotate: 6,
                                                            scale: 1.1,
                                                        }}
                                                        transition={{
                                                            type: 'spring',
                                                            stiffness: 300,
                                                            damping: 20,
                                                        }}
                                                    >
                                                        <Icon className="size-8 text-white" />
                                                    </motion.div>

                                                    {/* Category badge */}
                                                    <div className="absolute top-4 right-4">
                                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border">
                                                            {project.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Project Info */}
                                                <div className="flex flex-col justify-between flex-1 h-full p-6 space-y-4">
                                                    <div className="space-y-2">
                                                        <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            {
                                                                project.description
                                                            }
                                                        </p>
                                                    </div>

                                                    <div className="space-y-2">
                                                        {/* Tech Stack */}
                                                        <div className="flex flex-wrap gap-4">
                                                            {project.tech.map(
                                                                (tech) => (
                                                                    <motion.span
                                                                        key={
                                                                            tech
                                                                        }
                                                                        whileHover={{
                                                                            scale: 1.1,
                                                                        }}
                                                                        className="py-1 rounded-md text-xs font-medium bg-muted/50 text-muted-foreground"
                                                                    >
                                                                        {tech}
                                                                    </motion.span>
                                                                )
                                                            )}
                                                        </div>

                                                        {/* Year and CTA */}
                                                        <Link
                                                            href={`/projects/${project.id}`}
                                                            className="flex items-center justify-between pt-2 border-t border-border"
                                                        >
                                                            <span className="text-sm text-muted-foreground">
                                                                {project.year}
                                                            </span>
                                                            <motion.button
                                                                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors group/btn"
                                                                whileHover={{
                                                                    x: 5,
                                                                }}
                                                                transition={{
                                                                    type: 'spring',
                                                                    stiffness: 400,
                                                                    damping: 25,
                                                                }}
                                                            >
                                                                Voir le projet
                                                                <ArrowUpRight className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                                            </motion.button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })
                                ) : (
                                    <div className="col-span-full">
                                        <Empty>
                                            <EmptyHeader>
                                                <EmptyMedia variant="icon">
                                                    <FolderX className="size-6" />
                                                </EmptyMedia>
                                                <EmptyTitle>
                                                    Aucun projet trouvé
                                                </EmptyTitle>
                                                <EmptyDescription>
                                                    Aucun projet trouvé pour le
                                                    moment. Revenez plus tard !
                                                </EmptyDescription>
                                            </EmptyHeader>
                                        </Empty>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="border-t border-border py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="grid gap-8 md:grid-cols-3 text-center">
                            {stats.projects.slice(0, 3).map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="space-y-3"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: [0.21, 0.47, 0.32, 0.98],
                                    }}
                                >
                                    <motion.div
                                        className="text-3xl md:text-4xl font-bold text-primary"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1 + 0.2,
                                        }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <p className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-t border-border py-32">
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
                            Vous avez un projet en tête ?
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Collaborons pour créer quelque chose d'exceptionnel.
                            Contactez-moi pour discuter de vos besoins.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90 hover:gap-3"
                            >
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Démarrer un projet
                                </motion.span>
                                <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
