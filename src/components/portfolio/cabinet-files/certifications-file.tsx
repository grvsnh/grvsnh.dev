import certificationsData from "@/data/certifications.json";
import { ExternalLink } from "lucide-react";
import {
    FileCaption,
    FileContent,
    FileHeader,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";

const CertificationsFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Certifications</FileTitle>
                    <FileCaption>{certificationsData.length} Verified Certificates</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {certificationsData.map((item, index) => {
                            const isLink = Boolean(item.link);
                            return (
                                <div
                                    key={index}
                                    className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-1">
                                            {isLink ? (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-semibold text-foreground text-sm hover:underline underline-offset-2 flex items-center gap-1.5 group"
                                                >
                                                    <span>{item.title}</span>
                                                    <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                                                </a>
                                            ) : (
                                                <p className="font-semibold text-foreground text-sm">
                                                    {item.title}
                                                </p>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground text-xs mt-0.5">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                    <div className="pt-1">
                                        <span className="inline-block text-[10px] font-mono text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded">
                                            {item.issuer}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </FileText>
            </FileInfo>
        </FileContent>
    );
};

export default CertificationsFile;
