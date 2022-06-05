import MailList from "./MailList";
import Socials from "./Socials";
import styles from "../../styles/ComingSoon.module.css";

export default function ComingSoonPage() {
    return (
        <div className={styles["coming-soon"]}>
            <div className={styles["coming-soon__container"]}>
                <div className={styles["coming-soon__container--left-section"]}>
                    <div className={styles["container__left-section--intro-text"]}>
                        <p>We&apos;re</p>
                        <p>Coming soon!</p>
                        <p className="text-primary-200 font-semibold text-[20px]">Empowering musicians and fans like never before.</p>
                    </div>
                    <div className="mt-16 px-14 lg:p-0">
                        <p className="font-primary text-[26px] font-medium mb-2">Stay in the loop</p>
                        <p className="max-w-lg mb-4 text-sm font-secondary">
                            Join our mailing list to stay in the loop with our newest feature realeases, NFT drops, and tips & tricks for navigating through
                            Musixverse.
                        </p>
                        <MailList />
                        <Socials />
                    </div>
                    <div className={styles["mobile__img"]}>
                        <img className="hidden sm:inline-block" src="/assets/desktop.svg" alt="music universe"></img>
                        <img className="inline-block sm:hidden" src={"/assets/mobile svg.svg"} alt="music universe"></img>
                    </div>
                </div>
                {/* PC image */}
                <div className={styles["desktop__img"]}>
                    <img src="/assets/desktop.svg" alt="music universe"></img>
                </div>
            </div>
        </div>
    );
}
