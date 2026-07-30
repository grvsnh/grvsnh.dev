import { Link } from "react-router";
import logo from "../../public/logo.svg";
import SocialLinks from "./social-links";

const Navbar = () => {
    return (
        <nav className="inset-x-0 top-0 z-0 h-16 py-2">
            <div className="container mx-auto flex h-full items-center justify-between px-8">
                <Link to={"/"} className="flex items-center gap-2 font-mono text-xl tracking-tighter">
                    <img src={logo} alt="Logo" className="h-6 w-6" />
                    <span>Gaurav Singh</span>
                </Link>
                <SocialLinks />
            </div>
        </nav>
    );
};

export default Navbar;
