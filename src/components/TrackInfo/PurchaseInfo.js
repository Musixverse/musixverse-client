import Image from "next/image";
import Link from "next/link";
import { useMoralisCloudFunction } from "react-moralis";
import styles from "../../../styles/TrackInfo/PurchaseInfo.module.css";
import CustomButton from "../../layout/CustomButton";

export default function PurchaseInfo({ metadata, currentOwnerAddress, price }) {
    const { data: currentOwner } = useMoralisCloudFunction("fetchUsernameFromAddress", { address: currentOwnerAddress });
    const { data: currentOwnerAvatar } = useMoralisCloudFunction("fetchUserAvatarFromAddress", { address: currentOwnerAddress });

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
                <div className="flex items-center">
                    {currentOwner ? (
                        <Link href={`/profile/${currentOwner.username}`} className="cursor-pointer">
                            <a target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                                <div className="rounded-full flex relative">
                                    {currentOwnerAvatar ? <Image priority src={currentOwnerAvatar} height="20" width="20" alt="current owner avatar" className="rounded-full" /> : null}
                                </div>
                                <p className="font-secondary">@{currentOwner.username}</p>
                            </a>
                        </Link>
                    ) : null}
                </div>
            </div>

            <div className="flex-grow border-t-[3px] border-[#9a9a9a] mt-2 mb-2"></div>
            {/* Price Options */}
            <div className={styles["purchase-info__price-div"]}>
                <div className="flex flex-col">
                    <p className={styles["purchase-info__heading--p"]}>Price</p>
                    <div className="flex items-center">
                        <Image src={"/assets/matic-logo.svg"} width={25} height={50} alt="matic icon" />
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
