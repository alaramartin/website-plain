export type Media =
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string; alt: string; poster?: string };

export type Hack = {
    // "2025-10" or "2025-10-12"
    date: string;
    event: string;
    // e.g. "1st place", "best use of ai": shown in red
    result?: string;
    caption: string;
    media: Media[];
    // the carousel's width/height, matched to the media so nothing gets cropped; defaults to 16/10
    aspect?: string;
    links: { label: string; href: string }[];
};

// Newest first. Media lives in public/hacks/.
export const HACKS: Hack[] = [
    {
        date: "2026-10",
        event: "paradigm frontiers",
        caption:
            "Built Tab, an autocomplete for your entire Mac. It predicts your next action using TypeSafe's Jev and pays in one keypress on Tempo.",
        media: [
            {
                type: "video",
                src: "/hacks/paradigm-tab-demo.mp4",
                poster: "/hacks/paradigm-tab-demo.jpg",
                alt: "Demo of Tab predicting and completing actions on a Mac",
            },
        ],
        aspect: "16/9",
        links: [
            {
                label: "github",
                href: "https://github.com/alaramartin/paradigmhacks",
            },
            {
                label: "x",
                href: "https://x.com/alara_martin_/status/2110875781819928838",
            },
        ],
    },
    {
        date: "2026-10",
        event: "b@bhacks 2.0",
        result: "2nd most creative",
        caption:
            "Cash Cow: an accountability platform where users stake AUSD on their own deadlines and others bet on the outcome. AI agents verify task completion directly from GitHub and Canvas.",
        media: [
            {
                type: "image",
                src: "/hacks/bab-2.png",
                alt: "The Cash Cow team on stage at B@BHacks 2.0",
            },
            {
                type: "image",
                src: "/hacks/bab-1.png",
                alt: "Hackers working at B@BHacks 2.0",
            },
        ],
        aspect: "3/2",
        links: [
            {
                label: "github",
                href: "https://github.com/cabbles/b-bhacks",
            },
        ],
    },
    {
        date: "2026-09",
        event: "mantisgrid ai infrastructure",
        result: "1st place grand prize",
        caption:
            "ORIGIN: a root-cause analysis agent for GPU cluster failures that builds a dependency graph from raw telemetry. Beat the sponsor's solution at $0 inference cost.",
        media: [
            {
                type: "image",
                src: "/hacks/mantisgrid.jpg",
                alt: "MantisGrid AI Infrastructure Hackathon",
            },
        ],
        aspect: "3/2",
        links: [
            {
                label: "github",
                href: "https://github.com/alaramartin/mantisgridhacks",
            },
            {
                label: "linkedin",
                href: "https://lnkd.in/p/gX2muBUr",
            },
        ],
    },
    {
        date: "2026-09",
        event: "live models by visko",
        result: "2nd place overall",
        caption:
            "SafePath: a Next.js/FastAPI tool that renders any walking route as night-time video, fusing OpenStreetMap routing, Mapillary imagery, streetlight outages, and weather.",
        media: [
            {
                type: "image",
                src: "/hacks/live-models.jpg",
                alt: "Working at the Live Models Hackathon",
            },
        ],
        aspect: "3/2",
        links: [
            {
                label: "github",
                href: "https://github.com/alaramartin/viskohacks",
            },
            {
                label: "x",
                href: "https://x.com/alara_martin_/status/2098924619831161147",
            },
        ],
    },
    {
        date: "2026-05",
        event: "nozomio",
        result: "best use of tensorlake",
        caption:
            "UX Agent: an AI agent pipeline that watches real PostHog feature analytics and autonomously ships UI updates informed by real user data.",
        media: [
            {
                type: "image",
                src: "/hacks/nozomio.jpg",
                alt: "The Nozomio Hackathon venue",
            },
        ],
        aspect: "1206/872",
        links: [
            {
                label: "github",
                href: "https://github.com/AzizAkturin/TeamSnorlax-UX-Agent",
            },
        ],
    },
];
