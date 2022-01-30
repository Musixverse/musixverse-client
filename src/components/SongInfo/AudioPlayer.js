import Image from "next/image";
import metaData from "../../../metaData";
import pausebtn from "../../assets/Pause_btn.svg";
import favourite from "../../assets/Favourite.svg";
import mxvverified from "../../assets/mxv_verified.svg";
import sharebtn from "../../assets/SHARE.svg";

export default function AudioPlayer(){
    return (
        <>
            <div className="flex flex-row justify-between items-center pb-10">
                <div className="flex itme-center">
                    <Image src={pausebtn} width={75} height={75} alt="Pause-button"></Image>
                </div>
                <div className="flex flex-col">
                    <audio controls className="w-[640px]">
                        <source src={metaData.Hashes.songHash} type="audio/mpeg" />
                    </audio>
                    <div className="flex flex-row space-x-8 pt-3 text-xs">
                        <button className="flex justify-center items-center space-x-2">
                            <Image src={favourite} width={18} height={18} alt="Pause-button"></Image>
                            <span>Added to Favourite</span>
                        </button>
                        <button className="flex justify-center items-center space-x-2">
                            <Image src={sharebtn} width={18} height={18} alt="Pause-button"></Image>
                            <span>Share</span>
                        </button>
                        <button className="flex justify-center items-center space-x-2">
                            <Image src={mxvverified} width={18} height={18} alt="Pause-button"></Image>
                            <span>MXV Cerified & Unmodified</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};


