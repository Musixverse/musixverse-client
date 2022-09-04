import { useState, useEffect } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import NFTCard from "../../layout/NFTCard/NFTCard";
import NFTCardsWithPager from "../../layout/NFTCardsWithPager/NFTCardsWithPager";
import NoNfts from "./NoNfts";

export default function NFTs({ username, name, currentlyActive, sortingFilter }) {
	const [nftCards, setNftCards] = useState([]);
	const [tracks, setTracks] = useState("");

	const { fetch: fetchTracksByArtist } = useMoralisCloudFunction("fetchTracksByArtist", {
		username: username,
		name: name,
		currentlyActive: currentlyActive,
		sortingFilter: sortingFilter,
	});

	useEffect(() => {
		if (username && name) {
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

			if (currentlyActive === `Owned by ${name}`) {
				tracks.map((track, idx) => {
					const metadata = JSON.parse(track.metadata);

					tempArray.push(
						<NFTCard
							key={track.token_id}
							redirectLink={`/track/polygon/${track.token_id}`}
							trackName={metadata.title}
							artistName={metadata.artist}
							artistAddress={metadata.artistAddress}
							image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							tokenId={track.token_id}
							numberOfCopies={metadata.attributes[0].value}
							collaboratorList={metadata.collaborators}
						/>
					);

					if (tempArray.length % 5 == 0 || idx == tracks.length - 1) {
						nftCardsTemp.push(tempArray);
						tempArray = [];
					}
				});
			} else {
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
			}

			setNftCards(nftCardsTemp);
		}
	}, [tracks]);

	return <>{nftCards.length === 0 ? <NoNfts username={username} /> : <NFTCardsWithPager nftCards={nftCards} />}</>;
}
