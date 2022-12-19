import { useState, useEffect, useContext } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import UnsoldNFT from "./UnsoldNFT";
import LoadingNftCards from "../Utils/LoadingNftCards";
import NoResultsFound from "../Utils/NoResultsFound";
import LoadingContext from "../../../../store/loading-context";

const UnsoldNFTs = ({ appliedFilter, tracks }) => {
	const [isLoading, setLoading] = useContext(LoadingContext);
	const [tracksWhoseAllCopiesAreNotSold, setTracksWhoseAllCopiesAreNotSold] = useState(tracks);
	const [hasLoadedOnce, setLoadedOnce] = useState(false);

	const { fetch: fetchTracksWhoseAllCopiesAreNotSold } = useMoralisCloudFunction(
		"fetchTracksWhoseAllCopiesAreNotSold",
		{ appliedFilter: appliedFilter },
		{ autoFetch: false }
	);

	useEffect(() => {
		if (hasLoadedOnce) {
			setLoading({
				status: true,
				title: "Applying Filter...",
			});
			fetchTracksWhoseAllCopiesAreNotSold({
				onSuccess: async (object) => {
					setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
					setTracksWhoseAllCopiesAreNotSold(object);
				},
				onError: (error) => {
					setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
					console.log("fetchTracksWhoseAllCopiesAreNotSold Error:", error);
				},
			});
		}
		setLoadedOnce(true);
	}, [appliedFilter, fetchTracksWhoseAllCopiesAreNotSold]);

	return (
		<>
			{isLoading.status ? (
				<LoadingNftCards />
			) : !isLoading.status && tracksWhoseAllCopiesAreNotSold && tracksWhoseAllCopiesAreNotSold.length === 0 ? (
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
