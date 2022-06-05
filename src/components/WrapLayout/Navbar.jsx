import Link from "next/link";
import Image from "next/image";
import logoBlack from "../../../public/logo-black.svg";
import hallmark from "../../../public/hallmark.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="flex flex-wrap justify-between w-full sm:items-center px-14 lg:px-res2">
                <Link href="/">
                    <a href="#" className="flex">
                        <Image src={logoBlack} alt="MXV Logo" width="80" height="80" />
                    </a>
                </Link>
                <p className="hidden sm:inline-block font-primary font-semibold text-[20px]">Coming Soon</p>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-primary-100 to-primary-300"></div>
        </nav>
    );
};

export default Navbar;
