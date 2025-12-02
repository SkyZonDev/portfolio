import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components = {
    h1: (props: HeadingProps) => (
        <h1
            className="font-bold pt-16 mb-8 text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-zinc-50 leading-tight"
            {...props}
        />
    ),
    h2: (props: HeadingProps) => (
        <h2
            className="text-gray-900 dark:text-zinc-50 font-bold mt-16 mb-6 text-3xl md:text-4xl tracking-tight relative pb-4 border-b-2 border-gray-200 dark:border-zinc-700/50 group"
            {...props}
        >
            <span className="relative">
                {props.children}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 group-hover:w-full transition-all duration-500 -mb-4"></span>
            </span>
        </h2>
    ),
    h3: (props: HeadingProps) => (
        <h3
            className="text-gray-800 dark:text-zinc-100 font-bold mt-12 mb-5 text-2xl md:text-3xl tracking-tight"
            {...props}
        />
    ),
    h4: (props: HeadingProps) => (
        <h4
            className="font-semibold text-gray-800 dark:text-zinc-100 mt-8 mb-4 text-xl tracking-tight"
            {...props}
        />
    ),
    p: (props: ParagraphProps) => (
        <p
            className="text-gray-700 dark:text-zinc-300 leading-relaxed mb-6 text-base md:text-lg"
            {...props}
        />
    ),
    ol: (props: ListProps) => (
        <ol
            className="text-gray-700 dark:text-zinc-300 list-decimal pl-8 space-y-3 mb-8 marker:text-blue-600 dark:marker:text-blue-400 marker:font-semibold"
            {...props}
        />
    ),
    ul: (props: ListProps) => (
        <ul
            className="text-gray-700 dark:text-zinc-300 list-none pl-0 space-y-3 mb-8"
            {...props}
        />
    ),
    li: (props: ListItemProps) => (
        <li
            className="pl-7 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-2 before:rounded-full  before:shadow-sm hover:before:scale-125 before:transition-transform before:duration-300"
            {...props}
        />
    ),
    em: (props: ComponentPropsWithoutRef<'em'>) => (
        <em
            className="font-medium italic text-gray-800 dark:text-zinc-200"
            style={{ fontStyle: 'italic' }}
            {...props}
        />
    ),
    strong: (props: ComponentPropsWithoutRef<'strong'>) => (
        <strong
            className="font-bold text-gray-900 dark:text-zinc-50"
            {...props}
        />
    ),
    a: ({ href, children, ...props }: AnchorProps) => {
        const className =
            'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium underline decoration-2 decoration-blue-400/40 hover:decoration-blue-600/60 dark:decoration-blue-500/40 dark:hover:decoration-blue-400/60 underline-offset-4 transition-all duration-200 hover:underline-offset-2';
        if (href?.startsWith('/')) {
            return (
                <Link href={href} className={className} {...props}>
                    {children}
                </Link>
            );
        }
        if (href?.startsWith('#')) {
            return (
                <a href={href} className={className} {...props}>
                    {children}
                </a>
            );
        }
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                {...props}
            >
                {children}
                <svg
                    className="inline-block w-4 h-4 ml-1 mb-1 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </svg>
            </a>
        );
    },
    Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
        <div className="overflow-x-auto my-8 rounded-lg border border-gray-200 dark:border-zinc-800 shadow-sm">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="border-b-2 border-gray-300 dark:border-zinc-700">
                        {data.headers.map((header, index) => (
                            <th
                                key={index}
                                className="text-left py-4 px-6 font-bold text-gray-900 dark:text-zinc-50 text-sm uppercase tracking-wide"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
                    {data.rows.map((row, index) => (
                        <tr
                            key={index}
                            className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-150"
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="py-4 px-6 text-gray-700 dark:text-zinc-300"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ),
    blockquote: (props: BlockquoteProps) => (
        <blockquote
            className="ml-0 pl-6 pr-6  my-8 text-gray-700 dark:text-zinc-300 italic rounded-r-lg shadow-sm relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-5 before:w-1 before:bg-linear-to-b before:from-blue-500 before:to-purple-500 dark:before:from-blue-400 dark:before:to-purple-400"
            {...props}
        />
    ),
    code: (props: ComponentPropsWithoutRef<'code'>) => {
        return (
            <code
                className="bg-transparentpx-2 py-1 rounded-md text-sm font-mono shadow-sm"
                {...props}
            />
        );
    },
    pre: (props: ComponentPropsWithoutRef<'pre'>) => (
        <pre
            className=" text-gray-100 p-6 rounded-xl overflow-x-auto text-sm font-mono my-8 border border-gray-800 dark:border-zinc-800 shadow-xl relative before:absolute before:inset-0 before:rounded-xl before:pointer-events-none"
            {...props}
        />
    ),
};

declare global {
    type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
    return components;
}
