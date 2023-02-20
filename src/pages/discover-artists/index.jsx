import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import Moralis from "moralis/node";
import { discoverartists_meta_description, PARSE_APP_ID, PARSE_SERVER_URL } from "@/config/constants";
import recordImageB from "../../../public/assets/record_b.svg";
import recordImageW from "../../../public/assets/record_w.svg";

export async function getStaticProps() {
	await Moralis.start({ serverUrl: PARSE_SERVER_URL, appId: PARSE_APP_ID });

	// Fetch all verified artists
	const _artists = await Moralis.Cloud.run("getAllVerifiedArtists");
	const artists = JSON.parse(JSON.stringify(_artists));

	// Passing data to the page using props
	return {
		props: { artists },
		revalidate: 100,
	};
}

function DiscoverArtists({ artists }) {
	const { theme } = useTheme();

	return (
		<>
			<Head>
				<title>Musixverse | Discover Artists</title>
				<meta name="description" content={discoverartists_meta_description} />
			</Head>

			<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-1000">
				<div className="w-full max-w-[1920px] min-h-screen px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36 py-36">
					<div className="font-primary sm:text-5xl text-4xl text-center font-semibold mb-20">Discover Artists</div>
					<div className="w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
						{artists &&
							artists.map((artist) => {
								return (
									<Link href={`/profile/${artist.username}`} key={artist.username}>
										<div className="group cursor-pointer p-6 w-full flex flex-col items-start justify-start bg-light-100 dark:bg-dark-800 rounded-xl shadow-md hover:shadow-xl transition duration-300">
											<div className="w-full flex gap-x-4">
												<Image src={artist.avatar} alt="avatar" width={80} height={80} className="rounded-full" />
												<div className="h-full flex flex-col place-content-between">
													<p className="flex">
														<span className="mr-2 font-primary text-lg font-semibold">{artist.name}</span>
														<Image src={"/assets/mxv_tick.svg"} width={16} height={16} alt="mxv_verified" />
													</p>
													<p className="text-sm group-hover:text-primary-500">@{artist.username}</p>
												</div>
											</div>

											<div className="flex mt-8 gap-x-5">
												<div className="flex justify-center items-center">
													<Image src={theme !== "dark" ? recordImageB : recordImageW} width={12} height={12} alt="records" />
													&nbsp;<span className="text-sm font-semibold">{artist.numberOfTracksByArtist || 0}</span>
													<p className="text-xs ml-1">{artist.numberOfTracksByArtist === 1 ? "Track" : "Tracks"}</p>
												</div>
												<div className="flex justify-center items-center">
													<i className="text-[10px] fa-solid fa-users"></i>
													&nbsp;<span className="text-sm font-semibold">{artist.numberOfFollowers || 0}</span>
													<p className="text-xs ml-1">{artist.numberOfFollowers === 1 ? "Follower" : "Followers"}</p>
												</div>
											</div>
										</div>
									</Link>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
}

export default DiscoverArtists;
