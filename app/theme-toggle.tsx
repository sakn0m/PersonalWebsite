"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevents hydration mismatch
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle Dark Mode"
        >
            {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
}