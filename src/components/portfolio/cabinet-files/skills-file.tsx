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
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1">
                            <p className="font-semibold text-foreground text-xs sm:text-sm">Languages</p>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                Python, TypeScript, JavaScript (ES6+), C++, SQL, HTML5, CSS3
                            </p>
                        </div>

                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1">
                            <p className="font-semibold text-foreground text-xs sm:text-sm">Frontend & Graphics</p>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                React, Next.js, Electron, Three.js, GSAP, Tailwind CSS, WebGL
                            </p>
                        </div>

                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1">
                            <p className="font-semibold text-foreground text-xs sm:text-sm">Backend & Machine Learning</p>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                Node.js, Express, FastAPI, REST APIs, TensorFlow.js, OpenCV, Grad-CAM
                            </p>
                        </div>

                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1">
                            <p className="font-semibold text-foreground text-xs sm:text-sm">Database & DevOps Tools</p>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                PostgreSQL, Redis, Docker, Git, Linux, Postman, Vite
                            </p>
                        </div>
                    </div>
                </FileText>
            </FileInfo>
        </FileContent>
    );
};

export default SkillsFile;
