import { useState, useEffect } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import NFTCard from "../../layout/NFTCard/NFTCard";
import NFTCardsWithPager from "../../layout/NFTCardsWithPager/NFTCardsWithPager";
import NoNfts from "./NoNfts";

export default function NFTs({ username, currentlyActive, sortingFilter }) {
	const [nftCards, setNftCards] = useState([]);
	const [tracks, setTracks] = useState("");

	const { fetch: fetchTracksByArtist } = useMoralisCloudFunction("fetchTracksByArtist", {
		username: username,
		currentlyActive: currentlyActive,
		sortingFilter: sortingFilter,
	});

	useEffect(() => {
		if (username) {
			fetchTracksByArtist({
				onSuccess: async (object) => {
					setTracks(object);
				},
				onError: (error) => {
					console.log("fetchTracksByArtist Error:", error);
				},
			});
		}
	}, [currentlyActive, sortingFilter, username, fetchTracksByArtist]);

	useEffect(() => {
		if (tracks) {
			let tempArray = [];
			const nftCardsTemp = [];

			tracks.map((track, idx) => {
				tempArray.push(
					<NFTCard
						key={track.tokenIdHavingLowestPrice}
						redirectLink={`/track/polygon/${track.tokenIdHavingLowestPrice}`}
						trackName={track.title}
						artistName={track.artist}
						artistAddress={track.artistAddress}
						image={track.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
						tokenId={track.tokenIdHavingLowestPrice}
						numberOfCopies={track.numberOfCopies}
						collaboratorList={track.collaborators}
					/>
				);
				if (tempArray.length % 5 == 0 || idx == tracks.length - 1) {
					nftCardsTemp.push(tempArray);
					tempArray = [];
				}
			});
			setNftCards(nftCardsTemp);
		}
	}, [tracks]);

	return <>{nftCards.length === 0 ? <NoNfts username={username} /> : <NFTCardsWithPager nftCards={nftCards} />}</>;
}
