import { useState, useEffect } from "react";
import Link from "next/link";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { MXV_DIAMOND_ADDRESS, BLOCKCHAIN_NETWORK } from "../../constants";
import NFTCard from "../../layout/NFTCard/NFTCard";
import Pager from "./ProfileUtils/Pager";
import NoNfts from "./NoNfts";

export default function NFTs({ username }) {
	const { Moralis, isInitialized } = useMoralis();
	const [tokens, setTokens] = useState("");
	const [currentPage, setCurrentPage] = useState(0);
	const [nftCards, setNftCards] = useState([]);

	const { data: profileUserAddress } = useMoralisCloudFunction("fetchAddressFromUsername", { username: username });

	useEffect(() => {
		if (tokens) {
			tokens.map(async (token) => {
				if (token.metadata == null) {
					await fetch(token.token_uri)
						.then((response) => {
							return response.json();
						})
						.then((data) => {
							token.metadata = JSON.stringify(data);
						});
				}
			});
		}
	}, [tokens]);

	useEffect(() => {
		if (isInitialized && profileUserAddress) {
			(async function () {
				const options = {
					chain: BLOCKCHAIN_NETWORK,
					token_address: MXV_DIAMOND_ADDRESS,
					address: profileUserAddress,
				};
				const nftData = await Moralis.Web3API.account.getNFTsForContract(options);
				console.log(nftData);
				setTokens(nftData.result);
			})();
		}
	}, [isInitialized, profileUserAddress, Moralis]);

	useEffect(() => {
		if (tokens) {
			let tempArray = [];
			const nftCardsTemp = [];

			tokens.map((nft, idx) => {
				const metadata = JSON.parse(nft.metadata);
				if (metadata) {
					tempArray.push(
						<NFTCard
							redirectLink={`/track/polygon/${nft.token_id}`}
							trackName={metadata.title}
							artistName={metadata.artist}
							artistAddress={metadata.artistAddress}
							image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							tokenId={nft.token_id}
							numberOfCopies={metadata.attributes[0].value}
							collaboratorList={metadata.collaborators}
							showNumberOfCopies={false}
							// localTokenId={localTokenId}
						/>
					);
					if (tempArray.length % 5 == 0 || idx == tokens.length - 1) {
						nftCardsTemp.push(tempArray);
						tempArray = [];
					}
				}
			});
			setNftCards(nftCardsTemp);
		}
	}, [tokens]);
	return (
		<>
			{nftCards.length === 0 ? (
				<NoNfts />
			) : (
				<div className="grid grid-cols-2 gap-6 my-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:my-11 md:gap-11">{nftCards[currentPage]}</div>
			)}
			{nftCards.length > 1 ? <Pager onPageChange={setCurrentPage} maxPages={nftCards.length} /> : null}
		</>
	);
}
