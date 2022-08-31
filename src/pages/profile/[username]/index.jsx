import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { meta_description } from "../../../constants";
import { useRouter } from "next/router";
import { useMoralisCloudFunction } from "react-moralis";
import Banner from "../../../components/Profile/Banner";
import ArtistHeader from "../../../components/Profile/ArtistHeader";
import Filter from "../../../components/Profile/Filter";
import NFTs from "../../../components/Profile/NFTs";
import NewsLetter from "../../../layout/NewsLetter";
import LoadingContext from "../../../../store/loading-context";
import ArtistBioModal from "../../../components/Profile/ProfileUtils/ArtistBioModal";

export default function Profile() {
	const router = useRouter();
	const { username } = router.query;

	const [isLoading, setLoading] = useContext(LoadingContext);
	const [profileUser, setProfileUser] = useState(false);
	const [profileUserInfo, setProfileUserInfo] = useState(false);
	const [showArtistBioModal, setShowArtistBioModal] = useState(false);
	const [currentlyActive, setCurrentlyActive] = useState("All Tracks");
	const [sortingFilter, setSortingFilter] = useState("Newest First");

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
		setLoading(true);
		if (username) {
			fetchUserData();
			fetchInfo();
		}
		setLoading(false);
	}, [username]);

	if (isLoading || !profileUser) return null;
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
					/>
					<Filter
						currentlyActive={currentlyActive}
						setCurrentlyActive={setCurrentlyActive}
						sortingFilter={sortingFilter}
						setSortingFilter={setSortingFilter}
					/>
					<NFTs username={username} currentlyActive={currentlyActive} sortingFilter={sortingFilter} />
				</div>
				<NewsLetter />
			</div>
			<ArtistBioModal isOpen={showArtistBioModal} setOpen={setShowArtistBioModal} name={profileUser.name} bio={profileUserInfo.bio} />
		</>
	);
}
