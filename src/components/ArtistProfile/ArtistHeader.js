import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/ArtistProfile/ArtistHeader.module.css";
import artistProfile from "../../../public/Artist_Profile.png";
import mxv_tick from "../../../public/assets/mxv_tick.svg";
import AboutArtist from "./ArtistProfileUtils/AboutArtist";
import CustomButton from "../../layout/CustomButton";
import Stats from "./ArtistProfileUtils/Stats";

export default function ArtistHeader({ avatar, name, isVerified, instagram, facebook, twitter, followerCount, tracksReleased, bio, country, createdAt }) {
    return (
        <div className={"dark:bg-nav-dark dark:backdrop-blur-xl dark:backdrop-brightness-150 " + styles["artist-banner__container"]}>
            {/* Left section */}
            <div className={styles["artist-banner__section1"]}>
                <div className={styles["section1__artist-image"]}>
                    <Image
                        priority
                        src={avatar || "https://ipfs.moralis.io:2053/ipfs/Qmcn1aZ4PKUUzwpTncuSbruwLD98dtiNqvoJG5zm8EMwXZ"}
                        objectFit="contain"
                        width="200"
                        height="200"
                        alt="artist profile"
                    ></Image>
                </div>
                <p className="mt-4 mb-4 text-4xl md:text-5xl md:hidden font-tertiary xl:mb-0 xl:mt-2">
                    {name}&nbsp;{isVerified ? <Image src={mxv_tick} width={21} height={21} alt="mxv_verified"></Image> : null}
                </p>
                {/* links to music platforms */}
                <div className={styles["section1__social-icons"]}>
                    {instagram ? (
                        <Link href={instagram}>
                            <a target="_blank" rel="noopener noreferrer" className="link-item">
                                <i className="text-2xl fab fa-instagram hover:text-primary-100"></i>
                            </a>
                        </Link>
                    ) : null}

                    {twitter ? (
                        <Link href={twitter}>
                            <a target="_blank" rel="noopener noreferrer" className="link-item">
                                <i className="text-2xl fab fa-twitter hover:text-primary-100"></i>
                            </a>
                        </Link>
                    ) : null}

                    {facebook ? (
                        <Link href={facebook}>
                            <a target="_blank" rel="noopener noreferrer" className="link-item">
                                <i className="text-2xl fab fa-facebook-square hover:text-primary-100"></i>
                            </a>
                        </Link>
                    ) : null}
                </div>
                {/* Edit profile button (Make it render conditionally) */}
                <Link href="/dashboard/profile-settings">
                    <div className="m-auto mt-6">
                        <CustomButton green={true}>
                            Edit profile <i className="ml-1 fas fa-edit"></i>
                        </CustomButton>
                    </div>
                </Link>
            </div>

            {/* Right Details section */}
            <div className={styles["artist-banner__section2"]}>
                <div className={styles["section2__artist-name"]}>
                    <p className="md:block hidden font-tertiary mb-3 xl:mb-0 mt-3 xl:mt-2 text-5xl w-[12rem]">
                        {name}
                        &nbsp;{isVerified ? <Image src={mxv_tick} width={21} height={21} alt="mxv_verified"></Image> : null}
                    </p>
                    {/* Artist's Stats Section */}
                    <Stats followerCount={followerCount} tracksReleased={tracksReleased} />
                </div>
                {/* About Artist section */}
                <AboutArtist name={name} bio={bio} country={country} createdAt={createdAt} />
            </div>
        </div>
    );
}
