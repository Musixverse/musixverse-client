import SelectAvatar from "./SelectAvatar";
import Button from "./Button";
import { useState, useRef, forwardRef } from "react";

export default forwardRef(function YourDetails(props,ref){
    const {nameRef, usernameRef, emailRef, bioRef, facebookRef, twitterRef, spotifyRef, instagramRef} = ref.current;

    const [showBasicDetails, setShowBasicDetails] = useState(true);
    const [showSocialDetails, setShowSocialDetails] = useState(false);

    return(
        <>
            <div className={showBasicDetails? "":"hidden"}>
                <SelectAvatar/>
                <p className="mt-8 text-[16px] font-secondary font-bold">Your Name</p>
                <input
                    type="text" 
                    ref={nameRef} 
                    required={showBasicDetails}
                    className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" 
                />
                <div className="flex flex-col sm:flex-row mt-3 text-[16px] font-secondary font-bold space-y-4 sm:space-x-3 sm:space-y-0">
                    <div className="flex-1">
                        <p>Username</p>
                        <input 
                            type="text" 
                            ref={usernameRef} 
                            required={showBasicDetails}
                            className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" 
                        />
                    </div>
                    <div className="flex-1">
                        <p>Email Address</p>
                        <input 
                            type="email" 
                            ref={emailRef} 
                            required={showBasicDetails}
                            className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" 
                        />
                    </div>
                </div>
                <div className="flex flex-col mt-8">
                    <div className="flex items-center justify-start mb-2 space-x-3">
                        <input id="permissionCheckbox" type="checkbox" required={showBasicDetails} />
                        <label htmlFor="permissionCheckbox" className="text-[16px] font-secondary font-bold cursor-pointer">
                            Permission of listening rights
                        </label>
                    </div>
                    <p className="text-[13px] font-secondary lg:max-w-[468px] max-w-none">
                        Confirm that you are providing permissions to Musixverse to use your music for non-monetized streaming, both on Musixverse and
                        any external apps and platforms which are directly associated with or part of the Musixverse platform.
                    </p>
                    <div className="flex items-center justify-start pt-2 mt-3 space-x-3">
                        <input id="guidelinesCheckbox" type="checkbox" required={showBasicDetails} />
                        <label htmlFor="guidelinesCheckbox" className="text-[16px] font-secondary font-bold cursor-pointer">
                            Guidelines for submission
                        </label>
                    </div>
                    <p className="text-[13px] font-secondary lg:max-w-[468px] max-w-none mt-2">
                        Confirm that none of your submissions,both current and future contain any infringing or unauthorized copyrighted material.
                    </p>
                </div>
                <button type="button" onClick={()=>{setShowSocialDetails(true); setShowBasicDetails(false);}} className="flex justify-center items-center space-x-3 bg-primary-200 text-[14px] text-light-100 p-3 rounded-lg mt-6 font-primary font-bold max-w-[210px]">Continue</button>
            </div>
            {/* STEP-2 */}
            <div className={"min-w-[468px] "+ (showSocialDetails? "":"hidden")}>
                <p className="text-[16px] font-primary font-bold">Your Story</p>
                <textarea spellCheck="false" ref={bioRef} className="font-secondary text-base w-full p-1 resize-none h-[200px] mt-2 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" ></textarea>
                <p className="text-[16px] font-primary font-bold mt-4">Add your socials(Optional)</p>
                <div className="mt-2">
                    <p className="text-[16px] font-secondary font-bold">Instagram</p>
                    <input spellCheck="false" ref={instagramRef} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
                    <p className=" text-[16px] font-secondary font-bold">Facebook</p>
                    <input spellCheck="false" ref={facebookRef} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
                    <p className=" text-[16px] font-secondary font-bold">Twitter</p>
                    <input spellCheck="false" ref={twitterRef} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
                    <p className=" text-[16px] font-secondary font-bold">Spotify</p>
                    <input spellCheck="false" ref={spotifyRef} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
                </div>
                {/* Re-design buttons */}
                <div className="flex justify-between w-full">
                    <div className="flex">
                        <button type="button" onClick={()=>{setShowSocialDetails(false); setShowBasicDetails(true);}} className="flex mr-3 justify-center items-center bg-[#fff9f9] text-[14px] text-primary-100 p-3 rounded-lg mt-6 font-primary font-bold max-w-[210px]">Back</button>
                        <button type="button" className="flex justify-center items-center bg-primary-200 text-[14px] p-3 rounded-lg mt-6 font-primary font-bold max-w-[210px] text-light-200">Skip</button>
                    </div>
                    <Button>Submit</Button>
                </div>
            </div>
        </>
    );
});