import { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import convertDataURLtoFile from "../../../utils/image-crop/convertDataURLtoFile";
import uploadFileToIPFS from "../../../utils/image-crop/uploadFileToIPFS";
import LoadingContext from "../../../../store/loading-context";
import StatusContext from "../../../../store/status-context";
import CropImageModal from "../../CreateNFT/CreateNFTUtils/CropImageModal";
import Tooltip from "../../../layout/Tooltip/Tooltip";

export default function CoverPhoto({ coverImage, setCoverImage }) {
	const coverPictureInput = useRef(null);
	const { Moralis } = useMoralis();
	const [, setLoading] = useContext(LoadingContext);
	const [, , , setError] = useContext(StatusContext);
	//Crop Modal states
	const [showModal, setShowModal] = useState(false);
	const [imageToCrop, setImageToCrop] = useState(undefined);
	const [croppedImage, setCroppedImage] = useState(undefined);

	// const [coverPhoto, setCoverPhoto] = useState(coverImage === undefined? coverImage : "https://ipfs.moralis.io:2053/ipfs/Qmcn1aZ4PKUUzwpTncuSbruwLD98dtiNqvoJG5zm8EMwXZ");
	// console.log({thisL:coverImage});
	// console.log("coverpooho",coverPhoto);
	const aspectRatio = { width: 1918, height: 350 };
	const circularCrop = false;
	const cropModalValues = { showModal, setShowModal, imageToCrop, setCroppedImage, circularCrop, aspectRatio };

	useEffect(() => {
		async function setCoverPhoto() {
			if (croppedImage !== undefined) {
				setLoading(true);

				// Get the uploadFileOnIPFS async function
				try {
					await uploadFileToIPFS(Moralis, croppedImage, "cover-image").then((url) => {
						setLoading(false);
						setCoverImage(url);
					});
				} catch (err) {
					setLoading(false);
					setError((prevState) => ({
						...prevState,
						title: "Oops! Something went wrong.",
						message: "Please try again later.",
						showErrorBox: true,
					}));
				}
			}
			setCoverPhoto();
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
						<div className="w-full rounded-lg relative overflow-hidden aspect-[5.48]">
							<Image
								src={
									croppedImage
										? croppedImage
										: coverImage
										? coverImage
										: "https://ipfs.moralis.io:2053/ipfs/Qmcn1aZ4PKUUzwpTncuSbruwLD98dtiNqvoJG5zm8EMwXZ"
								}
								objectFit="contain"
								layout="fill"
								alt="cover photo"
								priority
							/>
						</div>
					</div>
					<input ref={coverPictureInput} type="file" id="upload-cover-image" onChange={handleCoverChange} accept="image/*" className="hidden" />
					<label
						className="absolute flex items-center justify-center p-2 pr-1 rounded-lg cursor-pointer -right-3 -bottom-2 bg-dark-800"
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
