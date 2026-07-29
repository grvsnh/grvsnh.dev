import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";
import skillCraftImg from "@/assets/images/portfolio/skill-craft.jpeg";

const InternshipFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Web Developer Intern</FileTitle>
                    <FileCaption>Sep – Oct 2025</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="space-y-1.5">
                        <div>
                            <p className="font-semibold text-foreground text-xs sm:text-sm">SkillCraft Technology</p>
                            <p className="text-muted-foreground font-mono text-[11px] mt-0.5">Remote • Web Development</p>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs leading-snug pt-1">
                            <li>Built responsive web applications following modern front-end standards</li>
                            <li>Engineered interactive UI components & optimized web assets</li>
                        </ul>
                    </div>
                </FileText>
            </FileInfo>
            <FileImage>
                <img src={skillCraftImg} alt="SkillCraft Technology" className="h-full w-full object-cover rounded-xs" />
            </FileImage>
        </FileContent>
    );
};

export default InternshipFile;
