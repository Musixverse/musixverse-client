import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../../../styles/ArtistProfile/ArtistHeader.module.css";
import ArtistBioModal from "./ArtistBioModal";
import CustomButton from "../../../layout/CustomButton";

export default function AboutArtist({ name, bio, country, createdAt }) {
    const [showModal, setShowModal] = useState(false);
    const [joined, setJoined] = useState(false);

    useEffect(() => {
        if (createdAt) {
            const dateStr = createdAt.toDateString();
            const dateStrArr = dateStr.split(" ");
            setJoined("Joined " + dateStrArr[1] + ", " + dateStrArr[3]);
        }
    }, [createdAt]);

    let bioCharacters = bio;
    if (bioCharacters && bioCharacters.length > 250) bioCharacters = bioCharacters.substring(0, 250) + "...";

    return (
        <>
            <div>
                <h4 className="font-bold text-[18px]">About</h4>
                {bio ? (
                    <>
                        {bioCharacters.length < 250 ? (
                            <p className={"text-[12px] md:text-[15px] pt-3"}>{bio}</p>
                        ) : (
                            <>
                                <p className={"text-[12px] md:text-[15px] pt-3 " + styles["about_us"]}>{bioCharacters}</p>
                                <button onClick={() => setShowModal(true)} className="text-primary-200 hover:text-primary-300 text-[12px] md:text-[15px] mt-2">
                                    Read More
                                </button>
                            </>
                        )}
                    </>
                ) : (
                    <Link href="/settings/profile-settings">
                        <p className={"text-[12px] md:text-[15px] pt-2 cursor-pointer " + styles["about_us"]}>Add your Bio.</p>
                    </Link>
                )}
            </div>

            {/* footer section */}
            <div className={styles["section2__artist-footer"]}>
                <div className="space-x-2 md:space-x-5">
                    <span>{country ? country : "India"}</span>
                    <span>{createdAt ? joined : "Joined Nov, 2020"}</span>
                </div>
                <div>
                    <button className="mr-2 md:mr-3 w-[28px] h-[28px] md:w-[36px] md:h-[36px]  text-center rounded-full bg-gray-200 hover:bg-[#dedede]">
                        <i className="text-xs md:text-sm text-dark-100 fas fa-flag"></i>
                    </button>
                    <button className="md:w-[36px] md:h-[36px] w-[28px] h-[28px] text-center rounded-full bg-gray-200 hover:bg-[#dedede]">
                        <i className="text-xs md:text-sm fas fa-share-alt text-dark-100"></i>
                    </button>
                </div>
            </div>
            <ArtistBioModal showModal={showModal} setShowModal={setShowModal} name={name} bio={bio} />
        </>
    );
}
