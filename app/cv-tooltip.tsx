"use client";

import { useCallback, useState } from "react";

export function CvTooltip() {
    const [isVisible, setIsVisible] = useState(false);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsVisible(true);
        } else if (e.key === "Escape") {
            setIsVisible(false);
        }
    }, []);

    return (
        <button
            type="button"
            className="relative inline-flex items-center min-h-[44px] cursor-pointer bg-transparent border-none p-0 font-serif focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 rounded"
            aria-describedby="cv-tooltip"
            aria-expanded={isVisible}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
            onClick={() => setIsVisible((prev) => !prev)}
            onKeyDown={handleKeyDown}
        >
            <span className="text-lg cursor-not-allowed transition-all">
                CV
            </span>
            <span
                id="cv-tooltip"
                role="tooltip"
                className={`absolute left-full ml-3 px-2 py-1 bg-neutral-800 text-white text-xs rounded transition-opacity duration-200 whitespace-nowrap pointer-events-none dark:bg-neutral-200 dark:text-neutral-900 shadow-sm ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                Coming Soon!
            </span>
        </button>
    );
}
