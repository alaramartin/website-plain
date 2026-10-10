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
                    i&apos;m [blurb. this will be a paragraph, maybe 2-3 lines of
                    text.]
                </p>
            </div>

            <Time />
        </main>
    );
}
