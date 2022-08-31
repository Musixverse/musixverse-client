import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useMoralisCloudFunction } from "react-moralis";
import Image from "next/image";
import recordImageB from "../../../../public/assets/record_b.svg";
import recordImageW from "../../../../public/assets/record_w.svg";

export default function Stats({ username, isArtist }) {
	const { theme } = useTheme();

	const { data: numberOfTracksByArtist } = useMoralisCloudFunction("fetchNumberOfTracksByArtist", {
		username: username,
	});
	const { data: numberOfFavouriteTokens } = useMoralisCloudFunction("fetchNumberOfFavouriteTokens", {
		username: username,
	});

	return (
		<>
			{isArtist ? (
				<div className="grid grid-cols-4 gap-3 p-5 mt-8 font-medium md:m-0 md:w-fit xl:gap-4 dark:bg-nav-dark dark:backdrop-blur-xl dark:backdrop-brightness-105 opacity-90 rounded-2xl bg-light-200 backdrop-blur-xl backdrop-brightness-150">
					<div className="text-center">
						<h1 className="text-xl font-bold xl:text-2xl">
							<Image src={theme !== "dark" ? recordImageB : recordImageW} width={18} height={18} alt="records" />
							&nbsp;{numberOfTracksByArtist || 0}
						</h1>
						<p>Tracks Released</p>
					</div>
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
