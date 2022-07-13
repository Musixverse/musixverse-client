import { useState, useEffect } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import styles from "../../../styles/NFTCard/Section1.module.css";
import { getCurrentNftPrice } from "../../utils/smart-contract/functions";

export default function Section1({ artistName, isVerified, songName, tokenId }) {
    const { Moralis } = useMoralis();
    const isWeb3Active = Moralis.ensureWeb3IsInstalled();
    const [price, setPrice] = useState("");

    const getPriceOf = async (tokenId) => {
        const result = await getCurrentNftPrice(tokenId);
        return result;
    };

    useEffect(async () => {
        if (isWeb3Active) {
            const musicNft = await getPriceOf(tokenId);
            setPrice(Moralis.Units.FromWei(musicNft.price));
        }
    }, [isWeb3Active]);

    let truncatednftPrice = price;
    if (price >= 1000000) {
        truncatednftPrice = Number((price / 1000000).toFixed(2)) + " M";
    } else if (price >= 1000) {
        truncatednftPrice = Number((price / 1000).toFixed(2)) + " K";
    }

    return (
        <div className={styles["nft-card__description--section1"]}>
            {/* SONG and ARTIST NAME SECTION */}
            <div>
                <p className={styles["description--section1__artistname"]}>
                    {artistName}
                    {isVerified ? <Image src={"/assets/mxv_tick.svg"} width={17} height={17} alt="MXV verified"></Image> : null}
                </p>
                <h6 className={styles["description--section1__songname"]}>{songName}</h6>
            </div>
            {/* CURRENT PRICE */}
            <div>
                <p className={styles["description--section1__price"]}>Price</p>
                <div className="flex items-center font-semibold">
                    <Image src={"/assets/matic-logo.svg"} width={16} height={16} alt="matic logo" />
                    <span className="ml-1 sm:text-lg">{truncatednftPrice}</span>
                </div>
            </div>
        </div>
    );
}
