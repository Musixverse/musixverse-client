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
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = function (e) {
                // props.setUploadedSong(e.target.result);
                const image = e.target.result;
                // Set the modal visible and set uploaded image state
                setImageToCrop(image);
                setShowModal(true);
            }
            // reader.readAsDataURL(file);
            // reader.addEventListener("load", () => {
            //     const image = reader.result;
            //     // Set the modal visible and set uploaded image state
            //     setImageToCrop(image);
            //     setShowModal(true);
            // });
      
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return(
        <>
            <input onChange={handleImageUpload} accept="image/*" type="file" required className="hidden" id="uploadedNftImage"/>
            <label className="flex items-center w-full p-2 space-x-5 rounded-lg cursor-pointer bg-light-100" htmlFor="uploadedNftImage">
                {croppedImage === undefined? 
                    <div className="flex items-center justify-center w-[65px] h-[65px] rounded-lg bg-light-300">
                        <Image src={uploadImage} objectFit="contain" alt="upload image art digital illustration"></Image>
                    </div>
                    :
                    <div className="w-[65px] h-[65px] rounded-lg overflow-hidden">
                        <Image src={croppedImage} objectFit="cover" width={65} height={65} alt="upload image art digital illustration"></Image>
                    </div>
                }
                <div className="flex items-center justify-between flex-1">
                    <div className="font-secondary">
                        <h3 className="font-semibold">UPLOAD COVER ART</h3>
                        <p className="text-sm">Recommended size: 300px X 300px</p>
                    </div>
                    <div className={croppedImage === undefined? "hidden":""}>
                        <i className="mr-8 text-xl text-primary-200 fas fa-check-circle"></i>
                    </div>
                </div>
            </label>
            <CropImageModal {...cropModalValues}/>
        </>
    );
}