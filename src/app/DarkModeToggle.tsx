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
            className="corner-icon cursor-pointer"
        >
            {dark ? <SunIcon size={23} /> : <MoonIcon size={23} />}
        </button>
    );
}
