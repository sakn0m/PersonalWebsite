"use client";

import { useEffect, useState } from "react";

interface ObfuscatedEmailProps {
    className?: string;
}

const EMAIL_USER = "giorgio";
const EMAIL_DOMAIN = "giorgiovanini.eu";

export function ObfuscatedEmail({ className }: ObfuscatedEmailProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <span className={className} aria-hidden="true">Email</span>;
    }

    const email = `${EMAIL_USER}@${EMAIL_DOMAIN}`;

    return (
        <a
            href={`mailto:${email}`}
            className={className}
            aria-label={`Send email to ${email}`}
        >
            Email
        </a>
    );
}
