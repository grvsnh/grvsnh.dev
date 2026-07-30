import { FileCaption, FileContent, FileHeader, FileImage, FileInfo, FileText, FileTitle } from "../file-content";
import aielyImg from "@/assets/images/portfolio/aiely.png";

const AielyFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Project - Aiely AI</FileTitle>
                    <FileCaption>Electron • OpenRouter</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="space-y-1.5">
                        <p className="font-semibold text-foreground text-xs sm:text-sm">AI Desktop Copilot</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs leading-snug">
                            <li>Cross-platform desktop copilot with floating stealth overlay during screen share</li>
                            <li>Real-time context engine combining screen analysis with dual-channel audio</li>
                        </ul>
                    </div>
                </FileText>
            </FileInfo>
            <FileImage>
                <img src={aielyImg} alt="Aiely Copilot" className="h-full w-full object-cover rounded-xs" />
            </FileImage>
        </FileContent>
    );
};

export default AielyFile;
