import Image from "next/image";
import styles from "../../../styles/NFTCard/Section1.module.css";

export default function Section1(props){
    return (
        <div className={styles['nft-card__description--section1']}>
            {/* SONG and ARTIST NAME SECTION */}
            <div>
                <p className={styles['description--section1__artistname']}>
                    {props.artistName}
                    {props.isVerified? 
                        <Image 
                            src={"/assets/mxv_tick.svg"} 
                            width={17} 
                            height={17} 
                            alt='MXV verified'>
                        </Image>
                        :
                        null
                    }
                </p>
                <h6 className={styles['description--section1__songname']}>
                    {props.songName}
                    <span className="ml-1">{"#"+`${props.songId}`}</span>
                </h6>
            </div>
            {/* CURRENT PRICE */}
            <div>
                <p className={styles['description--section1__price']}>Price</p>
                <div className="flex items-center font-bold">
                    <Image src={"/assets/Eth_logo.svg"} width={12.5} height={25} alt="ethereum logo"/>
                    <span className="ml-1 text-lg">{props.nftPrice}</span>
                </div>
            </div>
        </div>
    );
}