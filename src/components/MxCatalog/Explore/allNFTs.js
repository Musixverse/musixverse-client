import { useState, useEffect } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { MXV_DIAMOND_ADDRESS, BLOCKCHAIN_NETWORK } from "../../../constants";
import SoldOnceNFT from "./SoldOnceNFT";

const SoldOnceNFTs = () => {
	// const { Moralis, isInitialized } = useMoralis();
	// const [tokens, setTokens] = useState([]);

	// const fetchTokens = async () => {
	//     const options = {
	//         address: MXV_DIAMOND_ADDRESS,
	//         chain: BLOCKCHAIN_NETWORK,
	//     };
	//     const nftData = await Moralis.Web3API.token.getNFTOwners(options);
	//     setTokens(nftData.result);
	// };

	// useEffect(() => {
	//     if (isInitialized) {
	//         fetchTokens();
	//     }
	// }, [isInitialized]);

	// useEffect(() => {
	//     console.log("Tokens:", tokens);
	// }, [tokens]);

	const { data: tracksWhoseCopiesAreSoldOnce } = useMoralisCloudFunction("fetchTracksWhoseCopiesAreSoldOnce", { autoFetch: true });

	return (
		<>
			{tracksWhoseCopiesAreSoldOnce &&
				tracksWhoseCopiesAreSoldOnce.map((track, index) => {
					return <SoldOnceNFT key={index} track={track} index={index} />;
				})}
		</>
	);
};

export default SoldOnceNFTs;
