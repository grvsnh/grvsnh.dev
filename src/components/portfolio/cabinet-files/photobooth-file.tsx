import { FileCaption, FileContent, FileHeader, FileImage, FileInfo, FileText, FileTitle } from "../file-content";
import photoboothImg from "@/assets/images/portfolio/photobooth.png";

const PhotoBoothFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>PhotoBooth</FileTitle>
                    <FileCaption>Three.js • GSAP • WebRTC</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="space-y-1.5">
                        <p className="font-semibold text-foreground text-xs sm:text-sm">Interactive 3D Graphics & Physics</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs leading-snug">
                            <li>Real-time interactive 3D application with curtain physics & animation pipelines</li>
                            <li>AABB collision detection, procedural grain synthesis & WebRTC camera feeds</li>
                        </ul>
                    </div>
                </FileText>
            </FileInfo>
            <FileImage>
                <img src={photoboothImg} alt="PhotoBooth App" className="h-full w-full object-cover rounded-xs" />
            </FileImage>
        </FileContent>
    );
};

export default PhotoBoothFile;
