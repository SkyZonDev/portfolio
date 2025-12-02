import Link from 'next/link';
import { footer } from '@/constants';

export function Footer() {
    return (
        <footer className="relative border-t border-border py-4">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} — Conçu & développé avec
                        passion
                    </p>
                    <div className="flex items-center gap-1">
                        {footer.social.map((social, idx) => (
                            <Link
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center size-10 rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                aria-label={social.label}
                            >
                                <social.icon className="size-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
