import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        // Formats modernes prioritaires
        formats: ['image/avif', 'image/webp'],

        // Tailles optimisées pour différents devices
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

        // Cache long pour images statiques
        minimumCacheTTL: 31536000, // 1 an
    },
    compiler: {
        // Suppression des console.log en production
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Compression activée
    compress: true,

    // Production optimizations
    productionBrowserSourceMaps: false,

    // React strict mode pour détecter les problèmes
    reactStrictMode: true,
    pageExtensions: ['md', 'mdx', 'ts', 'tsx'],

    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['lucide-react', '@tabler/icons-react'],
        mdxRs: { mdxType: 'gfm' },
    },
    async headers() {
        return [
            {
                // Images statiques - cache agressif
                source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                // Polices - cache agressif
                source: '/fonts/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                // Pages statiques - cache avec revalidation
                source: '/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
                    },
                    // Security headers
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
        ];
    },
    poweredByHeader: false,
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
