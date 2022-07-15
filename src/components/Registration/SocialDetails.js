import { useRef, useContext } from "react";
import RightSection from "./ArtistRegUtils/RightSection";
import styles from "../../../styles/Registration/Artist.module.css";
import Button from "./ArtistRegUtils/Button";
import Router from "next/router";
import { useMoralis } from "react-moralis";
import StatusContext from "../../../store/status-context";

export default function SocialDetails() {
    const { setUserData, userError } = useMoralis();
    const [, , , setError] = useContext(StatusContext);
    const bioRef = useRef(null);
    const instagramRef = useRef(null);
    const facebookRef = useRef(null);
    const twitterRef = useRef(null);
    const spotifyRef = useRef(null);

    const handleSocialDetailsSave = async (e) => {
        e.preventDefault();

        const bio = bioRef.current.value;
        const instagram = instagramRef.current.value;
        const facebook = facebookRef.current.value;
        const twitter = twitterRef.current.value;
        const spotify = spotifyRef.current.value;

        await setUserData({
            bio: bio === "" ? undefined : bio,
            instagram: instagram === "" ? undefined : instagram,
            facebook: facebook === "" ? undefined : facebook,
            twitter: twitter === "" ? undefined : twitter,
            spotify: spotify === "" ? undefined : spotify,
        });

        if (userError) {
            setError((prevState) => ({
                ...prevState,
                title: "Invalid Data",
                message: JSON.stringify(userError.message),
                showErrorBox: true,
            }));
        } else {
            Router.push("/register/confirm-email", undefined, { shallow: true });
        }
        return;
    };

    return (
        <div className={styles["register"]}>
            <div className={"dark:bg-dark-200 " + styles["register__container"]}>
                {/* Left section */}
                <div className="lg:max-w-[30vw] pb-6 lg:pb-0">
                    <p className="mt-20 text-5xl font-tertiary max-w-[468px]">ARTIST SIGN UP</p>
                    <p className="text-[15px] font-secondary mt-4">Thanks for signing up as an Artist!</p>
                    <p className="text-[15px] font-secondary mt-4 max-w-none lg:max-w-[650px]">
                        We&apos;re only onboarding a small number of artists each month so think of your first upload as an audition and make sure it&apos;s a
                        standout track that sets you apart from everyone else! Once your track has been accepted you will received the &apos;verified
                        artist&apos; badge and collectors can start bidding on your music. While you&apos;re waiting to be verified, you&apos;ll still be able
                        to browse, bid, and buy tracks and get familiar with Musixverse.
                    </p>
                    <p className="text-[15px] font-secondary mt-4">Keep an eye on your email and we will let you know as soon as you&apos;ve been verified.</p>
                </div>

                {/* Right section*/}
                <RightSection>
                    <p className="text-5xl font-tertiary max-w-[468px] mb-10">YOUR DETAILS</p>
                    <form onSubmit={handleSocialDetailsSave}>
                        <div className={"min-w-[468px]"}>
                            <p className="text-[16px] font-primary font-bold">Your Story</p>
                            <textarea
                                spellCheck="false"
                                ref={bioRef}
                                className="font-secondary text-base w-full p-1 resize-none h-[200px] mt-2 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100"
                            ></textarea>
                            <p className="text-[16px] font-primary font-bold mt-4">Add your socials</p>
                            <div className="mt-2">
                                <p className="text-[14px] font-secondary font-bold">Instagram</p>
                                <input
                                    spellCheck="false"
                                    ref={instagramRef}
                                    type="text"
                                    className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100"
                                />
                                <p className=" text-[14px] font-secondary font-bold">Facebook</p>
                                <input
                                    spellCheck="false"
                                    ref={facebookRef}
                                    type="text"
                                    className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100"
                                />
                                <p className=" text-[14px] font-secondary font-bold">Twitter</p>
                                <input
                                    spellCheck="false"
                                    ref={twitterRef}
                                    type="text"
                                    className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100"
                                />
                                <p className=" text-[14px] font-secondary font-bold">Spotify</p>
                                <input
                                    spellCheck="false"
                                    ref={spotifyRef}
                                    type="text"
                                    className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100"
                                />
                            </div>
                            {/* Re-design buttons */}
                            <div className="flex justify-between w-full">
                                <div className="flex">
                                    <button
                                        type="submit"
                                        className="flex mr-3 justify-center items-center bg-light-100 hover:bg-light-300 text-[14px] text-primary-100 py-3 px-6 rounded-lg mt-6 font-primary font-semibold max-w-[210px]"
                                    >
                                        Skip
                                    </button>
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
