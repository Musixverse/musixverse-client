import { useState, useEffect, useContext } from "react";
import PreviewNft from "./CreateNFTUtils/PreviewNft";
import Step3Form from "./CreateNFTUtils/Step3Form";
import ActionButtons from "./CreateNFTUtils/ActionButtons";
import RequiredAsterisk from "../../layout/RequiredAsterisk";
import StatusContext from "../../../store/status-context";
import SendInviteModal from "./CreateNFTUtils/SendInviteModal";

export default function PricingAndSplits({
	step,
	prevStep,
	coverArtUrl,
	audioFileUrl,
	trackTitle,
	numberOfCopies,
	setNumberOfCopies,
	nftPrice,
	setNftPrice,
	collaboratorList,
	setCollaboratorList,
	resaleRoyaltyPercent,
	setResaleRoyaltyPercent,
	releaseNow,
	setReleaseNow,
	unlockTimestamp,
	setUnlockTimestamp,
	nftCreateFormOnSubmit,
	setSaveDraftSuccess,
	nftDraftMetadata,
}) {
	const [, , , setError] = useContext(StatusContext);
	const [isInvitationModalOpen, setInvitationModalOpen] = useState(false);
	const [invitedArtistEmail, setInvitedArtistEmail] = useState("");

	useEffect(() => {
		if (collaboratorList.reduce((total, currentSplit) => (total = total + Number(currentSplit.split)), 0) === 100) {
			setError({
				title: "",
				message: "",
				showErrorBox: false,
			});
		}
	}, [collaboratorList]);

	const nftPreviewValues = { trackTitle, coverArtUrl, audioFileUrl, nftPrice, numberOfCopies, step, collaboratorList };
	const step3FormValues = {
		numberOfCopies,
		setNumberOfCopies,
		nftPrice,
		setNftPrice,
		collaboratorList,
		setCollaboratorList,
		resaleRoyaltyPercent,
		setResaleRoyaltyPercent,
		releaseNow,
		setReleaseNow,
		unlockTimestamp,
		setUnlockTimestamp,
		setInvitationModalOpen,
	};
	const actionButtonProps = { step, prevStep, setSaveDraftSuccess, nftDraftMetadata };

	return (
		<>
			<div className="flex items-center justify-center mb-28 lg:mb-36 bg-light-200 dark:bg-dark-200">
				<div className="flex-col flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (collaboratorList.reduce((total, currentSplit) => (total = total + Number(currentSplit.split)), 0) !== 100) {
								setError({
									title: "Splits aren't correct!",
									message: "Total should be 100% in order to proceed.",
									showErrorBox: true,
								});
								return;
							}
							nftCreateFormOnSubmit();
						}}
					>
						<div className="flex flex-col w-full space-y-20 md:space-x-10 md:space-y-0 md:flex-row xl:space-x-20">
							{/* Preview div */}
							<PreviewNft {...nftPreviewValues} />
							{/* Info div */}
							<Step3Form {...step3FormValues} />
						</div>

						{/* Button div */}
						<ActionButtons {...actionButtonProps} />
					</form>
				</div>
			</div>
			<SendInviteModal
				isOpen={isInvitationModalOpen}
				setOpen={setInvitationModalOpen}
				invitedArtistEmail={invitedArtistEmail}
				onEmailChange={(value) => setInvitedArtistEmail(value)}
				nftDraftMetadata={nftDraftMetadata}
			/>
		</>
	);
}
