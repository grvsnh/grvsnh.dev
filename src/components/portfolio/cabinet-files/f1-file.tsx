import { FileCaption, FileContent, FileHeader, FileImage, FileInfo, FileText, FileTitle } from "../file-content";
import purepixelImg from "@/assets/images/portfolio/purepixel.png";

const F1File = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>F1 Strategy Lab</FileTitle>
                    <FileCaption>Next.js • FastAPI • Plotly</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="space-y-1.5">
                        <p className="font-semibold text-foreground text-xs sm:text-sm">Formula 1 Telemetry Platform</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs leading-snug">
                            <li>Full-stack telemetry platform processing official F1 telemetry & race data</li>
                            <li>Driver comparisons, circuit maps, speed heatmaps & lap delta analytics</li>
                        </ul>
                    </div>
                </FileText>
            </FileInfo>
            <FileImage>
                <img src={purepixelImg} alt="F1 Strategy Lab" className="h-full w-full object-cover rounded-xs" />
            </FileImage>
        </FileContent>
    );
};

export default F1File;
