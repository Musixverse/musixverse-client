import { useMoralisCloudFunction } from "react-moralis";
import UnsoldNFT from "./UnsoldNFT";

const UnsoldNFTs = () => {
	const { data: tracksWhoseAllCopiesAreNotSold } = useMoralisCloudFunction("fetchTracksWhoseAllCopiesAreNotSold", { autoFetch: true });

	return (
		<>
			{tracksWhoseAllCopiesAreNotSold &&
				tracksWhoseAllCopiesAreNotSold.map((track, index) => {
					return <UnsoldNFT key={index} track={track} index={index} />;
				})}
		</>
	);
};

export default UnsoldNFTs;
