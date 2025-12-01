import { Github, Linkedin, Mail } from 'lucide-react';

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
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center size-10 rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            aria-label="GitHub"
                        >
                            <Github className="size-4" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center size-10 rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="size-4" />
                        </a>
                        <a
                            href="mailto:contact@example.com"
                            className="inline-flex items-center justify-center size-10 rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            aria-label="Email"
                        >
                            <Mail className="size-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
