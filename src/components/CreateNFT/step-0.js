import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMoralis, useMoralisQuery, useMoralisCloudFunction } from "react-moralis";
import PreviewDraft from "./CreateNFTUtils/PreviewDraft";
import DeleteDraftModal from "./CreateNFTUtils/DeleteDraftModal";
import styles from "../../../styles/CreateNFT/Step0.module.css";
import LoadingContext from "../../../store/loading-context";
import { Country, State } from "country-state-city";
import ArtistProfileNotVerifiedModal from "./CreateNFTUtils/ArtistProfileNotVerifiedModal";

const CreateNFTIntro = ({ nextStep }) => {
	const router = useRouter();
	const { user } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);

	const { data: nftDrafts } = useMoralisCloudFunction("fetchNftDrafts");
	const { data: userInfo } = useMoralisQuery("UserInfo", (query) => query.equalTo("user", user), [user]);

	const [draftToDelete, setDraftToDelete] = useState("");
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [artistProfileNotVerifiedModalOpen, setArtistProfileNotVerifiedModalOpen] = useState(false);

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
		setLoading(true);
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

	const _nftDraftMetadata = {
		step: 1,
		title: "",
		description: "",
		audio: null,
		duration: null,
		mimeType: null,
		artwork: {
			uri: null,
			mimeType: "",
			artist: "",
			artistAddress: "",
			invitedArtistId: "",
		},
		creditCoverArtArtist: true,
		coverArtArtist: { id: "", name: "", username: "", address: "", avatar: "", email: "" },
		lyrics: null,
		trackOrigin: "Original",
		genre: "Hip-Hop",
		recordingYear: new Date().getFullYear(),
		parentalAdvisory: "Explicit",
		vocals: true,
		language: "Hindi",
		countryOfOrigin: JSON.stringify(Country.getCountryByCode("IN")),
		stateOfOrigin: JSON.stringify(State.getStateByCodeAndCountry("DL", "IN")),
		location: JSON.stringify({
			name: "Delhi",
			countryCode: "IN",
			stateCode: "DL",
			latitude: "28.65195000",
			longitude: "77.23149000",
		}),
		isrc: "",
		tags: [],
		links: {
			spotifyLink: "",
			appleMusicLink: "",
			amazonMusicLink: "",
			youtubeMusicLink: "",
			other: "",
		},
		numberOfCopies: "",
		nftPrice: "",
		collaboratorList: [
			{
				id: user.id,
				name: user.attributes.name,
				username: user.attributes.username,
				split: 100,
				role: "Singer",
				address: user.attributes.ethAddress,
				avatar: userInfo[0] ? userInfo[0].attributes.avatar : "",
			},
		],
		resaleRoyaltyPercent: "",
		releaseNow: true,
		unlockTimestamp: new Date().getTime(),
	};

	const { fetch: createNftDraft } = useMoralisCloudFunction("saveNftDraft", { metadata: _nftDraftMetadata }, { autoFetch: false });
	return (
		<>
			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
				<div className="overflow-x-hidden w-full max-w-[1920px] flex justify-center pt-36 pb-20 sm:px-16 xl:px-20 2xl:px-36">
					<form
						className="w-[90vw] sm:w-[80vw] bg-light-100 dark:bg-dark-100 grid lg:grid-cols-3 lg:space-x-10 min-h-full sm:p-14 p-10 lg:pb-10 rounded-2xl backdrop-blur-xl"
						onSubmit={async (e) => {
							e.preventDefault();
							if (user && user.attributes.isArtist && user.attributes.isArtistVerified) {
								await createNftDraft({
									onSuccess: (draftId) => {
										router.replace("/create-nft?draft=" + draftId, undefined, { shallow: true });
									},
									onError: (error) => {},
								});
								nextStep();
							} else {
								setArtistProfileNotVerifiedModalOpen(true);
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
								<input type="checkbox" name="Terms and Conditions" id="T&C" className="cursor-pointer" required />
								<label htmlFor="T&C" className="cursor-pointer">
									I have read and agree to the{" "}
									<Link href="/terms-and-conditions" passHref>
										<a target="_blank" rel="noopener noreferrer" className="hover:text-primary-100">
											Terms & Conditions
										</a>
									</Link>
								</label>
							</div>
							<p className="font-secondary text-sm font-medium mt-4 max-w-[340px] mb-6">
								Confirm that you have read and you agree to our terms and conditions for creating this NFT.
							</p>

							<button
								type="submit"
								className="w-fit flex items-center mt-10 px-4 py-3 text-sm font-primary font-bold rounded-md bg-primary-100 hover:bg-primary-200 text-light-100"
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
												<Link key={draft.id} href={`/create-nft?draft=${draft.id}`} passHref={true}>
													<a>
														<PreviewDraft
															draftId={draft.id}
															trackTitle={draft.attributes.title}
															coverArtUrl={draft.attributes.artwork.uri}
															audioFileUrl={draft.attributes.audio}
															nftPrice={draft.attributes.nftPrice}
															collaboratorList={draft.attributes.collaboratorList}
															setDeleteModalOpen={setDeleteModalOpen}
															setDraftToDelete={setDraftToDelete}
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
											className="flex justify-center items-center w-10 h-10 border-2 border-dark-100 dark:border-light-300 rounded-full group hover:border-primary-200 dark:hover:border-primary-100 cursor-pointer"
										>
											<i className="fa-solid fa-plus text-2xl dark:text-light-300 group-hover:text-primary-200 dark:group-hover:text-primary-100"></i>
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
