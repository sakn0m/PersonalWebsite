"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function CvTooltip() {
    const [isVisible, setIsVisible] = useState(false);
    const isTouchDevice = useRef(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Auto-dismiss after 2.5 seconds
    useEffect(() => {
        if (isVisible) {
            timerRef.current = setTimeout(() => setIsVisible(false), 700);
        }
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [isVisible]);

    // Dismiss on outside tap (touch devices)
    useEffect(() => {
        if (!isVisible || !isTouchDevice.current) return;

        const handleOutsideTap = (e: TouchEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
                setIsVisible(false);
            }
        };

        document.addEventListener("touchstart", handleOutsideTap);
        return () => document.removeEventListener("touchstart", handleOutsideTap);
    }, [isVisible]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsVisible(true);
        } else if (e.key === "Escape") {
            setIsVisible(false);
        }
    }, []);

    const handleTouchStart = useCallback(() => {
        isTouchDevice.current = true;
    }, []);

    const handleClick = useCallback(() => {
        setIsVisible((prev) => !prev);
    }, []);

    return (
        <button
            ref={buttonRef}
            type="button"
            className="relative inline-flex items-center cursor-pointer bg-transparent border-none p-0 font-serif outline-none"
            aria-describedby="cv-tooltip"
            aria-expanded={isVisible}
            onTouchStart={handleTouchStart}
            onMouseEnter={() => { if (!isTouchDevice.current) setIsVisible(true); }}
            onMouseLeave={() => { if (!isTouchDevice.current) setIsVisible(false); }}
            onFocus={() => { if (!isTouchDevice.current) setIsVisible(true); }}
            onBlur={() => setIsVisible(false)}
            onClick={handleClick}
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
