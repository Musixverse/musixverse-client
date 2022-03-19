import { useState, useRef } from "react";
import RightSection from "./ArtistRegUtils/RightSection";
import styles from "../../../styles/ArtistRegistration/Artist.module.css";
import Button from "./ArtistRegUtils/Button";
import Router from "next/router";

export default function SocialDetails() {    
    const bioRef = useRef(null);
    const facebookRef = useRef(null);
    const twitterRef = useRef(null);
    const spotifyRef = useRef(null);
    const instagramRef = useRef(null);

    const handleSocialDetailsSave = async (e) => {
        e.preventDefault();
        Router.push("/register/confirm-email", undefined, { shallow: true });
    };

    return (
        <div className={styles["register"]}>
            <div className={styles["register__container"]}>
                {/* Left section */}
                <div className="lg:max-w-[30vw] pb-6 lg:pb-0">
                    <p className="mt-20 text-5xl font-tertiary max-w-[468px]">ARTIST SIGN UP</p>
                    <p className="text-[15px] font-secondary mt-4">Thanks for signing up as an Artist!</p>
                    <p className="text-[15px] font-secondary mt-4 max-w-none lg:max-w-[650px]">
                        We&apos;re only onboarding a small number of artists each month so think of your first upload as an audition and make sure it&apos;s a
                        standout song that sets you apart from everyone else! Once your song has been accepted you will received the &apos;verified artist&apos;
                        badge and collectors can start bidding on your music. While you&apos;re waiting to be verified, you&apos;ll still be able to browse,
                        bid, and buy tracks and get familiar with Musixverse.
                    </p>
                    <p className="text-[15px] font-secondary mt-4">Keep an eye on your email and we will let you know as soon as you&apos;ve been verified.</p>
                </div>

                {/* Right section*/}
                <RightSection>
                    <p className="text-5xl font-tertiary max-w-[468px] mb-10">YOUR DETAILS</p>
                    <form onSubmit={handleSocialDetailsSave}>
                        <div className={"min-w-[468px]"}>
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
                                    {/* <button type="button" onClick={()=>Router.push("/register/artist/basic-details", undefined, { shallow: true })} className="flex mr-3 justify-center items-center bg-[#fff9f9] text-[14px] text-primary-100 p-3 rounded-lg mt-6 font-primary font-bold max-w-[210px]">Back</button> */}
                                    <button type="button" onClick={()=>Router.push("/register/confirm-email", undefined, { shallow: true })} className="flex justify-center items-center bg-primary-200 text-[14px] p-3 rounded-lg mt-6 font-primary font-bold max-w-[210px] text-light-200">Skip</button>
                                </div>
                                <Button>Submit</Button>
                            </div>
                        </div>
                    </form>
                </RightSection>
            </div>
        </div>
    );
}