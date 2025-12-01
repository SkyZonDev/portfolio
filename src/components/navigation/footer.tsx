import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
} from '@tabler/icons-react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

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
                        <Link
                            href={
                                process.env.NEXT_PUBLIC_GITHUB_URL ||
                                'https://github.com'
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center size-10 rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            aria-label="GitHub"
                        >
                            <IconBrandGithub className="size-5" />
                        </Link>
                        <Link
                            href={
                                process.env.NEXT_PUBLIC_LINKEDIN_URL ||
                                'https://linkedin.com'
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center size-10 rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            aria-label="LinkedIn"
                        >
                            <IconBrandLinkedin className="size-5" />
                        </Link>
                        <Link
                            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                            className="inline-flex items-center justify-center size-10 rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            aria-label="Email"
                        >
                            <IconMail className="size-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
