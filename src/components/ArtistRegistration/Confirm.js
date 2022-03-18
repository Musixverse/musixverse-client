import Image from "next/image";
import styles from "../../../styles/ArtistRegistration/Confirm.module.css";
import Button from "./ArtistRegUtils/Button";
import blackhole from "../../../public/assets/registration/dark_black_hole.svg";
import Router from "next/router";

export default function Confirm() {
    const backToLogin = async (e) => {
        e.preventDefault();
        Router.push("/profile", undefined, { shallow: true });
        return;
    };

    return (
        <div className={styles["register"]}>
            <div className={styles["register__container"]}>
                {/* Main container */}
                <div className={styles["confirm__container"]}>
                    <Image src={blackhole} width={440} height={318} alt="Black-hole" />
                    <span className="flex flex-col items-center justify-center pt-8">
                        <p className="text-4xl font-tertiary sm:text-5xl">CONFIRM YOUR EMAIL</p>
                        <p className="font-secondary text-[15px] text-center">Please check your inbox and follow the instructions in the mail.</p>
                    </span>
                    <form onSubmit={backToLogin}>
                        <Button>Back to login</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
