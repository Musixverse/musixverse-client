import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { meta_description } from "../../../constants";
import { useRouter } from "next/router";
import { useMoralisCloudFunction } from "react-moralis";
import Banner from "../../../components/Profile/Banner";
import ArtistHeader from "../../../components/Profile/ArtistHeader";
import Filter from "../../../components/Profile/Filter";
import NFTs from "../../../components/Profile/NFTs";
import FavouritesHeader from "../../../components/Profile/FavouritesHeader";
import FavouriteNFTs from "../../../components/Profile/FavouriteNFTs";
import NewsLetter from "../../../layout/NewsLetter";
import LoadingContext from "../../../../store/loading-context";
import ArtistBioModal from "../../../components/Profile/ProfileUtils/ArtistBioModal";
import ArtistReportModal from "../../../components/Profile/ProfileUtils/ArtistReportModal";
import FavouritesModal from "../../../components/Profile/ProfileUtils/FavouritesModal";
import FollowersModal from "../../../components/Profile/ProfileUtils/FollowersModal";
import FollowingModal from "../../../components/Profile/ProfileUtils/FollowingModal";

export default function Profile() {
	const router = useRouter();
	const { username } = router.query;

	const [isLoading, setLoading] = useContext(LoadingContext);
	const [profileUser, setProfileUser] = useState(false);
	const [profileUserInfo, setProfileUserInfo] = useState(false);
	const [showArtistBioModal, setShowArtistBioModal] = useState(false);
	const [showReportModal, setShowReportModal] = useState(false);
	const [currentlyActive, setCurrentlyActive] = useState("");
	const [sortingFilter, setSortingFilter] = useState("Newest First");
	useEffect(() => {
		if (profileUser && profileUser.name) {
			if (profileUser.isArtist) {
				setCurrentlyActive("All Tracks");
			} else {
				setCurrentlyActive(`Owned by ${profileUser.name}`);
			}
		}
	}, [profileUser]);

	const { fetch: fetchUser } = useMoralisCloudFunction("fetchUser", { username: username }, { autoFetch: false });
	const { fetch: fetchUserInfo } = useMoralisCloudFunction("fetchUserInfo", { username: username }, { autoFetch: false });

	const fetchUserData = async () => {
		const results = await fetchUser({
			onSuccess: (data) => console.log("profileUser:", data.attributes),
		});
		if (results) {
			setProfileUser(results.attributes);
		}
	};

	const fetchInfo = async () => {
		const results = await fetchUserInfo({
			onSuccess: (data) => {
				if (!data.attributes) {
					router.push({ pathname: `/profile/does-not-exist`, query: { username: username } });
				}
			},
			onError: (error) => {
				console.log("profileUserInfo Error:", error);
				router.push({ pathname: `/profile/does-not-exist`, query: { username: username } });
			},
		});
		if (results) {
			setProfileUserInfo(results.attributes);
		}
	};

	useEffect(() => {
		setLoading("loadingSection");
		if (username) {
			fetchUserData();
			fetchInfo();
		}
		setLoading(false);
	}, [username]);

	// Favourites Modal
	const [isFavouritesModalOpen, setFavouritesModalOpen] = useState(false);
	const [favouriteTokens, setFavouriteTokens] = useState([]);
	const { fetch: fetchFavouriteTokens } = useMoralisCloudFunction("fetchFavouriteTokens", { username: username }, { autoFetch: false });
	useEffect(() => {
		fetchFavouriteTokens({
			onSuccess: (data) => {
				setFavouriteTokens(data);
			},
			onError: (error) => {
				console.log("fetchFavouriteTokens Error:", error);
			},
		});
	}, [fetchFavouriteTokens]);
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

	// if (isLoading) return null;
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
						sortingFilter={sortingFilter}
						setSortingFilter={setSortingFilter}
						name={profileUser.name}
						isArtist={profileUser.isArtist}
					/>
					<NFTs username={username} name={profileUser.name} currentlyActive={currentlyActive} sortingFilter={sortingFilter} />
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
				name={profileUser.name}
				username={username}
				favouriteTokens={favouriteTokens}
				setFavouriteTokens={setFavouriteTokens}
			/>
			<FollowersModal isOpen={isFollowersModalOpen} setOpen={setFollowersModalOpen} name={profileUser.name} username={username} />
			<FollowingModal isOpen={isFollowingModalOpen} setOpen={setFollowingModalOpen} name={profileUser.name} username={username} />
		</>
	);
}
