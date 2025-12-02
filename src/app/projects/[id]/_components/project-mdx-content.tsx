'use client';

import { ComponentType, use, useMemo } from 'react';

interface ProjectMDXContentProps {
    id: string;
}

// Cache pour les promesses d'import MDX
const mdxCache = new Map<string, Promise<ComponentType>>();

function getMDXPromise(id: string) {
    if (!mdxCache.has(id)) {
        mdxCache.set(
            id,
            import(`@/content/projects/${id}/index.mdx`).then(
                (module) => module.default
            )
        );
    }
    return mdxCache.get(id)!;
}

export function ProjectMDXContent({ id }: ProjectMDXContentProps) {
    const mdxPromise = useMemo(() => getMDXPromise(id), [id]);
    const Mdx = use(mdxPromise);
    return <Mdx />;
}
