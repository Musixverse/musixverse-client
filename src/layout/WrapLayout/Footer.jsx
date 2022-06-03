import { useTheme } from "next-themes";
import Image from "next/image";
import mxvB from "../../../public/assets/homepage/mxv_logo_b.svg";
import mxvW from "../../../public/assets/homepage/mxv_logo_w.svg";

const Footer = () => {
    const { theme } = useTheme();

    return (
        <div className="footer">
            <div>
                <Image src={theme === "dark" ? mxvW : mxvB} alt="MXV logo" objectFit="contain"></Image>
            </div>
            <div className="flex flex-col justify-between w-full mt-3 space-y-2 md:mt-2 md:space-y-0 md:items-center md:flex-row">
                <p className="text-xs font-primary">Copyright ©2022 Musixverse Technologies Inc™. All rights reserved.</p>
                <div className="flex space-x-4 text-xs align-top font-primary">
                    <a href="#" className="hover:text-primary-200">
                        Terms and Conditions
                    </a>
                    <a href="#" className="hover:text-primary-200">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-primary-200">
                        Discord
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
