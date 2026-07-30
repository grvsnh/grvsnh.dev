import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./app";

const getBasename = () => {
    if (typeof window !== "undefined" && window.location.pathname.startsWith("/grvsnh.dev")) {
        return "/grvsnh.dev";
    }
    return "/";
};

createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename={getBasename()}>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>,
);
