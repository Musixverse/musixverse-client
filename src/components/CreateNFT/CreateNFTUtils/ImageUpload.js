import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import convertDataURLtoFile from "../../../utils/image-crop/convertDataURLtoFile";
import uploadFileToIPFS from "../../../utils/image-crop/uploadFileToIPFS";
import uploadImage from "../../../../public/assets/create-nft/upload-image.svg";
import CropImageModal from "./CropImageModal";
import { useMoralis } from "react-moralis";

export default function ImageUpload({ uploadedImage, setUploadedImage }) {
    const { Moralis } = useMoralis();
    const [showModal, setShowModal] = useState(false);
    const [imageToCrop, setImageToCrop] = useState(undefined);
    const [croppedImage, setCroppedImage] = useState(undefined);
    const nftCoverArt = useRef(null);
    const circularCrop = false;
    const aspectRatio = {width: 1, height: 1};
    const cropModalValues = { showModal, setShowModal, imageToCrop, setCroppedImage, circularCrop, aspectRatio };

    useEffect(() => {
        if (croppedImage !== undefined) {
            setUploadedImage(croppedImage);
            // Get the File from DataURL
            const uploadedFile = convertDataURLtoFile(croppedImage, "file");
            // Get the uploadFileOnIPFS async function
            uploadFileToIPFS(Moralis, uploadedFile).then((url) => setUploadedImage(url));
        }
    }, [croppedImage, setUploadedImage]);

    const handleImageUpload = (event) => {
        // uploadFileToIPFS(Moralis, event.target.files[0]).then((url) => setUploadedImage(url));
        const imageURL = URL.createObjectURL(event.target.files[0]);
        console.log("triggered", imageURL, imageToCrop);
        nftCoverArt.current.value = "";
        setImageToCrop(imageURL);
        setShowModal(true);
    };

    return (
        <>
            <input ref={nftCoverArt} onChange={handleImageUpload} accept="image/*" type="file" className="hidden" id="uploadedNftImage" name="coverArt" />
            <label
                className="flex items-center w-full p-2 space-x-5 rounded-lg cursor-pointer bg-light-100 dark:bg-[#2a2a2a] hover:border-[#6cc027] border-2 border-light-100 dark:border-[#2a2a2a] hover:dark:border-[#6cc027]"
                htmlFor="uploadedNftImage"
            >
                <div
                    className={
                        "flex relative items-center justify-center w-[65px] h-[65px] rounded-lg dark:bg-[#1d1d1d] bg-light-300 border-2 " +
                        (uploadedImage === null ? "border-light-300 dark:border-dark-100" : "border-primary-200 dark:border-primary-200")
                    }
                >
                    <Image src={uploadImage} objectFit="contain" alt="upload image art digital illustration"></Image>
                    <div className={uploadedImage === null ? "hidden" : "absolute bottom-2 right-1 bg-light-200 rounded-full h-[20px]"}>
                        <i className={"text-xl text-primary-200 fas fa-check-circle"}></i>
                    </div>
                </div>
                <div className="flex-1 font-secondary">
                    <h3 className="font-semibold">UPLOAD COVER ART</h3>
                    {uploadedImage !== null ? (
                        <p className="text-sm text-primary-200">Image Uploaded</p>
                    ) : (
                        <p className="text-sm">Recommended size: 300px X 300px</p>
                    )}
                </div>
            </label>
            <CropImageModal {...cropModalValues} />
        </>
    );
}