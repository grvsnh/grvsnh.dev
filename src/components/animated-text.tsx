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
    const p3Ref = useRef<HTMLParagraphElement>(null);

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
        scrambleLine(p3Ref.current);
    }, []);

    return (
        <div className={className}>
            {/* Top Tag Line: Full Stack and AI Engineer • Bangalore, India (Animates on hover) */}
            <div
                ref={topRef}
                onPointerEnter={() => scrambleLine(topRef.current)}
                onPointerDown={() => scrambleLine(topRef.current)}
                className="text-xs text-muted-foreground uppercase font-semibold tracking-wider mb-2 cursor-pointer select-none"
            >
                Full Stack and AI Engineer • Bangalore, India
            </div>

            <div className="space-y-1.5 font-mono">
                {/* Line 1: Animates only when hovering Line 1 */}
                <p
                    ref={p1Ref}
                    onPointerEnter={() => scrambleLine(p1Ref.current)}
                    onPointerDown={() => scrambleLine(p1Ref.current)}
                    className="text-sm sm:text-base md:text-lg font-normal text-muted-foreground cursor-pointer select-none"
                >
                    Hello, my name is
                </p>

                {/* Line 2: GAURAV SINGH (Geist Pixel Circle font, size ~90, normal letter spacing) */}
                <h1
                    ref={p2Ref}
                    onPointerEnter={() => scrambleLine(p2Ref.current)}
                    onPointerDown={() => scrambleLine(p2Ref.current)}
                    className="font-['GeistPixelCircle',sans-serif] text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-none tracking-normal uppercase text-foreground cursor-pointer select-none py-1"
                >
                    GAURAV SINGH
                </h1>

                {/* Line 3: Animates only when hovering Line 3 */}
                <p
                    ref={p3Ref}
                    onPointerEnter={() => scrambleLine(p3Ref.current)}
                    onPointerDown={() => scrambleLine(p3Ref.current)}
                    className="text-sm sm:text-base md:text-lg leading-relaxed font-normal text-foreground pt-1 cursor-pointer select-none"
                >
                    I am a Full Stack and AI Software Engineer based in Bangalore, India, specializing in Distributed Systems and Machine Learning.
                </p>
            </div>
        </div>
    );
};

export default AnimatedText;
