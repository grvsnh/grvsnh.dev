import type React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

interface Props {
    children: React.ReactNode;
}

const PortfolioLayout = ({ children }: Props) => {
    return (
        <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-background select-none">
            <div className="absolute inset-0 -z-20 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            <Navbar />
            <main className="relative flex flex-1 flex-col overflow-hidden">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioLayout;
