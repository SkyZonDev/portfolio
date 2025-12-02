'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { startTransition, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
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

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? (
                <Moon className="h-4 w-4" />
            ) : (
                <Sun className="h-4 w-4" />
            )}
        </Button>
    );
}
