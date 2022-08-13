import { useMoralisCloudFunction } from "react-moralis";
import TrendingNFT from "./TrendingNFT";

const TrendingNFTs = () => {
	const { data: tracksWhoseAllCopiesAreNotSold } = useMoralisCloudFunction("fetchTracksWhoseAllCopiesAreNotSold", { autoFetch: true });

	return (
		<>
			{tracksWhoseAllCopiesAreNotSold &&
				tracksWhoseAllCopiesAreNotSold.map((track, index) => {
					return <TrendingNFT key={index} track={track} index={index} />;
				})}
		</>
	);
};

export default TrendingNFTs;
