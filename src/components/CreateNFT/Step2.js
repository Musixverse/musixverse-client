import { useState } from "react";
import PreviewNft from "./CreateNFTUtils/PreviewNft";
import Step1Form from "./CreateNFTUtils/Step1Form";
import PricingAndSpilts from "./pricing-splits.js";
// import styles from "../../../styles/CreateNFT/Step2.module.css";

export default function ComprehensiveDetails({currStep, setCurrStep}){
    /**
     * Need to add the following:
     * nftName truncation
     * new nftId
     * Image Preview (Done)
     * Audio Preview (Done)
     * Price Preview(Ayush)
     */
    console.log(currStep)
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedSong, setUploadedSong] = useState(null);
    const [nftName, setNftName] = useState("");
    //Ayush's form States 
    const [nftPrice, setNftPrice] = useState(0);
    const [numberOfCopies, setNumberOfCopies] = useState(0);

    let truncatedNftName = nftName;
    
    if(nftName.length > 10){
        truncatedNftName = truncatedNftName.substring(0,8)+"...";
    }
    const nftPreviewValues = {truncatedNftName, uploadedImage, uploadedSong, nftPrice, numberOfCopies};
    const step1Values = {uploadedImage,setUploadedImage, uploadedSong, setUploadedSong, nftName, setNftName};
    const step2Values = {numberOfCopies,setNumberOfCopies,nftPrice, setNftPrice};

    return(
        <div className="flex items-center justify-center mb-28 lg:mb-36 bg-light-200 dark:bg-dark-200">
            <div className="flex-col flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                <div className="flex w-full space-x-20">
                    {/* Preview div */}
                    <PreviewNft {...nftPreviewValues}/>
                    {/* Info div */}
                    {currStep === 1? 
                        <Step1Form {...step1Values}/>
                        :
                        <PricingAndSpilts {...step2Values} />
                    }
                </div>

                {/* Button div */}
                {currStep === 1? 
                    <div className="flex self-end mt-16 space-x-3">
                        {/* Reset and continue buttons */}
                        {/* NOTE: Revoke the image url at the create NFT button click */}
                        <button className="dark:bg-[#323232] dark:hover:bg-dark-100 dark:border-[#323232] rounded-md px-4 py-3 bg-[#D7E0DF] hover:bg-[#c9d1d0] text-sm font-primary font-bold">Discard</button>
                        <button 
                            onClick={()=>{setCurrStep((prevStep)=>prevStep+1)}}
                            className="flex items-center px-4 py-3 text-sm font-bold rounded-md hover:bg-primary-200 bg-primary-100 text-light-100 font-primary">
                            Next
                            <span className="ml-24 font-semibold material-symbols-outlined">arrow_right_alt</span>
                        </button>
                    </div>
                    :
                    <div className="flex self-end mt-16 space-x-3">
                        <button
                            onClick={()=>{setCurrStep((prevStep)=>prevStep-1)}}
                            className="dark:bg-[#323232] dark:hover:bg-dark-100 dark:border-[#323232] rounded-md px-4 py-3 bg-[#D7E0DF] hover:bg-[#c9d1d0] text-sm font-primary font-bold">Back</button>
                        <button className="flex items-center px-4 py-3 text-sm font-bold rounded-md hover:bg-primary-200 bg-primary-100 text-light-100 font-primary">
                            Create
                            <span className="ml-24 font-semibold material-symbols-outlined">arrow_right_alt</span>
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}