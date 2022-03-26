import { useRef } from "react";
import DefaultAvatar from "./DefaultAvatar";

export default function SelectAvatar() {
    const uploadedImage = useRef(null);
    const uploadImage = useRef(null);

    //Array of default arrays
    const urls = [
        "https://lh3.googleusercontent.com/MA0m87sfDmKHswPN39ycJkOUMS9C2wLqF5jz3SRpA8ij_V2Z-o3iPnViH1bT8_QISKwnCYSIO5ngL_85H60bpE9R6mogFuMjumBfB3w=s0",
        "https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631",
        "https://lh3.googleusercontent.com/sQaGzstpAmGeIx0OQmb2RvPwpjZXY8iHzz6uadPifYNKeVnReB9g0p1rvtN3_8PJIv8XDbOWFnpG3LNl4F69CvDzFJ4lcT9wPm-S=w600",
        "https://lh3.googleusercontent.com/CBT0DkF1cL6pXhtT-GCEZuQ4dXX0LmSbkhGo9b8HMwbbJ7bF1ej_bEtfW6ogKI_DqphMPuw0awPc7m7bMt43-u1rw3WlMt-I4DWY9Fs=w600",
        "https://lh3.googleusercontent.com/LvPsEvPztcU-SfcXV8Kt2nAcWqn8osuBF5G4urVrXEHLgE3B-dmCaEefdTDLhmuzd7SKqbb8z3f2z8Vp6IllHszlFWfmPUMZT30i_Q=w600",
        "https://lh3.googleusercontent.com/vQ2C30yW4SlWeBKfgkbH81GXhbbTOIdZIfScez6uEvg_y2CpbKiaRznPhnWUOCM6RJYL5MX_RkByRUxF4mUNFSNq5VERLCdp45u5=w600",
    ];

    const handleImageSelection = (selectedUrl) => {
        const el = uploadedImage.current;
        el.src = selectedUrl;
        //Reset the uploaded file
        uploadImage.current.value = "";
    };

    const handleImageUpload = (event) => {
        const el = uploadedImage.current;
        const myMemoObj = URL.createObjectURL(event.target.files[0]);
        el.src = URL.createObjectURL(event.target.files[0]);
        URL.revokeObjectURL(myMemoObj); //Manging memo leak
    };

    return (
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
    );
}
