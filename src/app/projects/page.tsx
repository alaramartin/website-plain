import type { Metadata } from "next";
import Corners from "../Corners";
import Nav from "../Nav";

export const metadata: Metadata = {
    title: "Projects · Alara Martin",
};

export default function Projects() {
    return (
        <main className="relative h-dvh overflow-hidden">
            <Nav />
            <Corners />
        </main>
    );
}
