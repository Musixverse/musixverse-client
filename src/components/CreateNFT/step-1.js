import { useState, useContext } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import { useRouter } from "next/router";
import PreviewNft from "./CreateNFTUtils/PreviewNft";
import Step1Form from "./CreateNFTUtils/Step1Form";
import RequiredAsterisk from "./CreateNFTUtils/RequiredAsterisk";
import StatusContext from "../../../store/status-context";
import LoadingContext from "../../../store/loading-context";

export default function TrackDetails({
	step,
	prevStep,
	nextStep,
	trackTitle,
	setTrackTitle,
	trackBackground,
	setTrackBackground,
	coverArtUrl,
	setCoverArtUrl,
	coverArtMimeType,
	setCoverArtMimeType,
	creditCoverArtArtist,
	setCreditCoverArtArtist,
	coverArtArtist,
	setCoverArtArtist,
	audioFileUrl,
	setAudioFileUrl,
	audioFileDuration,
	setAudioFileDuration,
	audioFileMimeType,
	setAudioFileMimeType,
	lyrics,
	setLyrics,
	nftPrice,
	numberOfCopies,
	collaboratorList,
	setSaveDraftSuccess,
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
	const [loading, setLoading] = useContext(LoadingContext);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

	const nftPreviewValues = { trackTitle, coverArtUrl, audioFileUrl, nftPrice, numberOfCopies, step, collaboratorList };
	const step1FormValues = {
		trackTitle,
		setTrackTitle,
		trackBackground,
		setTrackBackground,
		coverArtUrl,
		setCoverArtUrl,
		setCoverArtMimeType,
		creditCoverArtArtist,
		setCreditCoverArtArtist,
		coverArtArtist,
		setCoverArtArtist,
		audioFileUrl,
		setAudioFileUrl,
		setAudioFileDuration,
		setAudioFileMimeType,
		lyrics,
		setLyrics,
	};

	const router = useRouter();
	const { draft } = router.query;
	// Save Draft Feature
	const metadata = {
		title: trackTitle,
		description: trackBackground,
		audio: audioFileUrl,
		duration: audioFileDuration,
		mimeType: audioFileMimeType,
		artwork: {
			uri: coverArtUrl,
			mimeType: coverArtMimeType,
			artist: creditCoverArtArtist ? coverArtArtist.name : "",
			artistAddress: creditCoverArtArtist ? coverArtArtist.address : "",
			invitedArtistId: "",
		},
		creditCoverArtArtist: creditCoverArtArtist,
		coverArtArtist: coverArtArtist,
		lyrics: lyrics,
	};
	const { fetch: saveNftCreationDraft } = useMoralisCloudFunction("saveNftDraft", { metadata: metadata, draftId: draft }, { autoFetch: false });
	const saveNftDraft = () => {
		setLoading(true);
		saveNftCreationDraft({
			onSuccess: async (object) => {
				console.log("object:", object);
				setLoading(false);
				setSaveDraftSuccess(true);
			},
			onError: (error) => {
				setLoading(false);
				console.log("fetchMatchingUsers Error:", error);
			},
		});
	};

	return (
		<>
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
							<Step1Form {...step1FormValues} />
						</div>

						{/* Button div */}
						<div className="flex mt-16 space-x-3 md:self-end justify-end">
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
								onClick={(e) => {
									e.preventDefault();
									saveNftDraft();
								}}
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
		</>
	);
}
