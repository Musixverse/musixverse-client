import Link from "next/link";
import NFTCard from "../../layout/NFTCard/NFTCard";

const SimilarTokens = ({ otherTokensOfTrack, metadata }) => {
	return (
		<>
			<h1 className="font-tertiary text-4xl mt-20 mb-8">MORE OF THIS TRACK</h1>
			<div className="flex max-w-[1920px] mx-auto dark:bg-dark-200">
				<div className="grid grid-cols-5 gap-10">
					{otherTokensOfTrack &&
						otherTokensOfTrack.map((token, index) => {
							if (metadata) {
								return (
									<Link key={index} href={`/polygon/track/${token.tokenId}`} passHref={true}>
										<a>
											<NFTCard
												trackName={metadata.title}
												artistName={metadata.artist}
												image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
												tokenId={token.tokenId}
												numberOfCopies={metadata.attributes[0].value}
												collaboratorList={metadata.collaborators}
											/>
										</a>
									</Link>
								);
							} else return null;
						})}
				</div>
			</div>
		</>
	);
};

export default SimilarTokens;
