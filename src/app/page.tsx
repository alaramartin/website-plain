import DarkModeToggle from "./DarkModeToggle";
import Headline from "./Headline";
import Time from "./Time";
import Whale from "./Whale";

export default function Home() {
    return (
        <main className="relative h-screen overflow-hidden">
            <Whale />

            <div data-whale-avoid className="absolute left-[36%] top-[24%]">
                <p className="text-sm">Hi, I&apos;m</p>
                <Headline />
                <p className="mt-6 max-w-md">
                    I study Applied Math and Statistics at UC Berkeley. I also
                    build things.
                </p>
            </div>

            <DarkModeToggle />
            <Time />
        </main>
    );
}
