import { useState, useEffect } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import styles from "../../../styles/NFTCard/Section1.module.css";
import { truncatePrice } from "../../utils/GetMarketPrice";
import ShinyLoader from "../../layout/ShinyLoader";

export default function Section1({ artistName, trackName, price, isArtistVerified, soldOnceTrackData }) {
	const { Moralis } = useMoralis();
	const [tokenPrice, setTokenPrice] = useState("");

	useEffect(() => {
		if (price) {
			setTokenPrice(Moralis.Units.FromWei(price));
		}
	}, [price, Moralis.Units]);

	const truncatednftPrice = truncatePrice(tokenPrice);

	return (
		<div className={styles["nft-card__description--section1"]}>
			{/* SONG and ARTIST NAME SECTION */}
			<div className={artistName && trackName && truncatednftPrice ? "max-w-full fit-content" : "w-full"}>
				<div className={styles["description--section1__artistname"]}>
					{artistName ? artistName : <ShinyLoader classes="w-4/5 h-4 self-center rounded-lg" />}
					{isArtistVerified ? (
						<span className="ml-1 flex items-center">
							<Image src={"/assets/mxv_tick.svg"} width={14} height={14} alt="MXV verified" />
						</span>
					) : null}
				</div>
				<h6 className={styles["description--section1__trackname"]}>
					{trackName ? trackName : <ShinyLoader classes="w-2/3 h-4 mt-2 self-center rounded-lg" />}
				</h6>
			</div>
			{/* CURRENT PRICE */}
			{artistName && trackName && truncatednftPrice ? (
				<div className="flex flex-col justify-end">
					<p className={styles["description--section1__price"]}>{soldOnceTrackData ? "Lowest Price" : "Price"}</p>
					<div className="flex items-center justify-end font-semibold">
						<Image src={"/assets/matic-logo.svg"} width={16} height={16} alt="matic logo" />
						<span className="ml-1 sm:text-lg">{truncatednftPrice}</span>
					</div>
				</div>
			) : (
				<div className="flex flex-col justify-end w-full">
					<ShinyLoader classes="w-3/5 h-4 self-end rounded-lg" />
					<ShinyLoader classes="w-full h-4 mt-2 self-center rounded-lg" />
				</div>
			)}
		</div>
	);
}
