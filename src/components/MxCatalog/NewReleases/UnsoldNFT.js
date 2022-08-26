import NFTCard from "../../../layout/NFTCard/NFTCard";

const UnsoldNFT = ({ track }) => {
	if (track) {
		const unsoldTrackData = {
			primaryMarketplacePrice: track.price,
			unsoldTokens_size: track.unsoldTokens_size,
			purchasedTokens_size: track.purchasedTokens_size,
		};

		return (
			<NFTCard
				redirectLink={`/track/polygon/${track.unsoldTokens.at(0)}`}
				trackName={track.title}
				artistName={track.artist}
				artistAddress={track.artistAddress}
				image={track.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
				tokenId={track.unsoldTokens.at(0)}
				numberOfCopies={track.numberOfCopies}
				collaboratorList={track.collaborators}
				unsoldTrackData={unsoldTrackData}
			/>
		);
	} else return <NFTCard />;
};

export default UnsoldNFT;
