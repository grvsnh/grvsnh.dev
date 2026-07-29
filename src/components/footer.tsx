const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="absolute bottom-0 z-50 flex w-full items-center justify-center gap-2 py-4 font-mono tracking-tighter">
            <p>&copy; {currentYear} Gaurav Singh</p>

            <span className="font-normal">•</span>

            <a
                href="https://github.com/grvsnh/grvsnh.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                Source Code
            </a>
        </footer>
    );
};

export default Footer;
