"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { CaretLeftIcon, CaretRightIcon, PlayIcon } from "@phosphor-icons/react";
import type { Media } from "./hacks";

type Video = Extract<Media, { type: "video" }>;

// A thumbnail with a play button; the real player only loads once it's pressed.
function VideoSlide({ video }: { video: Video }) {
    const [playing, setPlaying] = useState(false);

    if (playing)
        return (
            <video
                src={video.src}
                poster={video.poster}
                aria-label={video.alt}
                controls
                autoPlay
                muted
                playsInline
                className="h-full w-full object-cover"
            />
        );

    return (
        <button
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${video.alt}`}
            className="video-thumb absolute inset-0 cursor-pointer"
        >
            {video.poster && (
                <Image
                    src={video.poster}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 576px, 100vw"
                    className="object-cover"
                />
            )}
            <span className="video-play">
                <PlayIcon size={20} weight="fill" />
            </span>
        </button>
    );
}

// Swipeable on phones, arrows on hover on desktop, dots underneath.
export default function Carousel({
    media,
    aspect = "16/10",
}: {
    media: Media[];
    aspect?: string;
}) {
    const track = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);
    const many = media.length > 1;

    const onScroll = () => {
        const el = track.current;
        if (!el) return;
        const next = Math.round(el.scrollLeft / el.clientWidth);
        if (next === index) return;
        setIndex(next);
        // only the slide in view keeps playing
        el.querySelectorAll("video").forEach((v, i) => {
            if (i !== next) v.pause();
        });
    };

    const go = (i: number) => {
        const el = track.current;
        el?.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    };

    if (media.length === 0) return null;

    return (
        <div>
            <div className="group relative overflow-hidden rounded-lg">
                <div
                    ref={track}
                    onScroll={onScroll}
                    className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto"
                >
                    {media.map((m, i) => (
                        <div
                            key={m.src + i}
                            style={{ aspectRatio: aspect }}
                            className="relative w-full shrink-0 snap-center bg-[var(--whale-paper)]"
                        >
                            {m.type === "image" ? (
                                <Image
                                    src={m.src}
                                    alt={m.alt}
                                    fill
                                    sizes="(min-width: 640px) 576px, 100vw"
                                    className="object-cover"
                                />
                            ) : (
                                <VideoSlide video={m} />
                            )}
                        </div>
                    ))}
                </div>

                {many && index > 0 && (
                    <button
                        onClick={() => go(index - 1)}
                        aria-label="Previous"
                        className="carousel-arrow left-2"
                    >
                        <CaretLeftIcon size={16} />
                    </button>
                )}
                {many && index < media.length - 1 && (
                    <button
                        onClick={() => go(index + 1)}
                        aria-label="Next"
                        className="carousel-arrow right-2"
                    >
                        <CaretRightIcon size={16} />
                    </button>
                )}
            </div>

            {many && (
                <div className="mt-2.5 flex justify-center gap-1.5">
                    {media.map((m, i) => (
                        <button
                            key={m.src + i}
                            onClick={() => go(i)}
                            aria-label={`Show ${i + 1} of ${media.length}`}
                            aria-current={i === index}
                            className="carousel-dot"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
