import { useContext } from "react";
import PreviewNft from "./CreateNFTUtils/PreviewNft";
import Step1Form from "./CreateNFTUtils/Step1Form";
import StatusContext from "../../../store/status-context";

export default function TrackDetails({
    step,
    nextStep,
    prevStep,
    uploadedImage,
    setUploadedImage,
    uploadedSong,
    setUploadedSong,
    trackTitle,
    setTrackTitle,
    setGenre,
    setTrackOrigin,
    setExplicit,
    recordingYear,
    setRecordingYear,
    vocals,
    setVocals,
    links,
    setLinks,
    nftPrice,
    numberOfCopies,
}) {
    /**
     * TODO: Need to add the following-
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
    const [, , , setError] = useContext(StatusContext);

    const nftPreviewValues = { trackTitle, uploadedImage, uploadedSong, nftPrice, numberOfCopies, step };
    const step1FormValues = {
        uploadedImage,
        setUploadedImage,
        uploadedSong,
        setUploadedSong,
        trackTitle,
        setTrackTitle,
        setGenre,
        setTrackOrigin,
        setExplicit,
        recordingYear,
        setRecordingYear,
        vocals,
        setVocals,
        links,
        setLinks,
    };

    return (
        <div className="flex items-center justify-center mb-28 lg:mb-36 bg-light-200 dark:bg-dark-200">
            <div className="flex-col flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (!uploadedImage) {
                            setError({
                                title: "Image not uploaded!",
                                message: "You need to upload an image to proceed.",
                                showErrorBox: true,
                            });
                            return;
                        } else if (!uploadedSong) {
                            setError({
                                title: "Audio file not uploaded!",
                                message: "You need to upload an audio file to proceed.",
                                showErrorBox: true,
                            });
                            return;
                        } else {
                            nextStep();
                        }
                    }}
                >
                    <div className="flex flex-col w-full space-y-20 md:space-x-10 md:space-y-0 md:flex-row xl:space-x-20">
                        {/* Preview div */}
                        <PreviewNft {...nftPreviewValues} />
                        {/* Info div */}
                        <Step1Form {...step1FormValues} />
                    </div>

                    {/* Button div */}
                    <div className="flex mt-16 space-x-3 md:self-end justify-end">
                        {/* Reset and continue buttons */}
                        {/* NOTE: Revoke the image url at the create NFT button click */}
                        <button
                            type="button"
                            onClick={() => {
                                prevStep();
                            }}
                            className="dark:bg-[#323232] dark:hover:bg-dark-100 dark:border-[#323232] rounded-md px-4 py-3 bg-[#D7E0DF] hover:bg-[#c9d1d0] text-sm font-primary font-bold"
                        >
                            Discard
                        </button>
                        <button
                            type="submit"
                            className="flex items-center px-4 py-3 text-sm font-bold rounded-md hover:bg-primary-200 bg-primary-100 text-light-100 font-primary"
                        >
                            Next
                            <span className="ml-24 font-semibold material-symbols-outlined">arrow_right_alt</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
