import Image from "next/image";
import { useState, useEffect, useRef, useContext } from "react";
import { useMoralis } from "react-moralis";
import { uploadBase64ToIPFS } from "../../../utils/image-crop/uploadToIPFS";
import uploadImage from "../../../../public/assets/create-nft/upload-image.svg";
import CropImageModal from "./CropImageModal";
import LoadingContext from "../../../../store/loading-context";
import StatusContext from "../../../../store/status-context";

export default function ImageUpload({ coverArtUrl, setCoverArtUrl, setCoverArtMimeType }) {
	const { Moralis } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , , setError] = useContext(StatusContext);
	const [showModal, setShowModal] = useState(false);
	const [imageToCrop, setImageToCrop] = useState(undefined);
	const [croppedImage, setCroppedImage] = useState(undefined);
	const nftCoverArt = useRef(null);
	const circularCrop = false;
	const aspectRatio = { width: 1, height: 1 };
	const cropModalValues = { showModal, setShowModal, imageToCrop, setCroppedImage, circularCrop, aspectRatio };

	useEffect(() => {
		async function setCoverArt() {
			if (croppedImage !== undefined) {
				setCoverArtUrl(croppedImage);
				setLoading(true);
				// Get the uploadFileOnIPFS async function
				try {
					await uploadBase64ToIPFS(Moralis, croppedImage, "cover-art").then((url) => setCoverArtUrl(url));
				} catch (err) {
					if (err.message && err.message == "request entity too large") {
						setError({
							title: "File too large",
							message: "Please select a file with smaller size",
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
				}
				setLoading(false);
			}
		}
		setCoverArt();
	}, [croppedImage, setCoverArtUrl, Moralis, setLoading]);

	const handleImageUpload = async (event) => {
		// If file size is > 10 MB show error box
		if (event.target.files[0] && event.target.files[0].size > 10000000) {
			setError({
				title: "File size too large",
				message: "Uploaded image should be less than 10 MB",
				showErrorBox: true,
			});
			nftCoverArt.current.value = "";
			return;
		}
		const imageURL = URL.createObjectURL(event.target.files[0]);
		setCoverArtMimeType(event.target.files[0].type);
		nftCoverArt.current.value = "";
		setImageToCrop(imageURL);
		setShowModal(true);
	};

	return (
		<>
			<input ref={nftCoverArt} onChange={handleImageUpload} accept="image/*" type="file" className="hidden" id="uploadedNftImage" name="coverArt" />
			<label
				className="flex items-center w-full p-2 mt-5 space-x-5 rounded-lg cursor-pointer bg-light-100 dark:bg-[#2a2a2a] hover:border-[#6cc027] border-2 border-light-100 dark:border-[#2a2a2a] hover:dark:border-[#6cc027]"
				htmlFor="uploadedNftImage"
			>
				<div
					className={
						"flex relative items-center justify-center w-[65px] h-[65px] rounded-lg dark:bg-[#1d1d1d] bg-light-300 border-2 " +
						(coverArtUrl === null ? "border-light-300 dark:border-dark-600" : "border-primary-600 dark:border-primary-600")
					}
				>
					<Image src={uploadImage} objectFit="contain" alt="upload image art digital illustration"></Image>
					<div className={coverArtUrl === null ? "hidden" : "absolute bottom-2 right-1 bg-light-200 rounded-full h-[20px]"}>
						<i className={"text-xl text-primary-600 fas fa-check-circle"}></i>
					</div>
				</div>
				<div className="flex-1 font-secondary">
					<h3 className="font-semibold">UPLOAD COVER ART</h3>
					{coverArtUrl !== null ? (
						<p className="text-sm text-primary-600">Image Uploaded</p>
					) : (
						<p className="text-xs">
							Any Image file | Max file size: 10 MB <br /> Recommended size: 640 x 640 px
						</p>
					)}
				</div>
			</label>
			<CropImageModal {...cropModalValues} />
		</>
	);
}
