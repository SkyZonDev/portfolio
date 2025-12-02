import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/navigation/footer';
import { Navbar } from '@/components/navigation/navbar';
import './globals.css';
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning>
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
                </ThemeProvider>
            </body>
        </html>
    );
}
