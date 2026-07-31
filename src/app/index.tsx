import { useEffect } from "react";
import PortfolioLayout from "@/components/portfolio-layout";
import PortfolioView from "@/components/portfolio-view";

const App = () => {
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
            if (e.matches) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        };

        // Initial check
        handleChange(mediaQuery);

        // Listen for OS/system theme changes
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (
        <PortfolioLayout>
            <PortfolioView />
        </PortfolioLayout>
    );
};

export default App;
