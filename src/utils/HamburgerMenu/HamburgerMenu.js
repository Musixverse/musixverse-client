
import Image from "next/image";
import Link from "next/link";
import logoWhite from "../../../public/logo-white.svg";

export default function HamburgerMenu(){

    const closeNavbar = () => {
		document.getElementById("hamburgerToggler").click();
	}

    return(
        <div className="flex flex-wrap list-reset pl-0 mb-0 ml-2 lg:hidden">
            <div id="menuToggle">
                <input type="checkbox" className="toggler" id="hamburgerToggler" />
                <div className="hamburger">
                    <div></div>
                </div>

                <div id="menu">
                    <div className="hamburger_container">
                        <div className="menu_box">
                            <div className="flex">
                                <div className="md:mx-1/6 md:w-1/5 pr-4 pl-4 offset-0 w-full logo_div_anim">
                                    <Link href={'/'} onClick={closeNavbar} passHref={true}>
                                        <a href="#" className="flex">
                                            <Image src={logoWhite} alt="MXV Logo" width="75" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="md:mx-1/3 md:w-1/5 px-4 w-1/2 md:mt-12 mt-1 create_left_anim">
                                    <div className="md:mt-6 quick_hamburger_nav_div">
                                        <Link href={"/create-nft"} onClick={closeNavbar} className="quick_hamburger_nav" passHref={true}>
                                            <div className="text-white hover:text-primary-100">Create</div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="offset-md-0 md:w-1/5 px-4 w-1/2 md:mt-12 mt-1 dashboard_left_anim">
                                    <div className="md:mt-6 quick_hamburger_nav_div">
                                        <Link href={"/settings/profile-settings"} onClick={closeNavbar} className="quick_hamburger_nav" passHref={true}>
                                           <div className="text-white hover:text-primary-100">Settings</div> 
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="hamburger_menu justify-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="lg:w-full md:w-4/5 px-4 offset-0 w-full md:mt-0">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="md:w-1/4 px-4 w-1/2 text-center">
                                                <div className="flex flex-wrap  ham_menu_heading justify-center">Quick Links</div>
                                                <div className="flex flex-wrap  ham_menu_hover_effect_row mt-4 justify-center">
                                                    <Link href={"/mxcatalog/explore"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
                                                        <div className="text-white hover:text-primary-100">Library</div>
                                                    </Link>
                                                </div>
                                                <div className="flex flex-wrap  ham_menu_hover_effect_row justify-center">
                                                    <Link href={"/trending"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
                                                        <div className="text-white hover:text-primary-100">Trending</div>
                                                    </Link>
                                                </div>
                                                <div className="flex flex-wrap  ham_menu_hover_effect_row justify-center">
                                                    <Link href={"/faq"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
                                                        <div className="text-white hover:text-primary-100">FAQ</div>
                                                    </Link>
                                                </div>
                                                <div className="flex flex-wrap  ham_menu_hover_effect_row justify-center">
                                                    <Link href={"/team"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
                                                        <div className="text-white hover:text-primary-100">Team</div>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="md:w-1/4 px-4 w-1/2 text-center">
                                                <div className="flex flex-wrap  ham_menu_heading mt-0 justify-center">Account</div>
                                                <div className="flex flex-wrap  ham_menu_hover_effect_row md:mt-12 mt-4 justify-center">
                                                    <Link href={"/settings/profile-settings"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
                                                        <div className="text-white hover:text-primary-100">Settings</div>
                                                    </Link>
                                                </div>
                                                <div className="flex flex-wrap  ham_menu_hover_effect_row justify-center">
                                                    <Link href={"/"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
                                                        <div className="text-white hover:text-primary-100">Home</div>
                                                    </Link>
                                                </div>
                                                <div className="flex flex-wrap  ham_menu_hover_effect_row justify-center">
                                                    <Link href={"/create-nft"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
                                                        <div className="text-white hover:text-primary-100">Create</div>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="md:w-1/4 px-4 w-full text-center">
                                                <div className="flex flex-wrap  ham_menu_heading mt-5 justify-center">Support</div>
                                                <div className="flex flex-wrap  ham_menu_hover_effect_row md:mt-12 mt-4 justify-center">
                                                    <Link href={"/contact-us"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
                                                        <div className="text-white hover:text-primary-100">Contact Us</div>
                                                    </Link>
                                                </div>
                                                <div className="flex flex-wrap  ham_menu_hover_effect_row justify-center">
                                                    <Link href={"/report-a-bug"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center" passHref={true}>
                                                        <div className="text-white hover:text-primary-100">Report a Bug</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap ">
                                <div className="md:mx-1/5 px-4 w-full mt-5 mb-4 horizontal_line_to_right"></div>
                            </div>

                            <div className="flex flex-wrap justify-center mb-5 harmburger_menu_connect">
                                <div className="ham_menu_connect_links_md px-4 offset-0 w-full md:mt-0 mt-5">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="ham_menu_heading ham_menu_connect_heading text-center">Connect with us</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:justify-center mt-5">
                                        {/* <a href="https://www.youtube.com/channel/UCloNloMRDKaB-0e-xeaTdXw" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0">
                                            <i className="fab fa-youtube fa-lg"></i>
                                        </a> */}
                                        <a href="https://t.me/+7e4mG5yhutswNWVl" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0">
                                            <i className="fab fa-telegram fa-lg"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/company/musomatic" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0">
                                            <i className="fab fa-linkedin fa-lg"></i>
                                        </a>
                                        <a href="https://discord.gg/HSKayad3NM" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0">
                                            <i className="fab fa-discord fa-lg"></i>
                                        </a>
                                        <a href="https://www.facebook.com/Musixverse-104390125641359" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0">
                                            <i className="fab fa-meta fa-lg"></i>
                                        </a>
                                        <a href="https://twitter.com/musixverse" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0">
                                            <i className="fab fa-twitter fa-lg"></i>
                                        </a>
                                        <a href="https://www.instagram.com/musixverse" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center relative flex-grow max-w-full flex-1 px-4 p-0">
                                            <i className="fab fa-instagram fa-lg"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}