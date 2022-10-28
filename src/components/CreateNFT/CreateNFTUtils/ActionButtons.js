import { useContext } from "react";
import { useRouter } from "next/router";
import RequiredAsterisk from "../../../layout/RequiredAsterisk";
import LoadingContext from "../../../../store/loading-context";
import { saveNftCreationProgress } from "./SaveNftCreationProgress";

const ActionButtons = ({ step, prevStep, setSaveDraftSuccess, nftDraftMetadata }) => {
	const [, setLoading] = useContext(LoadingContext);
	const router = useRouter();
	const { draft } = router.query;

	// Save Draft Feature
	const saveNftDraft = async () => {
		setLoading(true);
		try {
			await saveNftCreationProgress(nftDraftMetadata, draft);
			setLoading(false);
			setSaveDraftSuccess(true);
		} catch (err) {
			console.error("saveNftDraft error:", err);
			setLoading(false);
		}
	};

	return (
		<>
			<div className="flex flex-col justify-end max-w-xs mt-16 space-x-0 space-y-3 sm:max-w-none sm:flex-row sm:space-y-0 sm:space-x-3 md:self-end">
				<button
					type="button"
					onClick={() => {
						prevStep();
					}}
					className="flex items-center px-4 py-3 text-sm font-primary font-bold rounded-md bg-light-100 hover:bg-[#dde7e7e3] dark:bg-[#323232] dark:hover:bg-dark-600 dark:border-[#323232]"
				>
					<span className="mr-10 text-xl">
						<i className="fa-solid fa-arrow-left-long"></i>
					</span>
					Back
				</button>
				<button
					type="button"
					onClick={() => {
						saveNftDraft();
					}}
					className="flex items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-[#dde7e7e3] hover:bg-[#D7E0DF] dark:bg-[#323232] dark:hover:bg-dark-600 dark:border-[#323232]"
				>
					Save Draft
				</button>
				<button
					type="submit"
					className="flex items-center justify-between px-4 py-3 text-sm font-bold rounded-md font-primary bg-primary-500 hover:bg-primary-600 text-light-100"
				>
					{step === 4 ? "Create" : "Next"}
					<span className="ml-24 text-xl">
						<i className="fa-solid fa-arrow-right-long"></i>
					</span>
				</button>
			</div>

			<div className="flex mt-4 mb-24 md:self-end sm:justify-end text-xs text-[#777777]">
				Fields marked with
				<div className="mr-3">
					<RequiredAsterisk />
				</div>
				are required
			</div>
		</>
	);
};

export default ActionButtons;
