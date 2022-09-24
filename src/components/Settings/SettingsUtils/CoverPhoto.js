import { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import convertDataURLtoFile from "../../../utils/image-crop/convertDataURLtoFile";
import uploadFileToIPFS from "../../../utils/image-crop/uploadFileToIPFS";
import LoadingContext from "../../../../store/loading-context";
import CropImageModal from "../../CreateNFT/CreateNFTUtils/CropImageModal";
import Tooltip from "../../../layout/Tooltip/Tooltip";

export default function CoverPhoto({ coverImage, setCoverImage }) {
	const coverPicture = useRef(null);
	const coverPictureInput = useRef(null);
	const { Moralis } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	//Crop Modal states
	const [showModal, setShowModal] = useState(false);
	const [imageToCrop, setImageToCrop] = useState(undefined);
	const [croppedImage, setCroppedImage] = useState(undefined);
	const aspectRatio = { width: 1918, height: 350 };
	const circularCrop = false;
	const cropModalValues = { showModal, setShowModal, imageToCrop, setCroppedImage, circularCrop, aspectRatio };

	useEffect(() => {
		if (croppedImage !== undefined) {
			setLoading(true);
			coverPicture.current.src = croppedImage;
			// Get the File from DataURL
			const uploadedFile = convertDataURLtoFile(croppedImage, "file");
			// Get the uploadFileOnIPFS async function

			uploadFileToIPFS(Moralis, uploadedFile).then((url) => {
				setLoading(false);
				console.log(url);
				setCoverImage(url);
			});
		}
	}, [Moralis, croppedImage, setCoverImage, setLoading]);

	const handleCoverChange = (event) => {
		const imageURL = URL.createObjectURL(event.target.files[0]);
		coverPictureInput.current.value = "";
		setImageToCrop(imageURL);
		setShowModal(true);
	};

	return (
		<>
			<div className="flex flex-col flex-1">
				<p className="mb-2 text-sm font-medium md:text-base md:mb-5 font-secondary">
					Cover Photo
					<Tooltip 
					 	labelText={<i className="ml-2 text-base md:text-lg fa fa-info-circle"></i>}
						message={"Recommended dimensions:		 1500 x 500 px"}
						tooltipLocation={"bottom"}
					/>
				</p>
				<label className="relative w-full h-fit" htmlFor="upload-cover-image">
					<div className={"w-full h-full hover:cursor-pointer"}>
						<img
							src={coverImage || "https://ipfs.moralis.io:2053/ipfs/Qmcn1aZ4PKUUzwpTncuSbruwLD98dtiNqvoJG5zm8EMwXZ"}
							className="w-full rounded-lg aspect-[5.48]"
							alt="cover photo"
							ref={coverPicture}
						></img>
					</div>
					<input ref={coverPictureInput} type="file" id="upload-cover-image" onChange={handleCoverChange} accept="image/*" className="hidden" />
					<label
						className="absolute flex items-center justify-center p-2 pr-1 rounded-lg cursor-pointer -right-3 -bottom-2 bg-dark-200"
						htmlFor="upload-cover-image"
					>
						<i className="far fa-edit text-light-200"></i>
					</label>
				</label>
			</div>
			<CropImageModal {...cropModalValues} />
		</>
	);
}
