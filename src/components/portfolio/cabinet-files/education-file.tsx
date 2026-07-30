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
                        {/* 1. University */}
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/50 p-2.5">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                <p className="font-semibold text-foreground text-xs sm:text-sm">B.E. in Computer Science & Engineering</p>
                                <span className="font-mono text-[10px] text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded">2023 – 2027</span>
                            </div>
                            <p className="text-muted-foreground font-mono text-[11px] mt-0.5">Visvesvaraya Technological University • Bangalore</p>
                            <p className="text-muted-foreground text-xs leading-snug mt-1">
                                Core Focus: Data Structures, Operating Systems, Distributed Systems, AI & Database Architecture.
                            </p>
                        </div>

                        {/* 2. Senior High */}
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/50 p-2.5">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                <p className="font-semibold text-foreground text-xs sm:text-sm">Senior High School (Class XII — AISSCE)</p>
                                <span className="font-mono text-[10px] text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded">2020 – 2022</span>
                            </div>
                            <p className="text-muted-foreground font-mono text-[11px] mt-0.5">Army Public School PRTC • Bangalore</p>
                            <p className="text-muted-foreground text-xs leading-snug mt-1">
                                CBSE Board • Physics, Chemistry, Mathematics, Computer Science.
                            </p>
                        </div>

                        {/* 3. Secondary */}
                        <div className="rounded-md border border-black/20 dark:border-white/20 bg-background/50 p-2.5">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                <p className="font-semibold text-foreground text-xs sm:text-sm">Secondary School (Class X — AISSE)</p>
                                <span className="font-mono text-[10px] text-muted-foreground bg-card border border-black/10 dark:border-white/10 px-1.5 py-0.5 rounded">2018 – 2020</span>
                            </div>
                            <p className="text-muted-foreground font-mono text-[11px] mt-0.5">Army Public School • India</p>
                            <p className="text-muted-foreground text-xs leading-snug mt-1">
                                CBSE Board • Science, Mathematics, Social Sciences & Computing.
                            </p>
                        </div>
                    </div>
                </FileText>
            </FileInfo>
        </FileContent>
    );
};

export default EducationFile;
