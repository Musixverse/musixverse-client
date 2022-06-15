import DetailsInputGroup from "./CreateNFTUtils/DetailsInputGroup";
import Image from "next/image";
import uploadImage from "../../../public/assets/create-nft/upload-image.svg";
import uploadMusic from "../../../public/assets/create-nft/upload-music.svg";
// import styles from "../../../styles/CreateNFT/Step2.module.css";

export default function ComprehensiveDetails(){
    return(
        <div className="flex items-center justify-center mb-24 bg-light-200 dark:bg-dark-200">
            <div className="flex-col flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                <div>
                    {/* Preview div */}
                    <div>

                    </div>
                    {/* Info div */}
                    <div className="flex space-x-20 lg:flex-row">
                        {/* Details */}
                        <div className="font-semibold font-secondary">
                            <p className="mb-10">DETAILS</p>
                            <p>TRACK TITLE</p>
                            <input 
                                type={"text"}
                                required
                                className="w-full p-1 border-2 border-[#777777] rounded-md shadow-sm outline-none focus:border-primary-100"
                            ></input>
                            <p className="text-[#777777] mt-1 mb-10 font-normal text-[13px] max-w-[75%]">Feel free to include featured artists and version info in the track title</p>
                            
                            {/* Input Group */}
                            <DetailsInputGroup/>

                            <p className="mt-5">Does this track contain any singing, rapping or any other vocals</p>
                            <div className="flex items-center mt-1 space-x-5">
                                <div className="flex items-center">
                                    <input id="othervocalsyes" type="radio" name="radio" defaultChecked className="hidden" />
                                    <label htmlFor="othervocalsyes" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                                        <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                                        Yes
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input id="othervocalsno" type="radio" name="radio" className="hidden" />
                                    <label htmlFor="othervocalsno" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                                        <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Uploads */}
                        <div>
                            <p className="mb-10 font-semibold">UPLOADS</p>
                            {/* UPLOAD NFT ASSETS */}
                            <input accept="image/*" type="file" required className="hidden" id="uploadedNftImage"/>
                            <label className="flex items-center w-full p-2 pr-16 space-x-5 rounded-lg cursor-pointer bg-light-100" htmlFor="uploadedNftImage">
                                <div className="flex items-center justify-center w-[65px] h-[65px] rounded-lg bg-light-300">
                                    <Image src={uploadImage} objectFit="contain" alt="upload image art digital illustration"></Image>
                                </div>
                                <div className="font-secondary">
                                    <h3 className="font-semibold">UPLOAD COVER ART</h3>
                                    <p className="text-sm">Recommended size: 300px X 300px</p>
                                </div>
                            </label>
                            <input accept="audio/*" type="file" required className="hidden" id="uploadedNftAudio"/>
                            <label className="flex items-center w-full p-2 pr-16 mt-5 space-x-5 rounded-lg cursor-pointer bg-light-100" htmlFor="uploadedNftAudio">
                                <div className="flex items-center justify-center w-[65px] h-[65px] rounded-lg bg-light-300">
                                    <Image src={uploadMusic} objectFit="contain" alt="upload image art digital illustration"></Image>
                                </div>
                                <div className="font-secondary">
                                    <h3 className="font-semibold">UPLOAD AUDIO FILE</h3>
                                    <p className="text-sm">Recommended minimum size: 10MB</p>
                                </div>
                            </label>

                            {/* SHARE LINKS */}
                            <p className="mt-16 mb-3 font-semibold font-secondary">TRACK LINKS</p>
                            <div className="flex justify-between w-full space-x-3">
                                <input className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100" type={"url"} placeholder="Spotify Track Link"/>
                                <input className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100" type={"url"} placeholder="Apple Music Track Link"/>
                            </div>
                            <div className="flex justify-between w-full mt-3 space-x-3">
                                <input className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100" type={"url"} placeholder="Amazon Music Track Link"/>
                                <input className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100" type={"url"} placeholder="Youtube Music Track Link"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button div */}
                <div className="flex self-end mt-16 space-x-3">
                    {/* Reset and continue buttons */}
                    <button className="rounded-md px-4 py-3 bg-[#D7E0DF] hover:bg-[#c9d1d0] text-sm font-primary font-bold">Discard</button>
                    <button className="flex items-center px-4 py-3 text-sm font-bold rounded-md hover:bg-primary-200 bg-primary-100 text-light-100 font-primary">
                        Next
                        <span className="ml-24 font-semibold material-symbols-outlined">arrow_right_alt</span>
                    </button>
                </div>
            </div>
        </div>
    );
}