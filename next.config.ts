import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ['md', 'mdx', 'ts', 'tsx'],

    experimental: {
        mdxRs: { mdxType: 'gfm' },
    },
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
