import {
    FileCaption,
    FileContent,
    FileHeader,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";

const InternshipFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Experience - Web Dev Intern</FileTitle>
                    <FileCaption>Sep – Oct 2025</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="space-y-3 pt-2">
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/50 p-4 space-y-2">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                <div>
                                    <p className="font-semibold text-foreground text-sm sm:text-base">SkillCraft Technology</p>
                                    <p className="text-muted-foreground font-mono text-xs mt-0.5">Web Development Intern • Remote</p>
                                </div>
                                <span className="font-mono text-xs text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-2 py-0.5 rounded">Sep – Oct 2025</span>
                            </div>
                            <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-xs sm:text-sm leading-relaxed pt-2 border-t border-black/10 dark:border-white/10">
                                <li>Built production-ready, responsive web applications following modern front-end engineering standards.</li>
                                <li>Engineered reusable, interactive UI components and optimized web assets for fast load times and high accessibility scores.</li>
                                <li>Collaborated on state management, API integration, and modular component architectures.</li>
                            </ul>
                        </div>
                    </div>
                </FileText>
            </FileInfo>
        </FileContent>
    );
};

export default InternshipFile;
