import DarkModeToggle from "./DarkModeToggle";
import Headline from "./Headline";
import Socials from "./Socials";
import Time from "./Time";
import Whale from "./Whale";

export default function Home() {
    return (
        <main className="relative h-dvh overflow-hidden">
            <Whale />

            <div
                data-whale-avoid
                className="absolute left-8 right-8 top-[32%] md:left-[36%] md:right-auto md:top-[24%]"
            >
                <Headline />
                <p className="mt-6 max-w-md">
                    I study Applied Math and Statistics at UC Berkeley. I also
                    build things.
                </p>
            </div>

            <div
                data-whale-avoid
                className="absolute bottom-4 left-4 flex items-center gap-3.5"
            >
                <DarkModeToggle />
                <span
                    aria-hidden
                    className="h-[18px] w-px bg-[var(--muted)] opacity-40"
                />
                <Socials />
            </div>
            <Time />
        </main>
    );
}
