import { useContext } from "react";
import PreviewNft from "./CreateNFTUtils/PreviewNft";
import Step2Form from "./CreateNFTUtils/Step2Form";
import RequiredAsterisk from "./CreateNFTUtils/RequiredAsterisk";
import StatusContext from "../../../store/status-context";

export default function ComprehensiveDetails({
    step,
    nextStep,
    prevStep,
    trackTitle,
    coverArtUrl,
    audioFileUrl,
    setTrackOrigin,
    setGenre,
    recordingYear,
    setRecordingYear,
    setParentalAdvisory,
    vocals,
    setVocals,
    setLanguage,
    setLocation,
    isrc,
    setIsrc,
    tags,
    setTags,
    links,
    setLinks,
    nftPrice,
    numberOfCopies,
    collaboratorList,
    genre,
    trackOrigin,
    parentalAdvisory,
    language,
    location,
}) {
    const [, , , setError] = useContext(StatusContext);

    const nftPreviewValues = { trackTitle, coverArtUrl, audioFileUrl, nftPrice, numberOfCopies, step, collaboratorList };
    const step2FormValues = {
        setTrackOrigin,
        setGenre,
        recordingYear,
        setRecordingYear,
        setParentalAdvisory,
        vocals,
        setVocals,
        setLanguage,
        setLocation,
        isrc,
        setIsrc,
        tags,
        setTags,
        links,
        setLinks,
        genre,
        trackOrigin,
        parentalAdvisory,
        language,
        location,
    };

    return (
        <div className="flex items-center justify-center mb-28 lg:mb-36 bg-light-200 dark:bg-dark-200">
            <div className="flex-col flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (!coverArtUrl) {
                            setError({
                                title: "Image not uploaded!",
                                message: "You need to upload an image to proceed.",
                                showErrorBox: true,
                            });
                            return;
                        } else if (!audioFileUrl) {
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
                        <Step2Form {...step2FormValues} />
                    </div>

                    {/* Button div */}
                    <div className="flex justify-end mt-16 space-x-3 md:self-end">
                        {/* Back and Next buttons */}
                        {/* NOTE: Revoke the image url at the create NFT button click */}
                        <button
                            type="button"
                            onClick={() => {
                                prevStep();
                            }}
                            className="dark:bg-[#323232] dark:hover:bg-dark-100 dark:border-[#323232] rounded-md px-4 py-3 bg-[#D7E0DF] hover:bg-[#c9d1d0] text-sm font-primary font-bold"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="flex items-center px-4 py-3 text-sm font-bold rounded-md hover:bg-primary-200 bg-primary-100 text-light-100 font-primary"
                        >
                            Next
                            <span className="ml-24 font-semibold material-symbols-outlined">arrow_right_alt</span>
                        </button>
                    </div>

                    <div className="flex mt-4 mb-24 md:self-end justify-end text-xs text-[#777777]">
                        Fields marked with
                        <div className="mr-3">
                            <RequiredAsterisk />
                        </div>
                        are required
                    </div>
                </form>
            </div>
        </div>
    );
}
