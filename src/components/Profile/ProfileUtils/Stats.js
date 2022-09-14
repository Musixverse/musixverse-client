import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useMoralisCloudFunction } from "react-moralis";
import { useRouter } from "next/router";
import Image from "next/image";
import recordImageB from "../../../../public/assets/record_b.svg";
import recordImageW from "../../../../public/assets/record_w.svg";

export default function Stats({ username, isArtist, isFollowingProfileUser }) {
	const { theme } = useTheme();
	const router = useRouter();

	const { data: numberOfTracksByArtist } = useMoralisCloudFunction("fetchNumberOfTracksByArtist", {
		username: username,
	});
	const { data: numberOfFavouriteTokens } = useMoralisCloudFunction("fetchNumberOfFavouriteTokens", {
		username: username,
	});
	const { fetch: fetchNumberOfFollowers, data: numberOfFollowers } = useMoralisCloudFunction(
		"fetchNumberOfFollowers",
		{
			username: username,
		},
		{ autoFetch: false }
	);
	const { data: numberOfFollowing } = useMoralisCloudFunction("fetchNumberOfFollowing", {
		username: username,
	});

	useEffect(() => {
		fetchNumberOfFollowers({
			onSuccess: async (object) => {},
			onError: (error) => {
				console.log("fetchNumberOfFollowers Error:", error);
			},
		});
	}, [isFollowingProfileUser, fetchNumberOfFollowers]);

	const displayFavourites = () => {
		router.push(`/profile/${username}?favourites`, undefined, { shallow: true });
	};

	const displayFollowers = () => {
		router.push(`/profile/${username}?followers`, undefined, { shallow: true });
	};

	const displayFollowing = () => {
		router.push(`/profile/${username}?following`, undefined, { shallow: true });
	};

	return (
		<>
			{isArtist ? (
				<div className="grid sm:flex sm:grid-cols-4 grid-cols-2 mt-8 font-medium md:m-0 md:w-fit dark:bg-nav-dark dark:backdrop-blur-xl dark:backdrop-brightness-105 opacity-90 rounded-2xl bg-light-200 backdrop-blur-xl backdrop-brightness-150">
					<div className="shrink px-5 py-5 text-center rounded-l-2xl">
						<h1 className="text-xl font-bold">
							<Image src={theme !== "dark" ? recordImageB : recordImageW} width={14} height={14} alt="records" />
							&nbsp;{numberOfTracksByArtist || 0}
						</h1>
						<p className="hidden sm:block text-sm">{numberOfTracksByArtist === 1 ? "Track Released" : "Tracks Released"}</p>
						<p className="block sm:hidden text-sm">{numberOfTracksByArtist === 1 ? "Track" : "Tracks"}</p>
					</div>
					<div onClick={() => displayFavourites()} className="shrink px-6 py-5 cursor-pointer text-center hover:bg-light-300 dark:hover:bg-dark-200">
						<h1 className="text-xl font-bold">
							<Image src={theme !== "dark" ? recordImageB : recordImageW} width={14} height={14} alt="records" />
							&nbsp;{numberOfFavouriteTokens || 0}
						</h1>
						<p className="text-sm">{numberOfFavouriteTokens === 1 ? "Favourite" : "Favourites"}</p>
					</div>
					<div onClick={() => displayFollowers()} className="shrink px-6 py-5 cursor-pointer text-center hover:bg-light-300 dark:hover:bg-dark-200">
						<h1 className="text-xl font-bold">{numberOfFollowers || 0}</h1>
						<p className="text-sm">{numberOfFollowers === 1 ? "Follower" : "Followers"}</p>
					</div>
					<div
						onClick={() => displayFollowing()}
						className="shrink pl-6 pr-8 py-5 cursor-pointer text-center hover:bg-light-300 dark:hover:bg-dark-200 rounded-r-2xl"
					>
						<h1 className="text-xl font-bold">{numberOfFollowing || 0}</h1>
						<p className="text-sm">Following</p>
					</div>
				</div>
			) : (
				<div className="flex grid-cols-3 mt-8 font-medium md:m-0 md:w-fit dark:bg-nav-dark dark:backdrop-blur-xl dark:backdrop-brightness-105 opacity-90 rounded-2xl bg-light-200 backdrop-blur-xl backdrop-brightness-150">
					<div
						onClick={() => displayFavourites()}
						className="shrink pl-8 pr-6 py-5 cursor-pointer text-center hover:bg-light-300 dark:hover:bg-dark-200 rounded-l-2xl"
					>
						<h1 className="text-xl font-bold">
							<Image src={theme !== "dark" ? recordImageB : recordImageW} width={14} height={14} alt="records" />
							&nbsp;{numberOfFavouriteTokens || 0}
						</h1>
						<p className="text-sm">{numberOfFavouriteTokens === 1 ? "Favourite" : "Favourites"}</p>
					</div>
					<div onClick={() => displayFollowers()} className="shrink px-6 py-5 cursor-pointer text-center hover:bg-light-300 dark:hover:bg-dark-200">
						<h1 className="text-xl font-bold">{numberOfFollowers || 0}</h1>
						<p className="text-sm">{numberOfFollowers === 1 ? "Follower" : "Followers"}</p>
					</div>
					<div
						onClick={() => displayFollowing()}
						className="shrink pl-6 pr-8 py-5 cursor-pointer text-center hover:bg-light-300 dark:hover:bg-dark-200 rounded-r-2xl hidden font-secondary md:inline-block"
					>
						<h1 className="text-xl font-bold">{numberOfFollowing || 0}</h1>
						<p className="text-sm">Following</p>
					</div>
				</div>
			)}
		</>
	);
}
