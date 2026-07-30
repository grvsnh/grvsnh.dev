import { MailIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
    className?: string;
};

const SocialLinks = ({ className }: SocialLinksProps) => {
    return (
        <div className={cn("flex items-center gap-2 font-mono text-xs sm:text-sm select-none", className)}>
            {/* GitHub */}
            <a
                href="https://github.com/grvsnh"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub: grvsnh"
                className="group flex items-center gap-2 rounded-full border border-black/30 dark:border-white/30 bg-card px-2.5 py-1.5 transition-all duration-300 hover:border-black dark:hover:border-white hover:shadow-sm overflow-hidden"
            >
                <svg viewBox="0 0 1024 1024" className="h-5 w-5 shrink-0" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                        transform="scale(64)"
                    />
                </svg>
                <span className="max-w-0 opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 whitespace-nowrap font-medium">
                    grvsnh
                </span>
            </a>

            {/* LinkedIn */}
            <a
                href="https://linkedin.com/in/grvsnh"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn: grvsnh"
                className="group flex items-center gap-2 rounded-full border border-black/30 dark:border-white/30 bg-card px-2.5 py-1.5 transition-all duration-300 hover:border-black dark:hover:border-white hover:shadow-sm overflow-hidden"
            >
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span className="max-w-0 opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 whitespace-nowrap font-medium">
                    grvsnh
                </span>
            </a>

            {/* Email */}
            <a
                href="mailto:gaurav.workspace007@gmail.com"
                title="Email: gaurav.workspace007@gmail.com"
                className="group flex items-center gap-2 rounded-full border border-black/30 dark:border-white/30 bg-card px-2.5 py-1.5 transition-all duration-300 hover:border-black dark:hover:border-white hover:shadow-sm overflow-hidden"
            >
                <MailIcon size={18} className="shrink-0 text-foreground" />
                <span className="max-w-0 opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 whitespace-nowrap font-medium">
                    gaurav.workspace007@gmail.com
                </span>
            </a>
        </div>
    );
};

export default SocialLinks;
