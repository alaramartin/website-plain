"use client";
import { useEffect, useState } from "react";

// The name, then the adjectives from alaramartin.com's NameCircle.
const WORDS = [
    "Alara Martin.",
    "a programmer",
    "a hacker",
    "a girl who codes",
    "a photographer",
    "a student",
];

const REST_MS = 2600; // how long each adjective sits
const NAME_REST_MS = 6000; // the name lingers longer
const FLIP_MS = 800;

// A square prism spinning about its horizontal axis: face k sits at -k * 90deg, so turning the
// prism by +90deg flips the front face up and over and brings the face below to the front.
export default function Headline() {
    const [step, setStep] = useState(0);
    const [faces, setFaces] = useState([WORDS[0], WORDS[1], "", ""]);

    useEffect(() => {
        const rest = step % WORDS.length === 0 ? NAME_REST_MS : REST_MS;
        const id = setTimeout(() => setStep((s) => s + 1), rest);
        return () => clearTimeout(id);
    }, [step]);

    // Once a flip lands, load the word for the face now waiting below.
    useEffect(() => {
        if (step === 0) return;
        const id = setTimeout(
            () =>
                setFaces((f) => {
                    const next = [...f];
                    next[(step + 1) % 4] = WORDS[(step + 1) % WORDS.length];
                    return next;
                }),
            FLIP_MS + 50,
        );
        return () => clearTimeout(id);
    }, [step]);

    return (
        <h1
            className="relative text-7xl"
            style={{ height: "1.15em", perspective: "1000px" }}
        >
            <div
                className="absolute inset-0"
                style={{
                    transformStyle: "preserve-3d",
                    transform: `translateZ(-0.575em) rotateX(${step * 90}deg)`,
                    transition: `transform ${FLIP_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`,
                }}
            >
                {faces.map((word, k) => (
                    <div
                        key={k}
                        className="absolute inset-0 whitespace-nowrap"
                        style={{
                            lineHeight: "1.15em",
                            backfaceVisibility: "hidden",
                            opacity: k === step % 4 ? 1 : 0,
                            transition: `opacity ${FLIP_MS}ms ease-in-out`,
                            transform: `rotateX(${-k * 90}deg) translateZ(0.575em)`,
                        }}
                    >
                        {word}
                    </div>
                ))}
            </div>
        </h1>
    );
}
