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
                    <FileCaption>4 Verified Certificates</FileCaption>
                </FileHeader>
                <FileText>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1">
                            <p className="font-semibold text-foreground text-sm">Harvard CS50</p>
                            <p className="text-muted-foreground text-xs">CS50's Introduction to Programming with Python</p>
                            <span className="inline-block text-[10px] font-mono text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded mt-1">Harvard University</span>
                        </div>
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1">
                            <p className="font-semibold text-foreground text-sm">Deloitte Australia</p>
                            <p className="text-muted-foreground text-xs">Technology Consulting Virtual Internship</p>
                            <span className="inline-block text-[10px] font-mono text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded mt-1">Forage</span>
                        </div>
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1">
                            <p className="font-semibold text-foreground text-sm">Postman API Student Expert</p>
                            <p className="text-muted-foreground text-xs">REST API Development, Testing & Authorization</p>
                            <span className="inline-block text-[10px] font-mono text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded mt-1">Postman</span>
                        </div>
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/60 p-3 space-y-1">
                            <p className="font-semibold text-foreground text-sm">HackerRank Python</p>
                            <p className="text-muted-foreground text-xs">Python Standard Library, Syntax & Algorithms</p>
                            <span className="inline-block text-[10px] font-mono text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded mt-1">HackerRank</span>
                        </div>
                    </div>
                </FileText>
            </FileInfo>
        </FileContent>
    );
};

export default CertificationsFile;
