import { useState, useRef, useEffect, useContext } from "react";
import Image from "next/future/image";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import StatusContext from "../../../../store/status-context";
import LoadingContext from "../../../../store/loading-context";
import { uploadFileToIPFS } from "../../../utils/image-crop/uploadToIPFS";
import { bytesToMegaBytes } from "../../../utils/Convert";

const Step3Form = ({ unlockableContent, setUnlockableContent }) => {
	const { Moralis } = useMoralis();
	const [, , , setError] = useContext(StatusContext);
	const [, setLoading] = useContext(LoadingContext);

	useEffect(() => {
		if (unlockableContent.exclusiveImages.length > 0) {
			// TOTAL FILE COUNT
			if (unlockableContent.exclusiveImages.length === 1) setImageFilesChosenText(unlockableContent.exclusiveImages.length + " file chosen");
			else setImageFilesChosenText(unlockableContent.exclusiveImages.length + " files chosen");
		} else {
			setImageFilesChosenText("No file chosen");
		}
	}, [unlockableContent.exclusiveImages]);

	useEffect(() => {
		if (unlockableContent.exclusiveAudios.length > 0) {
			// TOTAL FILE COUNT
			if (unlockableContent.exclusiveAudios.length === 1) setAudioFilesChosenText(unlockableContent.exclusiveAudios.length + " file chosen");
			else setAudioFilesChosenText(unlockableContent.exclusiveAudios.length + " files chosen");
		} else {
			setAudioFilesChosenText("No file chosen");
		}
	}, [unlockableContent.exclusiveAudios]);

	useEffect(() => {
		if (unlockableContent.exclusiveVideos.length > 0) {
			// TOTAL FILE COUNT
			if (unlockableContent.exclusiveVideos.length === 1) setVideoFilesChosenText(unlockableContent.exclusiveVideos.length + " file chosen");
			else setVideoFilesChosenText(unlockableContent.exclusiveVideos.length + " files chosen");
		} else {
			setVideoFilesChosenText("No file chosen");
		}
	}, [unlockableContent.exclusiveVideos]);

	const hiddenMultipleImageFilesInput = useRef(null);
	const hiddenMultipleAudioFilesInput = useRef(null);
	const hiddenMultipleVideoFilesInput = useRef(null);
	const [imageFilesChosenText, setImageFilesChosenText] = useState("No file chosen");
	const [audioFilesChosenText, setAudioFilesChosenText] = useState("No file chosen");
	const [videoFilesChosenText, setVideoFilesChosenText] = useState("No file chosen");

	function handleImageFilesClick() {
		hiddenMultipleImageFilesInput.current.click();
	}

	async function handleImageFilesChange() {
		if (!document.getElementById("unlockableImageFiles") || !window.FileReader) return;

		// GET THE FILE INPUT
		var filesInput = document.getElementById("unlockableImageFiles");

		if (filesInput.files.length > 10) {
			filesInput.files = new DataTransfer().files;
			filesInput.value = "";

			setImageFilesChosenText("No file chosen");
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveImages: [],
			}));
			setError({
				title: "Maximum number of images exceeded",
				message: "Please select fewer than 10 images",
				showErrorBox: true,
			});
			return;
		}

		// VALIDATE OR CHECK IF ANY FILE IS SELECTED
		if (filesInput.files.length > 0) {
			if (filesInput.files.length == 1) {
				setLoading({ status: true, title: "Uploading Image", message: "Please wait while we upload your file..." });
			} else {
				setLoading({ status: true, title: "Uploading Images", message: "Please wait while we upload your files..." });
			}

			const _exclusiveImages = [];
			for (let currentFile of filesInput.files) {
				try {
					// If file size is > 200 MB show error box
					if (currentFile.size > 200000000) {
						setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
						setError({
							title: "File size too large",
							message: "Uploaded file should be less than 200 MB",
							showErrorBox: true,
						});
						return;
					}
					const formData = new FormData();
					formData.append("ethAddress", Moralis.User.current().attributes.ethAddress);
					formData.append("fileType", "exclusive-image");
					formData.append("file", currentFile);

					const ipfsUrl = await uploadFileToIPFS(formData, setLoading).then((url) => {
						return url;
					});
					_exclusiveImages.push({ file: currentFile, ipfsUrl: ipfsUrl });
				} catch (error) {
					console.error(error);
					setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
					if (error.message && error.message == "request entity too large") {
						setError({
							title: "File too large",
							message: "Please select files with smaller size",
							showErrorBox: true,
						});
					} else {
						setError((prevState) => ({
							...prevState,
							title: "Oops! Something went wrong.",
							message: "Please try again later.",
							showErrorBox: true,
						}));
					}
					return;
				}
			}

			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveImages: _exclusiveImages,
			}));
			setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
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

	async function handleAudioFilesChange() {
		if (!document.getElementById("unlockableAudioFiles") || !window.FileReader) return;

		// GET THE FILE INPUT
		var filesInput = document.getElementById("unlockableAudioFiles");

		if (filesInput.files.length > 10) {
			filesInput.files = new DataTransfer().files;
			filesInput.value = "";

			setAudioFilesChosenText("No file chosen");
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveAudios: [],
			}));
			setError({
				title: "Maximum number of files exceeded",
				message: "Please select fewer than 10 files",
				showErrorBox: true,
			});
			return;
		}

		// VALIDATE OR CHECK IF ANY FILE IS SELECTED
		if (filesInput.files.length > 0) {
			if (filesInput.files.length == 1) {
				setLoading({ status: true, title: "Uploading Audio", message: "Please wait while we upload your file..." });
			} else {
				setLoading({ status: true, title: "Uploading Audios", message: "Please wait while we upload your files..." });
			}

			const _exclusiveAudios = [];
			for (let currentFile of filesInput.files) {
				try {
					// If file size is > 200 MB show error box
					if (currentFile.size > 200000000) {
						setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
						setError({
							title: "File size too large",
							message: "Uploaded file should be less than 200 MB",
							showErrorBox: true,
						});
						return;
					}

					const formData = new FormData();
					formData.append("ethAddress", Moralis.User.current().attributes.ethAddress);
					formData.append("fileType", "exclusive-audio");
					formData.append("file", currentFile);

					const ipfsUrl = await uploadFileToIPFS(formData, setLoading).then((url) => {
						return url;
					});
					_exclusiveAudios.push({ file: currentFile, ipfsUrl: ipfsUrl });
				} catch (error) {
					console.error(error);
					setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
					if (error.message && error.message == "request entity too large") {
						setError({
							title: "File too large",
							message: "Please select files with smaller size",
							showErrorBox: true,
						});
					} else {
						setError((prevState) => ({
							...prevState,
							title: "Oops! Something went wrong.",
							message: "Please try again later.",
							showErrorBox: true,
						}));
					}
					return;
				}
			}

			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveAudios: _exclusiveAudios,
			}));
			setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
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

	async function handleVideoFilesChange() {
		if (!document.getElementById("unlockableVideoFiles") || !window.FileReader) return;

		// GET THE FILE INPUT
		var filesInput = document.getElementById("unlockableVideoFiles");

		if (filesInput.files.length > 10) {
			filesInput.files = new DataTransfer().files;
			filesInput.value = "";

			setVideoFilesChosenText("No file chosen");
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveVideos: [],
			}));
			setError({
				title: "Maximum number of files exceeded",
				message: "Please select fewer than 10 files",
				showErrorBox: true,
			});
			return;
		}

		// VALIDATE OR CHECK IF ANY FILE IS SELECTED
		if (filesInput.files.length > 0) {
			if (filesInput.files.length == 1) {
				setLoading({ status: true, title: "Uploading Video", message: "Please wait while we upload your file..." });
			} else {
				setLoading({ status: true, title: "Uploading Videos", message: "Please wait while we upload your files..." });
			}

			const _exclusiveVideos = [];
			for (let currentFile of filesInput.files) {
				try {
					// If file size is > 200 MB show error box
					if (currentFile.size > 200000000) {
						setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
						setError({
							title: "File size too large",
							message: "Uploaded file should be less than 200 MB",
							showErrorBox: true,
						});
						return;
					}

					const formData = new FormData();
					formData.append("ethAddress", Moralis.User.current().attributes.ethAddress);
					formData.append("fileType", "exclusive-video");
					formData.append("file", currentFile);

					const ipfsUrl = await uploadFileToIPFS(formData, setLoading).then((url) => {
						return url;
					});
					_exclusiveVideos.push({ file: currentFile, ipfsUrl: ipfsUrl });
				} catch (error) {
					console.error(error);
					setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
					if (error.message && error.message == "request entity too large") {
						setError({
							title: "File too large",
							message: "Please select files with smaller size",
							showErrorBox: true,
						});
					} else {
						setError((prevState) => ({
							...prevState,
							title: "Oops! Something went wrong.",
							message: "Please try again later.",
							showErrorBox: true,
						}));
					}
					return;
				}
			}

			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveVideos: _exclusiveVideos,
			}));
			setLoading({ status: false, title: "", message: "", showProgressBar: false, progress: 0 });
		} else {
			// TOTAL FILE COUNT
			setVideoFilesChosenText("No file chosen");
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveVideos: [],
			}));
		}
	}

	const deleteUnlockableItem = (unlockableContentType, index) => {
		if (unlockableContentType === "exclusiveImages") {
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveImages: prevState.exclusiveImages.filter((_, i) => i !== index),
			}));
		} else if (unlockableContentType === "exclusiveAudios") {
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveAudios: prevState.exclusiveAudios.filter((_, i) => i !== index),
			}));
		} else if (unlockableContentType === "exclusiveVideos") {
			setUnlockableContent((prevState) => ({
				...prevState,
				exclusiveVideos: prevState.exclusiveVideos.filter((_, i) => i !== index),
			}));
		}
	};

	return (
		<div className="w-full">
			<div className="mb-10 text-5xl font-normal font-tertiary">
				UNLOCKABLE CONTENT
				<p className="text-xs font-primary">These rewards are exclusively accessible by your top fans, i.e. people who will purchase your NFT</p>
			</div>

			<div className="flex flex-col space-y-20 lg:w-full lg:space-x-10 lg:space-y-0 xl:space-x-20 lg:flex-row">
				<div className="font-semibold lg:w-1/2 font-secondary">
					{/* <p className="text-sm">
						ABOUT THE UNLOCKABLE CONTENT
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
							"dark:bg-[#323232] dark:focus:bg-[#1a1a1a] dark:border-[#323232] mt-1 w-full p-2 border-[2px] border-[#777777] focus:border-[2px] focus:border-primary-500 dark:focus:border-primary-500 rounded focus:outline-none focus:shadow-none dark:focus:text-primary-500 font-normal resize-none"
						}
						name="msg"
						rows="8"
					></textarea>
					<p className="text-[#777777] font-normal text-xs">
						This should be a pitch about why fans must purchase your music NFT and what unlockable content will they get access to after making the
						purchase
					</p> */}

					<p className="text-sm">MESSAGE FROM THE ARTIST</p>
					<textarea
						value={unlockableContent.secretMessage ?? ""}
						onChange={(e) => {
							setUnlockableContent((prevState) => ({
								...prevState,
								secretMessage: e.target.value,
							}));
						}}
						className={
							"dark:bg-[#323232] dark:focus:bg-[#1a1a1a] dark:border-[#323232] mt-1 w-full p-2 border-[2px] border-[#777777] focus:border-[2px] focus:border-primary-500 dark:focus:border-primary-500 rounded focus:outline-none focus:shadow-none dark:focus:text-primary-500 font-normal resize-none"
						}
						name="msg"
						rows="12"
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
								className="bg-primary-500 hover:bg-primary-600 text-light-100 text-sm py-1 px-6 rounded-full cursor-pointer"
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
								{unlockableContent.exclusiveImages.map((item, index) => {
									return (
										<div key={item.file.name} className="flex">
											<div className="selected-unlockable-content-item">
												<Link href={item.ipfsUrl} passHref>
													<a target="_blank" rel="noopener noreferrer" className="-mb-1 relative w-[60px] h-[60px]">
														<Image src={item.ipfsUrl} alt="unlockable image" className="object-contain rounded" fill quality={50} />
													</a>
												</Link>
												<span className="selected-unlockable-content-span">{item.file.name}</span>({bytesToMegaBytes(item.file.size)}
												&nbsp;MB)
											</div>
											<div
												onClick={() => deleteUnlockableItem("exclusiveImages", index)}
												className="-ml-6 w-5 h-5 flex justify-center items-center rounded-full transition-all duration-200 cursor-pointer text-light-100 bg-error-400 hover:bg-error-500 z-10"
											>
												<i className="fa-solid fa-xmark text-xs"></i>
											</div>
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
								className="bg-primary-500 hover:bg-primary-600 text-light-100 text-sm py-1 px-6 rounded-full cursor-pointer"
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
								{unlockableContent.exclusiveAudios.map((item, index) => {
									return (
										<div key={item.file.name} className="flex">
											<div className="selected-unlockable-content-item">
												<Link href={item.ipfsUrl} passHref>
													<a target="_blank" rel="noopener noreferrer">
														<i className="fa-solid fa-record-vinyl text-4xl"></i>
													</a>
												</Link>
												<span className="selected-unlockable-content-span">{item.file.name}</span>({bytesToMegaBytes(item.file.size)}
												&nbsp;MB)
											</div>
											<div
												onClick={() => deleteUnlockableItem("exclusiveAudios", index)}
												className="-ml-6 w-5 h-5 flex justify-center items-center rounded-full transition-all duration-200 cursor-pointer text-light-100 bg-error-400 hover:bg-error-500 z-10"
											>
												<i className="fa-solid fa-xmark text-xs"></i>
											</div>
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
								className="bg-primary-500 hover:bg-primary-600 text-light-100 text-sm py-1 px-6 rounded-full cursor-pointer"
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
								{unlockableContent.exclusiveVideos.map((item, index) => {
									return (
										<div key={item.file.name} className="flex">
											<div className="selected-unlockable-content-item">
												<Link href={item.ipfsUrl} passHref>
													<a target="_blank" rel="noopener noreferrer" className="-mb-1">
														<Image src={"/assets/video.png"} height={40} width={40} alt="unlockable video" />
													</a>
												</Link>
												<span className="selected-unlockable-content-span">{item.file.name}</span>({bytesToMegaBytes(item.file.size)}
												&nbsp;MB)
											</div>
											<div
												onClick={() => deleteUnlockableItem("exclusiveVideos", index)}
												className="-ml-6 w-5 h-5 flex justify-center items-center rounded-full transition-all duration-200 cursor-pointer text-light-100 bg-error-400 hover:bg-error-500 z-10"
											>
												<i className="fa-solid fa-xmark text-xs"></i>
											</div>
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
