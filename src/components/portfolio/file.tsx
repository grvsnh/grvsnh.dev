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

const TAB_OFFSETS = ["left-[60px]", "left-[250px]", "left-[440px]"];

type Props = {
    tabLocation: 0 | 1 | 2;
    title: string;
    isDivider?: boolean;
    index: number;
    docNumber?: number;
    children: React.ReactNode;
};

type TabMode = "closed" | "pulled" | "fullscreen";

const File = ({ tabLocation, title, children, index }: Props) => {
    const isMobile = useIsMobile();
    const browserEngine = useBrowserEngine();
    const [dragY, setDragY] = React.useState(0);
    const [mode, setMode] = React.useState<TabMode>("closed");
    const isDraggingRef = React.useRef(false);

    const tabOffsetClass = TAB_OFFSETS[tabLocation] ?? TAB_OFFSETS[0];
    const dragConfig = getDragOptions(browserEngine === "chromium", isMobile);

    // Pull height: more than half and less than full (~75%)
    const pulledY = isMobile ? -180 : -260;

    const isPulled = mode === "pulled" || dragY < -10;

    const rotation = isPulled ? 0 : dragConfig.rotationAngle;
    const yOffset = isPulled ? dragConfig.rotationYOffset : 0;

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

    const handleTabClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isDraggingRef.current) return;

        if (mode === "closed") {
            setMode("pulled");
        } else if (mode === "pulled") {
            setMode("fullscreen");
        } else {
            setMode("closed");
        }
    };

    const handleCloseAll = () => {
        setMode("closed");
    };

    return (
        <>
            <div className="perspective-[1000px]">
                <motion.div
                    drag="y"
                    dragConstraints={{ top: pulledY, bottom: 0 }}
                    dragElastic={dragConfig.dragElastic}
                    dragTransition={{
                        bounceStiffness: 500,
                    }}
                    dragMomentum={dragConfig.dragMomentum}
                    animate={{
                        y: isDraggingRef.current ? undefined : mode === "pulled" ? pulledY : 0,
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
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
                        "bg-background relative flex h-[420px] w-[720px] flex-col rounded-lg border-2 border-black dark:border-white p-6 select-text shadow-md cursor-pointer",
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
                    {/* Tab handle on top */}
                    <motion.div
                        className={cn(
                            "absolute -top-[37.5px]",
                            tabOffsetClass,
                            isPulled && "pt-[2.5px]",
                        )}
                        style={{
                            rotateX: -rotation,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <div className="relative flex h-full w-full cursor-pointer items-center justify-center select-none">
                            <img
                                src={tab}
                                className="w-[200px] dark:invert dark:hue-rotate-180 drop-shadow-sm"
                                draggable={false}
                            />
                            <div
                                className="absolute flex w-[155px] items-center text-xs sm:text-[0.875rem] tracking-tight justify-center text-black dark:text-white font-mono font-bold"
                            >
                                <p className="truncate">{title}</p>
                            </div>
                        </div>
                    </motion.div>

                    {children}
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
                                    className="relative flex flex-col items-center w-full max-w-4xl max-h-[92vh]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Full Tab Handle on top */}
                                    <div
                                        className="relative flex cursor-pointer items-center justify-center select-none mb-[-2px] z-10 self-end mr-12 sm:mr-16"
                                        onClick={handleCloseAll}
                                        title="Click tab to close back into cabinet"
                                    >
                                        <img
                                            src={tab}
                                            className="w-[220px] dark:invert dark:hue-rotate-180 drop-shadow-md"
                                            draggable={false}
                                        />
                                        <div className="absolute flex w-[170px] items-center justify-center text-sm font-mono font-bold tracking-tight text-black dark:text-white">
                                            <p className="truncate">{title}</p>
                                        </div>
                                    </div>

                                    {/* Full File Box Container */}
                                    <div className="bg-background relative w-full flex flex-col rounded-xl border-2 border-black dark:border-white p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[calc(92vh-45px)]">
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
