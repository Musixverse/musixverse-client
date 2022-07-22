import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMoralisCloudFunction } from "react-moralis";
import PreviewDraft from "./CreateNFTUtils/PreviewDraft";
import styles from "../../../styles/CreateNFT/createNFT.module.css";
import DeleteDraftModal from "./CreateNFTUtils/DeleteDraftModal";

const CreateNFTIntro = ({ nextStep }) => {
	const router = useRouter();
	const { data: nftDrafts } = useMoralisCloudFunction("fetchNftDrafts");

	const [draftToDelete, setDraftToDelete] = useState("");
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

	useEffect(() => {
		router.replace("/create-nft", undefined, { shallow: true });
	}, []);

	const { fetch: deleteNftDraft } = useMoralisCloudFunction(
		"deleteNftDraft",
		{ objectId: draftToDelete },
		{
			autoFetch: false,
		}
	);
	const deleteDraft = () => {
		deleteNftDraft({
			onSuccess: async (object) => {
				setDeleteModalOpen(false);
				router.reload(window.location.pathname);
			},
			onError: (error) => {
				console.log("deleteNftDraft Error:", error);
			},
		});
	};

	return (
		<>
			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
				<div className="overflow-x-hidden w-full max-w-[1920px] pt-24 pb-20 px-16 xl:px-20 2xl:px-36">
					{nftDrafts && nftDrafts.length > 0 && (
						<div className="flex flex-col mt-10">
							<p className="font-tertiary text-4xl">Your Drafts</p>
							<div className="grid grid-cols-5 gap-2 mt-4">
								{nftDrafts.map((draft) => {
									return (
										<Link key={draft.id} href={`/create-nft?draft=${draft.id}`} passHref={true}>
											<a>
												<PreviewDraft
													draftId={draft.id}
													trackTitle={draft.attributes.title}
													coverArtUrl={draft.attributes.artwork.uri}
													audioFileUrl={draft.attributes.audio}
													nftPrice={draft.attributes.nftPrice}
													numberOfCopies={draft.attributes.numberOfCopies}
													setDeleteModalOpen={setDeleteModalOpen}
													setDraftToDelete={setDraftToDelete}
												/>
											</a>
										</Link>
									);
								})}
							</div>
						</div>
					)}
					<div className={styles["createNFT__container"]}>
						{/* Background div */}
						<div className={styles["background-img__container"]}>
							{/* Blur background div */}
							<div className={styles["background-blur__container"]}>
								<p className="font-tertiary text-3xl">CREATE NFT</p>
								<p className="font-secondary font-bold max-w-sm">
									Creating an NFT is easier than ever! By creating NFT you can also unlock and enjoy several benefits and rewards!
								</p>
								<form
									onSubmit={(e) => {
										e.preventDefault();
										nextStep();
									}}
								>
									<div className="flex items-center space-x-4 font-secondary font-bold mt-10">
										<input type="checkbox" name="Terms and Conditions" id="T&C" required />
										<label htmlFor="T&C">
											I have read and agree to the{" "}
											<a href="#" target="_blank">
												Terms & Conditions
											</a>
										</label>
									</div>
									<p className="font-secondary text-sm font-medium mt-4 max-w-[340px] mb-6">
										Confirm that you have read and you agree to our terms and conditions for creating this NFT.
									</p>
									<button
										type="submit"
										className="flex items-center px-4 py-3 text-sm font-primary font-bold rounded-md bg-primary-100 hover:bg-primary-200 text-light-100"
									>
										Continue
										<span className="ml-24 text-xl">
											<i className="fa-solid fa-arrow-right-long"></i>
										</span>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<DeleteDraftModal
				isOpen={deleteModalOpen}
				onClose={() => {
					setDeleteModalOpen(false);
				}}
				deleteDraft={deleteDraft}
			/>
		</>
	);
};

export default CreateNFTIntro;
