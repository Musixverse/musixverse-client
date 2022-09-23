import { useState, useEffect } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import NFTCard from "../../layout/NFTCard/NFTCard";
import NFTCardsWithPager from "../../layout/NFTCardsWithPager/NFTCardsWithPager";
import NoNfts from "./NoNfts";

export default function NFTs({ username, currentlyActive, sortingFilter }) {
	const [nftCards, setNftCards] = useState([]);
	const [tracks, setTracks] = useState("");

	const { fetch: fetchTracksByUser } = useMoralisCloudFunction("fetchTracksByUser", {
		username: username,
		currentlyActive: currentlyActive,
		sortingFilter: sortingFilter,
	});

	useEffect(() => {
		if (username && currentlyActive && sortingFilter) {
			fetchTracksByUser({
				onSuccess: async (object) => {
					setTracks(object);
				},
				onError: (error) => {
					console.log("fetchTracksByUser Error:", error);
				},
			});
		}
	}, [currentlyActive, sortingFilter, username, fetchTracksByUser]);

	useEffect(() => {
		if (tracks.length > 0) {
			let tempArray = [];
			const nftCardsTemp = [];

			if (currentlyActive === "Collection") {
				tracks.map((track, idx) => {
					if (track.metadata) {
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
								showNumberOfCopies={false}
							/>
						);

						if (tempArray.length % 5 == 0 || idx == tracks.length - 1) {
							nftCardsTemp.push(tempArray);
							tempArray = [];
						}
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
