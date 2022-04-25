import Image from "next/image";
import styles from "../../../styles/ArtistProfile/ArtistHeader.module.css";
import metaData from "../../../metaData";
import artistProfile from "../../../public/Artist_Profile.png";
import mxv_tick from "../../../public/assets/mxv_tick.svg";
import AboutArtist from "./ArtistProfileUtils/AboutArtist";
import CustomButton from "../../layout/CustomButton";
import Stats from "./ArtistProfileUtils/Stats";

export default function ArtistHeader() {
    return (
        <div className={"dark:bg-nav-dark dark:backdrop-blur-xl dark:backdrop-brightness-150 "+ styles["artist-banner__container"]}>
            {/* Left section */}
            <div className={styles["artist-banner__section1"]}>
                <div className={styles["section1__artist-image"]}>
                    <Image priority src={artistProfile} objectFit='contain' alt="artist profile"></Image>
                </div>
                <p className="mt-4 mb-4 text-4xl md:text-5xl md:hidden font-tertiary xl:mb-0 xl:mt-2">{metaData.artistName}&nbsp;<Image src={mxv_tick} width={21} height={21} alt="mxv_verified"></Image></p>
                {/* links to music platforms */}
                <div className={styles["section1__social-icons"]}>
                    <a href="www.facebook.com"><i className="text-2xl fab fa-facebook-square hover:text-primary-100"></i></a>
                    <a href="www.instagram.com"><i className="text-2xl fab fa-instagram hover:text-primary-100"></i></a>
                    <a href="www.twitter.com"><i className="text-2xl fab fa-twitter hover:text-primary-100"></i></a>
                </div>
                {/* Edit profile button (Make it render conditionally) */}
                <div className="m-auto mt-3">
                    <CustomButton green={true}>Edit profile <i className="ml-1 fas fa-edit"></i></CustomButton>
                </div>
            </div>

            {/* Right Details section */}
            <div className={styles["artist-banner__section2"]}>
                <div className={styles["section2__artist-name"]}>
                    <p className="md:block hidden font-tertiary mb-3 xl:mb-0 mt-3 xl:mt-2 text-5xl w-[12rem]">
                        {metaData.artistName}
                        &nbsp;<Image src={mxv_tick} width={21} height={21} alt="mxv_verified"></Image>
                    </p>
                    {/* Artist's Stats Section */}
                    <Stats/>
                </div>
                {/* About Artist section */}
                <AboutArtist/>
            </div>
        </div>
    );
}
