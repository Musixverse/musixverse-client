import { useState, useRef, useContext, useEffect } from "react";
import { useMoralis } from "react-moralis";
import CustomButton from "../../../layout/CustomButton";
import convertDataURLtoFile from "../../../utils/image-crop/convertDataURLtoFile";
import uploadFileToIPFS from "../../../utils/image-crop/uploadFileToIPFS";
import LoadingContext from "../../../../store/loading-context";
import CropImageModal from "../../CreateNFT/CreateNFTUtils/CropImageModal";

export default function EditProfilePhoto({ avatar, setAvatar, handleSave }) {
    const profilePicture = useRef(null);
    const profilePictureInput = useRef(null);
    const { Moralis } = useMoralis();
    const [, setLoading] = useContext(LoadingContext);
    //Crop Modal states
    const [showModal, setShowModal] = useState(false);
    const [imageToCrop, setImageToCrop] = useState(undefined);
    const [croppedImage, setCroppedImage] = useState(undefined);
    const aspectRatio = {width: 1, height: 1};
    const circularCrop = true;
    const cropModalValues = { showModal, setShowModal, imageToCrop, setCroppedImage, circularCrop, aspectRatio };

    useEffect(()=>{
        if(croppedImage !== undefined){
            setLoading(true);
            profilePicture.current.src = croppedImage;
            // Get the File from DataURL
            const uploadedFile = convertDataURLtoFile(croppedImage, "file");
            // Get the uploadFileOnIPFS async function
            
            uploadFileToIPFS(Moralis, uploadedFile)
                .then((url) => {
                    setLoading(false);
                    console.log(url);
                    setAvatar(url);
                });
        }
    },[Moralis, croppedImage, setAvatar, setLoading])

    const handleAvatarChange = (event) => {
        const imageURL = URL.createObjectURL(event.target.files[0]);
        profilePictureInput.current.value = "";
        setImageToCrop(imageURL);
        setShowModal(true);
    };

    return (
        <>
            <div className="flex flex-col">
                <p className="mb-5 text-sm font-medium md:text-base font-secondary">
                    Profile Picture<i className="ml-2 text-base md:text-lg fa fa-info-circle"></i>
                </p>
                <label className="relative w-fit" htmlFor="upload-image-inp">
                    <img
                        className="w-[130px] h-[130px] md:w-[150px] md:h-[150px] rounded-full"
                        ref={profilePicture}
                        src={avatar || "https://ipfs.moralis.io:2053/ipfs/Qmcn1aZ4PKUUzwpTncuSbruwLD98dtiNqvoJG5zm8EMwXZ"}
                        alt="Current Avatar"
                    ></img>

                    <input ref={profilePictureInput} type="file" id="upload-image-inp" onChange={handleAvatarChange} accept="image/*" className="hidden mt-2 mb-5" />
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
