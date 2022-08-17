import NFTCard from "../../../layout/NFTCard/NFTCard";

const SoldOnceNFT = ({ track }) => {
	if (track) {
		const soldOnceTrackData = {
			// This is passed only because we need Lowest Price being shown on the NFT Card
			tokenIdHavingLowestPrice: track.tokenIdHavingLowestPrice,
		};

		return (
			<NFTCard
				redirectLink={`/track/polygon/${track.tokenIdHavingLowestPrice}`}
				trackName={track.title}
				artistName={track.artist}
				artistAddress={track.artistAddress}
				image={track.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
				tokenId={track.tokenIdHavingLowestPrice}
				numberOfCopies={track.numberOfCopies}
				collaboratorList={track.collaborators}
				soldOnceTrackData={soldOnceTrackData}
			/>
		);
	} else return <NFTCard />;
};

export default SoldOnceNFT;
