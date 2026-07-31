import skillsData from "@/data/skills.json";
import { FileCaption, FileContent, FileHeader, FileInfo, FileText, FileTitle } from "../file-content";

const SkillsFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Technical Skills</FileTitle>
                    <FileCaption>Full-Stack & AI Engineering</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {skillsData.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1"
                            >
                                <p className="font-semibold text-foreground text-xs sm:text-sm">
                                    {item.category}
                                </p>
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    {item.items}
                                </p>
                            </div>
                        ))}
                    </div>
                </FileText>
            </FileInfo>
        </FileContent>
    );
};

export default SkillsFile;
