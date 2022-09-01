import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMoralisCloudFunction } from "react-moralis";
import Image from "next/image";
import Link from "next/link";
import Modal from "../../../layout/Modal/Modal";
import CollaboratorImage from "../../../layout/NFTCard/CollaboratorImage";

export default function FavouritesModal({ isOpen, setOpen, name }) {
	const router = useRouter();
	const { username } = router.query;
	const [favouriteTokens, setFavouriteTokens] = useState([]);

	const { fetch: fetchFavouriteTokens } = useMoralisCloudFunction("fetchFavouriteTokens", { username: username }, { autoFetch: false });

	useEffect(() => {
		if (isOpen) {
			fetchFavouriteTokens({
				onSuccess: (data) => {
					setFavouriteTokens(data);
				},
				onError: (error) => {
					console.log("fetchFavouriteTokens Error:", error);
				},
			});
		}
	}, [isOpen, fetchFavouriteTokens]);

	useEffect(() => {
		console.log("favouriteTokens:", favouriteTokens);
	}, [favouriteTokens]);

	return (
		<Modal
			isOpen={isOpen}
			image={
				<div className="mx-auto flex items-center relative justify-center h-24 w-24 text-6xl">
					<label className="flex justify-center items-center w-14 h-14 border-2 rounded-full border-primary-200">
						<i className="fa-solid fa-heart text-2xl text-primary-200"></i>
					</label>
				</div>
			}
			title={<div>{name}&apos;s Favourites</div>}
			content={
				<div className="flex flex-col space-y-1 max-h-[400px] overflow-y-scroll px-2">
					{favouriteTokens &&
						favouriteTokens.map((token) => {
							return (
								<Link href={`/track/polygon/${token.tokenId}`} key={token.tokenId} passHref>
									<div className="flex p-2 rounded text-start hover:bg-light-200 dark:hover:bg-dark-200 cursor-pointer group">
										<Image
											src={token.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
											className="rounded"
											height={50}
											width={50}
											alt="NFT Artwork"
										/>
										<div className="w-full flex justify-between">
											<div className="flex flex-col place-content-between">
												<p className="ml-4 text-sm font-semibold">{token.title}</p>
												<p className="ml-4 text-xs items-end">{token.artist}</p>
											</div>
											<div className="flex items-end">
												<span className="hidden group-hover:block mr-4 text-primary-100">{token.genre}</span>
												<div className="flex items-end -space-x-2">
													{token.collaborators.map((collaborator, index) => {
														return <CollaboratorImage key={index} collaborator={collaborator} />;
													})}
												</div>
											</div>
										</div>
									</div>
								</Link>
							);
						})}
				</div>
			}
			onClose={() => {
				setOpen(false);
				router.push(`/profile/${username}`, undefined, { shallow: true });
			}}
		></Modal>
	);
}
