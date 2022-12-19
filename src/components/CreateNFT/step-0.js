import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import PreviewDraft from "./CreateNFTUtils/PreviewDraft";
import DeleteDraftModal from "./CreateNFTUtils/DeleteDraftModal";
import styles from "../../../styles/CreateNFT/Step0.module.css";
import LoadingContext from "../../../store/loading-context";
import ArtistProfileNotVerifiedModal from "./CreateNFTUtils/ArtistProfileNotVerifiedModal";

const CreateNFTIntro = ({ nextStep, chosenProfileOrBand, nftDraftMetadata, nftDrafts, setNftDrafts }) => {
	const router = useRouter();
	const { user } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);

	const [draftToDelete, setDraftToDelete] = useState("");
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [artistProfileNotVerifiedModalOpen, setArtistProfileNotVerifiedModalOpen] = useState(false);

	const { fetch: deleteNftDraft } = useMoralisCloudFunction(
		"deleteNftDraft",
		{ objectId: draftToDelete._id },
		{
			autoFetch: false,
		}
	);
	const deleteDraft = () => {
		setLoading({
			status: true,
			title: "Deleting Draft...",
		});
		deleteNftDraft({
			onSuccess: async (object) => {
				setDeleteModalOpen(false);
				setNftDrafts((prevState) => {
					const _nftDrafts = prevState.filter((nftDraft) => nftDraft._id !== draftToDelete._id);
					return _nftDrafts;
				});
				setDraftToDelete("");
				setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
			},
			onError: (error) => {
				console.log("deleteNftDraft Error:", error);
				setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
			},
		});
	};

	// Create NFT Draft
	const { fetch: createNftDraft } = useMoralisCloudFunction("saveNftDraft", { metadata: nftDraftMetadata }, { autoFetch: false });

	return (
		<>
			<div className="w-full flex flex-col items-center justify-center pb-16 bg-light-200 dark:bg-dark-800">
				<div className="overflow-x-hidden w-full max-w-[1920px] flex justify-center pt-36 pb-20 sm:px-16 xl:px-20 2xl:px-36">
					<form
						className="w-[90vw] sm:w-[80vw] bg-light-100 dark:bg-dark-600 grid lg:grid-cols-3 lg:space-x-10 min-h-full sm:p-14 p-10 lg:pb-10 rounded-2xl backdrop-blur-xl"
						onSubmit={async (e) => {
							e.preventDefault();
							setLoading({
								status: true,
							});
							if (user && user.attributes.isArtist && user.attributes.isArtistVerified) {
								await createNftDraft({
									onSuccess: (draft) => {
										setNftDrafts((prevState) => [
											...prevState,
											{
												_id: draft.id,
												title: draft.attributes.title,
												nftPrice: draft.attributes.nftPrice,
												artwork: draft.attributes.artwork,
												audio: draft.attributes.audio,
												collaboratorList: draft.attributes.collaboratorList,
											},
										]);
										router.replace("/create-nft?draft=" + draft.id, undefined, { shallow: true });
										setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
									},
									onError: (error) => {
										console.error("createNftDraft error:", error);
										setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
									},
								});
								nextStep();
							} else {
								setArtistProfileNotVerifiedModalOpen(true);
								setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
							}
						}}
					>
						<div className="flex flex-col">
							<p className="font-tertiary text-5xl">CREATE NFT</p>
							<p className="font-secondary font-bold max-w-sm mt-4">Creating an NFT is easier than ever!</p>
							<p className="font-secondary font-bold max-w-sm">
								Enjoy several benefits/rewards and unlock a new way to connect with your fans like never before.
							</p>

							<div className="flex items-center space-x-4 font-secondary font-bold mt-20">
								<input type="checkbox" name="Terms of Services" id="T&C" className="cursor-pointer" required />
								<label htmlFor="T&C" className="cursor-pointer">
									I have read and agree to the{" "}
									<Link href="https://drive.google.com/file/d/1Av96OC67-zCfmFuQrAeGT7ruAPcft4Yl/view?usp=sharing" passHref>
										<a target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
											Terms of Services
										</a>
									</Link>
								</label>
							</div>
							<p className="font-secondary text-sm font-medium mt-4 max-w-[340px] mb-6">
								Confirm that you have read and you agree to our terms of services for creating this NFT.
							</p>

							<button
								type="submit"
								className="w-fit flex items-center mt-10 px-4 py-3 text-sm font-primary font-bold rounded-md bg-primary-500 hover:bg-primary-600 text-light-100"
							>
								Continue
								<span className="ml-24 text-xl">
									<i className="fa-solid fa-arrow-right-long"></i>
								</span>
							</button>
						</div>

						<div className="lg:col-span-2 flex flex-col lg:m-0 p-0 m-0 mt-16">
							{nftDrafts && nftDrafts.length > 0 ? (
								<div className={styles["drafts-container"]}>
									<p className="font-primary font-semibold text-xl lg:text-start text-center">Your Drafts</p>
									<div className="flex flex-wrap lg:flex-nowrap gap-8 mt-6 items-center justify-center lg:items-start lg:justify-start">
										{nftDrafts.map((draft) => {
											return (
												<Link key={draft._id} href={`/create-nft?draft=${draft._id}`} passHref={true}>
													<a>
														<PreviewDraft
															draft={draft}
															setDeleteModalOpen={setDeleteModalOpen}
															setDraftToDelete={setDraftToDelete}
															chosenProfileOrBand={chosenProfileOrBand}
														/>
													</a>
												</Link>
											);
										})}
									</div>
								</div>
							) : (
								<>
									<p className="font-primary font-semibold text-xl">Your Drafts</p>
									<div className="flex items-center bg-light-300 dark:bg-[#323232] rounded-xl sm:p-8 p-6 mt-4">
										<input type="submit" id="create-nft-form-submit" hidden />
										<label
											htmlFor="create-nft-form-submit"
											className="flex justify-center items-center w-10 h-10 border-2 border-dark-600 dark:border-light-300 rounded-full group hover:border-primary-600 dark:hover:border-primary-500 cursor-pointer"
										>
											<i className="fa-solid fa-plus text-2xl dark:text-light-300 group-hover:text-primary-600 dark:group-hover:text-primary-500"></i>
										</label>
										<span className="ml-4 text-sm">You don&apos;t have any drafts yet</span>
									</div>
								</>
							)}
						</div>
					</form>
				</div>
			</div>

			<DeleteDraftModal
				isOpen={deleteModalOpen}
				onClose={() => {
					setDeleteModalOpen(false);
				}}
				draftToDelete={draftToDelete}
				deleteDraft={deleteDraft}
			/>
			<ArtistProfileNotVerifiedModal isOpen={artistProfileNotVerifiedModalOpen} setOpen={setArtistProfileNotVerifiedModalOpen} />
		</>
	);
};

export default CreateNFTIntro;
