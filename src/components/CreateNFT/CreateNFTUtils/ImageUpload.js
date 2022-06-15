import Image from "next/image";
import uploadImage from "../../../../public/assets/create-nft/upload-image.svg";

export default function ImageUpload(props){
    // const nftArt = useRef(null);

    const handleImageUpload = (event)=>{
        const imageURL = URL.createObjectURL(event.target.files[0]);
        props.setUploadedImage(imageURL);
        //Cant revoke the object URL yet...
        //Remember to revoke the object URL in the end of minting process
    }

    return(
        <>
            <input onChange={handleImageUpload} accept="image/*" type="file" required className="hidden" id="uploadedNftImage"/>
            <label className="flex items-center w-full p-2 space-x-5 rounded-lg cursor-pointer bg-light-100" htmlFor="uploadedNftImage">
                <div className="flex items-center justify-center w-[65px] h-[65px] rounded-lg bg-light-300">
                    <Image src={uploadImage} objectFit="contain" alt="upload image art digital illustration"></Image>
                </div>
                <div className="font-secondary">
                    <h3 className="font-semibold">UPLOAD COVER ART</h3>
                    <p className="text-sm">Recommended size: 300px X 300px</p>
                </div>
            </label>
        </>
    );
}