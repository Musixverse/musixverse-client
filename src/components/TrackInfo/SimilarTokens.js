import { useState, useEffect } from "react";
import NFTCard from "../../layout/NFTCard/NFTCard";
import NFTCardsWithPager from "../../layout/NFTCardsWithPager/NFTCardsWithPager";

const SimilarTokens = ({ otherTokensOfTrack, metadata, isArtistVerified, collaboratorUsers }) => {
	const [nftCards, setNftCards] = useState([]);

	useEffect(() => {
		if (otherTokensOfTrack) {
			let tempArray = [];
			const nftCardsTemp = [];

			otherTokensOfTrack.map((token, idx) => {
				if (metadata) {
					tempArray.push(
						<NFTCard
							key={token.tokenId}
							redirectLink={`/track/polygon/${token.tokenId}`}
							trackName={metadata.title}
							price={token.price}
							artistName={metadata.artist}
							artistAddress={metadata.artistAddress}
							isArtistVerified={isArtistVerified}
							image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							tokenId={token.tokenId}
							localTokenId={token.localTokenId}
							numberOfCopies={metadata.numberOfCopies}
							collaboratorList={collaboratorUsers}
							showNumberOfCopies={false}
						/>
					);
					if (tempArray.length % 5 == 0 || idx == otherTokensOfTrack.length - 1) {
						nftCardsTemp.push(tempArray);
						tempArray = [];
					}
				} else return null;
			});
			setNftCards(nftCardsTemp);
		}
	}, [otherTokensOfTrack, metadata]);

	return (
		<>
			<h1 className="font-tertiary text-center sm:text-left text-4xl mt-20 mb-8">MORE OF THIS TRACK</h1>
			<NFTCardsWithPager nftCards={nftCards} />
		</>
	);
};

export default SimilarTokens;
