import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { createPortal } from "react-dom";
import tab from "@/assets/images/cabinet/tab.png";
import { useBrowserEngine } from "@/hooks/use-browser";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const baseDragOptions = {
    rotationAngle: -40,
    rotationYOffset: 50,
};

const getDragOptions = (isChromium: boolean, isMobile: boolean) => ({
    ...baseDragOptions,
    dragMomentum: isChromium && !isMobile,
    dragElastic: isChromium && !isMobile ? 0.05 : 0,
    halfY: isMobile ? -100 : -150,
    dragSpeedMultiplier: isMobile ? 1.5 : 1,
});

const TAB_OFFSETS_DESKTOP = ["left-[60px]", "left-[250px]", "left-[440px]"];

type Props = {
    tabLocation: 0 | 1 | 2;
    title: string;
    isDivider?: boolean;
    index: number;
    docNumber?: number;
    children: React.ReactNode;
};

type TabMode = "closed" | "wave" | "pulled" | "fullscreen";

const File = ({ tabLocation, title, children, index }: Props) => {
    const isMobile = useIsMobile();
    const browserEngine = useBrowserEngine();
    const [dragY, setDragY] = React.useState(0);
    const [mode, setMode] = React.useState<TabMode>("closed");
    const isDraggingRef = React.useRef(false);

    const tabOffsetClass = isMobile
        ? "right-6"
        : (TAB_OFFSETS_DESKTOP[tabLocation] ?? TAB_OFFSETS_DESKTOP[0]);
    const dragConfig = getDragOptions(browserEngine === "chromium", isMobile);

    // Initial micro-wave ripple peek height (tiny fraction)
    const waveY = isMobile ? -45 : -55;

    // Pull height for 3D drawer
    const pulledY = isMobile ? -140 : -130;

    const isPulled = mode === "pulled" || mode === "wave" || dragY < -10;

    const rotation = isPulled ? 0 : dragConfig.rotationAngle;
    const yOffset = isPulled ? dragConfig.rotationYOffset : 0;

    // Immediate micro-wave ripple animation on initial page load (no delay)
    React.useEffect(() => {
        const startDelay = 150 + index * 120;
        const waveTimer = setTimeout(() => {
            setMode((prev) => (prev === "closed" ? "wave" : prev));

            const returnTimer = setTimeout(() => {
                setMode((prev) => (prev === "wave" ? "closed" : prev));
            }, 220);

            return () => clearTimeout(returnTimer);
        }, startDelay);

        return () => clearTimeout(waveTimer);
    }, [index]);

    // Global Esc key handler to close active tab
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setMode("closed");
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const hoverTimerRef = React.useRef<NodeJS.Timeout | null>(null);
    const lastHoverTimeRef = React.useRef(0);
    const isFirefox = typeof navigator !== "undefined" && /firefox/i.test(navigator.userAgent);

    const handlePointerEnter = () => {
        if (isMobile) return;
        const now = Date.now();
        if (isFirefox && now - lastHoverTimeRef.current < 350) return;
        lastHoverTimeRef.current = now;

        if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);

        hoverTimerRef.current = setTimeout(() => {
            setMode((prev) => (prev === "closed" ? "pulled" : prev));
        }, isFirefox ? 120 : 80);
    };

    const handlePointerLeave = () => {
        if (isMobile) return;
        const now = Date.now();
        if (isFirefox && now - lastHoverTimeRef.current < 350) {
            setTimeout(() => {
                setMode((prev) => (prev === "pulled" ? "closed" : prev));
            }, 350 - (now - lastHoverTimeRef.current));
            return;
        }

        if (hoverTimerRef.current) {
            clearTimeout(hoverTimerRef.current);
            hoverTimerRef.current = null;
        }
        setMode((prev) => (prev === "pulled" ? "closed" : prev));
    };

    const handleCloseAll = () => {
        if (mode === "fullscreen") {
            // First transition to pulled state so modal exits with drawer visible in pulled state
            setMode("pulled");
            setTimeout(() => {
                setMode("closed");
            }, 120);
        } else {
            setMode("closed");
        }
    };

    const handleTabClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
        if (isDraggingRef.current) return;

        if (mode === "fullscreen") {
            handleCloseAll();
        } else {
            setMode("fullscreen");
        }
    };

    return (
        <>
            <div className="perspective-[1000px] relative">
                <motion.div
                    drag={isMobile ? false : "y"}
                    dragConstraints={{ top: pulledY, bottom: 0 }}
                    dragElastic={dragConfig.dragElastic}
                    dragTransition={{
                        bounceStiffness: 500,
                    }}
                    dragMomentum={dragConfig.dragMomentum}
                    animate={{
                        y: isDraggingRef.current ? undefined : mode === "pulled" || mode === "fullscreen" ? pulledY : mode === "wave" ? waveY : 0,
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.85 }}
                    onDragStart={() => {
                        isDraggingRef.current = true;
                    }}
                    onDragEnd={(_, info) => {
                        setTimeout(() => {
                            isDraggingRef.current = false;
                        }, 100);
                        if (info.offset.y < pulledY / 2 || info.velocity.y < -100) {
                            setMode("pulled");
                        } else {
                            setMode("closed");
                        }
                    }}
                    onUpdate={(latest) => setDragY((latest.y as number) || 0)}
                    className={cn(
                        "bg-background relative flex h-[420px] w-[720px] flex-col rounded-lg border-2 border-black dark:border-white p-6 select-text shadow-md cursor-pointer group",
                        isPulled && "scale-[112%]",
                    )}
                    style={{
                        translateZ: `${index * 2}px`,
                        translateY: `${yOffset}px`,
                        rotateX: rotation,
                        transformStyle: "preserve-3d",
                    }}
                    onClick={handleTabClick}
                >
                    {/* Responsive Tab handle: Staggered on Desktop, Right-aligned on Mobile */}
                    <motion.div
                        className={cn(
                            "absolute -top-[40px] sm:-top-[44px]",
                            tabOffsetClass,
                            isPulled && "pt-[2.5px]",
                        )}
                        style={{
                            rotateX: -rotation,
                            transformStyle: "preserve-3d",
                        }}
                        onPointerEnter={handlePointerEnter}
                        onPointerLeave={handlePointerLeave}
                    >
                        <div className="relative flex h-full w-full cursor-pointer items-center justify-center select-none touch-manipulation">
                            <img
                                src={tab}
                                className="w-[260px] sm:w-[240px] dark:invert dark:hue-rotate-180 drop-shadow-md"
                                draggable={false}
                            />
                            <div
                                className="absolute flex w-[205px] sm:w-[190px] items-center text-xs sm:text-base tracking-tight justify-center text-black dark:text-white font-mono font-bold"
                            >
                                <p className="truncate">{title}</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex-1 flex flex-col">{children}</div>
                </motion.div>
            </div>

            {/* True Fullscreen Blur Modal rendered via Portal outside 3D cabinet transforms */}
            {typeof document !== "undefined" &&
                createPortal(
                    <AnimatePresence>
                        {mode === "fullscreen" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md select-text"
                                onClick={handleCloseAll}
                            >
                                <motion.div
                                    initial={{ scale: 0.85, opacity: 0, y: 30 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.85, opacity: 0, y: 30 }}
                                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                    className="relative flex flex-col items-center w-[92vw] sm:w-full max-w-4xl h-[78vh] sm:h-[86vh]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Full Tab Handle on top */}
                                    <div
                                        className="relative flex cursor-pointer items-center justify-center select-none mb-[-2px] z-10 self-end mr-4 sm:mr-16 shrink-0"
                                        onClick={handleCloseAll}
                                        title="Click tab to close back into cabinet"
                                    >
                                        <img
                                            src={tab}
                                            className="w-[140px] sm:w-[220px] dark:invert dark:hue-rotate-180 drop-shadow-md"
                                            draggable={false}
                                        />
                                        <div className="absolute flex w-[110px] sm:w-[170px] items-center justify-center text-[11px] sm:text-sm font-mono font-bold tracking-tight text-black dark:text-white">
                                            <p className="truncate">{title}</p>
                                        </div>
                                    </div>

                                    {/* Full File Box Container locked to fixed height with touch scroll enabled */}
                                    <div className="bg-background relative w-full h-[calc(78vh-32px)] sm:h-[calc(86vh-45px)] flex flex-col rounded-xl border-2 border-black dark:border-white p-3 sm:p-8 shadow-2xl overflow-y-auto min-h-0">
                                        {children}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body,
                )}
        </>
    );
};

export default File;
