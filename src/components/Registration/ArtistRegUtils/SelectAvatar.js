import { useRef, useState } from "react";

export default function SelectAvatar() {
    const [imageUploadState, setImageUploadState] = useState(false);
    const uploadedImage = useRef();
    const handleImageUpload = (event) => {
        const el = uploadedImage.current;
        const myMemoObj = URL.createObjectURL(event.target.files[0]);
        el.src = URL.createObjectURL(event.target.files[0]);
        URL.revokeObjectURL(myMemoObj); //Manging memo leak
        // Set image upload state to true when uploaded
        setImageUploadState(true);
    };

    return (
        <div className="flex">
            <div className={"w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] border border-dark-200 dark:border-primary-200 rounded-full " + (imageUploadState ? "hidden" : "")}></div>
            <img
                className={"w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full " + (imageUploadState ? "" : "hidden")}
                ref={uploadedImage}
                alt="Selected Avatar"
            ></img>

            {/* Avatars */}
            <div className="max-w-[200px] ml-5">
                <p className="text-secondary text-[14px] sm:text-[15px] mb-2 font-secondary">Upload or select an Avatar</p>
                <div className="grid grid-cols-4 gap-1">
                    <div className="w-[30px] h-[30px] sm:w-[39px] sm:h-[39px] rounded-full bg-light-300"></div>
                    <div className="w-[30px] h-[30px] sm:w-[39px] sm:h-[39px] rounded-full bg-light-300"></div>
                    <div className="w-[30px] h-[30px] sm:w-[39px] sm:h-[39px] rounded-full bg-light-300"></div>
                    <div className="w-[30px] h-[30px] sm:w-[39px] sm:h-[39px] rounded-full bg-light-300"></div>
                    <div className="w-[30px] h-[30px] sm:w-[39px] sm:h-[39px] rounded-full bg-light-300"></div>
                    <div className="w-[30px] h-[30px] sm:w-[39px] sm:h-[39px] rounded-full bg-light-300"></div>
                    {/* Upload from PC */}
                    <label
                        htmlFor="upload-avatar"
                        className="flex items-center justify-center
                     text-dark-200 cursor-pointer w-[30px] h-[30px] sm:w-[39px] sm:h-[39px] rounded-full bg-light-300 hover:bg-[#bad9d5] text-[18px] sm:text-[20px]"
                    >
                        <i className="text-dark-200 fa fa-upload"></i>
                        {/* <i className="fa fa-upload"></i> */}
                    </label>
                </div>
                <input className="hidden" onChange={handleImageUpload} type={"file"} id="upload-avatar" accept="image/*" required />
            </div>
        </div>
    );
}
