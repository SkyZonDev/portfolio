import {
    ArrowRight,
    Briefcase,
    Code2,
    Database,
    GraduationCap,
    Layers,
    Sparkles,
    Terminal,
    Zap,
} from 'lucide-react';
import Link from 'next/link';
import { ButtonCV } from '@/components/shared/button-cv';
import { Button } from '@/components/ui/button';

// Configuration centralisée
const aboutConfig = {
    hero: {
        badges: [
            { icon: GraduationCap, label: 'Étudiant' },
            { icon: Briefcase, label: 'Freelancer' },
        ],
        name: 'Jean-Pierre Dupuis',
        subtitle:
            'Développeur web passionné, entre études et projets freelance.',
        description: [
            "Salut ! Je suis actuellement étudiant en deuxième année de prépa en école d'ingénieurs (ESME) et développeur freelance. Je jongle entre mes études et ma passion pour la programmation, en créant des solutions modernes et performantes pour mes clients.",
            "Spécialisé dans le développement d'applications web avec React et Next.js, je m'occupe aussi bien du frontend que du backend. Mon expérience inclut la création de site statique, site e-commerce, modules FiveM, la gestion de bases de données, ainsi que l'optimisation SEO. J'aime transformer des idées en projets concrets et fonctionnels.",
            "Au-delà du code, j'ai été jeune sapeur-pompier et maintenant pompier volontaire depuis peu, ce qui m'a appris la rigueur, le travail d'équipe et la gestion du stress — des qualités essentielles dans le développement !",
        ],
    },
    featuredProject: {
        label: 'Projet phare',
        title: 'Scolario — Gestion scolaire nouvelle génération',
        badge: { icon: Sparkles, label: 'SaaS en développement' },
        heading: 'Une plateforme de gestion scolaire moderne',
        description:
            "Scolario est une solution SaaS innovante pour la gestion scolaire, pensée comme une alternative moderne à École Directe et Pronote. L'objectif : simplifier la vie des enseignants, élèves et parents avec une interface intuitive et des fonctionnalités adaptées aux besoins actuels.",
        features: [
            {
                icon: Code2,
                title: 'Stack moderne',
                description:
                    'Next.js, React, TypeScript pour une expérience fluide',
            },
            {
                icon: Database,
                title: 'Base solide',
                description: 'PostgreSQL avec Drizzle ORM pour la fiabilité',
            },
            {
                icon: Layers,
                title: 'Design soigné',
                description:
                    'Interface intuitive pensée pour tous les utilisateurs',
            },
        ],
        link: '/projects/scolario',
    },
    experiences: [
        {
            title: 'Développeur Web / Community Manager',
            company: 'Chichi EURL',
            period: '2025 - Présent',
            description:
                "Création et optimisation de sites web avec un focus sur le SEO. Gestion des réseaux sociaux et création de chartes graphiques pour renforcer l'identité visuelle de l'entreprise.",
            tags: ['React', 'Next.js', 'SEO', 'Community Management'],
        },
        {
            title: 'Dev / Community Manager',
            company: 'CLSRP Rôleplay',
            period: '2024 - Présent',
            description:
                "Développement de modules FiveM sur mesure et gestion complète des bases de données. Création d'interfaces web pour l'administration du serveur et développement d'outils internes pour améliorer l'expérience des joueurs.",
            tags: ['Lua', 'FiveM', 'PostgreSQL', 'React'],
        },
        {
            title: 'Développeur',
            company: 'Le 112 France Rôleplay',
            period: '2023',
            description:
                "Développement de modules FiveM et administration système pour un serveur de roleplay. Première expérience significative dans le développement de scripts Lua et la gestion d'infrastructure serveur.",
            tags: ['Lua', 'FiveM', 'Administration système'],
        },
    ],
    skills: [
        {
            icon: Code2,
            title: 'Frontend',
            items: [
                { skill: 'HTML', level: 76 },
                { skill: 'CSS', level: 69 },
                { skill: 'React / Next.js', level: 60 },
                { skill: 'TypeScript', level: 60 },
            ],
        },
        {
            icon: Database,
            title: 'Backend & Databases',
            items: [
                { skill: 'PostgreSQL (Drizzle/Prisma)', level: 55 },
                { skill: 'MySQL (Drizzle/Prisma)', level: 43 },
                { skill: 'Lua (FiveM)', level: 35 },
                { skill: 'Administration système', level: 38 },
            ],
        },
        {
            icon: Terminal,
            title: 'Outils & DevOps',
            items: [
                { skill: 'Git / GitHub', level: 70 },
                { skill: "Déploiement d'applications", level: 65 },
                { skill: 'SEO', level: 64 },
                { skill: 'Vercel / Netlify', level: 70 },
            ],
        },
        {
            icon: Sparkles,
            title: 'Soft Skills',
            items: [
                { skill: 'Relation client', level: 80 },
                { skill: 'Leadership', level: 75 },
                { skill: "Travail d'équipe", level: 85 },
                { skill: 'Gestion de projet', level: 70 },
            ],
        },
    ],
    education: [
        {
            title: 'Bac Général',
            school: 'Charles de Foucauld',
            year: '2024',
        },
        {
            title: 'Bac de Français',
            school: 'Chartreux',
            year: '2023',
        },
        {
            title: 'Brevet & BIA',
            school: 'Institution Robin',
            year: '2022',
        },
    ],
    values: [
        {
            icon: Code2,
            title: 'Code propre et évolutif',
            description:
                "J'écris du code maintenable et documenté, en pensant toujours à l'évolution future du projet et à sa facilité de maintenance.",
        },
        {
            icon: Zap,
            title: 'Apprentissage continu',
            description:
                'Le web évolue vite, et moi aussi. Je me tiens constamment à jour avec les dernières technologies et best practices.',
        },
        {
            icon: Layers,
            title: 'Communication claire',
            description:
                "Un bon projet commence par une bonne communication. J'écoute, je conseille et je m'adapte à vos besoins.",
        },
    ],
    passions: [
        {
            emoji: '🚒',
            title: 'Sapeur-Pompier',
            description:
                'Jeune sapeur-pompier depuis 2018 et volontaires depuis 2026',
        },
        {
            emoji: '🚵',
            title: 'Sports extrêmes',
            description:
                'VTT (FreeRide, DownHill), football, musculation, course à pied',
        },
        {
            emoji: '🎹',
            title: 'Musique',
            description:
                'Pratique du piano et passionné de musique sous toutes ses formes',
        },
        {
            emoji: '⚙️',
            title: 'Tech & Hardware',
            description:
                "Passionné d'électronique, de hardware et de bidouille informatique",
        },
    ],
} as const;

