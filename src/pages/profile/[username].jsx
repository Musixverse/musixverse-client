import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { meta_description } from "../../constants";
import { useRouter } from "next/router";
import Moralis from "moralis/node";
import Banner from "../../components/Profile/Banner";
import ArtistHeader from "../../components/Profile/ArtistHeader";
import Filter from "../../components/Profile/Filter";
import NFTs from "../../components/Profile/NFTs";
const FavouritesHeader = dynamic(() => import("../../components/Profile/FavouritesHeader"));
const FavouriteNFTs = dynamic(() => import("../../components/Profile/FavouriteNFTs"));
import NewsLetter from "../../layout/NewsLetter";
const ArtistBioModal = dynamic(() => import("../../components/Profile/ProfileUtils/ArtistBioModal"));
const ArtistReportModal = dynamic(() => import("../../components/Profile/ProfileUtils/ArtistReportModal"));
const FavouritesModal = dynamic(() => import("../../components/Profile/ProfileUtils/FavouritesModal"));
const FollowersModal = dynamic(() => import("../../components/Profile/ProfileUtils/FollowersModal"));
const FollowingModal = dynamic(() => import("../../components/Profile/ProfileUtils/FollowingModal"));
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../../constants";

export async function getStaticProps(context) {
	const { username } = context.params;
	await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });

	const profileUser = JSON.parse(JSON.stringify(await Moralis.Cloud.run("fetchUser", { username: username })));
	const profileUserInfo = JSON.parse(JSON.stringify(await Moralis.Cloud.run("fetchUserInfo", { username: username })));

	if (!profileUser || !profileUserInfo) {
		return {
			redirect: {
				destination: `/profile/does-not-exist?username=${username}`,
				permanent: false,
			},
		};
	}
	const _favouriteTokens = await Moralis.Cloud.run("fetchFavouriteTokens", { username: username });

	// Passing data to the page using props
	return {
		props: { profileUser, profileUserInfo, _favouriteTokens },
		revalidate: 10,
	};
}

export function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}

export default function Profile({ profileUser, profileUserInfo, _favouriteTokens }) {
	const router = useRouter();
	const { username } = router.query;

	const [showArtistBioModal, setShowArtistBioModal] = useState(false);
	const [showReportModal, setShowReportModal] = useState(false);
	const [currentlyActive, setCurrentlyActive] = useState("");
	const [sortingFilter, setSortingFilter] = useState("Newest First");
	useEffect(() => {
		if (profileUser.isArtist) {
			setCurrentlyActive("New Releases");
		} else {
			setCurrentlyActive("Collection");
		}
	}, [profileUser]);

	// Favourites Modal
	const [isFavouritesModalOpen, setFavouritesModalOpen] = useState(false);
	const [favouriteTokens, setFavouriteTokens] = useState(_favouriteTokens);
	// Followers Modal
	const [isFollowersModalOpen, setFollowersModalOpen] = useState(false);
	// Following Modal
	const [isFollowingModalOpen, setFollowingModalOpen] = useState(false);
	useEffect(() => {
		if (router.query && "favourites" in router.query) {
			setFavouritesModalOpen(true);
		} else if (router.query && "followers" in router.query) {
			setFollowersModalOpen(true);
		} else if (router.query && "following" in router.query) {
			setFollowingModalOpen(true);
		} else {
			setFavouritesModalOpen(false);
			setFollowersModalOpen(false);
			setFollowingModalOpen(false);
		}
	}, [router.query]);

	return (
		<>
			{profileUser.isArtist ? (
				<Head>
					<title>Musixverse | Artist Profile</title>
					<meta name="description" content={meta_description} />
				</Head>
			) : (
				<Head>
					<title>Musixverse | Collector Profile</title>
					<meta name="description" content={meta_description} />
				</Head>
			)}

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
				<Banner coverImage={profileUserInfo.coverImage} />
				<div className="w-full max-w-[1920px] pb-20 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
					<ArtistHeader
						avatar={profileUserInfo.avatar}
						name={profileUser.name}
						username={username}
						isArtist={profileUser.isArtist}
						isArtistVerified={profileUser.isArtistVerified}
						instagram={profileUserInfo.instagram}
						facebook={profileUserInfo.facebook}
						twitter={profileUserInfo.twitter}
						bio={profileUserInfo.bio}
						country={profileUserInfo.country}
						createdAt={profileUser.createdAt}
						setShowArtistBioModal={setShowArtistBioModal}
						setShowReportModal={setShowReportModal}
					/>
					<Filter
						currentlyActive={currentlyActive}
						setCurrentlyActive={setCurrentlyActive}
						setSortingFilter={setSortingFilter}
						isArtist={profileUser.isArtist}
					/>
					<NFTs username={username} currentlyActive={currentlyActive} sortingFilter={sortingFilter} />
					<FavouritesHeader />
					<FavouriteNFTs username={username} favouriteTokens={favouriteTokens} />
				</div>
				<NewsLetter />
			</div>
			<ArtistBioModal isOpen={showArtistBioModal} setOpen={setShowArtistBioModal} name={profileUser.name} bio={profileUserInfo.bio} />
			<ArtistReportModal isOpen={showReportModal} setOpen={setShowReportModal} username={username} />
			<FavouritesModal
				isOpen={isFavouritesModalOpen}
				setOpen={setFavouritesModalOpen}
				username={username}
				favouriteTokens={favouriteTokens}
				setFavouriteTokens={setFavouriteTokens}
			/>
			<FollowersModal isOpen={isFollowersModalOpen} setOpen={setFollowersModalOpen} username={username} />
			<FollowingModal isOpen={isFollowingModalOpen} setOpen={setFollowingModalOpen} username={username} />
		</>
	);
}
