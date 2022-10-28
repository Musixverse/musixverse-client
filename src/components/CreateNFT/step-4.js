import { useState, useEffect, useContext } from "react";
import PreviewNft from "./CreateNFTUtils/PreviewNft";
import Step4Form from "./CreateNFTUtils/Step4Form";
import ActionButtons from "./CreateNFTUtils/ActionButtons";
import StatusContext from "../../../store/status-context";
import dynamic from "next/dynamic";
const SendInviteModal = dynamic(() => import("./CreateNFTUtils/SendInviteModal"));
const AddCollaboratorModal = dynamic(() => import("./CreateNFTUtils/AddCollaboratorModal"));

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
	verifiedBandsOfArtist,
	personalProfileCollaborator,
	chosenProfileOrBand,
	setChosenProfileOrBand,
}) {
	const [, , , setError] = useContext(StatusContext);
	const [isInvitationModalOpen, setInvitationModalOpen] = useState(false);
	const [invitedArtistEmail, setInvitedArtistEmail] = useState("");
	// Add Collaborator Modal
	const [isAddCollaboratorModalOpen, setAddCollaboratorModalOpen] = useState(false);

	useEffect(() => {
		if (collaboratorList.reduce((total, currentSplit) => (total = total + Number(currentSplit.split)), 0) === 100) {
			setError({
				title: "",
				message: "",
				showErrorBox: false,
			});
		}
	}, [collaboratorList, setError]);

	const nftPreviewValues = { trackTitle, coverArtUrl, audioFileUrl, nftPrice, numberOfCopies, step, collaboratorList, chosenProfileOrBand };
	const step4FormValues = {
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
		verifiedBandsOfArtist,
		personalProfileCollaborator,
		chosenProfileOrBand,
		setChosenProfileOrBand,
		setAddCollaboratorModalOpen,
	};
	const actionButtonProps = { step, prevStep, setSaveDraftSuccess, nftDraftMetadata };

	return (
		<>
			<div className="flex items-center justify-center mb-28 lg:mb-36 bg-light-200 dark:bg-dark-800">
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
							if (collaboratorList.some((collaborator) => collaborator.hasAcceptedCollaboratorInvite === false)) {
								setError({
									title: "Collaborators haven't accepted collaboration invite yet",
									message: "Please ask your collaborators to accept the collaboration email invite in order to create the NFT.",
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
							<Step4Form {...step4FormValues} />
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
			<AddCollaboratorModal
				isOpen={isAddCollaboratorModalOpen}
				setOpen={setAddCollaboratorModalOpen}
				nftDraftMetadata={nftDraftMetadata}
				collaboratorList={collaboratorList}
				setCollaboratorList={setCollaboratorList}
				setInvitationModalOpen={setInvitationModalOpen}
			/>
		</>
	);
}
