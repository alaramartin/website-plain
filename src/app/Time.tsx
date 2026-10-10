"use client";
import { useEffect, useState } from "react";

const format = () =>
    new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

export default function Time() {
    const [time, setTime] = useState("");

    useEffect(() => {
        setTime(format());
        const id = setInterval(() => setTime(format()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <p
            data-whale-avoid
            className="absolute bottom-4 right-4 font-mono text-sm text-[var(--muted)] opacity-70"
        >
            it&apos;s{" "}
            <a
                href="https://clock.alaramartin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
            >
                {time}
            </a>
        </p>
    );
}
