import { FileCaption, FileContent, FileHeader, FileImage, FileInfo, FileText, FileTitle } from "../file-content";
import brainScanImg from "@/assets/images/portfolio/brain-scan.png";

const BrainScanFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Project - BrainScan</FileTitle>
                    <FileCaption>TensorFlow.js • WebGL</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="space-y-1.5">
                        <p className="font-semibold text-foreground text-xs sm:text-sm">Browser AI Brain Tumor Classifier</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs leading-snug">
                            <li>Privacy-first browser AI app using TensorFlow.js with WebGL acceleration</li>
                            <li>Grad-CAM heatmaps, before/after visual comparison sliders & lens tools</li>
                        </ul>
                    </div>
                </FileText>
            </FileInfo>
            <FileImage>
                <img src={brainScanImg} alt="BrainScan AI" className="h-full w-full object-cover rounded-xs" />
            </FileImage>
        </FileContent>
    );
};

export default BrainScanFile;
