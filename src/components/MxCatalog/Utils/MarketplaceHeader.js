import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const MarketplaceHeader = () => {
	const router = useRouter();
	const [heading, setHeading] = useState("");

	useEffect(() => {
		if (router.pathname.startsWith("/mxcatalog/new-releases")) setHeading("New Releases");
		else if (router.pathname.startsWith("/mxcatalog/explore")) setHeading("Explore");
	}, [router.pathname]);

	return (
		<div className="mx-auto pt-36 dark:bg-dark-200">
			<div className="flex flex-wrap justify-center content-center items-center">
				<h1 className="text-4xl font-semibold">{heading}</h1>
			</div>
		</div>
	);
};

export default MarketplaceHeader;
