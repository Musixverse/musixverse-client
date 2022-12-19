import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Tooltip from "../../../layout/Tooltip/Tooltip";

export default function CatalogNav({ currentSelection, setCurrentSelection }) {
	const router = useRouter();

	useEffect(() => {
		if (router.pathname.startsWith("/mxcatalog/new-releases")) {
			setCurrentSelection(1);
		} else if (router.pathname.startsWith("/mxcatalog/explore")) {
			setCurrentSelection(2);
		} else if (router.pathname.startsWith("/mxcatalog/trending")) {
			setCurrentSelection(3);
		}
	}, [router.pathname, setCurrentSelection]);

	return (
		<div className="flex flex-col items-center justify-center w-full h-[300px] bg-light-300 dark:bg-dark-600">
			<h3 className="text-[#1D1D1D] dark:text-light-100 mt-16 text-5xl font-medium">
				M<span className="font-semibold text-primary-500">x</span> Catalog
			</h3>
			<p className="sm:my-2 mt-4 sm:text-sm text-xs text-center px-8">
				The NFT marketplace of Musixverse. Buy, sell, or trade music NFTs and build your collection
			</p>
			<ul className="flex mt-8 space-x-12 font-semibold">
				<li
					className={
						(currentSelection === 1 ? "text-black dark:text-light-100" : "text-[#7B7B7B] hover:text-dark-600 dark:hover:text-light-300") +
						" cursor-pointer"
					}
				>
					<Link href="/mxcatalog/new-releases">New Releases</Link>
				</li>

				<li
					className={
						(currentSelection === 2 ? "text-black dark:text-light-100" : "text-[#7B7B7B] hover:text-dark-600 dark:hover:text-light-300") +
						" cursor-pointer"
					}
				>
					<Link href="/mxcatalog/explore">Explore</Link>
				</li>

				<li className={currentSelection === 3 ? "text-black dark:text-light-100" : "text-[#7B7B7B] dark:hover:text-light-300"}>
					<Tooltip
						labelText={<span className="text-base font-semibold cursor-help">Trending</span>}
						message="Coming soon!"
						tooltipLocation="bottom"
					></Tooltip>
				</li>

				{/* <li className={(currentSelection === 3 ? "text-black" : "text-[#7B7B7B] hover:text-dark-600") + " cursor-pointer"}>
					<Link href="/mxcatalog/trending">Trending</Link>
				</li> */}
			</ul>
		</div>
	);
}
