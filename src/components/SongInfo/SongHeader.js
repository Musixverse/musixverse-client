import Image from "next/image";
import styles from "../../../styles/SongInfo/SongHeader.module.css";
import AudioPlayer from "./AudioPlayer";
import CustomButton from "../../Layouts/CustomButton";
import metaData from "../../../metaData";
import mxv_verified from "../../../public/assets/mxv_tick.svg";

export default function SongHeader() {
    return (
        <>
            {/* song-header parent div */}
            <div className={styles['song-header']}>
                <div className={styles['song-header__container']}>
                {/* Image section */}
                    <div className={styles['song-header__container--songImage']}>
                        <Image src={metaData.Hashes.imgHash} alt="songImage" width={580} height={580} />
                    </div>
                {/* Song Details section */}
                    <div className={styles['song-header__container--song-detail']}>
                        <div className="font-bold pb-2">{metaData.artistName} <Image src={mxv_verified} width={17} height={17} alt='MXV verified'></Image></div>
                        <h2 className="font-bold text-3xl pb-3 w-[268px]">{metaData.songName}</h2>
                        {/* Audio Player component */}
                        <div>
                            <AudioPlayer />
                        </div>
                        <div>
                            <h4 className="font-bold font-secondary text-[18px]">Description</h4>
                            <p className="pb-3 font-secondary text-[15px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium accusamus aspernatur, amet aperiam aliquam velit voluptatem a numquam cum? Deleniti!</p>
                        </div>
                        <div className="pb-8 font-secondary text-[15px]">
                            <p>artwork by Joseph cardoni</p>
                            <p>song written & produced by ben kessler</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-row space-x-8">
                                <div className="text-left">
                                    <h4 className="font-bold font-secondary text-[18px]">Created on</h4>
                                    <p className="font-secondary text-[15px]">{metaData.createDate}</p>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold font-secondary text-[18px]">Lyrics</h4>
                                    <button className="font-secondary text-[15px]">Available&nbsp;<span className="align-sub"><Image src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/000000/external-right-arrow-user-interface-kmg-design-basic-outline-kmg-design.png" width={20} height={20} alt="right arrow" /></span></button>
                                </div>
                            </div>
                            {/* Connect to Metamask Button */}
                            <div className={styles["song-detail--button"]}>
                                <CustomButton green={true}><Image src="https://img.icons8.com/fluency/48/000000/fox.png" width={20} height={20} alt="metamask"/> &nbsp;Connect Metamask to Buy</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
}