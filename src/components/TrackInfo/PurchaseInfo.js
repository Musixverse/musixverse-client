import Image from "next/image";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import styles from "../../../styles/TrackInfo/PurchaseInfo.module.css";
import PurchaseButton from "./TrackInfoUtils/PurchaseButton";

export default function PurchaseInfo({ trackId, tokenId, unlockTimestamp, resaleRoyaltyPercentage, currentOwner, price, onSale }) {
	const { user } = useMoralis();

	return (
		<div className={"dark:bg-dark-600 " + styles["purchase-info"]}>
			{/* Heading DIV */}
			<div className={styles["purchase-info__heading"]}>
				<h1 className="font-tertiary text-3xl">PURCHASE INFO</h1>

				<p className={"text-right " + styles["purchase-info__heading--p"]}>
					Resale Royalty Percentage
					<i className="ml-2 mr-2 fa-solid fa-arrow-right-long"></i>
					{resaleRoyaltyPercentage}%
				</p>
			</div>

			{/* Border Line Div */}
			<div className="flex-grow border-t-[3px] border-[#9a9a9a] mt-2 mb-2"></div>

			{/* Current Owner DIV*/}
			<div className={styles["purchase-info__current-owner"]}>
				<p className={styles["purchase-info__heading--p"]}>Current Owner</p>
				<div className="flex items-center">
					{currentOwner ? (
						<Link
							href={currentOwner.isBand ? `/profile/band/${currentOwner.username}` : `/profile/${currentOwner.username}`}
							className="cursor-pointer"
						>
							<a target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
								<div className="rounded-full flex relative">
									<Image priority src={currentOwner.avatar} height="20" width="20" alt="current owner avatar" className="rounded-full" />
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

				{Date.now() > unlockTimestamp * 1000 && (
					<>
						{user?.attributes.ethAddress !== currentOwner.ethAddress && (onSale || onSale === null) && (
							<div className={styles["purchase-info__price-div--cta"]}>
								<PurchaseButton trackId={trackId} tokenId={tokenId} price={price} />
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}
