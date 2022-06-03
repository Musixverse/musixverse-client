import Image from "next/image";
import styles from "../../../styles/HomePage/section4.module.css";

export default function HomePage_section3() {
    return (
        <div className={styles["HomePage_section3__container"]}>
            <div className={"dark:bg-dark-100 " + styles["section3__card"]}>
                <div className={styles["section3__card--innercard"]}>
                    <p className="pb-4 text-xl font-semibold text-center font-primary md:text-3xl">Introducing Musixverse</p>
                    <p className="max-w-xl text-sm text-center font-secondary">
                        Musixverse aims to power ownership and distribution of music on the web and beyond and in the process empower artists and fans alike
                    </p>
                </div>
                <div className="flex flex-col gap-8 mt-8 md:flex-row md:gap-6 md:gap-none justify-evenly">
                    <div className={styles["section3__card--innercard2"]}>
                        <h1>INVEST IN THE ARTIST</h1>
                        <p>
                            Buy limited edition music created and sold directly by the artist packaged into Non-Fungible Tokens (NFTs) minted on the blockchain.
                            These are akin to limited edition vinyl sold by artists in the physical world.
                        </p>
                    </div>
                    <div className={styles["section3__card--innercard2"]}>
                        <h1>ELIMINATE MIDDLEMEN</h1>
                        <p>
                            Connect artists and fans like never before with no one in between. This connection lives beyond the bounds of any platform or
                            service including Musixverse.
                        </p>
                    </div>
                    <div className={styles["section3__card--innercard2"]}>
                        <h1>CONNECTION BEYOND BOUNDS</h1>
                        <p>
                            Artists will know who their “real” fans are, and they can give back to their fans in any number of ways. Airdrop concert tickets,
                            share exclusive merch directly with fans, or jump on private chats with the artist…. Possibilities are limitless.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
