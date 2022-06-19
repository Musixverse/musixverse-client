import Image from "next/image";
import { useState } from "react";
import uploadImage from "../../../../public/assets/create-nft/upload-image.svg";
import CropImageModal from "./CropImageModal";

export default function ImageUpload(props){
    const [showModal, setShowModal] = useState(false);
    const [imageToCrop, setImageToCrop] = useState(undefined);
    const [croppedImage, setCroppedImage] = useState(undefined);
    const cropModalValues = {showModal, setShowModal, imageToCrop, setCroppedImage};
    console.log(croppedImage);
    if(croppedImage !== undefined)
        props.setUploadedImage(croppedImage);

    const handleImageUpload = (event)=>{
        const imageURL = URL.createObjectURL(event.target.files[0]);
        setImageToCrop(imageURL);
        setShowModal(true);
        // if (event.target.files && event.target.files.length > 0) {
        //     const reader = new FileReader();
        //     reader.onload = function (e) {
        //         // props.setUploadedSong(e.target.result);
        //         const image = e.target.result;
        //         // Set the modal visible and set uploaded image state
        //         setImageToCrop(image);
        //         setShowModal(true);
        //     }
            // reader.readAsDataURL(file);
            // reader.addEventListener("load", () => {
            //     const image = reader.result;
            //     // Set the modal visible and set uploaded image state
            //     setImageToCrop(image);
            //     setShowModal(true);
            // });
      
            // reader.readAsDataURL(event.target.files[0]);
        // }
    }

    return(
        <>
            <input onChange={handleImageUpload} accept="image/*" type="file" required className="hidden" id="uploadedNftImage"/>
            <label className="flex items-center w-full p-2 space-x-5 rounded-lg cursor-pointer bg-light-100 dark:bg-[#2a2a2a] hover:border-[#6cc027] border-2 border-light-100 dark:border-[#2a2a2a] hover:dark:border-[#6cc027]" htmlFor="uploadedNftImage">
                <div className={"flex relative items-center justify-center w-[65px] h-[65px] rounded-lg dark:bg-[#1d1d1d] bg-light-300 border-2 " + (croppedImage === undefined? "border-light-300 dark:border-dark-100":"border-primary-200 dark:border-primary-200")}>
                    <Image src={uploadImage} objectFit="contain" alt="upload image art digital illustration"></Image>
                    <div className={(croppedImage === undefined? "hidden":"absolute bottom-2 right-1 bg-light-200 rounded-full h-[20px]")}>
                        <i className={"text-xl text-primary-200 fas fa-check-circle"}></i>
                    </div>
                </div>
                <div className="flex-1 font-secondary">
                    <h3 className="font-semibold">UPLOAD COVER ART</h3>
                    {croppedImage && <p className="text-sm text-primary-200">Image Uploaded</p> || <p className="text-sm">Recommended size: 300px X 300px</p>}
                </div>
            </label>
            <CropImageModal {...cropModalValues}/>
        </>
    );
}