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
import { ProjectCard } from './_components/project-card';

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('Tous');

    const categories = [
        ...new Set(projects.map((project) => project.category)),
    ].sort((a, b) => a.localeCompare(b));
    categories.unshift('Tous');

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
                                    key={index}
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
                                    filteredProjects.map((project, index) => (
                                        <ProjectCard
                                            key={index}
                                            index={index}
                                            project={project}
                                        />
                                    ))
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
