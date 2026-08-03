import cabinet from "@/assets/images/cabinet/cabinet.png";
import cabinetMobile from "@/assets/images/cabinet/cabinet-mobile.png";
import tab from "@/assets/images/cabinet/tab.png";
import characterSvg from "@/assets/character.svg";
import { useImagePreloader } from "@/hooks/use-image-preloader";
import { Loader2 } from "lucide-react";
import { useMemo } from "react";
import Cabinet from "./portfolio/cabinet";
import AnimatedText, { AnimatedBio } from "./animated-text";

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
        <section className="relative flex h-[calc(100vh-8rem)] w-full flex-col justify-between overflow-hidden px-6 sm:px-10 select-none">
            {/* Top Row: Character SVG on Left + Intro Title on Right */}
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 pt-1 z-10">
                <div className="flex items-center justify-between gap-6 sm:gap-8">
                    {/* Character SVG Avatar */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                        <img
                            src={characterSvg}
                            alt="Gaurav Singh"
                            className="h-28 sm:h-48 md:h-56 lg:h-60 w-auto drop-shadow-sm"
                            draggable={false}
                        />
                    </div>

                    {/* Anime.js Animated Header */}
                    <div className="flex-1 min-w-0">
                        <AnimatedText />
                    </div>
                </div>

                {/* Bio text starting below character SVG */}
                <AnimatedBio />
            </div>

            {/* Center Section: Centered 3D Filing Cabinet */}
            <div className="relative flex flex-1 w-full flex-col items-center justify-center pt-0 pb-2 my-auto -mt-14 sm:-mt-20 md:-mt-24 lg:-mt-28">
                <div className="relative flex w-full scale-[43%] sm:scale-[64%] md:scale-[74%] lg:scale-[84%] 2xl:scale-[92%] items-center justify-center origin-center">
                    <Cabinet />
                </div>
            </div>
        </section>
    );
};

export default PortfolioView;
