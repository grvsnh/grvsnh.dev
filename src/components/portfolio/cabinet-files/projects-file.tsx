import projectsData from "@/data/projects.json";
import { ExternalLink } from "lucide-react";
import {
    FileCaption,
    FileContent,
    FileHeader,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";

// Import project images dynamically via Vite glob import
const projectImages = import.meta.glob<{ default: string }>(
    "@/assets/projects/*.{jpg,png,jpeg,webp}",
    { eager: true }
);

const getProjectImage = (filename?: string) => {
    if (!filename) return null;
    const match = Object.keys(projectImages).find((path) => path.endsWith(filename));
    return match ? projectImages[match].default : null;
};

const ProjectsFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Featured Projects</FileTitle>
                    <FileCaption>{projectsData.length} Works</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {projectsData.map((item, index) => {
                            const isLink = Boolean(item.link);
                            const imgUrl = getProjectImage(item.image);

                            return (
                                <a
                                    key={index}
                                    href={item.link || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 flex flex-col justify-between hover:border-black/50 dark:hover:border-white/50 hover:bg-background/90 transition-all duration-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-md"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-2">
                                            <p className="font-semibold text-foreground text-sm group-hover:underline underline-offset-2 flex items-center gap-1.5">
                                                <span>{item.title}</span>
                                                {isLink && (
                                                    <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                                                )}
                                            </p>
                                            <span className="text-[10px] font-mono text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded">
                                                {item.category}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground text-xs leading-relaxed mt-1">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Expansion image tooltip on hover */}
                                    {imgUrl && (
                                        <div className="max-h-0 opacity-0 group-hover:max-h-36 group-hover:opacity-100 group-hover:mt-2.5 transition-all duration-300 ease-in-out overflow-hidden rounded border border-black/10 dark:border-white/10 relative">
                                            <img
                                                src={imgUrl}
                                                alt={item.title}
                                                className="h-28 w-full object-cover rounded"
                                                draggable={false}
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <span className="text-[10px] font-mono text-white bg-black/75 backdrop-blur-xs px-2 py-1 rounded border border-white/20 flex items-center gap-1">
                                                    <span>View Repository</span>
                                                    <ExternalLink className="h-2.5 w-2.5" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </FileText>
            </FileInfo>
        </FileContent>
    );
};

export default ProjectsFile;
