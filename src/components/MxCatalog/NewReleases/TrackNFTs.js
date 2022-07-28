import { useMoralisCloudFunction } from "react-moralis";
import TrackNFT from "./TrackNFT";

const TrackNFTs = () => {
	const { data: tracksWhoseAllCopiesAreNotSold } = useMoralisCloudFunction("fetchTracksWhoseAllCopiesAreNotSold", { autoFetch: true });

	return (
		<div className="col-span-9 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-10">
			{tracksWhoseAllCopiesAreNotSold &&
				tracksWhoseAllCopiesAreNotSold.map((track, index) => {
					return <TrackNFT key={index} track={track} index={index} />;
				})}
		</div>
	);
};

export default TrackNFTs;