import minted from "../../../public/assets/MINTED.svg";
import auction from "../../../public/assets/auction.svg";
import Image from "next/image";
import styles from "../../../styles/SongInfo/SalesHistory.module.css";

export default function SalesHistory() {
    const minter = "benkessler";
    const currentOwner = "benkessler";
    return (
        <div className={"dark:bg-dark-100 " + styles["sales-history"]}>
            <h1 className={styles["sales-history__heading"]}>SALE HISTORY</h1>
            {/* TO map div */}
            <div className="flex mb-4">
                <div className={"dark:bg-dark-200 " + styles["sales-history__action"]}>
                    <Image src={auction} alt="minting logo" width={25} height={25}></Image>
                </div>

                <div className="ml-3 font-secondary">
                    <p className="font-medium">@{currentOwner} started auction for this song</p>
                    <p className="text-[#8a8a8a] text-sm">Feburary 2022</p>
                </div>
            </div>

            <div className="flex">
                <div className={"dark:bg-dark-200 " + styles["sales-history__action"]}>
                    <Image src={minted} alt="minting logo" width={25} height={25}></Image>
                </div>

                <div className="ml-3 font-secondary">
                    <p className="font-medium">@{minter} minted this song</p>
                    <p className="text-[#8a8a8a] text-sm">January 2022</p>
                </div>
            </div>
        </div>
    );
}
