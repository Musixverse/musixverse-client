import { useState } from "react";
import Pager from "./Pager";

export default function NFTCardsWithPager({ nftCards, hidePager, centerCards }) {
	const [currentPage, setCurrentPage] = useState(0);

	return (
		<>
			<div
				className={
					"grid grid-cols-1 justify-items-center place-items-center place-content-center gap-6 my-8 xs:grid-cols-2 smd:grid-cols-3 lg:grid-cols-4 md:my-11 md:gap-11 " +
					(centerCards ? "xl:grid-cols-[repeat(auto-fit,_16.666666%)]" : "xl:grid-cols-5")
				}
			>
				{nftCards[currentPage]}
			</div>
			{!hidePager && nftCards.length > 1 ? <Pager onPageChange={setCurrentPage} maxPages={nftCards.length} /> : null}
		</>
	);
}
