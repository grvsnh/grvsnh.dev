import { cn } from "@/lib/utils";
import type React from "react";

type FileContentProps = React.HTMLAttributes<HTMLDivElement> & {
    isDivider?: boolean;
};

const FileContent = ({ className, isDivider = false, children, ...props }: FileContentProps) => {
    const handlePointerDownCapture: React.PointerEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();
    };

    if (isDivider) {
        return (
            <div
                className={cn("relative flex h-full flex-col gap-2 select-text", className)}
                onPointerDownCapture={handlePointerDownCapture}
                {...props}
            >
                {children}
            </div>
        );
    }

    return (
        <div
            className={cn(
                "relative flex h-full gap-5 rounded-lg border border-black/30 dark:border-white/30 bg-card/40 p-4 sm:p-5 select-text overflow-hidden",
                className,
            )}
            onPointerDownCapture={handlePointerDownCapture}
            {...props}
        >
            <div className="absolute inset-0 -z-20 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            {children}
        </div>
    );
};

const FileInfo = ({ className, ...props }: React.ComponentProps<"div">) => {
    return <div className={cn("flex flex-1 flex-col gap-1.5 min-w-0", className)} {...props} />;
};

const FileHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
    return <div className={cn("flex items-center gap-2.5 flex-wrap", className)} {...props} />;
};

const FileTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("font-mono text-base sm:text-lg font-bold tracking-tight text-foreground", className)}
            {...props}
        />
    );
};

const FileCaption = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("rounded-xs border border-black/30 dark:border-white/30 px-1.5 py-0.5 font-mono text-[11px] font-medium bg-background/50 text-muted-foreground", className)}
            {...props}
        />
    );
};

const FileText = ({ className, ...props }: React.ComponentProps<"div">) => {
    return <div className={cn("text-xs leading-normal font-normal", className)} {...props} />;
};

const FileImage = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div className="h-[140px] w-[180px] shrink-0 -rotate-[2deg] rounded-md border border-black/40 dark:border-white/40 bg-muted/80 dark:bg-card p-2 shadow-xs flex items-center justify-center self-start overflow-hidden">
            <div
                className={cn("flex h-full w-full items-center justify-center border border-black/30 dark:border-white/30 rounded-xs overflow-hidden", className)}
                {...props}
            />
        </div>
    );
};

export { FileContent, FileInfo, FileHeader, FileTitle, FileCaption, FileText, FileImage };
