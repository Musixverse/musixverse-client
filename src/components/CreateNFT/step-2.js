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
		setSaveDraftSuccess,
	};

	return (
		<div className="flex items-center justify-center mb-28 lg:mb-36 bg-light-200 dark:bg-dark-200">
			<div className="flex-col flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						if (tags.length < 1) {
							setError({
								title: "Tags not selected!",
								message: "You need to select at least 1 tag to proceed.",
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
					<div className="flex mt-16 space-x-3 md:self-end justify-end">
						{/* Back and Next buttons */}
						{/* NOTE: Revoke the image url at the create NFT button click */}
						<button
							type="button"
							onClick={() => {
								prevStep();
							}}
							className="flex items-center px-4 py-3 text-sm font-primary font-bold rounded-md bg-light-100 hover:bg-[#dde7e7e3] dark:bg-[#323232] dark:hover:bg-dark-100 dark:border-[#323232]"
						>
							<span className="mr-10 text-xl">
								<i className="fa-solid fa-arrow-left-long"></i>
							</span>
							Back
						</button>
						<button
							type="button"
							onClick={() => {}}
							className="flex items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-[#dde7e7e3] hover:bg-[#D7E0DF] dark:bg-[#323232] dark:hover:bg-dark-100 dark:border-[#323232]"
						>
							Save Draft
						</button>
						<button
							type="submit"
							className="flex items-center px-4 py-3 text-sm font-primary font-bold rounded-md bg-primary-100 hover:bg-primary-200 text-light-100"
						>
							Next
							<span className="ml-24 text-xl">
								<i className="fa-solid fa-arrow-right-long"></i>
							</span>
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
