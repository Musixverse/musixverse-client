import { useState } from "react";
import styles from "../../../../styles/ArtistProfile/ArtistHeader.module.css";
import ArtistBioModal from "./ArtistBioModal";
import CustomButton from "../../../layout/CustomButton";

export default function AboutArtist(){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <div className={styles["section2__artist-about_us"]}>
                <h4 className="font-bold text-[18px] pt-3">About</h4>
                <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione</p>
                <p className={"text-[15px] pt-3 " + styles["about_us"]}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illo ad eaque ipsa molestias distinctio cupiditate veniam, velit
                    recusandae itaque deleniti voluptatum, quibusdam alias odit! Quibusdam, sed nulla. Pariatur, similique?
                </p>
                <button onClick={()=> setShowModal(true)} className="text-primary-200 hover:text-primary-300 text-[14px] mt-2">Read More</button>
            </div>
            {/* footer section */}
            <div className={styles["section2__artist-footer"]}>
                <div className="space-x-5">
                    <span>United Arab Emirates</span>
                    <span>Joined Nov, 2020</span>
                </div>
                <div>
                    <button className="mx-3 w-[36px] h-[36px] text-center rounded-full bg-gray-200 hover:bg-[#dedede]">
                        <i className="text-sm text-dark-100 fas fa-flag"></i>
                    </button>
                    <button className="w-[36px] h-[36px] text-center rounded-full bg-gray-200 hover:bg-[#dedede]">
                        <i className="text-sm fas fa-share-alt text-dark-100"></i>
                    </button>
                </div>
            </div>
            <ArtistBioModal showModal={showModal} setShowModal={setShowModal}/>
        </>
    );
}