import { useContext } from "react";
import PreviewNft from "./CreateNFTUtils/PreviewNft";
import Step2Form from "./CreateNFTUtils/Step2Form";
import ActionButtons from "./CreateNFTUtils/ActionButtons";
import StatusContext from "../../../store/status-context";
import LoadingContext from "../../../store/loading-context";
import { useRouter } from "next/router";
import { saveNftCreationProgress } from "./CreateNFTUtils/SaveNftCreationProgress";
import { isIsrcValid } from "../../utils/Validate";

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
	countryOfOrigin,
	setCountryOfOrigin,
	stateOfOrigin,
	setStateOfOrigin,
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
	setSaveDraftSuccess,
	nftDraftMetadata,
}) {
	const [, , , setError] = useContext(StatusContext);
	const [, setLoading] = useContext(LoadingContext);

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
		countryOfOrigin,
		setCountryOfOrigin,
		stateOfOrigin,
		setStateOfOrigin,
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
	const actionButtonProps = { step, prevStep, setSaveDraftSuccess, nftDraftMetadata };

	const router = useRouter();
	const { draft } = router.query;
	return (
		<div className="flex items-center justify-center mb-28 lg:mb-36 bg-light-200 dark:bg-dark-200">
			<div className="flex-col flex w-full max-w-[1920px] mt-28 lg:mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						setLoading(true);
						if (tags.length < 1) {
							setError({
								title: "Tags not selected!",
								message: "You need to select at least 1 tag to proceed.",
								showErrorBox: true,
							});
							return;
						} else if (isrc) {
							// ISRC CHECK
							const isrcCheck = await isIsrcValid(isrc);
							if (isrcCheck.status === false) {
								setError({
									title: isrcCheck.title,
									message: isrcCheck.message,
									showErrorBox: true,
								});
								return;
							}
						} else {
							await saveNftCreationProgress(nftDraftMetadata, draft);
							if (step < 3) nextStep();
						}
						setLoading(false);
					}}
				>
					<div className="flex flex-col w-full space-y-20 md:space-x-10 md:space-y-0 md:flex-row xl:space-x-20">
						{/* Preview div */}
						<PreviewNft {...nftPreviewValues} />
						{/* Info div */}
						<Step2Form {...step2FormValues} />
					</div>

					{/* Button div */}
					<ActionButtons {...actionButtonProps} />
				</form>
			</div>
		</div>
	);
}
