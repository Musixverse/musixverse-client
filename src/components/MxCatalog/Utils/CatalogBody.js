import Image from "next/image";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
const UnsoldNFTs = dynamic(() => import("../NewReleases/UnsoldNFTs"));
const SoldOnceNFTs = dynamic(() => import("../Explore/SoldOnceNFTs"));
const TrendingNFTs = dynamic(() => import("../Trending/TrendingNFTs"));
import Filter from "./CatalogUtils/Filter";
const MobileFilter = dynamic(() => import("./CatalogUtils/MobileFilterUtils/MobileFilter"));

export default function CatalogBody({ currentSelection, setAppliedFilter, appliedFilter, showMobileFilter, setShowMobileFilter }) {
	const { theme } = useTheme();
	let catalogType = "NEW RELEASES ON MUSIXVERSE";
	if (currentSelection === 2) catalogType = "EXPLORE THE MUSIXVERSE MARKETPLACE";
	else if (currentSelection === 3) catalogType = "TRENDING NFTs ON MUSIXVERSE";

	return (
		<div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
			<div className="w-full max-w-[1920px] px-6 pt-16 pb-28 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
				<div className="flex flex-col items-center w-full">
					<div className="flex text-[#1d1d1d] mb-[35px] items-center space-x-2 sm:text-4xl text-3xl font-tertiary">
						<Image src={theme === "light" ? "/assets/record_b.svg" : "/assets/record_w.svg"} alt="vinyl disc" height={30} width={30} />
						<p className="dark:text-light-200">{catalogType}</p>
					</div>

					<MobileFilter {...{ setShowMobileFilter }} />

					<div className="flex items-start justify-between w-full lg:space-x-10">
						<Filter setAppliedFilter={setAppliedFilter} appliedFilter={appliedFilter} currentSelection={currentSelection} />

						<div className="w-full text-center justify-items-center grid col-span-9 gap-y-[60px] gap-x-[80px] 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
							{currentSelection === 1 ? (
								<UnsoldNFTs appliedFilter={appliedFilter} />
							) : currentSelection === 2 ? (
								<SoldOnceNFTs appliedFilter={appliedFilter} />
							) : currentSelection === 3 ? (
								<TrendingNFTs />
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
