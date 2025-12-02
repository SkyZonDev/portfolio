import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ErrorFormProps {
    error?: string | string[];
    id?: string;
    className?: string;
}

export function ErrorForm({ error = '', id, className }: ErrorFormProps) {
    const errors = Array.isArray(error) ? error : [error];

    if (errors.length === 0 || errors.every((e) => !e)) {
        return null;
    }

    return (
        <div
            id={id}
            role="alert"
            aria-live="polite"
            aria-atomic="true"
            className={cn(
                'flex items-start gap-2 text-sm text-red-400 animate-in fade-in slide-in-from-top-1 duration-200',
                className
            )}
        >
            <AlertCircle
                className="w-4 h-4 mt-0.5 shrink-0"
                aria-hidden="true"
            />
            <div className="flex-1 space-y-1">
                {errors.filter(Boolean).map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
            </div>
        </div>
    );
}
