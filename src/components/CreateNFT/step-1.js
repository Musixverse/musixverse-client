import { useState, useContext } from "react";
import PreviewNft from "./CreateNFTUtils/PreviewNft";
import Step1Form from "./CreateNFTUtils/Step1Form";
import ActionButtons from "./CreateNFTUtils/ActionButtons";
import StatusContext from "../../../store/status-context";
import { useRouter } from "next/router";
import { saveNftCreationProgress } from "./CreateNFTUtils/SaveNftCreationProgress";
import SendInviteModal from "./CreateNFTUtils/SendInviteModal";

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
	nftPrice,
	numberOfCopies,
	collaboratorList,
	setSaveDraftSuccess,
	nftDraftMetadata,
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
	const [isInvitationModalOpen, setInvitationModalOpen] = useState(false);

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
		setInvitationModalOpen,
	};
	const actionButtonProps = { step, prevStep, setSaveDraftSuccess, nftDraftMetadata };

	const router = useRouter();
	const { draft } = router.query;
	return (
		<>
			<div className="flex items-center justify-center mb-28 lg:mb-36 bg-light-200 dark:bg-dark-200">
				<div className="flex-col flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<form
						onSubmit={async (e) => {
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
								await saveNftCreationProgress(nftDraftMetadata, draft);
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
						<ActionButtons {...actionButtonProps} />
					</form>
				</div>
			</div>
			<SendInviteModal
				isOpen={isInvitationModalOpen}
				setOpen={setInvitationModalOpen}
				invitedArtistEmail={coverArtArtist.email}
				onEmailChange={(value) =>
					setCoverArtArtist((prevState) => ({
						...prevState,
						email: value,
					}))
				}
			/>
		</>
	);
}
