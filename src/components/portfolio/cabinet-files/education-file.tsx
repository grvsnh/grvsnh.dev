import educationData from "@/data/education.json";
import {
    FileCaption,
    FileContent,
    FileHeader,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";

const EducationFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Education</FileTitle>
                    <FileCaption>2018 – 2027</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="space-y-2.5 pt-1">
                        {educationData.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-md border border-black/20 dark:border-white/20 bg-background/50 p-2.5"
                            >
                                <div className="flex items-center justify-between gap-2 flex-wrap">
                                    <p className="font-semibold text-foreground text-xs sm:text-sm">
                                        {item.degree}
                                    </p>
                                    <span className="font-mono text-[10px] text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded">
                                        {item.period}
                                    </span>
                                </div>
                                <p className="text-muted-foreground font-mono text-[11px] mt-0.5">
                                    {item.institution}
                                </p>
                                <p className="text-muted-foreground text-xs leading-snug mt-1">
                                    {item.details}
                                </p>
                            </div>
                        ))}
                    </div>
                </FileText>
            </FileInfo>
        </FileContent>
    );
};

export default EducationFile;
