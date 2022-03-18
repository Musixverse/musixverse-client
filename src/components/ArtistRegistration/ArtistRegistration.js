import RightSection from "./ArtistRegUtils/RightSection";
import LeftSection from "./ArtistRegUtils/LeftSection";
import styles from "../../../styles/ArtistRegistration/Artist.module.css";
import Button from "./ArtistRegUtils/Button";
import SelectAvatar from "./ArtistRegUtils/SelectAvatar";
import { useRef } from "react";

export default function ArtistRegistration(){
    // ADD REFS TO READ DATA FROM INPUT FIELDS
    // STATE MIGHT CAUSE MULTIPLE UNECESSARY RE-RENDERS
    const bio = useRef();
    const facebook = useRef();
    const twitter = useRef();
    const spotify = useRef();
    const instagram = useRef();

    return (
        <div className={styles['register']}>
            <div className={styles['register__container']}>
                {/* Left section */}
                {/* <div> */}
                    <div className="lg:max-w-[30vw] pb-6 lg:pb-0">
                        <p className="mt-20 text-5xl font-tertiary max-w-[468px]">
                            ARTIST SIGN UP
                        </p>
                        <p className="text-[15px] font-secondary mt-4">Thanks for signing up as an Artist!</p>
                        <p className="text-[15px] font-secondary mt-4 max-w-none lg:max-w-[650px]">We&apos;re only onboarding a small number of artists each month so think of your first upload as an audition and make sure it&apos;s a standout song that sets you apart from everyone else! Once your song has been accepted you will received the &apos;verified artist&apos; badge and collectors can start bidding on your music. While you&apos;re waiting to be verified, you&apos;ll still be able to browse, bid, and buy tracks and get familiar with Musixverse.</p>
                        <p className="text-[15px] font-secondary mt-4">Keep an eye on your email and we will let you know as soon as you&apos;ve been verified.
                        </p>
                        
                        <Button>
                            <input type="checkbox" className="rounded-lg" required />
                            <p>Agree and Continue</p>    
                        </Button> 
                    </div>    
                {/* </div> */}

                {/* Right section*/}
                <RightSection>
                    <p className="text-5xl font-tertiary max-w-[468px] mb-10">YOUR DETAILS</p>
                    {/* Step-1 */}
                    <div className="hidden">
                        <SelectAvatar/>
                        {/* <div className="flex-1"> */}
                            <p className="mt-8 text-[16px] font-secondary font-bold">Your Name</p>
                            <input type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" />
                        {/* </div> */}
                        <div className="flex flex-col sm:flex-row mt-3 text-[16px] font-secondary font-bold space-y-4 sm:space-x-3 sm:space-y-0">
                            <div className="flex-1">
                                <p>Username</p>
                                <input type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" />
                            </div>
                            <div className="flex-1">
                                <p>Email Address</p>
                                <input type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" />
                            </div>
                        </div>
                        <div className="flex flex-col mt-8">
                            <div className="flex items-center justify-start mb-2 space-x-3">
                                <input type="checkbox" required/>
                                <p className="text-[16px] font-secondary font-bold">
                                    Permission of listening rights
                                </p>
                            </div>
                            <p className="text-[13px] font-secondary lg:max-w-[468px] max-w-none">
                                Confirm that you are providing permissions to Musixverse to use your music for non-monetized streaming, both on Musixverse and any external apps and platforms which are directly associated with or part of the Musixverse platform.
                            </p>
                            <div className="flex items-center justify-start pt-2 mt-3 space-x-3">
                                <input type="checkbox" required/>
                                <p className="text-[16px] font-secondary font-bold">
                                    Guidelines for submission
                                </p>
                            </div>
                            <p className="text-[13px] font-secondary lg:max-w-[468px] max-w-none mt-2">
                                Confirm that none of your submissions,both current and future contain any infringing or unauthorized copyrighted material.
                            </p>
                        </div>
                        <Button>Continue</Button>
                    </div>
                    {/* Step-2 */}
                    <div className="min-w-[468px]">
                        <p className="text-[16px] font-primary font-bold">Tell us about yourself</p>
                        <textarea spellCheck="false" ref={bio} className="font-secondary text-base w-full p-1 resize-none h-[200px] mt-2 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" ></textarea>
                        <p className="text-[16px] font-primary font-bold mt-4">Add your socials(Optional)</p>
                        <div className="mt-2">
                            <p className="text-[16px] font-secondary font-bold">Instagram</p>
                            <input spellCheck="false" ref={instagram} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
                            <p className=" text-[16px] font-secondary font-bold">Facebook</p>
                            <input spellCheck="false" ref={facebook} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
                            <p className=" text-[16px] font-secondary font-bold">Twitter</p>
                            <input spellCheck="false" ref={twitter} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
                            <p className=" text-[16px] font-secondary font-bold">Spotify</p>
                            <input spellCheck="false" ref={spotify} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
                        </div>
                        {/* Re-design buttons */}
                        <div className="flex space-x-3">
                            <Button>Submit</Button>
                            <Button>Skip</Button>
                        </div>
                    </div>
                </RightSection>
            </div>
        </div>
    );
};