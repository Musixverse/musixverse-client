import { useState } from "react";
import PreviewNft from "./CreateNFTUtils/PreviewNft";
import Step1Form from "./CreateNFTUtils/Step1Form";
// import styles from "../../../styles/CreateNFT/Step2.module.css";

export default function ComprehensiveDetails(){
    /**
     * Need to add the following:
     * nftName truncation
     * new nftId
     * Image Preview (Done)
     * Audio Preview (Done)
     * Price Preview(Ayush)
     */
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedSong, setUploadedSong] = useState(null);
    const [nftName, setNftName] = useState("");
    const [nftPrice, setNftPrice] = useState(0);
    let truncatedNftName = nftName;
    
    if(nftName.length > 10){
        truncatedNftName = truncatedNftName.substring(0,8)+"...";
    }
    const nftPreviewValues = {truncatedNftName, uploadedImage, uploadedSong}
    const step1Values = {setUploadedImage, setUploadedSong, nftName, setNftName};

    return(
        <div className="flex items-center justify-center mb-28 lg:mb-36 bg-light-200 dark:bg-dark-200">
            <div className="flex-col flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                <div className="flex w-full space-x-20">
                    {/* Preview div */}
                    <PreviewNft {...nftPreviewValues}/>
                    {/* Info div */}
                    <Step1Form {...step1Values}/>
                    {/* ayush div */}
                </div>

                {/* Button div */}
                <div className="flex self-end mt-16 space-x-3">
                    {/* Reset and continue buttons */}
                    {/* NOTE: Revoke the image url at the create NFT button click */}
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