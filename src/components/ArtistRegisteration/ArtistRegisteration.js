
import RightSection from "./ArtistRegUtils/RightSection";
import LeftSection from "./ArtistRegUtils/LeftSection";
import styles from "../../../styles/ArtistRegisteration/Register.module.css";
import Button from "./ArtistRegUtils/Button";

export default function ArtistRegisteration(){
    return (
        <div className={styles['register']}>
            <div className={styles['register__container']}>
                {/* Left section */}
                <LeftSection>
                    <p className="mt-20 text-5xl font-tertiary max-w-[468px]">
                        ARTIST SIGN UP
                    </p>
                    <p className="text-[15px] font-secondary mt-4">Thanks for signing up as an Artist!</p>
                    <p className="text-[15px] font-secondary mt-4 max-w-[650px]">We&apos;re only onboarding a small number of artists each month so think of uour first upload as an audition and make sure it&apos;s a standout song that sets you apart from everyone else! Once your song has been accepted you will received the &apos;verified artist&apos; badge and collectors can start bidding on your music. While you&apos;re waiting to be verified, you&apos;ll still be able to browse, bid, and buy tracks and get familiar with Musixverse.</p>
                    <p className="text-[15px] font-secondary mt-4">Keep an eye on your email and we will let you know as soon as you&apos;ve been verified.
                    </p>
                    <Button>
                        <input type="checkbox" className="rounded-lg" />
                        <p>Agree and Continue</p>    
                    </Button>                   
                </LeftSection>

                {/* Right section */}
                <RightSection>
                    <p className="text-5xl font-tertiary max-w-[468px]">YOUR DETAILS</p>
                    <div className="flex mt-12 text-[18px] font-secondary font-bold">
                        <span>
                            <p>Username</p>
                            <input type="text" className="" />
                        </span>
                        <span>
                            <p>Email Address</p>
                            <input type="text" className=""></input>
                        </span>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <span className="flex space-x-4 justify-start items-center">
                            <input type="checkbox" />
                            <p className="text-[18px] font-secondary font-bold">
                                Permission of listening rights
                            </p>
                        </span>
                        <p className="text-[15px] font-secondary max-w-[468px]">
                            Confirm that you are providing permissions to Musixverse to use your music for non-monetized streaming, both on Musixverse and any external apps and platforms which are directly associated with or part of the Musixverse platform.
                        </p>
                        <span className="flex space-x-4 justify-start items-center pt-2">
                            <input type="checkbox" />
                            <p className="text-[18px] font-secondary font-bold">
                                Guidelines for submission
                            </p>
                        </span>
                        <p className="text-[15px] font-secondary max-w-[468px]">
                            Confirm that none of your submissions,both current and future contain any infringing or unauthorized copyrighted material.
                        </p>
                    </div>
                    <Button>Continue</Button>
                </RightSection>
            </div>
        </div>
    );
};