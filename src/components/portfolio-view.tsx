import cabinet from "@/assets/images/cabinet/cabinet.png";
import cabinetMobile from "@/assets/images/cabinet/cabinet-mobile.png";
import tab from "@/assets/images/cabinet/tab.png";
import characterSvg from "@/assets/character.svg";
import { useImagePreloader } from "@/hooks/use-image-preloader";
import { Loader2 } from "lucide-react";
import { useMemo } from "react";
import Cabinet from "./portfolio/cabinet";
import AnimatedText from "./animated-text";

const PortfolioView = () => {
    const imageUrls = useMemo(() => [cabinet, cabinetMobile, tab], []);
    const imagesLoaded = useImagePreloader(imageUrls);

    if (!imagesLoaded) {
        return (
            <section className="flex h-full w-full items-center justify-center">
                <Loader2 className="text-foreground h-8 w-8 animate-spin" />
            </section>
        );
    }

    return (
        <section className="relative flex h-[calc(100vh-8rem)] w-full flex-col justify-between overflow-hidden px-4 sm:px-8 select-none">
            {/* Top Row: Character SVG on Left + Anime.js Text Scramble Bio on Right */}
            <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-6 sm:gap-10 pt-2 z-10">
                {/* Character SVG on Left */}
                <div className="flex-shrink-0 flex items-center justify-center">
                    <img
                        src={characterSvg}
                        alt="Gaurav Singh"
                        className="h-32 sm:h-40 md:h-48 lg:h-52 w-auto drop-shadow-sm"
                        draggable={false}
                    />
                </div>

                {/* Anime.js Text Scramble Bio Text on Right */}
                <div className="flex-1 font-mono tracking-tight text-foreground space-y-2">
                    <AnimatedText className="min-h-[5rem]" />
                </div>
            </div>

            {/* Center Section: Centered Filing Cabinet */}
            <div className="relative flex flex-1 w-full flex-col items-center justify-center pt-0 pb-6 my-auto -mt-6 sm:-mt-12 md:-mt-16">
                <div className="relative flex w-full scale-[40%] sm:scale-[55%] md:scale-[68%] lg:scale-[80%] 2xl:scale-[90%] items-center justify-center origin-center">
                    <Cabinet />
                </div>
            </div>
        </section>
    );
};

export default PortfolioView;
