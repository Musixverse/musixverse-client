import { useContext } from "react";
import { useRouter } from "next/router";
import { useMoralisCloudFunction } from "react-moralis";
import LoadingContext from "../../../../store/loading-context";

const ActionButtons = ({ step, prevStep, setSaveDraftSuccess, nftDraftMetadata }) => {
	const [loading, setLoading] = useContext(LoadingContext);

	const router = useRouter();
	const { draft } = router.query;
	// Save Draft Feature
	const { fetch: saveNftCreationDraft } = useMoralisCloudFunction("saveNftDraft", { metadata: nftDraftMetadata, draftId: draft }, { autoFetch: false });
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
				onClick={() => {
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
				{step === 3 ? "Create" : "Next"}
				<span className="ml-24 text-xl">
					<i className="fa-solid fa-arrow-right-long"></i>
				</span>
			</button>
		</div>
	);
};

export default ActionButtons;
