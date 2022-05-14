import { useRef, useState } from "react";
import Image from "next/image";

export default function CoverPhoto(){
    const [coverImageUploaded, setCoverImageUploaded] = useState(false);
    const coverPicture = useRef(null);

    const handleCoverChange = (event) => {
        const output = coverPicture.current;
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {    //When the media output has been loaded, remove the assgined memory
            URL.revokeObjectURL(output.src) // free memory
            setCoverImageUploaded(true);
        }
    };

    return(
        <div className="flex flex-col flex-1">
            <p className="mb-2 text-sm font-medium md:text-base md:mb-5 font-secondary">Cover Photo<i className="ml-2 text-base md:text-lg fa fa-info-circle"></i></p>
            <label className="relative w-full h-[130px] md:h-[150px]" htmlFor="upload-cover-image">
                <div className={"flex items-center justify-center w-full h-full rounded-xl bg-light-200 dark:bg-[#323232] hover:cursor-pointer" + (coverImageUploaded? " hidden":"")}>
                    <label htmlFor="upload-cover-image" className="bg-light-300 w-[32px] h-[32px] hover:cursor-pointer rounded-full text-dark-200 flex items-center justify-center"><Image alt="add cover photo" src="/assets/dashboard/plus.svg" width={12} height={12}></Image></label>
                </div>
                <div className={"w-full h-full hover:cursor-pointer " + (coverImageUploaded? "":"hidden")}>
                    <img className="w-full h-full rounded-lg" alt="cover photo" ref={coverPicture}></img>
                </div>
                <input type="file" id="upload-cover-image" onChange={handleCoverChange} accept="image/*" className="hidden" />
            </label>
        </div>
    );
}
                // {/* <img className={"w-[180px] h-[180px] sm:w-[150px] sm:h-[150px] rounded-full" + (coverImageUploaded? "":"hidden")}
                //     ref={profilePicture} 
                //     // src="/Artist_Profile.png" 
                //     alt="Current Avatar"
                // ></img>*/}