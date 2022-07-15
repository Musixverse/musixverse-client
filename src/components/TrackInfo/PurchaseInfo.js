import Image from "next/image";
import Link from "next/link";
import { useMoralisQuery } from "react-moralis";
import styles from "../../../styles/TrackInfo/PurchaseInfo.module.css";
import CustomButton from "../../layout/CustomButton";

export default function PurchaseInfo({ metadata, currentOwnerAddress, price }) {
    const { data: currentOwner } = useMoralisQuery("_User", (query) => query.equalTo("ethAddress", currentOwnerAddress), [currentOwnerAddress]);

    // if (!currentOwner[0]) return null;
    return (
        <div className={"dark:bg-dark-100 " + styles["purchase-info"]}>
            {/* Heading DIV */}
            <div className={styles["purchase-info__heading"]}>
                <h1 className="font-tertiary text-3xl">PURCHASE INFO</h1>

                <p className={styles["purchase-info__heading--p"]}>
                    {metadata.attributes[1].trait_type}
                    <i className="ml-2 mr-2 fa-solid fa-arrow-right-long"></i>
                    {metadata.attributes[1].value}%
                </p>
            </div>

            {/* Border Line Div */}
            <div className="flex-grow border-t-[3px] border-[#9a9a9a] mt-2 mb-2"></div>

            {/* Current Owner DIV*/}
            <div className={styles["purchase-info__current-owner"]}>
                <p className={styles["purchase-info__heading--p"]}>Current Owner</p>
                {currentOwner[0] ? (
                    <Link href={`/profile/${currentOwner[0].attributes.username}`} className="cursor-pointer">
                        <a target="_blank" rel="noopener noreferrer">
                            <p className="font-secondary">@{currentOwner[0].attributes.username}</p>
                        </a>
                    </Link>
                ) : null}
            </div>

            <div className="flex-grow border-t-[3px] border-[#9a9a9a] mt-2 mb-2"></div>
            {/* Price Options */}
            <div className={styles["purchase-info__price-div"]}>
                <div className="flex flex-col">
                    <p className={styles["purchase-info__heading--p"]}>Price</p>
                    <div className="flex items-center">
                        <Image src={"/assets/matic-logo.svg"} width={25} height={50} alt="matic" />
                        <p className="ml-2 font-bold text-pricing font-primary">{price}</p>
                    </div>
                </div>
                <div className={styles["purchase-info__price-div--cta"]}>
                    <CustomButton green={true}>Buy Now</CustomButton>
                </div>
            </div>
        </div>
    );
}
