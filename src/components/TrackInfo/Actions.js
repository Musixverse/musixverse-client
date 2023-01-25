import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import AuthModalContext from "../../../store/authModal-context";
import mxvVerified from "../../../public/assets/mxv_verified.svg";
import ShareTrackNftModal from "./TrackInfoUtils/ShareTrackNftModal";
import ShareAssetImageModal from "./TrackInfoUtils/ShareAssetImage";
import LoadingContext from "store/loading-context";

const Actions = ({ numberOfCopies, coverArt, tokenId, artistName, title }) => {
	const [, setLoading] = useContext(LoadingContext);
	const { user } = useMoralis();
	const [, setAuthModalOpen] = useContext(AuthModalContext);
	/*******************************
	 *********  FAVOURITE  *********
	 *******************************/
	const [isTokenFavourite, setIsTokenFavourite] = useState(false);
	const { fetch: fetchIsTokenFavourite } = useMoralisCloudFunction("fetchIsTokenFavourite", { tokenId: tokenId }, { autoFetch: false });
	/*******************************
	 *******  SHARE BUTTON  ********
	 *******************************/
	const [isShareTrackNftModalOpen, setShareTrackNftModalOpen] = useState(false);
	/*******************************
	 *******  EXTRACT ASSET ********
	 *******************************/
	const [assetImage, setAssetImage] = useState(undefined);
	const [extractAssetModal, setExtractAssetModal] = useState(false);

	useEffect(() => {
		if (user) {
			fetchIsTokenFavourite({
				onSuccess: async (object) => {
					setIsTokenFavourite(object);
				},
				onError: (error) => {
					console.log("fetchIsTokenFavourite Error:", error);
				},
			});
		}
	}, [user, fetchIsTokenFavourite]);

	const { fetch: markTokenAsFavourite } = useMoralisCloudFunction("markTokenAsFavourite", { tokenId: tokenId }, { autoFetch: false });
	const markTokenFavourite = () => {
		if (user) {
			markTokenAsFavourite({
				onSuccess: async (object) => {
					if (object) {
						setIsTokenFavourite(true);
					} else {
						setIsTokenFavourite(false);
					}
				},
				onError: (error) => {
					console.log("markTokenAsFavourite Error:", error);
				},
			});
		} else {
			setAuthModalOpen(true);
		}
	};

	const handleShareAsset = () => {
		// Get the data to know if the current view is the owner of this nft or not
		// to pass the type param in payload for api call
		setLoading({ status: true, title: "", message: "Hang on for a moment. Your image is being generated...", showProgressBar: false, progress: 0 });
		fetch("/api/extract-asset", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				artistName,
				songName: title.toUpperCase(),
				numberOfCopies,
				coverArtURL: coverArt,
				artistProfilePicture: "",
			}),
		}).then((res) => {
			res.json().then((data) => {
				setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
				setAssetImage(data.buffer);
				setExtractAssetModal(true);
			});
		});
	};

	return (
		<div className="flex flex-row space-x-2 text-xs md:space-x-4">
			<button
				onClick={() => {
					markTokenFavourite();
				}}
				className="flex items-center justify-center px-4 py-2 space-x-2 rounded-lg cursor-pointer hover:bg-light-200 dark:hover:bg-dark-600"
			>
				{isTokenFavourite ? (
					<>
						<i className="text-lg fa-solid fa-heart text-primary-600"></i>
						<span>Added to Favorites</span>
					</>
				) : (
					<>
						<i className="text-lg fa-solid fa-heart text-zinc-300"></i>
						<span>Add to Favorites</span>
					</>
				)}
			</button>

			<button
				onClick={() => setShareTrackNftModalOpen(true)}
				className="flex items-center justify-center px-4 py-2 rounded-lg cursor-pointer hover:bg-light-200 dark:hover:bg-dark-600"
			>
				<div className="flex space-x-2">
					<i className="text-lg fa-solid fa-share-nodes"></i>
					<span>Share</span>
				</div>
			</button>

			<button
				onClick={handleShareAsset}
				className="flex items-center justify-center px-4 py-2 rounded-lg cursor-pointer hover:bg-light-200 dark:hover:bg-dark-600"
			>
				<span className="flex space-x-2">
					<i className="text-lg fa fa-instagram"></i>
					<span>Story</span>
				</span>
			</button>

			<button className="flex items-center justify-center px-4 py-2 space-x-2 rounded-lg cursor-none">
				<Image className="dark:invert" src={mxvVerified} width={18} height={18} alt="Authentic License"></Image>
				<span>MXV Cerified</span>
			</button>

			<ShareTrackNftModal
				isOpen={isShareTrackNftModalOpen}
				setOpen={setShareTrackNftModalOpen}
				artistName={artistName}
				title={title}
				setAuthModalOpen={setAuthModalOpen}
			/>

			<ShareAssetImageModal isOpen={extractAssetModal} setOpen={setExtractAssetModal} assetImage={assetImage} />
		</div>
	);
};

export default Actions;
