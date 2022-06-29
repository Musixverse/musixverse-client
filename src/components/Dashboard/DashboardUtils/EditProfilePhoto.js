import { useEffect, useRef, useState } from "react";
import { useMoralis } from "react-moralis";
import CustomButton from "../../../layout/CustomButton";
import CropImageModal from "../../CreateNFT/CreateNFTUtils/CropImageModal";

export default function EditProfilePhoto({ avatar, setAvatar, handleSave }) {
    /**
     * On this page:
     * Circular Crop feature (Done)
     * Moralis file upload (Pending)
     * Revoke Object URLs (Partially done)
     */
    const profilePicture = useRef(null);
    const { Moralis } = useMoralis();
    const [showModal, setShowModal] = useState(false);
    const [imageToCrop, setImageToCrop] = useState();
    const [croppedImage, setCroppedImage] = useState();
    const circularCrop = true;
    const cropModalValues = {showModal, setShowModal, imageToCrop, setCroppedImage, circularCrop};

    useEffect(()=>{
        if(croppedImage !== undefined){
            profilePicture.current.src = croppedImage;
            console.log(croppedImage);
            bahar();
        }
    },[croppedImage]);

    async function bahar(){
        // let encoded = btoa(await croppedImage.text());
        // console.log(encoded);
        const file = await uploadFile(croppedImage);
        console.log(file.ipfs());
    }
    
    async function uploadFile(data) {
        var fileI = dataURLtoFile(data, 'file');
        console.log(fileI);

        const file = new Moralis.File("file", fileI);
        await file.saveIPFS();
        return file;
    }

    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }
    
    //Usage example:

    const handleAvatarChange = async (event) => {
        // const output = profilePicture.current;
        const uploadedImageURL = URL.createObjectURL(event.target.files[0]);
        console.log(event.target.files[0]);
        profilePicture.current.value = "";
        setImageToCrop(uploadedImageURL);
        setShowModal(true);
        // output.onload = function () {
        //     // When the media output has been loaded, remove the assgined memory
        //     URL.revokeObjectURL(output.src); // free memory
        // };
        // setAvatar(file.ipfs());
    };

    return (
        <>
            <div className="flex flex-col">
                <p className="mb-5 text-sm font-medium md:text-base font-secondary">
                    Profile Picture<i className="ml-2 text-base md:text-lg fa fa-info-circle"></i>
                </p>
                <label className="relative w-fit" htmlFor="upload-image-inp">
                    <img className="w-[130px] h-[130px] md:w-[150px] md:h-[150px] rounded-full" ref={profilePicture} src={avatar} alt="Current Avatar"></img>

                    <input type="file" id="upload-image-inp" onChange={handleAvatarChange} accept="image/*" className="hidden mt-2 mb-5" />
                    <label
                        className="absolute flex items-center justify-center p-2 pr-1 rounded-lg cursor-pointer right-1 bottom-2 bg-dark-200"
                        htmlFor="upload-image-inp"
                    >
                        <i className="far fa-edit text-light-200"></i>
                    </label>
                </label>
                <div className="flex h-full">
                    <div className="self-end" onClick={handleSave}>
                        <CustomButton green={true}>Save Changes</CustomButton>
                    </div>
                </div>
            </div>
            <CropImageModal {...cropModalValues}/>
        </>
    );
}
