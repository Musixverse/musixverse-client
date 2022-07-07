import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Router from "next/router";
import { useMoralis, useMoralisQuery } from "react-moralis";
import styles from "../../../styles/Registration/Confirm.module.css";
import B_blackhole from "../../../public/assets/registration/dark_black_hole.svg";
import W_blackhole from "../../../public/assets/registration/white_black_hole.svg";
import StatusContext from "../../../store/status-context";

export default function Confirm() {
    const { theme } = useTheme();
    const { user, Moralis, refetchUserData } = useMoralis();
    const [, , setSuccess] = useContext(StatusContext);

    const { data: userInfo } = useMoralisQuery("UserInfo", (query) => query.equalTo("user", user), [user]);

    const [checkCounter, setCheckCounter] = useState(0);
    useEffect(() => {
        const checkEmailVerified = setTimeout(() => {
            setCheckCounter((prev) => prev + 1);
            console.log("changeConfirmEmailPage");
            if (user) {
                refetchUserData();
                if (user.attributes.emailVerified) {
                    if (userInfo[0] && userInfo[0].attributes.isArtist) {
                        Router.push(`/profile/${user.attributes.username}`, undefined, { shallow: true });
                    } else {
                        Router.push("/library", undefined, { shallow: true });
                    }
                }
            }
        }, 2000);
        return () => clearTimeout(checkEmailVerified);
    }, [checkCounter]);

    const backToApp = async (e) => {
        e.preventDefault();
        await refetchUserData();

        if (userInfo[0].attributes.isArtist) {
            Router.push(`/profile/${user.attributes.username}`, undefined, { shallow: true });
        } else {
            Router.push("/library", undefined, { shallow: true });
        }
        return;
    };

    const resendVerificationEmail = async () => {
        await Moralis.User.requestEmailVerification(user.attributes.email)
            .then(() => {
                setSuccess((prevState) => ({
                    ...prevState,
                    title: "Verification email sent",
                    message: "An email is sent to your registered email address. Please verify your email.",
                    showSuccessBox: true,
                }));
                return;
            })
            .catch((error) => {
                // Show the error message somewhere
                alert("Error: " + error.code + " " + error.message);
            });
    };

    return (
        <div className={styles["register"]}>
            <div className={"dark:bg-dark-200 " + styles["register__container"]}>
                {/* Main container */}
                <div className={styles["confirm__container"]}>
                    <Image src={theme === "light" ? B_blackhole : W_blackhole} width={440} height={318} alt="Black-hole" />
                    <span className="flex flex-col items-center justify-center pt-8">
                        <p className="text-4xl font-tertiary sm:text-5xl text-center">CONFIRM YOUR EMAIL</p>
                        <p className="font-secondary text-[15px] text-center">Please check your inbox and follow the instructions in the mail to continue</p>
                        <p className="font-secondary text-[12px] text-center">You will automatically be redirected once you confirm your email</p>
                    </span>
                    <form onSubmit={backToApp} className="mt-12">
                        {user && userInfo[0] && userInfo[0].attributes.isArtist ? (
                            <button
                                type="submit"
                                className="flex justify-center items-center space-x-3 bg-light-100 hover:bg-light-200 text-[14px] text-dark-100 py-2 px-6 rounded-lg font-primary font-semibold max-w-[210px]"
                            >
                                Go to Profile
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="flex justify-center items-center space-x-3 bg-light-100 hover:bg-light-200 text-[14px] text-dark-100 py-2 px-6 rounded-lg mt-6 font-primary font-semibold max-w-[210px]"
                            >
                                Go to Library
                            </button>
                        )}
                    </form>
                    <button
                        type="button"
                        className="flex justify-center items-center bg-primary-200 hover:bg-primary-300 text-[14px] text-light-100 py-3 md:px-8 px-4 rounded-lg mt-6 font-primary font-semibold"
                        onClick={resendVerificationEmail}
                    >
                        Resend verification email
                    </button>
                </div>
            </div>
        </div>
    );
}
