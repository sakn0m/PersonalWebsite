interface SocialLinkProps {
    href: string;
    children: React.ReactNode;
}

export function SocialLink({ href, children }: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-500 transition-all min-h-[44px] inline-flex items-center w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 rounded"
        >
            {children}
            <span className="sr-only"> (opens in new tab)</span>
        </a>
    );
}
