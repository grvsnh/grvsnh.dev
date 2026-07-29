import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";
import apsPrtcImg from "@/assets/images/portfolio/aps-prtc.jpg";

const HighSchoolXIIFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Senior High School (Class XII)</FileTitle>
                    <FileCaption>2020 – 2022</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="space-y-1.5">
                        <div>
                            <p className="font-semibold text-foreground text-xs sm:text-sm">AISSCE — All India Senior School Certificate</p>
                            <p className="text-muted-foreground font-mono text-[11px] mt-0.5">Army Public School PRTC • Bangalore</p>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs leading-snug pt-1">
                            <li><span className="font-medium text-foreground">Curriculum:</span> CBSE Board</li>
                            <li><span className="font-medium text-foreground">Subjects:</span> Physics, Chemistry, Mathematics, Computer Science</li>
                        </ul>
                    </div>
                </FileText>
            </FileInfo>
            <FileImage>
                <img src={apsPrtcImg} alt="Army Public School PRTC" className="h-full w-full object-cover rounded-xs" />
            </FileImage>
        </FileContent>
    );
};

export default HighSchoolXIIFile;
