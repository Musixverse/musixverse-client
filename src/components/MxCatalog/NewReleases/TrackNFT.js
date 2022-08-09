import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import { MXV_DIAMOND_ADDRESS, BLOCKCHAIN_NETWORK } from "../../../constants";
import NFTCard from "../../../layout/NFTCard/NFTCard";

const TrackNFT = ({ track, index }) => {
	const { Moralis } = useMoralis();
	const [metadata, setMetadata] = useState("");

	const fetchTrackMetadata = async () => {
		try {
			const options = {
				address: MXV_DIAMOND_ADDRESS,
				token_id: track.unsoldTokens.at(0),
				chain: BLOCKCHAIN_NETWORK,
			};
			const token = await Moralis.Web3API.token.getTokenIdMetadata(options);

			if (token.metadata == null) {
				await fetch(token.token_uri)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						token.metadata = data;
					});
			}

			if (typeof token.metadata === "string") {
				const _metadata = JSON.parse(token.metadata);
				setMetadata(_metadata);
			} else {
				setMetadata(token.metadata);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		async function fetchMetadata() {
			await fetchTrackMetadata();
		}
		fetchMetadata();
	}, []);

	if (metadata) {
		const unsoldTrackData = {
			primaryMarketplacePrice: track.price,
			unsoldTokens_size: track.unsoldTokens_size,
			purchasedTokens_size: track.purchasedTokens_size,
		};
		// console.log("track ",track);
		return (
			<Link key={index} href={`/track/polygon/${track.unsoldTokens.at(0)}`} passHref={true}>
				<a>
					<NFTCard
						redirectLink={`/track/polygon/${track.unsoldTokens.at(0)}`}
						trackName={metadata.title}
						artistName={metadata.artist}
						artistAddress={metadata.artistAddress}
						image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
						tokenId={track.unsoldTokens.at(0)}
						numberOfCopies={metadata.attributes[0].value}
						collaboratorList={metadata.collaborators}
						unsoldTrackData={unsoldTrackData}
					/>
				</a>
			</Link>
		);
	} else return <NFTCard />;
};

export default TrackNFT;
