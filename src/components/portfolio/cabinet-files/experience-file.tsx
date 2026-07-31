import experienceData from "@/data/experience.json";
import {
    FileCaption,
    FileContent,
    FileHeader,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";

const ExperienceFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Experience</FileTitle>
                    <FileCaption>Sep – Oct 2025</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="space-y-3 pt-2">
                        {experienceData.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-md border border-black/20 dark:border-white/20 bg-background/50 p-4 space-y-2"
                            >
                                <div className="flex items-center justify-between gap-2 flex-wrap">
                                    <div>
                                        <p className="font-semibold text-foreground text-sm sm:text-base">
                                            {item.company}
                                        </p>
                                        <p className="text-muted-foreground font-mono text-xs mt-0.5">
                                            {item.role}
                                        </p>
                                    </div>
                                    <span className="font-mono text-xs text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-2 py-0.5 rounded">
                                        {item.period}
                                    </span>
                                </div>
                                <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-xs sm:text-sm leading-relaxed pt-2 border-t border-black/10 dark:border-white/10">
                                    {item.points.map((pt, pIdx) => (
                                        <li key={pIdx}>{pt}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </FileText>
            </FileInfo>
        </FileContent>
    );
};

export default ExperienceFile;
