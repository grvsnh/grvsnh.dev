import skillCraftImg from "@/assets/images/portfolio/skill-craft.jpeg";
import { FileCaption, FileContent, FileHeader, FileImage, FileInfo, FileText, FileTitle } from "../file-content";

const SkillsFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Technical Skills</FileTitle>
                    <FileCaption>Full-Stack & AI</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="grid grid-cols-1 gap-1 text-[11px] leading-tight pt-0.5">
                        <div>
                            <span className="font-semibold text-foreground">Languages: </span>
                            <span className="text-muted-foreground">Python, TypeScript, JS, C++, SQL, HTML/CSS</span>
                        </div>
                        <div>
                            <span className="font-semibold text-foreground">Frontend: </span>
                            <span className="text-muted-foreground">React, Next.js, Electron, Three.js, GSAP, Tailwind</span>
                        </div>
                        <div>
                            <span className="font-semibold text-foreground">Backend & AI: </span>
                            <span className="text-muted-foreground">Node.js, FastAPI, REST, TensorFlow.js, OpenCV</span>
                        </div>
                        <div>
                            <span className="font-semibold text-foreground">Tools & DB: </span>
                            <span className="text-muted-foreground">PostgreSQL, Redis, Docker, Git, Linux, Postman</span>
                        </div>
                    </div>
                </FileText>
            </FileInfo>
            <FileImage>
                <img src={skillCraftImg} alt="Tech Stack" className="h-full w-full object-cover rounded-xs" />
            </FileImage>
        </FileContent>
    );
};

export default SkillsFile;
