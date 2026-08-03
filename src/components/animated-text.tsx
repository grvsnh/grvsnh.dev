import React, { useEffect, useRef } from "react";
// @ts-ignore
import { animate, scrambleText } from "animejs";

interface AnimatedTextProps {
    className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ className }) => {
    const topRef = useRef<HTMLDivElement>(null);
    const p1Ref = useRef<HTMLParagraphElement>(null);
    const p2Ref = useRef<HTMLHeadingElement>(null);

    const scrambleLine = (el: HTMLElement | null) => {
        if (!el) return;
        animate(el, {
            innerHTML: scrambleText({
                ease: "outExpo",
                override: false,
                duration: 500,
                cursor: "░▒▓█",
            }),
            opacity: [0, 1],
            duration: 500,
        });
    };

    // Initial scramble reveal on page load
    useEffect(() => {
        scrambleLine(topRef.current);
        scrambleLine(p1Ref.current);
        scrambleLine(p2Ref.current);
    }, []);

    return (
        <div className={className}>
            {/* Top Tag Line: Full Stack and AI Engineer • Bangalore, India */}
            <div
                ref={topRef}
                onPointerEnter={() => scrambleLine(topRef.current)}
                onPointerDown={() => scrambleLine(topRef.current)}
                className="text-xs sm:text-sm text-muted-foreground uppercase font-mono font-semibold tracking-wider mb-1.5 cursor-pointer select-none"
            >
                Full Stack and AI Engineer • Bangalore, India
            </div>

            <div className="space-y-1 font-mono">
                {/* Line 1: Hello, my name is */}
                <p
                    ref={p1Ref}
                    onPointerEnter={() => scrambleLine(p1Ref.current)}
                    onPointerDown={() => scrambleLine(p1Ref.current)}
                    className="text-lg sm:text-2xl md:text-3xl font-normal text-muted-foreground cursor-pointer select-none"
                >
                    Hello, my name is
                </p>

                {/* Line 2: Gaurav Singh (Sentence Case, single-line fit with increased size) */}
                <h1
                    ref={p2Ref}
                    onPointerEnter={() => scrambleLine(p2Ref.current)}
                    onPointerDown={() => scrambleLine(p2Ref.current)}
                    className="font-['GeistPixelCircle',sans-serif] text-[2.15rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-none tracking-normal whitespace-nowrap text-foreground cursor-pointer select-none py-1"
                >
                    Gaurav Singh
                </h1>
            </div>
        </div>
    );
};

export const AnimatedBio: React.FC = () => {
    const bioRef = useRef<HTMLParagraphElement>(null);

    // Initial page load scramble animation ONLY (no hover scramble)
    useEffect(() => {
        if (!bioRef.current) return;
        animate(bioRef.current, {
            innerHTML: scrambleText({
                ease: "outExpo",
                override: false,
                duration: 600,
                cursor: "░▒▓█",
            }),
            opacity: [0, 1],
            duration: 600,
        });
    }, []);

    return (
        <p
            ref={bioRef}
            className="font-mono text-xs sm:text-sm md:text-base leading-relaxed text-foreground/90 max-w-3xl pt-1 select-none"
        >
            I am a Full Stack and AI Software Engineer based in Bangalore, India, specializing in Distributed Systems and Machine Learning.
        </p>
    );
};

export default AnimatedText;
