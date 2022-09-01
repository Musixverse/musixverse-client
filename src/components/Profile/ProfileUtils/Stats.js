import { useTheme } from "next-themes";
import { useMoralisCloudFunction } from "react-moralis";
import { useRouter } from "next/router";
import Image from "next/image";
import recordImageB from "../../../../public/assets/record_b.svg";
import recordImageW from "../../../../public/assets/record_w.svg";

export default function Stats({ username, isArtist }) {
	const { theme } = useTheme();
	const router = useRouter();

	const { data: numberOfTracksByArtist } = useMoralisCloudFunction("fetchNumberOfTracksByArtist", {
		username: username,
	});
	const { data: numberOfFavouriteTokens } = useMoralisCloudFunction("fetchNumberOfFavouriteTokens", {
		username: username,
	});

	const displayFavourites = () => {
		router.push(`/profile/${username}?favourites`, undefined, { shallow: true });
	};

	return (
		<>
			{isArtist ? (
				<div className="grid grid-cols-4 mt-8 font-medium md:m-0 md:w-fit dark:bg-nav-dark dark:backdrop-blur-xl dark:backdrop-brightness-105 opacity-90 rounded-2xl bg-light-200 backdrop-blur-xl backdrop-brightness-150">
					<div className="text-center px-5 py-5 rounded-l-2xl">
						<h1 className="text-xl font-bold xl:text-2xl">
							<Image src={theme !== "dark" ? recordImageB : recordImageW} width={18} height={18} alt="records" />
							&nbsp;{numberOfTracksByArtist || 0}
						</h1>
						<p>Tracks Released</p>
					</div>
					<div onClick={() => displayFavourites()} className="cursor-pointer text-center py-5 hover:bg-light-300 dark:hover:bg-dark-200">
						<h1 className="text-xl font-bold xl:text-2xl">
							<Image src={theme !== "dark" ? recordImageB : recordImageW} width={18} height={18} alt="records" />
							&nbsp;{numberOfFavouriteTokens || 0}
						</h1>
						<p>Favourites</p>
					</div>
					<div className="cursor-pointer text-center py-5 hover:bg-light-300 dark:hover:bg-dark-200">
						<h1 className="text-xl font-bold xl:text-2xl">{numberOfTracksByArtist || 0}</h1>
						<p>Followers</p>
					</div>
					<div className="cursor-pointer text-center py-5 hover:bg-light-300 dark:hover:bg-dark-200 rounded-r-2xl hidden font-secondary md:inline-block">
						<h1 className="text-xl font-bold xl:text-2xl">535</h1>
						<p>Following</p>
					</div>
				</div>
			) : (
				<div className="grid grid-cols-3 gap-3 p-5 mt-8 font-medium md:m-0 md:w-fit xl:gap-10 dark:bg-nav-dark dark:backdrop-blur-xl dark:backdrop-brightness-105 opacity-90 rounded-2xl bg-light-200 backdrop-blur-xl backdrop-brightness-150">
					<div className="text-center">
						<h1 className="text-xl font-bold xl:text-2xl">
							<Image src={theme !== "dark" ? recordImageB : recordImageW} width={18} height={18} alt="records" />
							&nbsp;{numberOfFavouriteTokens || 0}
						</h1>
						<p>Favourites</p>
					</div>
					<div className="text-center">
						<h1 className="text-xl font-bold xl:text-2xl">{numberOfTracksByArtist || 0}</h1>
						<p>Followers</p>
					</div>
					<div className="hidden text-center font-secondary md:inline-block">
						<h1 className="text-xl font-bold xl:text-2xl">535</h1>
						<p>Following</p>
					</div>
				</div>
			)}
		</>
	);
}
