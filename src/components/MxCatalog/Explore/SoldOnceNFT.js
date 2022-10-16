import NFTCard from "../../../layout/NFTCard/NFTCard";

const SoldOnceNFT = ({ track }) => {
	if (track) {
		const soldOnceTrackData = {
			// This is passed only because we need Lowest Price being shown on the NFT Card
			tokenIdHavingLowestPrice: track.tokenIdHavingLowestPrice,
		};

		let collaboratorList = [];
		track.collaborators.map((collaborator) => {
			track.collaboratorUsers.map((collaboratorUser) => {
				collaborator.address === collaboratorUser.ethAddress && collaboratorList.push(collaboratorUser);
			});
		});

		return (
			<NFTCard
				redirectLink={`/track/polygon/${track.tokenIdHavingLowestPrice}`}
				trackName={track.title}
				price={track.price}
				artistName={track.artist}
				artistAddress={track.artistAddress}
				isArtistVerified={track.isArtistVerified}
				image={track.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
				tokenId={track.tokenIdHavingLowestPrice}
				localTokenId={track.localTokenId}
				numberOfCopies={track.numberOfCopies}
				collaboratorList={collaboratorList}
				otherTokensOfTrack={track.otherTokensOfTrack}
				soldOnceTrackData={soldOnceTrackData}
				audio={track.audio.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
				trackId={track.trackId}
			/>
		);
	} else return <NFTCard />;
};

export default SoldOnceNFT;
