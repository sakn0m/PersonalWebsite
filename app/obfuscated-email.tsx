"use client";

import { useEffect, useState } from "react";

interface ObfuscatedEmailProps {
    className?: string;
}

export function ObfuscatedEmail({ className }: ObfuscatedEmailProps) {
    const [isMounted, setIsMounted] = useState(false);

    // Split the email to avoid simple string scraping in the source code
    const user = "giorgio";
    const domain = "giorgiovanini.eu";
    const email = `${user}@${domain}`;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        // Render a span or a non-clickable placeholder initially for bots
        // or just the text "Email" without an href
        return <span className={className}>Email</span>;
    }

    return (
        <a
            href={`mailto:${email}`}
            className={className}
        >
            Email
        </a>
    );
}
