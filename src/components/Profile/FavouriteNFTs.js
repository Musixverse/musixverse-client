import { useState, useEffect } from "react";
import NFTCard from "../../layout/NFTCard/NFTCard";
import NFTCardsWithPager from "../../layout/NFTCardsWithPager/NFTCardsWithPager";
import NoNfts from "./NoNfts";

export default function FavouriteNFTs({ username, favouriteTokens }) {
	const [nftCards, setNftCards] = useState([]);

	useEffect(() => {
		if (favouriteTokens) {
			let tempArray = [];
			const nftCardsTemp = [];

			favouriteTokens.map((token, idx) => {
				tempArray.push(
					<NFTCard
						key={token.tokenId}
						redirectLink={`/track/polygon/${token.tokenId}`}
						trackName={token.title}
						artistName={token.artist}
						artistAddress={token.artistAddress}
						image={token.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
						tokenId={token.tokenId}
						numberOfCopies={token.numberOfCopies}
						collaboratorList={token.collaborators}
					/>
				);
				if (tempArray.length % 5 == 0 || idx == favouriteTokens.length - 1) {
					nftCardsTemp.push(tempArray);
					tempArray = [];
				}
			});
			setNftCards(nftCardsTemp);
		}
	}, [favouriteTokens]);

	return <>{nftCards.length === 0 ? <NoNfts username={username} favouritesSection={true} /> : <NFTCardsWithPager nftCards={nftCards} />}</>;
}
