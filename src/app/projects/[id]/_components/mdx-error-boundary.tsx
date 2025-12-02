'use client';

import { Component, ReactNode } from 'react';

interface MDXErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface MDXErrorBoundaryState {
    hasError: boolean;
}

export class MDXErrorBoundary extends Component<
    MDXErrorBoundaryProps,
    MDXErrorBoundaryState
> {
    constructor(props: MDXErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): MDXErrorBoundaryState {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="text-center py-16 text-muted-foreground">
                        <p>Aucun contenu disponible pour ce projet.</p>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}
