import { useState, useEffect } from "react";
import NFTCard from "@/layout/NFTCard/NFTCard";
import NFTCardsWithPager from "@/layout/NFTCardsWithPager/NFTCardsWithPager";

const FeaturedNfts = ({ tracks }) => {
	const [nftCards, setNftCards] = useState([]);

	useEffect(() => {
		if (tracks) {
			let tempArray = [];
			const nftCardsTemp = [];

			tracks.map((track, idx) => {
				if (idx < 5) {
					tempArray.push(
						<NFTCard
							key={track.trackId}
							redirectLink={`/track/polygon/${track.tokenIdHavingLowestPrice}`}
							trackId={track.trackId}
							audio={track.audio.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							trackName={track.title}
							price={track.price}
							artistName={track.artist}
							artistAddress={track.artistAddress}
							isArtistVerified={track.isArtistVerified}
							image={track.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							tokenId={track.tokenIdHavingLowestPrice}
							localTokenId={track.localTokenId}
							numberOfCopies={track.numberOfCopies}
							collaboratorList={track.collaboratorUsers}
							showNumberOfCopies={false}
						/>
					);
				}
				if (tempArray.length % 5 == 0 || idx == tracks.length - 1) {
					nftCardsTemp.push(tempArray);
					tempArray = [];
				}
			});
			setNftCards(nftCardsTemp);
		}
	}, [tracks]);

	return (
		<>
			<div className="relative mt-28 md:mt-40">
				<h1 className="text-3xl font-semibold text-center font-primary">Featured Tracks</h1>
				<NFTCardsWithPager nftCards={nftCards} hidePager={true} centerCards={true} />
			</div>
		</>
	);
};

export default FeaturedNfts;
