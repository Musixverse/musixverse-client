import { useRef } from "react";

export default function EditProfilePhoto(){
    const profilePicture = useRef(null);

    const handleAvatarChange = (event) => {
        const output = profilePicture.current;
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {    //When the media output has been loaded, remove the assgined memory
            URL.revokeObjectURL(output.src) // free memory
        }
    };

    return(
        <div className="flex flex-col">
            <p className="mb-5 text-sm font-medium md:text-base font-secondary">Profile Picture<i className="ml-2 text-base md:text-lg fa fa-info-circle"></i></p>
            <label className="relative w-fit" htmlFor="upload-image-inp">
                <img className="w-[130px] h-[130px] md:w-[150px] md:h-[150px] rounded-full"
                    ref={profilePicture} 
                    src="/Artist_Profile.png" 
                    alt="Current Avatar"
                ></img>

                <input type="file" id="upload-image-inp" onChange={handleAvatarChange} accept="image/*" className="hidden mt-2 mb-5" />
                <label className="absolute flex items-center justify-center p-2 pr-1 rounded-lg cursor-pointer right-1 bottom-2 bg-dark-200" htmlFor="upload-image-inp">
                    <i className="far fa-edit text-light-200"></i>
                </label>
            </label>
        </div>
    );
}