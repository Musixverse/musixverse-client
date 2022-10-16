import { useState, useRef, useEffect, useContext } from "react";
import Image from "next/image";
import RequiredAsterisk from "../../../layout/RequiredAsterisk";
import StatusContext from "../../../../store/status-context";

const Step3Form = ({ unlockableContent, setUnlockableContent }) => {
	const [, , , setError] = useContext(StatusContext);

	useEffect(() => {
		if (unlockableContent.exclusiveImages.length > 0) {
			// TOTAL FILE COUNT
			if (unlockableContent.exclusiveImages.length === 1) setImageFilesChosenText(unlockableContent.exclusiveImages.length + " file chosen");
			else setImageFilesChosenText(unlockableContent.exclusiveImages.length + " files chosen");
		}
	}, [unlockableContent.exclusiveImages]);

	useEffect(() => {
		if (unlockableContent.exclusiveAudios.length > 0) {
			// TOTAL FILE COUNT
			if (unlockableContent.exclusiveAudios.length === 1) setAudioFilesChosenText(unlockableContent.exclusiveAudios.length + " file chosen");
			else setAudioFilesChosenText(unlockableContent.exclusiveAudios.length + " files chosen");
		}
	}, [unlockableContent.exclusiveAudios]);

	useEffect(() => {
		if (unlockableContent.exclusiveVideos.length > 0) {
			// TOTAL FILE COUNT
			if (unlockableContent.exclusiveVideos.length === 1) setVideoFilesChosenText(unlockableContent.exclusiveVideos.length + " file chosen");
			else setVideoFilesChosenText(unlockableContent.exclusiveVideos.length + " files chosen");
		}
	}, [unlockableContent.exclusiveVideos]);

	const hiddenMultipleImageFilesInput = useRef(null);
	const hiddenMultipleAudioFilesInput = useRef(null);
	const hiddenMultipleVideoFilesInput = useRef(null);
	const [imageFilesChosenText, setImageFilesChosenText] = useState("No file chosen");
	const [audioFilesChosenText, setAudioFilesChosenText] = useState("No file chosen");
	const [videoFilesChosenText, setVideoFilesChosenText] = useState("No file chosen");

	function bytesToMegaBytes(bytes) {
		var converted = bytes / (1024 * 1024);
		return converted.toFixed(2);
	}

	function handleImageFilesClick() {
		hiddenMultipleImageFilesInput.current.click();
	}

	function handleImageFilesChange() {
		if (!document.getElementById("unlockableImageFiles") || !window.FileReader) return;

		// GET THE FILE INPUT
		var filesInput = document.getElementById("unlockableImageFiles");

		if (filesInput.files.length > 10) {
			filesInput.files = new DataTransfer().files;
			filesInput.value = "";

			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveImages: [],
			}));
			setError({
				title: "Maximum number of images exceeded",
				message: "Please select fewer than 10 images",
				showErrorBox: true,
			});
		}

		// VALIDATE OR CHECK IF ANY FILE IS SELECTED
		if (filesInput.files.length > 0) {
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveImages: Object.entries(filesInput.files).map(([key, currentFile]) => {
					return currentFile;
				}),
			}));
		} else {
			// TOTAL FILE COUNT
			setImageFilesChosenText("No file chosen");
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveImages: [],
			}));
		}
	}

	function handleAudioFilesClick() {
		hiddenMultipleAudioFilesInput.current.click();
	}

	function handleAudioFilesChange() {
		if (!document.getElementById("unlockableAudioFiles") || !window.FileReader) return;

		// GET THE FILE INPUT
		var filesInput = document.getElementById("unlockableAudioFiles");

		if (filesInput.files.length > 10) {
			filesInput.files = new DataTransfer().files;
			filesInput.value = "";

			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveAudios: [],
			}));
			setError({
				title: "Maximum number of files exceeded",
				message: "Please select fewer than 10 files",
				showErrorBox: true,
			});
		}

		// VALIDATE OR CHECK IF ANY FILE IS SELECTED
		if (filesInput.files.length > 0) {
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveAudios: Object.entries(filesInput.files).map(([key, currentFile]) => {
					return currentFile;
				}),
			}));
		} else {
			// TOTAL FILE COUNT
			setAudioFilesChosenText("No file chosen");
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveAudios: [],
			}));
		}
	}

	function handleVideoFilesClick() {
		hiddenMultipleVideoFilesInput.current.click();
	}

	function handleVideoFilesChange() {
		if (!document.getElementById("unlockableVideoFiles") || !window.FileReader) return;

		// GET THE FILE INPUT
		var filesInput = document.getElementById("unlockableVideoFiles");

		if (filesInput.files.length > 10) {
			filesInput.files = new DataTransfer().files;
			filesInput.value = "";

			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveVideos: [],
			}));
			setError({
				title: "Maximum number of files exceeded",
				message: "Please select fewer than 10 files",
				showErrorBox: true,
			});
		}

		// VALIDATE OR CHECK IF ANY FILE IS SELECTED
		if (filesInput.files.length > 0) {
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveVideos: Object.entries(filesInput.files).map(([key, currentFile]) => {
					return currentFile;
				}),
			}));
		} else {
			// TOTAL FILE COUNT
			setVideoFilesChosenText("No file chosen");
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveVideos: [],
			}));
		}
	}

	return (
		<div className="w-full">
			<div className="mb-10 text-5xl font-normal font-tertiary">
				UNLOCKABLE CONTENT
				<p className="text-xs font-primary">
					These are the rewards that will only be exclusively accessible by your top fans, i.e. people who will purchase your NFT
				</p>
			</div>

			<div className="flex flex-col space-y-20 lg:w-full lg:space-x-10 lg:space-y-0 xl:space-x-20 lg:flex-row">
				<div className="font-semibold lg:w-1/2 font-secondary">
					<p className="text-sm">
						ABOUT THE UNLOCKABLE CONTENT
						{/* <RequiredAsterisk /> */}
					</p>
					<textarea
						value={unlockableContent.about ?? ""}
						onChange={(e) => {
							setUnlockableContent((prevState) => ({
								...prevState,
								about: e.target.value,
							}));
						}}
						className={
							"dark:bg-[#323232] dark:focus:bg-[#1a1a1a] dark:border-[#323232] mt-1 w-full p-2 border-[2px] border-[#777777] focus:border-[2px] focus:border-primary-100 dark:focus:border-primary-100 rounded focus:outline-none focus:shadow-none dark:focus:text-primary-100 font-normal resize-none"
						}
						name="msg"
						rows="8"
					></textarea>
					<p className="text-[#777777] font-normal text-xs">
						This should be a pitch about why fans must purchase your music NFT and what unlockable content will they get access to after making the
						purchase
					</p>

					<p className="text-sm mt-8">MESSAGE FROM THE ARTIST</p>
					<textarea
						value={unlockableContent.secretMessage ?? ""}
						onChange={(e) => {
							setUnlockableContent((prevState) => ({
								...prevState,
								secretMessage: e.target.value,
							}));
						}}
						className={
							"dark:bg-[#323232] dark:focus:bg-[#1a1a1a] dark:border-[#323232] mt-1 w-full p-2 border-[2px] border-[#777777] focus:border-[2px] focus:border-primary-100 dark:focus:border-primary-100 rounded focus:outline-none focus:shadow-none dark:focus:text-primary-100 font-normal resize-none"
						}
						name="msg"
						rows="6"
					></textarea>
					<p className="text-[#777777] font-normal text-xs">
						A secret message that you&apos;d like to share with the NFT buyer. This will only be shown to fans who purchase your music NFT. You can
						include details about anything you&apos;d like. Eg. Some details about the exclusive images/audios/videos that you are going to upload,
						or provide instructions to set up a 1:1 call with you. They would be amazed to see this!
					</p>
				</div>

				<div className="font-semibold lg:w-1/2 font-secondary">
					<div>
						<p className="text-sm">EXCLUSIVE IMAGE UPLOADS</p>
						<p className="text-[#777777] font-normal text-xs mb-2">
							These images will only be visible to your top fans who will purchase your music NFTs. Feel free to upload multiple files
						</p>

						<div className="flex items-center mt-2 mb-2">
							<input
								type="button"
								className="bg-primary-100 hover:bg-primary-200 text-light-100 text-sm py-1 px-6 rounded-full cursor-pointer"
								value="Choose Files"
								onClick={handleImageFilesClick}
							/>
							<span className="ml-2 text-sm">{imageFilesChosenText}</span>
						</div>

						<input
							type="file"
							multiple
							accept="image/*"
							id="unlockableImageFiles"
							name="unlockableImageFiles"
							ref={hiddenMultipleImageFilesInput}
							onChange={handleImageFilesChange}
							className="hidden"
						/>

						{unlockableContent.exclusiveImages && unlockableContent.exclusiveImages.length > 0 && (
							<div className="selected-unlockable-content-div">
								{unlockableContent.exclusiveImages.map((currentFile, index) => {
									const imgSrc = URL.createObjectURL(currentFile);
									return (
										<div key={currentFile.name} className="selected-unlockable-content-item">
											<Image src={imgSrc} height={60} width={60} alt="unlockable image" className="rounded" />
											<span className="selected-unlockable-content-span">{currentFile.name}</span>({bytesToMegaBytes(currentFile.size)}
											&nbsp;MB)
										</div>
									);
								})}
							</div>
						)}
					</div>

					<div className="mt-8">
						<p className="text-sm">EXCLUSIVE AUDIO UPLOADS</p>
						<p className="text-[#777777] font-normal text-xs mb-2">
							These audio files will only be visible to your top fans who will purchase your music NFTs. Feel free to upload multiple files
						</p>
						<div className="flex items-center mt-2 mb-2">
							<input
								type="button"
								className="bg-primary-100 hover:bg-primary-200 text-light-100 text-sm py-1 px-6 rounded-full cursor-pointer"
								value="Choose Files"
								onClick={handleAudioFilesClick}
							/>
							<span className="ml-2 text-sm">{audioFilesChosenText}</span>
						</div>
						<input
							type="file"
							multiple
							accept="audio/*"
							id="unlockableAudioFiles"
							name="unlockableAudioFiles"
							ref={hiddenMultipleAudioFilesInput}
							onChange={handleAudioFilesChange}
							className="hidden"
						/>

						{unlockableContent.exclusiveAudios && unlockableContent.exclusiveAudios.length > 0 && (
							<div className="selected-unlockable-content-div">
								{unlockableContent.exclusiveAudios.map((currentFile, index) => {
									return (
										<div key={currentFile.name} className="selected-unlockable-content-item">
											<p>
												<i className="fa-solid fa-record-vinyl text-4xl"></i>
											</p>
											<span className="selected-unlockable-content-span">{currentFile.name}</span>({bytesToMegaBytes(currentFile.size)}
											&nbsp;MB)
										</div>
									);
								})}
							</div>
						)}
					</div>

					<div className="mt-8">
						<p className="text-sm">EXCLUSIVE VIDEO UPLOADS</p>
						<p className="text-[#777777] font-normal text-xs mb-2">
							These videos will only be visible to your top fans who will purchase your music NFTs. Feel free to upload multiple files
						</p>
						<div className="flex items-center mt-2 mb-2">
							<input
								type="button"
								className="bg-primary-100 hover:bg-primary-200 text-light-100 text-sm py-1 px-6 rounded-full cursor-pointer"
								value="Choose Files"
								onClick={handleVideoFilesClick}
							/>
							<span className="ml-2 text-sm">{videoFilesChosenText}</span>
						</div>
						<input
							type="file"
							multiple
							accept="video/*"
							id="unlockableVideoFiles"
							name="unlockableVideoFiles"
							ref={hiddenMultipleVideoFilesInput}
							onChange={handleVideoFilesChange}
							className="hidden"
						/>
						{unlockableContent.exclusiveVideos && unlockableContent.exclusiveVideos.length > 0 && (
							<div className="selected-unlockable-content-div">
								{unlockableContent.exclusiveVideos.map((currentFile, index) => {
									return (
										<div key={currentFile.name} className="selected-unlockable-content-item">
											<Image src={"/assets/video.png"} height={40} width={40} alt="unlockable video" />
											<span className="selected-unlockable-content-span">{currentFile.name}</span>({bytesToMegaBytes(currentFile.size)}
											&nbsp;MB)
										</div>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step3Form;
