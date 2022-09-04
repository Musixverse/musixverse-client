import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import AuthModalContext from "../../../store/authModal-context";
import mxvVerified from "../../../public/assets/mxv_verified.svg";
import ShareTrackNftModal from "./TrackInfoUtils/ShareTrackNftModal";

const Actions = ({ tokenId, artistName, title }) => {
	const { user } = useMoralis();
	const [, setAuthModalOpen] = useContext(AuthModalContext);
	/*******************************
	 *********  FAVOURITE  *********
	 *******************************/
	const [isTokenFavourite, setIsTokenFavourite] = useState(false);
	const { fetch: fetchIsTokenFavourite } = useMoralisCloudFunction("fetchIsTokenFavourite", { tokenId: tokenId });

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

	/*******************************
	 *******  SHARE BUTTON  ********
	 *******************************/
	const [isShareTrackNftModalOpen, setShareTrackNftModalOpen] = useState(false);

	return (
		<div className="flex flex-row space-x-2 md:space-x-4 text-xs">
			<button
				onClick={() => {
					markTokenFavourite();
				}}
				className="flex justify-center items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-light-200 dark:hover:bg-dark-100"
			>
				{isTokenFavourite ? (
					<>
						<i className="fa-solid fa-heart text-lg text-primary-200"></i>
						<span>Added to Favourites</span>
					</>
				) : (
					<>
						<i className="fa-solid fa-heart text-lg text-zinc-300"></i>
						<span>Add to Favourites</span>
					</>
				)}
			</button>

			<button
				onClick={() => setShareTrackNftModalOpen(true)}
				className="flex justify-center items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-light-200 dark:hover:bg-dark-100"
			>
				<div className="flex space-x-2">
					<i className="fa-solid fa-share-nodes text-lg"></i>
					<span>Share</span>
				</div>
			</button>

			<button className="flex justify-center items-center space-x-2 px-4 py-2 rounded-lg cursor-none">
				<Image src={mxvVerified} width={18} height={18} alt="Authentic License"></Image>
				<span>MXV Cerified</span>
			</button>

			<ShareTrackNftModal
				isOpen={isShareTrackNftModalOpen}
				setOpen={setShareTrackNftModalOpen}
				artistName={artistName}
				title={title}
				setAuthModalOpen={setAuthModalOpen}
			/>
		</div>
	);
};

export default Actions;
