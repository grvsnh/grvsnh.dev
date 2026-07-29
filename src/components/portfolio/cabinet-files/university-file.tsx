import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";
import uniImg from "@/assets/images/portfolio/uni.jpg";

const UniversityFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>University</FileTitle>
                    <FileCaption>2023 – 2027</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="space-y-1.5">
                        <div>
                            <p className="font-semibold text-foreground text-xs sm:text-sm">B.E. in Computer Science & Engineering</p>
                            <p className="text-muted-foreground font-mono text-[11px] mt-0.5">Visvesvaraya Technological University • Bangalore</p>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs leading-snug pt-1">
                            <li><span className="font-medium text-foreground">Degree:</span> Bachelor of Engineering (B.E.)</li>
                            <li><span className="font-medium text-foreground">Core Focus:</span> Data Structures, OS, Distributed Systems, AI & Database Architecture</li>
                        </ul>
                    </div>
                </FileText>
            </FileInfo>
            <FileImage>
                <img src={uniImg} alt="Visvesvaraya Technological University" className="h-full w-full object-cover rounded-xs" />
            </FileImage>
        </FileContent>
    );
};

export default UniversityFile;
