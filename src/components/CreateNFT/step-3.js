import { useContext } from "react";
import { useRouter } from "next/router";
import PreviewNft from "./CreateNFTUtils/PreviewNft";
import Step3Form from "./CreateNFTUtils/Step3Form";
import ActionButtons from "./CreateNFTUtils/ActionButtons";
import LoadingContext from "../../../store/loading-context";
import { saveNftCreationProgress } from "./CreateNFTUtils/SaveNftCreationProgress";

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
	unlockableContent,
	setUnlockableContent,
}) {
	const [, setLoading] = useContext(LoadingContext);

	const nftPreviewValues = { trackTitle, coverArtUrl, audioFileUrl, nftPrice, numberOfCopies, step, collaboratorList, chosenProfileOrBand };
	const step3FormValues = { unlockableContent, setUnlockableContent };
	const actionButtonProps = { step, prevStep, setSaveDraftSuccess, nftDraftMetadata };

	const router = useRouter();
	const { draft } = router.query;
	return (
		<>
			<div className="flex items-center justify-center pb-12 bg-light-200 dark:bg-dark-800">
				<div className="flex-col flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							setLoading(true);

							await saveNftCreationProgress(nftDraftMetadata, draft);

							if (step < 4) nextStep();
							setLoading(false);
						}}
						enctype="multipart/form-data"
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
