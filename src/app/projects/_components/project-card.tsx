'use client';

import { IconBrandGithub, IconStarFilled } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { MotionButton } from '@/components/ui/button-motion';
import { Project } from '@/constants';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
    index?: number;
    project: Project;
}

export function ProjectCard({ index = 0, project }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = project.icon;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
                duration: 0.5,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-linear-to-br from-card to-card/50 backdrop-blur-sm border border-border/50"
        >
            {/* Image Background avec Overlay */}
            <div className="relative aspect-video overflow-hidden">
                {project.metadata?.image ? (
                    <AspectRatio ratio={16 / 9}>
                        <Image
                            src={`/projects/${project.metadata?.image}`}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </AspectRatio>
                ) : (
                    <div
                        className={cn(
                            'w-full h-full flex items-center justify-center',
                            project.gradient
                        )}
                    >
                        <motion.div
                            className={cn(
                                'size-20 rounded-3xl flex items-center justify-center',
                                project.iconBg
                            )}
                            animate={{ rotate: isHovered ? 12 : 3 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            <Icon className="size-10 text-white" />
                        </motion.div>
                    </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t dark:from-background dark:via-background/40 dark:to-transparent" />

                {/* Category Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="absolute top-4 left-4"
                >
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-background/90 backdrop-blur-md text-foreground border border-border/50 shadow-lg">
                        {project.category}
                    </span>
                </motion.div>

                {/* Hover Overlay avec Actions */}
                <AnimatePresence>
                    {isHovered &&
                        (project.metadata?.github || project.metadata?.url) && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center gap-4"
                            >
                                {project.metadata?.url && (
                                    <Button
                                        size="icon"
                                        className="rounded-full p-5"
                                        asChild
                                    >
                                        <Link
                                            href={
                                                project.metadata?.url as string
                                            }
                                            target="_blank"
                                        >
                                            <ExternalLink className="size-5" />
                                        </Link>
                                    </Button>
                                )}
                                {project.metadata?.github && (
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="rounded-full p-5"
                                        asChild
                                    >
                                        <Link
                                            href={
                                                project.metadata
                                                    ?.github as string
                                            }
                                            target="_blank"
                                        >
                                            <IconBrandGithub className="size-5" />
                                        </Link>
                                    </Button>
                                )}
                            </motion.div>
                        )}
                </AnimatePresence>
            </div>

            {/* Content Area */}
            <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                {/* Title & Description */}
                <div className="space-y-2">
                    <motion.h3
                        animate={{
                            color: isHovered
                                ? 'hsl(var(--primary))'
                                : 'hsl(var(--card-foreground))',
                        }}
                        className="flex items-center gap-2 text-2xl font-bold tracking-tight"
                    >
                        {project.featured && (
                            <IconStarFilled className="size-5 text-yellow-500 translate-y-px" />
                        )}
                        {project.title}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {project.description}
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Tech Stack avec Pills améliorés */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((techItem, i) => (
                            <motion.span
                                key={techItem}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="px-3 py-1 rounded-lg text-xs font-medium bg-muted/80 text-muted-foreground border border-border/50 hover:bg-muted hover:border-border transition-colors"
                            >
                                {techItem}
                            </motion.span>
                        ))}
                    </div>

                    {/* Footer avec Year et CTA */}
                    <Link href={`/projects/${project.id}`} className="block">
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                            <span className="text-sm font-medium text-muted-foreground">
                                {project.year}
                            </span>
                            <motion.div
                                className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                                animate={{ x: isHovered ? 5 : 0 }}
                            >
                                Découvrir
                                <ArrowUpRight className="size-4" />
                            </motion.div>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
