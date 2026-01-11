"use client";

import { useState } from "react";

export function CvTooltip() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative inline-flex items-center cursor-pointer outline-none"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen(true)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    setIsOpen(true);
                }
            }}
        >
            <span
                className="text-lg cursor-not-allowed transition-all"
            // Intentionally removed border/underline classes as per user request
            >
                CV
            </span>
            <span
                className={`absolute left-full ml-3 px-2 py-1 bg-neutral-800 text-white text-xs rounded transition-opacity duration-200 whitespace-nowrap pointer-events-none dark:bg-neutral-200 dark:text-neutral-900 shadow-sm ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
            >
                Coming Soon!
            </span>
        </div>
    );
}
