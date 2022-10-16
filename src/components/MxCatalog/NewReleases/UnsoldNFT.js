import NFTCard from "../../../layout/NFTCard/NFTCard";

const UnsoldNFT = ({ track }) => {
	if (track) {
		const unsoldTrackData = {
			unsoldTokens_size: track.unsoldTokens_size,
			purchasedTokens_size: track.purchasedTokens_size,
		};

		let collaboratorList = [];
		track.collaborators.map((collaborator) => {
			track.collaboratorUsers.map((collaboratorUser) => {
				collaborator.address === collaboratorUser.ethAddress && collaboratorList.push(collaboratorUser);
			});
		});
		return (
			<NFTCard
				redirectLink={`/track/polygon/${track.unsoldTokens.at(0)}`}
				trackName={track.title}
				price={track.price}
				artistName={track.artist}
				artistAddress={track.artistAddress}
				isArtistVerified={track.isArtistVerified}
				image={track.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
				tokenId={track.unsoldTokens.at(0)}
				localTokenId={track.localTokenId}
				numberOfCopies={track.numberOfCopies}
				collaboratorList={collaboratorList}
				otherTokensOfTrack={track.otherTokensOfTrack}
				unsoldTrackData={unsoldTrackData}
				audio={track.audio.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
				trackId={track.trackId}
			/>
		);
	} else return <NFTCard />;
};

export default UnsoldNFT;
