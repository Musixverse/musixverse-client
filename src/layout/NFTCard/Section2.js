import { useEffect } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import CollaboratorImage from "./CollaboratorImage";
import styles from "../../../styles/NFTCard/Section2.module.css";

export default function Section2({ collaboratorList, numberOfCopies, tokenId, unsoldTrackData, lastPrice }) {
	const { fetch: fetchLocalTokenId, data: localTokenId } = useMoralisCloudFunction(
		"fetchLocalTokenId",
		{
			tokenId: tokenId,
		},
		{ autoFetch: false }
	);

	useEffect(() => {
		if (tokenId) {
			fetchLocalTokenId({
				onSuccess: async (object) => {},
				onError: (error) => {
					console.log("fetchLocalTokenId Error:", error);
				},
			});
		}
	}, [tokenId, fetchLocalTokenId]);

	// const likeBtn = useRef();
	// let likeCount = props.likeCount;

	// const handleLikeClick = () => {
	//     const likeCounter = likeBtn.current.children[1];
	//     const isLiked = likeBtn.current.classList.contains("text-red-500");

	//     if (!isLiked) {
	//         likeBtn.current.classList.add("text-red-500");
	//         likeCounter.textContent = ++likeCount;
	//         // NOTE: Make a call to Increment the likes on the moralis server also!
	//     } else {
	//         likeBtn.current.classList.remove("text-red-500");
	//         likeCounter.textContent = --likeCount;
	//         // NOTE: Make a call to Decrement the likes on the server!dzsf
	//     }
	// };

	return (
		<div className={styles["nft-card__description--section2"]}>
			{/* Like button */}
			{/* <button className="text-sm bg-transparent " ref={likeBtn} onClick={handleLikeClick}>
                <i className="mr-2 far fa-heart"></i>
                <span>{props.likeCount}</span>
            </button> */}

			{/* Collaborator Images */}
			{localTokenId && collaboratorList ? (
				<div className="flex items-end justify-between font-secondary text-[#1D1D1D] dark:text-light-200 text-xs">
					<div className="flex items-end -space-x-2">
						{collaboratorList.map((collaborator, index) => {
							return <CollaboratorImage key={index} collaborator={collaborator} />;
						})}
					</div>
					{unsoldTrackData ? (
						<div className="flex flex-col items-end justify-end">
							{/* <span className="dark:text-[#818181]">{numberOfCopies == 1 ? "Single Drop" : <>{numberOfCopies} copies</>}</span> */}
							<span className="dark:text-[#818181] text-end">
								{collaboratorList.length === 5 ? (
									<>{unsoldTrackData.unsoldTokens_size} remaining</>
								) : collaboratorList.length === 4 || collaboratorList.length === 3 ? (
									<>Only {unsoldTrackData.unsoldTokens_size} remaining</>
								) : collaboratorList.length < 3 ? (
									<>Only {unsoldTrackData.unsoldTokens_size} remaining. Hurry!</>
								) : null}
							</span>
						</div>
					) : (
						<span className="dark:text-[#818181]">
							#{localTokenId} of&nbsp;{numberOfCopies}
						</span>
					)}
				</div>
			) : (
				<div className="w-full h-4 mt-2 dark:bg-[#363636] bg-light-300 animate-pulse self-center rounded-lg"></div>
			)}
		</div>
	);
}
