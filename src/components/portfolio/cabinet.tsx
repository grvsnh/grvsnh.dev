import { motion } from "motion/react";
import File from "./file";
import cabinetLayout from "./cabinet-layout";
import cabinetImg from "@/assets/images/cabinet/cabinet.png";
import cabinetMobileImg from "@/assets/images/cabinet/cabinet-mobile.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Cabinet = () => {
    const isMobile = useIsMobile();
    const currentCabinetImg = isMobile ? cabinetMobileImg : cabinetImg;

    return (
        <>
            <motion.div className="flex flex-col items-center space-y-[-366px] px-16 [clip-path:inset(-1000px_0_360px_0)] md:pt-[30vh]">
                {cabinetLayout.map((file, i) => {
                    return (
                        <File
                            key={i}
                            title={file.title}
                            tabLocation={file.tabLocation}
                            isDivider={file.isDivider}
                            index={i}
                        >
                            {file.content}
                        </File>
                    );
                })}
            </motion.div>
            <div className="absolute bottom-0">
                <div className="relative mb-[240px] flex h-[120px] justify-center">
                    <div className="absolute -top-[290px] left-[67px] -z-10">
                        <div className="bg-primary h-[1.5px] w-[290px] origin-top-left rotate-[92.5deg]"></div>
                    </div>
                    <div className="absolute right-[53px] -z-10">
                        <div className="bg-primary h-[1.5px] w-[290px] origin-top-right rotate-[87.5deg]"></div>
                    </div>
                    <div className="absolute -top-[290px] right-[66px] -z-10">
                        <div className="bg-primary h-[1.5px] w-[797px]"></div>
                    </div>
                    <div className="w-[930px]">
                        <img
                            src={currentCabinetImg}
                            className="h-auto w-full select-none dark:invert dark:hue-rotate-180"
                            draggable={false}
                        />
                    </div>
                    <div className={cn("absolute font-mono text-foreground select-none pointer-events-none tracking-tight flex items-center justify-center", isMobile ? "top-[50px] text-sm font-bold" : "top-14 text-base font-semibold")}>
                        Gaurav Singh
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cabinet;