export default function About() {
    return (
        <div className="relative min-h-screen bg-background">
            {/* Subtle grid background */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[64px_64px] opacity-10 mask-[:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            <div className="relative">
                {/* Hero Section */}
                <section className="mx-auto max-w-5xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                {aboutConfig.hero.badges.map((badge, index) => {
                                    const Icon = badge.icon;
                                    return (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                                        >
                                            <Icon className="size-4" />
                                            {badge.label}
                                        </span>
                                    );
                                })}
                            </div>
                            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                                {aboutConfig.hero.name}
                            </h1>
                            <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-2xl">
                                {aboutConfig.hero.subtitle}
                            </p>
                        </div>

                        <div className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
                            {aboutConfig.hero.description.map(
                                (paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                )
                            )}
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <Button size="lg" asChild>
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:gap-3"
                                >
                                    Discutons de votre projet
                                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </Button>
                            <ButtonCV />
                        </div>
                    </div>
                </section>

                {/* Featured Project - Scolario */}
                <section className="border-t border-border py-24 bg-muted/30">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-12">
                            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                                {aboutConfig.featuredProject.label}
                            </h2>
                            <p className="text-3xl font-semibold text-foreground">
                                {aboutConfig.featuredProject.title}
                            </p>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                            <div className="relative space-y-6">
                                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                                    {(() => {
                                        const BadgeIcon =
                                            aboutConfig.featuredProject.badge
                                                .icon;
                                        return (
                                            <>
                                                <BadgeIcon className="size-4" />
                                                {
                                                    aboutConfig.featuredProject
                                                        .badge.label
                                                }
                                            </>
                                        );
                                    })()}
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                    {aboutConfig.featuredProject.heading}
                                </h3>

                                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                    {aboutConfig.featuredProject.description}
                                </p>

                                <div className="grid gap-4 md:grid-cols-3 pt-4">
                                    {aboutConfig.featuredProject.features.map(
                                        (feature, index) => {
                                            const FeatureIcon = feature.icon;
                                            return (
                                                <div
                                                    key={index}
                                                    className="space-y-2"
                                                >
                                                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                        <FeatureIcon className="size-5 text-primary" />
                                                    </div>
                                                    <h4 className="font-semibold text-foreground">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>

                                <div className="flex items-center gap-4 pt-4">
                                    <Link
                                        href={aboutConfig.featuredProject.link}
                                        className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:gap-3"
                                    >
                                        En savoir plus
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Timeline */}
                <section className="border-t border-border py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-16">
                            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                                Parcours
                            </h2>
                            <p className="text-3xl font-semibold text-foreground">
                                Mes expériences en développement
                            </p>
                        </div>

                        <div className="space-y-12">
                            {aboutConfig.experiences.map(
                                (experience, index) => (
                                    <div
                                        key={index}
                                        className="group relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
                                    >
                                        <div className="absolute -left-[9px] top-0 size-4 rounded-full border-2 border-border bg-background group-hover:border-primary group-hover:bg-primary transition-colors" />
                                        <div className="space-y-3">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-foreground">
                                                        {experience.title}
                                                    </h3>
                                                    <p className="text-muted-foreground">
                                                        {experience.company}
                                                    </p>
                                                </div>
                                                <span className="text-sm text-muted-foreground whitespace-nowrap">
                                                    {experience.period}
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {experience.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {experience.tags.map(
                                                    (tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                                                        >
                                                            {tag}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="border-t border-border py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-16">
                            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                                Compétences
                            </h2>
                            <p className="text-3xl font-semibold text-foreground">
                                Technologies & outils
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {aboutConfig.skills.map((skillCategory, index) => {
                                const CategoryIcon = skillCategory.icon;
                                return (
                                    <div key={index} className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-xl bg-muted flex items-center justify-center">
                                                <CategoryIcon className="size-5 text-foreground" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-foreground">
                                                {skillCategory.title}
                                            </h3>
                                        </div>
                                        <div className="space-y-4">
                                            {skillCategory.items.map(
                                                (item, itemIndex) => (
                                                    <SkillBar
                                                        key={itemIndex}
                                                        skill={item.skill}
                                                        level={item.level}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="border-t border-border py-24 bg-muted/30">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-16">
                            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                                Formation
                            </h2>
                            <p className="text-3xl font-semibold text-foreground">
                                Mon parcours scolaire
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {aboutConfig.education.map((education, index) => (
                                <div
                                    key={index}
                                    className="space-y-3 p-6 rounded-xl border border-border bg-card"
                                >
                                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <GraduationCap className="size-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {education.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {education.school}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {education.year}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="border-t border-border py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-16">
                            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                                Approche
                            </h2>
                            <p className="text-3xl font-semibold text-foreground">
                                Ce qui guide mon travail
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {aboutConfig.values.map((value, index) => {
                                const ValueIcon = value.icon;
                                return (
                                    <div key={index} className="space-y-3">
                                        <div className="size-12 rounded-xl bg-primary flex items-center justify-center">
                                            <ValueIcon className="size-6 text-primary-foreground" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Beyond Code Section */}
                <section className="border-t border-border py-24 bg-muted/30">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-16">
                            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                                Au-delà du code
                            </h2>
                            <p className="text-3xl font-semibold text-foreground">
                                Mes autres passions
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {aboutConfig.passions.map((passion, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl border border-border bg-card space-y-3"
                                >
                                    <div className="text-3xl">
                                        {passion.emoji}
                                    </div>
                                    <h3 className="font-semibold text-foreground">
                                        {passion.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {passion.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-t border-border py-32">
                    <div className="mx-auto max-w-3xl px-6 text-center space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                            Un projet en tête ?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            Que vous soyez une entreprise, une startup ou un
                            particulier, je serais ravi de discuter de votre
                            projet et de voir comment je peux vous aider à le
                            concrétiser.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90 hover:gap-3"
                            >
                                Contactez-moi
                                <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-medium text-card-foreground transition-all hover:border-border hover:bg-muted"
                            >
                                Voir mes projets
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

// Skill Bar Component
function SkillBar({ skill, level }: { skill: string; level: number }) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{skill}</span>
                <span className="text-muted-foreground">{level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    );
}
