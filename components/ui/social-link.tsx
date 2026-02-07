import Link from "next/link";

interface SocialLinkProps {
    href: string;
    children: React.ReactNode;
}

export function SocialLink({ href, children }: SocialLinkProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg border-b border-transparent hover:border-neutral-400 dark:hover:border-neutral-500 transition-all block w-fit"
        >
            {children}
        </Link>
    );
}
