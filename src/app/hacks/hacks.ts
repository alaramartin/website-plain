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
            'Tab predicts your next action on your Mac and shows it as a gray "ghost": press Tab to do it. When the next step is a paywall, the ghost becomes a payment, and Tab checks the amount matches the page before it pays.',
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
            "Cash Cow: put money behind any task with a deadline. An AI referee gathers the evidence itself, rules pass or fail, and posts the verdict on-chain, and stakes from missed tasks go to the people who finished.",
        media: [
            {
                type: "image",
                src: "/hacks/bab-1.png",
                alt: "Hackers working at B@BHacks 2.0",
            },
            {
                type: "image",
                src: "/hacks/bab-2.png",
                alt: "The Cash Cow team on stage at B@BHacks 2.0",
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
        result: "grand prize winner",
        caption:
            "ORIGIN, a root-cause analysis agent for GPU cluster errors. It beat the in-house engineers' solution at $0 per case: a deterministic engine ranks the suspects, and every number it reports is traced back to the raw telemetry.",
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
        event: "live models",
        result: "2nd place overall",
        caption:
            "SafePath: type two addresses and a time, and it generates a video of you walking that route at night, starting from real street-level photos with the lighting and weather modelled from open data. So a walk somewhere new at night feels a little less unfamiliar.",
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
            "UX Agent watches how real users move through a website (rage clicks, drop-offs, exit paths) and opens pull requests that fix what's driving them away, without anyone writing the product code.",
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
