import { useState } from "react";
import PreviewNft from "./CreateNFTUtils/PreviewNft";
import Step1Form from "./CreateNFTUtils/Step1Form";
import PricingAndSpilts from "./pricing-splits.js";

export default function ComprehensiveDetails({currStep, setCurrStep}){
    /**
     * Need to add the following:
     * Verfied artist check
     * Artist name truncation
     * Change ETH logo to MATIC
     * Add states for the remaining input fields
     * Add a form tag in this component to store data on Moralis
     * Revoke Object URLs to avoid memo leak
     * Refine the CSS for dark mode radio buttons
     * Check for new navbar designs
     * Responsiveness
     * Move CSS from inline to external file
     */
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedSong, setUploadedSong] = useState(null);
    const [nftName, setNftName] = useState("");
    const [contributorList, setContributorList] = useState([{ ContributorName: "", Split: "" }]);
    const [nftPrice, setNftPrice] = useState(0);
    const [numberOfCopies, setNumberOfCopies] = useState(0);
    const [resaleRoyaltyPercent, setResaleRoyaltyPercent] = useState("");
    const [releaseNow, setReleaseNow] = useState(true);

    let truncatedNftName = nftName;
    if(nftName.length > 10){
        truncatedNftName = truncatedNftName.substring(0,8)+"...";
    }

    let truncatednftPrice = nftPrice;
    if(nftPrice >= 1000000){
        truncatednftPrice = (nftPrice/1000000).toFixed(1) + "M";
    }
    else if(nftPrice >= 1000){
        truncatednftPrice = (nftPrice/1000).toFixed(1) + "K";
    }

    const nftPreviewValues = {truncatedNftName, uploadedImage, uploadedSong, truncatednftPrice, numberOfCopies, currStep};
    const step1Values = {uploadedImage,setUploadedImage, uploadedSong, setUploadedSong, nftName, setNftName};
    const step2Values = {numberOfCopies,setNumberOfCopies, nftPrice,setNftPrice, contributorList,setContributorList, resaleRoyaltyPercent,setResaleRoyaltyPercent, releaseNow,setReleaseNow};

    return(
        <div className="flex items-center justify-center mb-28 lg:mb-36 bg-light-200 dark:bg-dark-200">
            <div className="flex-col flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                <div className="flex flex-col w-full space-y-20 md:space-x-10 md:space-y-0 md:flex-row xl:space-x-20">
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
                    <div className="flex mt-16 space-x-3 md:self-end">
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
                    <div className="flex mt-10 space-x-3 md:self-end lg:mt-16">
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