import { useState, useEffect } from "react";
import Image from "next/image";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import styles from "../../../styles/NFTCard/Section1.module.css";
import { truncatePrice } from "../../utils/GetMarketPrice";

export default function Section1({ artistName, isVerified, trackName, tokenId, unsoldTrackData, soldOnceTrackData }) {
	const { Moralis } = useMoralis();
	const { data: tokenPrice } = useMoralisCloudFunction("fetchTokenPrice", { tokenId: tokenId });
	const [price, setPrice] = useState("");

	useEffect(() => {
		if (unsoldTrackData) {
			setPrice(Moralis.Units.FromWei(unsoldTrackData.primaryMarketplacePrice));
		} else if (tokenPrice) {
			setPrice(Moralis.Units.FromWei(tokenPrice));
		}
	}, [tokenPrice]);

	const truncatednftPrice = truncatePrice(price);

	return (
		<div className={styles["nft-card__description--section1"]}>
			{/* SONG and ARTIST NAME SECTION */}
			<div>
				<p className={styles["description--section1__artistname"]}>
					{artistName}
					{isVerified ? <Image src={"/assets/mxv_tick.svg"} width={17} height={17} alt="MXV verified"></Image> : null}
				</p>
				<h6 className={styles["description--section1__trackname"]}>{trackName}</h6>
			</div>
			{/* CURRENT PRICE */}
			<div className="flex flex-col justify-end">
				<p className={styles["description--section1__price"]}>{soldOnceTrackData ? "Lowest Price" : "Price"}</p>
				<div className="flex items-center justify-end font-semibold">
					<Image src={"/assets/matic-logo.svg"} width={16} height={16} alt="matic logo" />
					<span className="ml-1 sm:text-lg">{truncatednftPrice}</span>
				</div>
			</div>
		</div>
	);
}
