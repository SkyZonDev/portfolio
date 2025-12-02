import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    type TablerIcon,
} from '@tabler/icons-react';
import {
    Code2,
    Database,
    Globe,
    Layers,
    type LucideIcon,
    Smartphone,
    Sparkles,
    Zap,
} from 'lucide-react';

export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    year: string;
    tech: string[];
    icon: LucideIcon;
    gradient: string;
    iconBg: string;
    featured: boolean;
    metadata?: {
        [key: string]: string | boolean | number | undefined;
    };
}

export interface Stats {
    [key: string]: {
        label: string;
        value: number | string;
    }[];
}

export interface Navbar {
    main_nav: {
        label: string;
        href: string;
    }[];
}

export interface Footer {
    social: {
        label: string;
        href: string;
        icon: TablerIcon;
    }[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Scolario',
        description:
            'Solution SaaS de nouvelle génération pour la gestion scolaire : fiabilité 99,9%, IA pour la réorganisation automatique des emplois du temps, communication unifiée, analytics avancés et expérience mobile-first.',
        category: 'SaaS',
        year: '2025',
        tech: [
            'Next.js 16',
            'React',
            'TypeScript',
            'Drizzle ORM',
            'PostgreSQL',
            'Redis',
            'MailPit',
        ],
        icon: Code2,
        gradient: 'from-blue-500/10 to-cyan-500/10',
        iconBg: 'bg-blue-500',
        featured: true,
        metadata: {
            url: 'https://scolario-web.vercel.app',
            image: '1.webp',
        },
    },
    {
        id: 2,
        title: 'RedLyon Racing Team',
        description:
            'Site web professionnel pour l’écurie RedLyon Racing : pages dynamiques, actualités, gestion de contenu, formulaires avancés et design sur mesure.',
        category: 'Web',
        year: '2025',
        tech: [
            'Next.js',
            'Tailwind CSS',
            'TypeScript',
            'Shadcn/UI',
            'React Hook Form',
            'GitLab CI/CD',
        ],
        icon: Layers,
        gradient: 'from-orange-500/10 to-red-500/10',
        iconBg: 'bg-red-600',
        featured: true,
        metadata: {
            url: 'https://redlyonracingteam.com',
            // github: `${process.env.NEXT_PUBLIC_GITHUB_URL}/redlyonracingteam`,
            image: '2.webp',
        },
    },
    {
        id: 3,
        title: 'StudX',
        description:
            'Application permettant de récupérer et centraliser les informations étudiantes de MyDigitalCampus grâce à un système de parsing HTML, en l’absence d’API officielle. Elle extrayait automatiquement notes, absences, retards et emploi du temps depuis les pages renvoyées par la plateforme.',
        category: 'Mobile',
        year: '2025',
        tech: ['React Native', 'Expo'],
        icon: Smartphone,
        gradient: 'from-purple-500/10 to-pink-500/10',
        iconBg: 'bg-purple-500',
        featured: false,
        metadata: {
            // url: 'https://studx.ddns.net',
            github: `${process.env.NEXT_PUBLIC_GITHUB_URL}/studxv4`,
            // image: '2.webp',
        },
    },
    {
        id: 4,
        title: 'Chichi Pizza',
        description:
            'Site vitrine pour une pizzeria, présentant l’activité, les menus, les valeurs de l’établissement et les informations pratiques, le tout avec une interface claire et responsive.',
        category: 'Web',
        year: '2025',
        tech: ['React', 'Vite', 'Tailwind CSS'],
        icon: Globe,
        gradient: 'from-emerald-500/10 to-teal-500/10',
        iconBg: 'bg-emerald-500',
        featured: false,
        metadata: {
            url: 'https://chichipizza.fr',
            github: `${process.env.NEXT_PUBLIC_GITHUB_URL}/uggy_web`,
            image: '4.webp',
        },
    },
    {
        id: 5,
        title: 'Authentification API REST',
        description:
            'API REST modulaire permettant l’authentification et la gestion des utilisateurs avec prise en charge de plusieurs bases de données.',
        category: 'Backend',
        year: '2025',
        tech: ['Node.js', 'Express', 'JWT', 'PostgreSQL', 'MongoDB', 'MySQL'],
        icon: Database,
        gradient: 'from-indigo-500/10 to-violet-500/10',
        iconBg: 'bg-indigo-500',
        featured: false,
        metadata: {
            github: `${process.env.NEXT_PUBLIC_GITHUB_URL}/AUTH_API_REST`,
        },
    },
];

export const stats: Stats = {
    projects: [
        {
            label: 'Qualité, performance & accessibilité',
            value: 'Engagement',
        },
        {
            label: "Années d'expérience",
            value: '3+',
        },
        {
            label: 'Clients satisfaits',
            value: '15+',
        },
        {
            label: 'Projets complétés',
            value: '25+',
        },
    ],
};

export const navbar: Navbar = {
    main_nav: [
        {
            label: 'À propos',
            href: '/about',
        },
        {
            label: 'Projets',
            href: '/projects',
        },
        {
            label: 'Contact',
            href: '/contact',
        },
    ],
};

export const footer: Footer = {
    social: [
        {
            label: 'GitHub',
            href: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com',
            icon: IconBrandGithub,
        },
        {
            label: 'LinkedIn',
            href:
                process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com',
            icon: IconBrandLinkedin,
        },
        {
            label: 'Email',
            href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
            icon: IconMail,
        },
    ],
};
