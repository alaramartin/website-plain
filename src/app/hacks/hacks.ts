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
        ],
    },
];
