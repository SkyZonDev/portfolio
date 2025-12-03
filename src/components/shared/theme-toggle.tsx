'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { startTransition, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Éviter l'erreur d'hydratation en attendant que le composant soit monté côté client
    useEffect(() => {
        startTransition(() => {
            setMounted(true);
        });
    }, []);

    // Ne pas rendre le bouton tant que le composant n'est pas monté côté client
    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" disabled>
                <div className="h-4 w-4" />
            </Button>
        );
    }

    // Utiliser resolvedTheme pour obtenir le thème réellement appliqué (dark/light)
    // même quand le thème est "system"
    const isDark = resolvedTheme === 'dark';

    const toggleTheme = () => {
        if (theme === 'system') {
            // Si le thème est "system", basculer vers le thème opposé au thème résolu
            setTheme(isDark ? 'light' : 'dark');
        } else {
            // Sinon, basculer normalement entre dark et light
            setTheme(theme === 'dark' ? 'light' : 'dark');
        }
    };

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? (
                <Moon className="h-4 w-4" />
            ) : (
                <Sun className="h-4 w-4" />
            )}
        </Button>
    );
}
