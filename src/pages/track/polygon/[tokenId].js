import Head from "next/head";
import { useRouter } from "next/router";
import Moralis from "moralis/node";
import { meta_description } from "../../../constants";
import TrackHeader from "../../../components/TrackInfo/TrackHeader";
import TrackDetails from "../../../components/TrackInfo/TrackDetails";
import PurchaseInfo from "../../../components/TrackInfo/PurchaseInfo";
import Activity from "../../../components/TrackInfo/Activity";
import SimilarTokens from "../../../components/TrackInfo/SimilarTokens";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../../../constants";

export async function getStaticProps(context) {
	const { tokenId } = context.params;
	await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });

	// try {
	const options = {
		chain: process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK,
		address: process.env.NEXT_PUBLIC_MXV_DIAMOND_ADDRESS,
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
			});
	}

	let metadata = "";
	if (typeof token.metadata === "string") {
		metadata = JSON.parse(token.metadata);
	} else {
		metadata = token.metadata;
	}

	// Fetch token details
	const tokenDetails = await Moralis.Cloud.run("fetchTokenDetails", { tokenId: tokenId });
	console.log("tokenDetails:", JSON.stringify(tokenDetails));

	const otherTokensOfTrack = tokenDetails.otherTokensOfTrack;
	const onSale = tokenDetails.onSale;
	const price = Moralis.Units.FromWei(tokenDetails.price);
	const currentOwner = tokenDetails.currentOwner;
	const artist = tokenDetails.artist;
	const localTokenId = tokenDetails.localTokenId;
	const artworkArtistInfo = tokenDetails.artworkArtistInfo;
	const _collaboratorUsers = tokenDetails.collaboratorUsers;

	let collaboratorUsers = [];
	metadata.collaborators.map((collaborator) => {
		_collaboratorUsers.map((collaboratorUser) => {
			collaborator.address === collaboratorUser.ethAddress && collaboratorUsers.push(collaboratorUser);
		});
	});

	// Passing data to the Page using props
	return {
		props: {
			tokenId,
			localTokenId,
			metadata,
			otherTokensOfTrack,
			price,
			onSale,
			currentOwner,
			artist,
			artworkArtistInfo,
			collaboratorUsers,
		},
		revalidate: 1,
	};
	// }
	//  catch (error) {
	// 	return { notFound: true, revalidate: 1, props: {} };
	// }
}

export function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}

export default function TrackInfo({
	tokenId,
	localTokenId,
	metadata,
	otherTokensOfTrack,
	price,
	onSale,
	currentOwner,
	artist,
	artworkArtistInfo,
	collaboratorUsers,
}) {
	return (
		<>
			<Head>
				<title>Musixverse | Track Info</title>
				<meta name="description" content={meta_description} />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-100 dark:bg-dark-200 pt-28 pb-20">
				<div className="w-full max-w-[1920px] px-10 sm:px-16 xl:px-20 2xl:px-36">
					<TrackHeader
						tokenId={tokenId}
						localTokenId={localTokenId}
						image={metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
						artworkInfo={metadata.artwork}
						artworkArtistInfo={artworkArtistInfo}
						artist={artist}
						title={metadata.title}
						audio_url={metadata.audio.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
						tags={metadata.tags}
						unlockTimestamp={metadata.unlockTimestamp}
						price={price}
						currentOwnerAddress={currentOwner.ethAddress}
						numberOfCopies={metadata.attributes[0].value}
						otherTokensOfTrack={otherTokensOfTrack}
						onSale={onSale}
					/>
					<TrackDetails tokenId={tokenId} metadata={metadata} collaboratorUsers={collaboratorUsers} />
					<div className="grid grid-cols-1 md:grid-cols-9 xl:grid-cols-5 gap-y-4 md:gap-6 mt-10">
						<PurchaseInfo tokenId={tokenId} metadata={metadata} currentOwner={currentOwner} price={price} onSale={onSale} />
						<Activity tokenId={tokenId} artistAddress={metadata.artistAddress} />
					</div>
					{otherTokensOfTrack.length > 0 ? (
						<SimilarTokens
							otherTokensOfTrack={otherTokensOfTrack}
							metadata={metadata}
							isArtistVerified={artist.isArtistVerified}
							collaboratorUsers={collaboratorUsers}
						/>
					) : null}
				</div>
			</div>
		</>
	);
}
