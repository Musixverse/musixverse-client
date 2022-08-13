import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { MXV_DIAMOND_ADDRESS, BLOCKCHAIN_NETWORK } from "../../../constants";
import NFTCard from "../../../layout/NFTCard/NFTCard";

const SoldOnceNFT = ({ track, index }) => {
	// const fetchTokenMetadata = async () => {
	//     if (token.metadata == null) {
	//         fetch(token.token_uri)
	//             .then((response) => {
	//                 return response.json();
	//             })
	//             .then((data) => {
	//                 setMetadata(data);
	//                 console.log("metadata:", metadata);
	//             });
	//     } else {
	//         setMetadata(JSON.parse(token.metadata));
	//     }
	// };

	// useEffect(async () => {
	//     await fetchTokenMetadata();
	// }, [token]);

	// useEffect(async () => {
	//     console.log("metadata:", metadata);
	// }, [metadata]);

	const { Moralis } = useMoralis();
	const [metadata, setMetadata] = useState("");

	const fetchTrackMetadata = async () => {
		try {
			const options = {
				address: MXV_DIAMOND_ADDRESS,
				token_id: track.purchasedTokens.at(0),
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
		const soldOnceTrackData = {
			// This is passed only because we need Lowest Price being shown on the NFT Card
			tokenIdHavingLowestPrice: track.purchasedTokens.at(0),
		};

		return (
			<NFTCard
				redirectLink={`/track/polygon/${track.purchasedTokens.at(0)}`}
				trackName={metadata.title}
				artistName={metadata.artist}
				artistAddress={metadata.artistAddress}
				image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
				tokenId={track.purchasedTokens.at(0)}
				numberOfCopies={metadata.attributes[0].value}
				collaboratorList={metadata.collaborators}
				soldOnceTrackData={soldOnceTrackData}
			/>
		);
	} else return <NFTCard />;
};

export default SoldOnceNFT;
