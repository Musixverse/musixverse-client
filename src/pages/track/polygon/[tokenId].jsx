import Head from "next/head";
import Moralis from "moralis/node";
import { meta_description } from "../../../config/constants";
import TrackHeader from "../../../components/TrackInfo/TrackHeader";
import UnlockableContent from "../../../components/TrackInfo/UnlockableContent";
import TrackDetails from "../../../components/TrackInfo/TrackDetails";
import Collaborators from "../../../components/TrackInfo/Collaborators";
import PurchaseInfo from "../../../components/TrackInfo/PurchaseInfo";
import Activity from "../../../components/TrackInfo/Activity";
import SimilarTokens from "../../../components/TrackInfo/SimilarTokens";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../../../config/constants";
import { NextSeo } from "next-seo";

export async function getStaticProps(context) {
	const { tokenId } = context.params;
	await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });

	try {
		// Fetch token details
		const tokenDetails = await Moralis.Cloud.run("fetchTokenDetails", { tokenId: tokenId });

		const trackId = tokenDetails.trackId;
		const metadata = JSON.parse(JSON.stringify(tokenDetails.metadata));
		const otherTokensOfTrack = tokenDetails.otherTokensOfTrack;
		const comment = tokenDetails.comment;
		const onSale = tokenDetails.onSale;
		const price = Moralis.Units.FromWei(tokenDetails.price);
		const currentOwner = tokenDetails.currentOwner;
		const artist = tokenDetails.artist;
		const localTokenId = tokenDetails.localTokenId;
		const artworkArtistInfo = tokenDetails.artworkArtistInfo;
		const _collaboratorUsers = tokenDetails.collaboratorUsers;
		const activity = JSON.parse(JSON.stringify(tokenDetails.activity));

		let collaboratorUsers = [];
		metadata.collaborators.map((collaborator) => {
			_collaboratorUsers.map((collaboratorUser) => {
				collaborator.address === collaboratorUser.ethAddress && collaboratorUsers.push(collaboratorUser);
			});
		});

		// Passing data to the Page using props
		return {
			props: {
				trackId,
				tokenId,
				localTokenId,
				metadata,
				otherTokensOfTrack,
				price,
				onSale,
				comment,
				currentOwner,
				artist,
				artworkArtistInfo,
				collaboratorUsers,
				activity,
			},
			revalidate: 1,
		};
	} catch (error) {
		return { notFound: true, revalidate: 1, props: {} };
	}
}

export function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}

export default function TrackInfo({
	trackId,
	tokenId,
	localTokenId,
	metadata,
	otherTokensOfTrack,
	price,
	onSale,
	comment,
	currentOwner,
	artist,
	artworkArtistInfo,
	collaboratorUsers,
	activity,
}) {
	return (
		<>
			<Head>
				<title>{"Musixverse - Track Info | " + metadata.title + " by " + metadata.artist}</title>
				<meta name="description" content={meta_description}></meta>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>

				<NextSeo
					title={"Musixverse - Track Info | " + metadata.title + " by " + metadata.artist}
					description={metadata.description}
					canonical="https://www.musixverse.com"
					openGraph={{
						siteName: "Musixverse",
						url: "https://www.musixverse.com",
						title: "Musixverse - Track Info | " + metadata.title + " by " + metadata.artist,
						description: metadata.description,
						images: [
							{
								url: metadata.artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL),
								width: 640,
								height: 640,
								alt: "Cover Art",
							},
						],
						audio: [
							{
								url: metadata.audio.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL),
								secureUrl: metadata.audio.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL),
								type: "audio/mpeg",
							},
						],
					}}
					twitter={{
						handle: "@musixverse",
						creator: "@musixverse",
						site: "@musixverse",
						cardType: "summary_large_image",
					}}
					facebook={{
						appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
					}}
				/>
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-100 dark:bg-dark-900 pt-28 pb-20">
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
						unlockTimestamp={parseInt(metadata.unlockTimestamp)}
						price={price}
						currentOwnerAddress={currentOwner.ethAddress}
						numberOfCopies={metadata.numberOfCopies}
						otherTokensOfTrack={otherTokensOfTrack}
						onSale={onSale}
						comment={comment}
					/>
					<UnlockableContent tokenId={tokenId} currentOwnerAddress={currentOwner.ethAddress} unlockableContent={metadata.unlockableContent} />
					<TrackDetails tokenId={tokenId} metadata={metadata} collaboratorUsers={collaboratorUsers} />
					<Collaborators bandId={metadata.bandId} collaborators={metadata.collaborators} collaboratorUsers={collaboratorUsers} />
					<div className="grid grid-cols-1 md:grid-cols-9 xl:grid-cols-5 gap-y-4 md:gap-6 mt-10">
						<PurchaseInfo
							tokenId={tokenId}
							resaleRoyaltyPercentage={metadata.resaleRoyaltyPercent}
							currentOwner={currentOwner}
							price={price}
							onSale={onSale}
						/>
						<Activity tokenId={tokenId} artist={artist} activity={activity} />
					</div>
					{otherTokensOfTrack.length > 0 ? (
						<SimilarTokens
							trackId={trackId}
							audio={metadata.audio.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
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
