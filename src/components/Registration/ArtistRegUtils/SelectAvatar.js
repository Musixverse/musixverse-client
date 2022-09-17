import { useRef, useState, useEffect, useContext } from "react";
import { useMoralis } from "react-moralis";
import DefaultAvatar from "./DefaultAvatar";
import convertDataURLtoFile from "../../../utils/image-crop/convertDataURLtoFile";
import uploadFileToIPFS from "../../../utils/image-crop/uploadFileToIPFS";
import CropImageModal from "../../CreateNFT/CreateNFTUtils/CropImageModal";
import LoadingContext from "../../../../store/loading-context";

export default function SelectAvatar({ uploadFile, setAvatar }) {
	const [showModal, setShowModal] = useState(false);
	const [imageToCrop, setImageToCrop] = useState(undefined);
	const [croppedImage, setCroppedImage] = useState(undefined);
	const { Moralis } = useMoralis();
	const [isLoading, setLoading] = useContext(LoadingContext);
	const uploadedImage = useRef(null);
	const uploadImage = useRef(null);

	useEffect(() => {
		async function setProfileImage() {
			if (croppedImage !== undefined) {
				uploadedImage.current.src = croppedImage;
				// Get the File from DataURL
				const uploadedFile = convertDataURLtoFile(croppedImage, "file");
				setLoading(true);
				// Get the uploadFileOnIPFS async function
				await uploadFileToIPFS(Moralis, uploadedFile).then((url) => {
					setAvatar(url);
					setLoading(false);
				});
			}
		}
		setProfileImage();
	}, [croppedImage, setAvatar]);

	const circularCrop = true;
	const aspectRatio = { width: 1, height: 1 };
	// console.log(showModal);
	// const cropModalValues = { showModal, setShowModal, imageToCrop, setCroppedImage, circularCrop, aspectRatio };

	// Array of default urls
	const urls = [
		"https://ipfs.moralis.io:2053/ipfs/QmbeQE3qktnDF7DZnsi51MoBNHTM8b3uMKyLQkwHPy8WW7",
		"https://ipfs.moralis.io:2053/ipfs/QmRnHRffz2gzAdzsf8TdXGR4zAQA6EBd7gcsB9owgD1Soy",
		"https://ipfs.moralis.io:2053/ipfs/QmY1cUn6shTZafoZmdHxtpBJYV3MzTg9LGhe8vtAXdqDsv",
		"https://ipfs.moralis.io:2053/ipfs/QmTe7MQehzR426oU8MvgksAEUr5ZzGnx42GmsT2KQSSkjd",
		"https://ipfs.moralis.io:2053/ipfs/QmaYmZEt1qohGeDF8YupUM1Q786knd75iCb8jH3vGyV5xy",
		"https://ipfs.moralis.io:2053/ipfs/QmSYaJ1bS53MxbBvVZfoWcvis1JoS46ESJY9EJcAGNXaNk",
	];

	const handleImageSelection = (selectedUrl) => {
		const el = uploadedImage.current;
		el.src = selectedUrl;
		// Reset the uploaded file
		uploadImage.current.value = "";
		setAvatar(el.src);
	};

	const handleImageUpload = (event) => {
		const imageURL = URL.createObjectURL(event.target.files[0]);
		uploadImage.current.value = "";
		setImageToCrop(imageURL);
		setShowModal(true);
	};

	return (
		<>
			<div className="flex">
				<img className={"w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full"} ref={uploadedImage} src={urls[0]} alt="Selected Avatar"></img>

				{/* Avatars */}
				<div className="max-w-[200px] ml-5">
					<p className="text-secondary text-[14px] sm:text-[15px] mb-2 font-secondary">Upload or select an Avatar</p>
					<div className="grid grid-cols-4 gap-x-1 gap-y-2">
						<DefaultAvatar onImageSelection={handleImageSelection} urls={urls} />
						<label
							htmlFor="upload-avatar"
							className="flex items-center justify-center
                        text-dark-200 cursor-pointer w-[30px] h-[30px] sm:w-[39px] sm:h-[39px] rounded-full bg-light-300 hover:bg-[#bad9d5] text-[18px] sm:text-[20px]"
						>
							<i className="text-dark-200 fa fa-upload"></i>
						</label>
					</div>
					<input ref={uploadImage} className="hidden" onChange={handleImageUpload} type={"file"} id="upload-avatar" accept="image/*" />
				</div>
			</div>
			<CropImageModal {...{ showModal, setShowModal, imageToCrop, setCroppedImage, circularCrop, aspectRatio }} />
		</>
	);
}
