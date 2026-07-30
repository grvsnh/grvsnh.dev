import { useEffect } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import HomeLayout from "./pages/home/home-layout";
import AboutLayout from "./pages/about/about-layout";

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
        <Routes>
            <Route element={<HomeLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route element={<AboutLayout />}>
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
};

export default App;
