import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/navigation/footer';
import { Navbar } from '@/components/navigation/navbar';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default:
            process.env.NEXT_PUBLIC_SITE_NAME ||
            'Portfolio | Jean-Pierre Dupuis',
        template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    },
    description: process.env.NEXT_PUBLIC_SITE_DESC,
    keywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS?.split(',') || [],

    // Métadonnées essentielles pour le SEO
    authors: [{ name: 'Jean-Pierre Dupuis' }],
    creator: 'Jean-Pierre Dupuis',
    publisher:
        process.env.NEXT_PUBLIC_SITE_NAME || 'Portfolio | Jean-Pierre Dupuis',

    // Métadonnées pour les réseaux sociaux
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL || 'https://jp.dps-solution.com'
    ),
    alternates: {
        canonical: process.env.NEXT_PUBLIC_SITE_URL,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning>
            <head>
                {/* Préconnexion aux domaines critiques */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />

                {/* DNS Prefetch */}
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://analytics.google.com" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                    <Toaster
                        position="bottom-right"
                        theme="system"
                        richColors
                    />
                    <Footer />

                    {process.env.NODE_ENV === 'production' && <Analytics />}
                    {process.env.NODE_ENV === 'production' && <SpeedInsights />}
                </ThemeProvider>
            </body>
        </html>
    );
}
