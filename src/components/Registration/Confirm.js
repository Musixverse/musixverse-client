import { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import styles from "../../../styles/Registration/Confirm.module.css";
import Button from "./ArtistRegUtils/Button";
import B_blackhole from "../../../public/assets/registration/dark_black_hole.svg";
import W_blackhole from "../../../public/assets/registration/white_black_hole.svg";
import Router from "next/router";
import { useMoralis } from "react-moralis";

export default function Confirm() {
    const { theme } = useTheme();
    const { user, refetchUserData } = useMoralis();

    useEffect(() => {
        if (user) {
            refetchUserData();
        }
    }, [user]);

    const backToLogin = async (e) => {
        e.preventDefault();
        await refetchUserData();

        if (user.attributes.isArtist) {
            Router.push(`/profile/${user.attributes.username}`, undefined, { shallow: true });
        } else {
            Router.push("/library", undefined, { shallow: true });
        }
        return;
    };

    return (
        <div className={styles["register"]}>
            <div className={"dark:bg-dark-200 " + styles["register__container"]}>
                {/* Main container */}
                <div className={styles["confirm__container"]}>
                    <Image src={theme === "light" ? B_blackhole : W_blackhole} width={440} height={318} alt="Black-hole" />
                    <span className="flex flex-col items-center justify-center pt-8">
                        <p className="text-4xl font-tertiary sm:text-5xl">CONFIRM YOUR EMAIL</p>
                        <p className="font-secondary text-[15px] text-center">Please check your inbox and follow the instructions in the mail.</p>
                    </span>
                    <form onSubmit={backToLogin}>{user && user.attributes.isArtist ? <Button>Go to Profile</Button> : <Button>Go to Library</Button>}</form>
                </div>
            </div>
        </div>
    );
}
