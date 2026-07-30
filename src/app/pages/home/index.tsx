import { ChevronsRight } from "lucide-react";
import { Link } from "react-router";
import SocialLinks from "@/components/social-links";

const Home = () => {
    return (
        <section className="container mx-auto px-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-background flex w-[80vw] max-w-3xl flex-col border p-8 font-mono tracking-tighter shadow-sm">
                    <p className="font-normal text-sm sm:text-base leading-relaxed">
                        Hello, my name is <span className="font-semibold">Gaurav Singh</span>. I'm a Full-Stack & AI Software Engineer based in Bangalore, India, specializing in Distributed Systems & Machine Learning.
                    </p>
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-0">
                        <Link
                            to={"/about"}
                            className="mt-8 flex w-fit items-center gap-1 border-b text-lg font-medium"
                        >
                            View my portfolio
                            <ChevronsRight size={24} strokeWidth={1.5} />
                        </Link>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
