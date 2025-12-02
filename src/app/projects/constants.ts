import {
    Code2,
    Globe,
    Layers,
    type LucideIcon,
    Smartphone,
    Sparkles,
    Zap,
} from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    year: string;
    tech: string[];
    icon: LucideIcon;
    gradient: string;
    iconBg: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Application SaaS',
        description:
            'Plateforme collaborative complète avec authentification, tableau de bord et API REST.',
        category: 'Web App',
        year: '2024',
        tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
        icon: Code2,
        gradient: 'from-blue-500/10 to-cyan-500/10',
        iconBg: 'bg-blue-500',
    },
    {
        id: 2,
        title: 'Design System',
        description:
            'Librairie de composants réutilisables avec documentation Storybook et thème personnalisable.',
        category: 'UI Library',
        year: '2024',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
        icon: Sparkles,
        gradient: 'from-purple-500/10 to-pink-500/10',
        iconBg: 'bg-purple-500',
    },
    {
        id: 3,
        title: 'E-commerce Platform',
        description:
            "Solution e-commerce avec panier, paiement Stripe et gestion d'inventaire en temps réel.",
        category: 'E-commerce',
        year: '2024',
        tech: ['Next.js', 'Stripe', 'Prisma', 'tRPC'],
        icon: Globe,
        gradient: 'from-emerald-500/10 to-teal-500/10',
        iconBg: 'bg-emerald-500',
    },
    {
        id: 4,
        title: 'Dashboard Analytics',
        description:
            'Tableau de bord interactif avec visualisations de données en temps réel et exports personnalisés.',
        category: 'Analytics',
        year: '2023',
        tech: ['React', 'D3.js', 'Chart.js', 'Firebase'],
        icon: Layers,
        gradient: 'from-orange-500/10 to-red-500/10',
        iconBg: 'bg-orange-500',
    },
    {
        id: 5,
        title: 'Mobile App',
        description:
            'Application mobile cross-platform avec géolocalisation et notifications push.',
        category: 'Mobile',
        year: '2023',
        tech: ['React Native', 'Expo', 'Redux', 'Firebase'],
        icon: Smartphone,
        gradient: 'from-indigo-500/10 to-violet-500/10',
        iconBg: 'bg-indigo-500',
    },
    {
        id: 6,
        title: 'API Gateway',
        description:
            'Microservices architecture avec authentification JWT et rate limiting.',
        category: 'Backend',
        year: '2023',
        tech: ['Node.js', 'Express', 'Redis', 'Docker'],
        icon: Zap,
        gradient: 'from-yellow-500/10 to-amber-500/10',
        iconBg: 'bg-yellow-500',
    },
];
