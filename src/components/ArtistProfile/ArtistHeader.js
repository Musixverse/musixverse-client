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
        <div className={"dark:bg-nav-dark dark:backdrop-blur-xl dark:backdrop-brightness-105 "+ styles["artist-banner__container"]}>
            {/* Left Image section */}
            <div className={styles["artist-banner__section1"]}>
                <div className={styles["section1__artist-image"]}>
                    <Image src={artistProfile} width={210} height={210} alt="artist profile"></Image>
                </div>
                {/* links to music platforms */}
                <div className={styles["section1__social-icons"]}>
                    <a href="www.facebook.com"><i className="text-2xl fab fa-facebook-square hover:text-primary-100"></i></a>
                    <a href="www.instagram.com"><i className="text-2xl fab fa-instagram hover:text-primary-100"></i></a>
                    <a href="www.twitter.com"><i className="text-2xl fab fa-twitter hover:text-primary-100"></i></a>
                </div>
                <div className="m-auto mt-3">
                    <CustomButton green={true}>Edit profile <i className="ml-1 fas fa-edit"></i></CustomButton>
                </div>
            </div>

            {/* Right Details section */}
            <div className={styles["artist-banner__section2"]}>
                <div className={styles["section2__artist-name"]}>
                    <p className="font-tertiary pt-2 text-5xl w-[12rem]">
                        {metaData.artistName}
                        &nbsp;<Image src={mxv_tick} width={21} height={21} alt="mxv_verified"></Image>
                    </p>
                    {/* Report and Share CTA */}
                    <Stats/>
                    {/* <div className="mt-2">
                        <CustomButton green={true}>Edit profile <i className="ml-1 fas fa-edit"></i></CustomButton>
                        <button className="mx-3 w-[36px] h-[36px] text-center rounded-full bg-gray-200 hover:bg-[#dedede]">
                            <i className="text-sm text-dark-100 fas fa-flag"></i>
                        </button>
                        <button className="w-[36px] h-[36px] text-center rounded-full bg-gray-200 hover:bg-[#dedede]">
                            <i className="text-sm fas fa-share-alt text-dark-100"></i>
                        </button>
                    </div> */}
                </div>
                {/* About Us section */}
                <AboutArtist/>
            </div>
        </div>
    );
}
