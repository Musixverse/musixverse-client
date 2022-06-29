import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMoralisCloudFunction } from "react-moralis";
import Banner from "../../components/ArtistProfile/Banner";
import ArtistHeader from "../../components/ArtistProfile/ArtistHeader";
import Filter from "../../components/ArtistProfile/Filter";
import NFTs from "../../components/ArtistProfile/NFTs";
import NewsLetter from "../../layout/NewsLetter";
import LoadingContext from "../../../store/loading-context";

export default function Profile() {
    const router = useRouter();
    const { username } = router.query;

    const [isLoading, setLoading] = useContext(LoadingContext);
    const [profileUser, setProfileUser] = useState(false);
    const [profileUserInfo, setProfileUserInfo] = useState(false);

    const { fetch } = useMoralisCloudFunction("fetchUser", { username: username }, { autoFetch: false });
    const { fetch: fetchUserInfo } = useMoralisCloudFunction("fetchUserInfo", { username: username }, { autoFetch: false });

    const fetchUser = async () => {
        const results = await fetch({
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
            fetchUser();
            fetchInfo();
        }
        setLoading(false);
    }, [username]);

    if (isLoading || !profileUser) return null;
    return (
        <>
            {profileUserInfo.isArtist ? (
                <Head>
                    <title>Musixverse | Artist Profile</title>
                    <meta name="description" content="The NFT Marketplace for Musicians and Fans" />
                </Head>
            ) : (
                <Head>
                    <title>Musixverse | Collector Profile</title>
                    <meta name="description" content="The NFT Marketplace for Musicians and Fans" />
                </Head>
            )}

            <div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
                <Banner coverImage={profileUserInfo.coverImage} />
                <div className="w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                    <ArtistHeader
                        avatar={profileUserInfo.avatar}
                        name={profileUser.name}
                        isVerified={profileUserInfo.isVerified}
                        instagram={profileUserInfo.instagram}
                        facebook={profileUserInfo.facebook}
                        twitter={profileUserInfo.twitter}
                        followerCount={profileUserInfo.followerCount}
                        tracksReleased={profileUserInfo.tracksReleased}
                        bio={profileUserInfo.bio}
                        country={profileUserInfo.country}
                        createdAt={profileUser.createdAt}
                    />
                    <Filter />
                    <NFTs />
                </div>
                <NewsLetter />
            </div>
        </>
    );
}
