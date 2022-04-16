import Image from "next/image";
import styles from "../../../styles/NFTCard/Nftcard.module.css";
import Section2 from "./Section2";
import Section1 from "./Section1";

export default function NFTCard(props){
    const songName = props.songName;
    const songId = props.songId;
    const nftPrice = props.nftPrice;
    const likeCount = props.likeCount;
    const lastPrice = props.lastPrice;
    const isVerified = props.isVerified;
    let artistName = props.artistName;

    if(artistName.length > 7)
        artistName = artistName.substring(0, 7)+"...";

    return(
        <div className={styles['nft-card']}>
            {/* NFT Image */}
            <Image src={"/assets/nft_bg.jpg"} alt="nft image" height={256} width={256} priority></Image>
            {/* NFT Details */}
            <div className={"dark:bg-dark-100 " + styles['nft-card__description']}>
                {/* Artist, Music name and current price */}
                <Section1 
                    artistName={artistName} 
                    songName={songName} 
                    songId={songId} 
                    nftPrice={nftPrice} 
                    isVerified={isVerified} 
                />
                {/* LIKES and Prev Price Section */}
                <Section2 likeCount={likeCount} lastPrice={lastPrice} />
            </div>
        </div>
    );
}