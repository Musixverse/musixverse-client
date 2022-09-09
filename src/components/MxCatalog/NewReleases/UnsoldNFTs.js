import { useState, useEffect, useContext } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import UnsoldNFT from "./UnsoldNFT";
import LoadingNftCards from "../Utils/LoadingNftCards";
import NoResultsFound from "../Utils/NoResultsFound";
import LoadingContext from "../../../../store/loading-context";

const UnsoldNFTs = ({ appliedFilter }) => {
	const [loading, setLoading] = useContext(LoadingContext);
	const [tracksWhoseAllCopiesAreNotSold, setTracksWhoseAllCopiesAreNotSold] = useState(false);

	const { fetch: fetchTracksWhoseAllCopiesAreNotSold } = useMoralisCloudFunction(
		"fetchTracksWhoseAllCopiesAreNotSold",
		{ appliedFilter: appliedFilter },
		{ autoFetch: false }
	);

	useEffect(() => {
		setLoading(true);
		fetchTracksWhoseAllCopiesAreNotSold({
			onSuccess: async (object) => {
				setLoading(false);
				setTracksWhoseAllCopiesAreNotSold(object);
			},
			onError: (error) => {
				setLoading(false);
				console.log("fetchTracksWhoseAllCopiesAreNotSold Error:", error);
			},
		});
	}, [appliedFilter, fetchTracksWhoseAllCopiesAreNotSold]);

	return (
		<>
			{loading ? (
				<LoadingNftCards />
			) : !loading && tracksWhoseAllCopiesAreNotSold.length === 0 ? (
				<NoResultsFound />
			) : (
				tracksWhoseAllCopiesAreNotSold &&
				tracksWhoseAllCopiesAreNotSold.map((track, index) => {
					return <UnsoldNFT key={track.maxTokenId} track={track} />;
				})
			)}
		</>
	);
};

export default UnsoldNFTs;
