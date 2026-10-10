"use client";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

export default function DarkModeToggle() {
    const [dark, setDark] = useState(false);

    // Pick up the theme the head script set from the system preference.
    useEffect(() => {
        setDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggle = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
    };

    return (
        <button
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            data-whale-avoid
            className="absolute bottom-4 left-4 cursor-pointer text-[var(--muted)] opacity-70 transition-colors duration-150 hover:text-[rgb(var(--accent-rgb))]"
        >
            {dark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </button>
    );
}
