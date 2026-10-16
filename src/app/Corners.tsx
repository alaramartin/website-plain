import DarkModeToggle from "./DarkModeToggle";
import Socials from "./Socials";
import Time from "./Time";

// The theme toggle and socials in the bottom-left, the time in the bottom-right.
export default function Corners() {
    return (
        <>
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
        </>
    );
}
