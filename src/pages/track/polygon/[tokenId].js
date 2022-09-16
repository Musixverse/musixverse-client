import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Moralis from "moralis/node";
import { meta_description } from "../../../constants";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { MXV_DIAMOND_ADDRESS, BLOCKCHAIN_NETWORK } from "../../../constants";
import TrackHeader from "../../../components/TrackInfo/TrackHeader";
import TrackDetails from "../../../components/TrackInfo/TrackDetails";
import PurchaseInfo from "../../../components/TrackInfo/PurchaseInfo";
import Activity from "../../../components/TrackInfo/Activity";
import SimilarTokens from "../../../components/TrackInfo/SimilarTokens";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../../../constants";

export async function getStaticProps(context) {
	const { tokenId } = context.params;
	await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });

	try {
		const options = {
			chain: BLOCKCHAIN_NETWORK,
			address: MXV_DIAMOND_ADDRESS,
			token_id: tokenId,
		};
		const token = await Moralis.Web3API.token.getTokenIdMetadata(options);

		if (token.metadata == null) {
			fetch(token.token_uri)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					token.metadata = data;
					console.log("data", data);
				});
		}

		// Fetch similar tokens
		let otherTokensOfTrack = [];
		await Moralis.Cloud.run("fetchOtherTokensOfTrack", { tokenId: tokenId }).then((result) => {
			otherTokensOfTrack = JSON.parse(JSON.stringify(result));
		});

		const onSale = await Moralis.Cloud.run("fetchOnSaleState", { tokenId: tokenId });

		// Passing data to the Page using props
		return {
			props: { token, otherTokensOfTrack, onSale },
			revalidate: 10,
		};
	} catch (error) {
		return { notFound: true };
	}
}

export function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}

export default function TrackInfo({ token, otherTokensOfTrack, onSale }) {
	const router = useRouter();
	const { tokenId } = router.query;

	let metadata = "";
	if (typeof token.metadata === "string") {
		metadata = JSON.parse(token.metadata);
	} else {
		metadata = token.metadata;
	}

	const { Moralis } = useMoralis();
	const { data: tokenPrice } = useMoralisCloudFunction("fetchTokenPrice", { tokenId: tokenId });
	const { data: currentOwnerAddress } = useMoralisCloudFunction("fetchTokenOwner", {
		chain: BLOCKCHAIN_NETWORK,
		address: MXV_DIAMOND_ADDRESS,
		tokenId: tokenId,
	});

	const [price, setPrice] = useState("");
	useEffect(() => {
		async function setPrices() {
			if (tokenPrice) {
				setPrice(Moralis.Units.FromWei(tokenPrice));
			}
		}
		setPrices();
	}, [tokenPrice]);

	return (
		<>
			<Head>
				<title>Musixverse | Track Info</title>
				<meta name="description" content={meta_description} />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-100 dark:bg-dark-200 pt-28 pb-20">
				<div className="w-full max-w-[1920px] px-10 sm:px-16 xl:px-20 2xl:px-36">
					<TrackHeader
						image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
						artworkInfo={metadata.artwork}
						artistAddress={metadata.artistAddress}
						title={metadata.title}
						audio_url={metadata.audio.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
						tags={metadata.tags}
						tokenId={tokenId}
						unlockTimestamp={metadata.unlockTimestamp}
						price={price}
						currentOwnerAddress={currentOwnerAddress}
						numberOfCopies={metadata.attributes[0].value}
						otherTokensOfTrack={otherTokensOfTrack}
						onSale={onSale}
					/>
					<TrackDetails tokenId={tokenId} metadata={metadata} />
					<div className="grid grid-cols-1 md:grid-cols-9 xl:grid-cols-5 gap-y-4 md:gap-6 mt-10">
						<PurchaseInfo tokenId={tokenId} metadata={metadata} currentOwnerAddress={currentOwnerAddress} price={price} onSale={onSale} />
						<Activity tokenId={tokenId} artistAddress={metadata.artistAddress} />
					</div>
					{otherTokensOfTrack.length > 0 ? <SimilarTokens otherTokensOfTrack={otherTokensOfTrack} metadata={metadata} /> : null}
				</div>
			</div>
		</>
	);
}
