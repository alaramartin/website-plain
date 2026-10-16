import type { Metadata } from "next";
import Corners from "../Corners";
import Nav from "../Nav";

export const metadata: Metadata = {
    title: "Hacks · Alara Martin",
};

export default function Hacks() {
    return (
        <main className="relative h-dvh overflow-hidden">
            <Nav />
            <Corners />
        </main>
    );
}
