import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";
import purepixelImg from "@/assets/images/portfolio/purepixel.png";

const CertificationsFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Certifications</FileTitle>
                    <FileCaption>4 Verified</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="grid grid-cols-2 gap-1.5 pt-1 text-xs">
                        <div className="rounded border bg-background/60 p-1.5">
                            <p className="font-semibold text-foreground text-[11px]">Harvard CS50</p>
                            <p className="text-muted-foreground text-[10px] truncate">Python Programming</p>
                        </div>
                        <div className="rounded border bg-background/60 p-1.5">
                            <p className="font-semibold text-foreground text-[11px]">Deloitte Australia</p>
                            <p className="text-muted-foreground text-[10px] truncate">Tech Simulation</p>
                        </div>
                        <div className="rounded border bg-background/60 p-1.5">
                            <p className="font-semibold text-foreground text-[11px]">Postman</p>
                            <p className="text-muted-foreground text-[10px] truncate">API Student Expert</p>
                        </div>
                        <div className="rounded border bg-background/60 p-1.5">
                            <p className="font-semibold text-foreground text-[11px]">HackerRank</p>
                            <p className="text-muted-foreground text-[10px] truncate">Python (Basic)</p>
                        </div>
                    </div>
                </FileText>
            </FileInfo>
            <FileImage>
                <img src={purepixelImg} alt="Certifications" className="h-full w-full object-cover rounded-xs" />
            </FileImage>
        </FileContent>
    );
};

export default CertificationsFile;
