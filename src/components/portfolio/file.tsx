import { motion } from "motion/react";
import React from "react";
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

    // on non chromium browsers, the drag effect is bugged, disabling momentum and elasticity fixes this
    dragMomentum: isChromium && !isMobile,
    dragElastic: isChromium && !isMobile ? 0.05 : 0,

    // increase drag speed on mobile, everything is scaled down on mobile, making dragging slower
    dragConstraintTop: isMobile ? -130 : -275,
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

const File = ({ tabLocation, title, children, index }: Props) => {
    const isMobile = useIsMobile();
    const browserEngine = useBrowserEngine();
    const [dragY, setDragY] = React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const isDraggingRef = React.useRef(false);

    const tabOffsetClass = TAB_OFFSETS[tabLocation] ?? TAB_OFFSETS[0];
    const dragConfig = getDragOptions(browserEngine === "chromium", isMobile);

    const openY = dragConfig.dragConstraintTop;
    const isPulled = isOpen || dragY < -10;

    // for 3d effect, when selecting a file however, face user straight on
    const rotation = isPulled ? 0 : dragConfig.rotationAngle;

    // add offset to counteract the file appearing to move up when it rotates
    const yOffset = isPulled ? dragConfig.rotationYOffset : 0;

    const handleTabClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isDraggingRef.current) return;
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="perspective-[1000px]">
            <motion.div
                drag="y"
                dragConstraints={{ top: openY, bottom: 0 }}
                dragElastic={dragConfig.dragElastic}
                dragTransition={{
                    bounceStiffness: 500,
                }}
                dragMomentum={dragConfig.dragMomentum}
                animate={{
                    y: isDraggingRef.current ? undefined : isOpen ? openY : 0,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                onDragStart={() => {
                    isDraggingRef.current = true;
                }}
                onDragEnd={(_, info) => {
                    setTimeout(() => {
                        isDraggingRef.current = false;
                    }, 100);
                    if (info.offset.y < openY / 2 || info.velocity.y < -100) {
                        setIsOpen(true);
                    } else if (info.offset.y > openY / 2 || info.velocity.y > 100) {
                        setIsOpen(false);
                    }
                }}
                onUpdate={(latest) => setDragY((latest.y as number) || 0)}
                className={cn(
                    "bg-background relative flex h-[400px] w-[700px] flex-col rounded-lg border border-black dark:border-white p-6 select-text shadow-sm",
                    isPulled && "scale-[114%]",
                )}
                style={{
                    translateZ: `${index * 2}px`,
                    translateY: `${yOffset}px`,
                    rotateX: rotation,
                    transformStyle: "preserve-3d",
                }}
            >
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
                    onClick={handleTabClick}
                >
                    <div className="relative flex h-full w-full cursor-pointer items-center justify-center select-none">
                        <img
                            src={tab}
                            className="w-[200px] dark:invert dark:hue-rotate-180"
                            draggable={false}
                        />
                        <div
                            className="absolute flex w-[155px] items-center text-xs sm:text-[0.875rem] tracking-tight justify-center text-black dark:text-white font-medium"
                        >
                            <p className="truncate font-medium">{title}</p>
                        </div>
                    </div>
                </motion.div>
                {children}
            </motion.div>
        </div>
    );
};

export default File;
