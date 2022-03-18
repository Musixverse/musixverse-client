import RightSection from "./ArtistRegUtils/RightSection";
// import LeftSection from "./ArtistRegUtils/LeftSection";
import styles from "../../../styles/ArtistRegistration/Artist.module.css";
import Button from "./ArtistRegUtils/Button";
// import SelectAvatar from "./ArtistRegUtils/SelectAvatar";
import { useRef } from "react";
import YourDetails from "./ArtistRegUtils/YourDetails";

export default function ArtistRegistration(){
    // ADD REFS TO READ DATA FROM INPUT FIELDS
    // STATE MIGHT CAUSE MULTIPLE UNECESSARY RE-RENDERS
    // const bio = useRef();
    // const facebook = useRef();
    // const twitter = useRef();
    // const spotify = useRef();
    // const instagram = useRef();

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
                    <YourDetails/>
                </RightSection>
            </div>
        </div>
    );
};