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
	}, [router.pathname]);

	return (
		<div className="flex flex-col items-center justify-center w-full h-[280px] bg-light-300">
			<h3 className="text-[#1D1D1D] mt-12 text-5xl font-medium">
				M<span className="font-semibold text-primary-100">x</span> Catalog
			</h3>
			<ul className="flex mt-6 space-x-12 font-semibold">
				<li className={(currentSelection === 1 ? "text-black" : "text-[#7B7B7B] hover:text-dark-100") + " cursor-pointer"}>
					<Link href="/mxcatalog/new-releases">New Releases</Link>
				</li>

				<li className={(currentSelection === 2 ? "text-black" : "text-[#7B7B7B] hover:text-dark-100") + " cursor-pointer"}>
					<Link href="/mxcatalog/explore">Explore</Link>
				</li>

				<li className={currentSelection === 3 ? "text-black" : "text-[#7B7B7B]"}>
					<Tooltip
						labelText={<span className="font-semibold text-base cursor-help">Trending</span>}
						message="Coming soon!"
						tooltipLocation="bottom"
					></Tooltip>
				</li>

				{/* <li className={(currentSelection === 3 ? "text-black" : "text-[#7B7B7B] hover:text-dark-100") + " cursor-pointer"}>
					<Link href="/mxcatalog/trending">Trending</Link>
				</li> */}
			</ul>
		</div>
	);
}
