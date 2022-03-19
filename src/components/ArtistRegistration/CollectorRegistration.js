import { useState, useRef } from "react";
import RightSection from "./ArtistRegUtils/RightSection";
import styles from "../../../styles/ArtistRegistration/Artist.module.css";
import Button from "./ArtistRegUtils/Button";
import SelectAvatar from "./ArtistRegUtils/SelectAvatar";
import Router from "next/router";
import { useMoralis } from "react-moralis";

export default function CollectorRegistration() {
    const { setUserData } = useMoralis();
    const nameRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);

    const handleCollectorDetailsSave = async (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const username = usernameRef.current.value;
        const email = emailRef.current.value;

        if (name !== "" && username !== "" && email !== "") {
            await setUserData({
                name: name === "" ? undefined : name,
                username: username === "" ? undefined : username,
                email: email === "" ? undefined : email,
                isArtist: true,
            });
            Router.push("/register/confirm-email", undefined, { shallow: true });
        }
        return;
    };

    return (
        <div className={styles["register"]}>
            <div className={styles["register__container"]}>
                {/* Left section */}
                <div className="lg:max-w-[30vw] pb-6 lg:pb-0">
                    <p className="mt-20 text-5xl font-tertiary max-w-[468px]">COLLECTOR SIGN UP</p>
                    <p className="text-[15px] font-secondary mt-4">Thanks for signing up as a Collector!</p>
                    <p className="text-[15px] font-secondary mt-4 max-w-none lg:max-w-[650px]">
                        We&apos;re only onboarding a small number of artists each month so think of uour first upload as an audition and make sure it&apos;s a
                        standout song that sets you apart from everyone else! Once your song has been accepted you will received the &apos;verified artist&apos;
                        badge and collectors can start bidding on your music. While you&apos;re waiting to be verified, you&apos;ll still be able to browse,
                        bid, and buy tracks and get familiar with Musixverse.
                    </p>
                    <p className="text-[15px] font-secondary mt-4">Keep an eye on your email and we will let you know as soon as you&apos;ve been verified.</p>
                </div>

                {/* Right section */}
                <RightSection>
                    <p className="text-5xl font-tertiary max-w-[468px] mb-10">YOUR DETAILS</p>
                    <form onSubmit={handleCollectorDetailsSave}>
                        <SelectAvatar />

                        <p className="mt-8 text-[16px] font-secondary font-bold">Your Name*</p>
                        <input
                            type="text"
                            ref={nameRef}
                            className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm"
                            required
                        />

                        <div className="flex mt-3 text-[16px] font-secondary font-bold space-x-3">
                            <div className="flex-1">
                                <p>Username*</p>
                                <input 
                                    type="text" 
                                    ref={usernameRef} 
                                    required
                                    className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" 
                                />
                            </div>
                            <div className="flex-1">
                                <p>Email Address*</p>
                                <input 
                                    type="email" 
                                    ref={emailRef} 
                                    required
                                    className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" 
                                />
                            </div>
                        </div>

                        <div className="flex flex-col mt-8">
                            <div className="flex items-center justify-start mb-2 space-x-3">
                                <input id="permissionCheckbox" type="checkbox" required />
                                <label htmlFor="permissionCheckbox" className="text-[16px] font-secondary font-bold cursor-pointer">
                                    Permission of listening rights
                                </label>
                            </div>
                            <p className="text-[12px] font-secondary lg:max-w-[468px] max-w-none">
                                Confirm that you are providing permissions to Musixverse to use your music for non-monetized streaming, both on Musixverse and
                                any external apps and platforms which are directly associated with or part of the Musixverse platform.
                            </p>
                            <div className="flex items-center justify-start pt-2 mt-3 space-x-3">
                                <input id="guidelinesCheckbox" type="checkbox" required />
                                <label htmlFor="guidelinesCheckbox" className="text-[16px] font-secondary font-bold cursor-pointer">
                                    Guidelines for submission
                                </label>
                            </div>
                            <p className="text-[12px] font-secondary lg:max-w-[468px] max-w-none mt-2">
                                Confirm that none of your submissions, both current and future contain any infringing or unauthorized copyrighted material.
                            </p>
                        </div>
                        <Button>Continue</Button>
                    </form>
                </RightSection>
            </div>
        </div>
    );
}
