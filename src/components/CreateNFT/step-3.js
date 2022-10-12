import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import PreviewNft from "./CreateNFTUtils/PreviewNft";
import Step3Form from "./CreateNFTUtils/Step3Form";
import ActionButtons from "./CreateNFTUtils/ActionButtons";
import StatusContext from "../../../store/status-context";

export default function UnlockableContent({
	step,
	nextStep,
	prevStep,
	trackTitle,
	coverArtUrl,
	audioFileUrl,
	nftPrice,
	numberOfCopies,
	collaboratorList,
	setSaveDraftSuccess,
	nftDraftMetadata,
	chosenProfileOrBand,
}) {
	const [, , , setError] = useContext(StatusContext);

	const nftPreviewValues = { trackTitle, coverArtUrl, audioFileUrl, nftPrice, numberOfCopies, step, collaboratorList, chosenProfileOrBand };
	const step3FormValues = {};
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

							// setLoading(true);
							// if (tags.length < 1) {
							// 	setError({
							// 		title: "Tags not selected!",
							// 		message: "You need to select at least 1 tag to proceed.",
							// 		showErrorBox: true,
							// 	});
							// 	return;
							// }
							// if (isrc) {
							// 	// ISRC CHECK
							// 	const isrcCheck = await isIsrcValid(isrc);
							// 	if (isrcCheck.status === false) {
							// 		setError({
							// 			title: isrcCheck.title,
							// 			message: isrcCheck.message,
							// 			showErrorBox: true,
							// 		});
							// 		return;
							// 	}
							// }

							// await saveNftCreationProgress(nftDraftMetadata, draft);
							if (step < 4) nextStep();
							// setLoading(false);
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
		</>
	);
}
