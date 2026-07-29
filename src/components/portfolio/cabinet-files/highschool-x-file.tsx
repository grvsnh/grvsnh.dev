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

const HighSchoolXFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Secondary School (Class X)</FileTitle>
                    <FileCaption>2018 – 2020</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="space-y-1.5">
                        <div>
                            <p className="font-semibold text-foreground text-xs sm:text-sm">AISSE — All India Secondary School Examination</p>
                            <p className="text-muted-foreground font-mono text-[11px] mt-0.5">Army Public School • India</p>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs leading-snug pt-1">
                            <li><span className="font-medium text-foreground">Curriculum:</span> CBSE Board</li>
                            <li><span className="font-medium text-foreground">Foundation:</span> Science, Mathematics, Social Sciences & Computing</li>
                        </ul>
                    </div>
                </FileText>
            </FileInfo>
            <FileImage>
                <img src={apsPrtcImg} alt="Army Public School" className="h-full w-full object-cover rounded-xs" />
            </FileImage>
        </FileContent>
    );
};

export default HighSchoolXFile;
