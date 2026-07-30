import {
    FileCaption,
    FileContent,
    FileHeader,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";

const ProjectsFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Featured Projects</FileTitle>
                    <FileCaption>4 Works</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {/* 1. Aiely AI */}
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1">
                            <div className="flex items-center justify-between gap-2">
                                <p className="font-semibold text-foreground text-sm">Aiely AI</p>
                                <span className="text-[10px] font-mono text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded">Full-Stack AI</span>
                            </div>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                Multimodal AI Workspace & Canvas for document analysis, code generation, and intelligent assistant workflows.
                            </p>
                        </div>

                        {/* 2. BrainScan */}
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1">
                            <div className="flex items-center justify-between gap-2">
                                <p className="font-semibold text-foreground text-sm">BrainScan</p>
                                <span className="text-[10px] font-mono text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded">Deep Learning</span>
                            </div>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                Medical ML application using CNNs & Grad-CAM visual heatmaps for brain tumor detection & classification.
                            </p>
                        </div>

                        {/* 3. F1 Strategy */}
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1">
                            <div className="flex items-center justify-between gap-2">
                                <p className="font-semibold text-foreground text-sm">F1 Strategy</p>
                                <span className="text-[10px] font-mono text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded">Telemetry Analytics</span>
                            </div>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                Real-Time Formula 1 Race Strategy & Telemetry Analytics Tool using live timing data & predictive pit-stop modeling.
                            </p>
                        </div>

                        {/* 4. PhotoBooth */}
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1">
                            <div className="flex items-center justify-between gap-2">
                                <p className="font-semibold text-foreground text-sm">PhotoBooth</p>
                                <span className="text-[10px] font-mono text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded">WebGL Canvas</span>
                            </div>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                Interactive WebGL & Canvas Virtual Photo Booth featuring real-time image filters, sticker overlays & frame exports.
                            </p>
                        </div>
                    </div>
                </FileText>
            </FileInfo>
        </FileContent>
    );
};

export default ProjectsFile;
