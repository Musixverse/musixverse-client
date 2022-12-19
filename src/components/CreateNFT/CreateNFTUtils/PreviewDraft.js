import Image from "next/image";
import { useRef } from "react";
import { useMoralis } from "react-moralis";
import { truncatePrice } from "../../../utils/GetMarketPrice";

export default function PreviewDraft({ draft, setDeleteModalOpen, setDraftToDelete, chosenProfileOrBand }) {
	const { user } = useMoralis();

	const playBtn = useRef(null);
	const audio = useRef(null);

	let truncatedNftName = draft.title;
	if (draft.title.length > 10) {
		truncatedNftName = truncatedNftName.substring(0, 8) + "...";
	}

	const truncatednftPrice = truncatePrice(draft.nftPrice);

	const playTrackHandler = () => {
		const playPause = playBtn.current.children[0];
		const isPaused = playPause.classList.contains("fa-play");

		if (isPaused) playTrack(playPause);
		else pauseTrack(playPause);
	};

	const pauseTrack = (controller) => {
		controller.classList.add("fa-play");
		controller.classList.remove("fa-pause");

		audio.current.pause();
	};

	const playTrack = (controller) => {
		controller.classList.remove("fa-play");
		controller.classList.add("fa-pause");

		audio.current.play();
	};

	const resetProgress = () => {
		pauseTrack(playBtn.current.children[0]);
		audio.current.currentTime = 0;
	};

	return (
		<>
			<div
				className={
					"w-fit group flex flex-col overflow-hidden rounded-2xl shadow-lg duration-300 " + (setDeleteModalOpen && "hover:shadow-2xl cursor-pointer")
				}
			>
				{/* Uploaded Art */}
				<div className="relative w-[222px] h-[200px] overflow-hidden rounded-t-xl">
					{/* Cover art of NFT */}
					{draft.artwork.uri === null ? (
						<div className="dark:bg-[#363636] bg-light-300 w-full h-full rounded-t-xl"></div>
					) : (
						<div className="relative w-full h-full">
							<Image
								src={draft.artwork.uri}
								className="group-hover:scale-110 group-hover:duration-500 duration-500"
								alt="nft cover art"
								objectFit="cover"
								layout="fill"
								priority
							/>
						</div>
					)}
					{/* NFT audio file */}
					{draft.audio == null ? null : (
						<div className="z-[1] absolute bottom-0 right-0 p-2">
							<button
								type="button"
								ref={playBtn}
								onClick={playTrackHandler}
								className="h-[40px] w-[40px] bg-primary-500 rounded-full flex items-center justify-center"
							>
								<i className="text-lg fas fa-play text-light-200"></i>
							</button>
							<audio ref={audio} className="hidden" src={draft.audio} onEnded={resetProgress}></audio>
						</div>
					)}
				</div>

				{/* Content provided */}
				<div className="dark:bg-dark-800 bg-light-100 w-[222px] h-[128px] p-4 rounded-b-xl flex flex-col justify-between">
					<div className="flex justify-between w-full">
						<div className="flex flex-col">
							<p className="font-secondary text-[#1D1D1D] text-xs text-start dark:text-light-300">
								{user && chosenProfileOrBand.objectId === "profile"
									? draft.collaboratorList[0].name
									: user && chosenProfileOrBand.objectId !== "profile"
									? chosenProfileOrBand.name
									: null}
							</p>
							<p className="font-semibold font-primary text-[#1D1D1D] dark:text-light-200 text-lg">{truncatedNftName}</p>
						</div>
						{truncatednftPrice && (
							<div className="flex flex-col">
								<p className="font-secondary text-xs text-end dark:text-light-300">Price</p>
								<div className="flex items-center font-semibold">
									<Image src={"/assets/matic-logo.svg"} width={16} height={16} alt="matic logo" />
									<span className="ml-1 sm:text-lg">{truncatednftPrice == 0 ? 0 : truncatednftPrice}</span>
								</div>
							</div>
						)}
					</div>

					<div className="flex items-end justify-between font-secondary text-[#1D1D1D] dark:text-light-200 text-xs">
						<div className="flex -space-x-2 items-end">
							{draft.collaboratorList &&
								draft.collaboratorList.map((collaborator, index) => {
									return collaborator.avatar ? (
										<div key={index} className={`rounded-full flex items-end relative`}>
											<Image src={collaborator.avatar} height="30" width="30" alt="collaborator's avatar" className="rounded-full" />
										</div>
									) : null;
								})}
						</div>

						{setDeleteModalOpen && (
							<button
								type="button"
								onClick={(e) => {
									e.preventDefault();
									setDeleteModalOpen(true);
									setDraftToDelete(draft);
								}}
							>
								<div className="hidden group-hover:block justify-center items-center text-base hover:text-error-600">
									<i className="fa-solid fa-trash"></i>
								</div>
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
