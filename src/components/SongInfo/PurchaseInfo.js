import Image from "next/image";
import styles from "../../../styles/SongInfo/PurchaseInfo.module.css";
import ethLogo from "../../../public/assets/Eth_logo.svg";
import Button from "../../Layouts/Button";

export default function  PurchaseInfo(){
    // Fetch data and replace the hard-coded constant values
    const creatorShare = 20;
    const currentOwner = "benkessler";
    const NFTPrice = 0.3;

    return (
        <div className={styles['purchase-info']}>
            {/* Heading DIV */}
            <div className={styles['purchase-info__heading']}>
                <h1 className="font-tertiary text-3xl">PURCHASE INFO</h1>

                <p className={styles['purchase-info__heading--p']}>
                    Creator Share 
                    <i className="ml-2 mr-2 fas fa-arrow-right"></i>
                    {creatorShare}%
                </p>
            </div>
            {/* Border Line Div */}
            <div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>
            {/* Current Owner DIV*/}
            <div className={styles['purchase-info__current-owner']}>
                <p className={styles['purchase-info__heading--p']}>Current Owner</p>
                <p className="font-secondary">@{currentOwner}</p>
            </div>

            <div className="flex-grow border-t-[3px] border-[#9a9a9a]"></div>
            {/* Price Options */}
            <div className={styles['purchase-info__price-div']}>
                <div className="flex flex-col">
                    <p className={styles['purchase-info__heading--p']}>Price (x3 -3Copies)</p>
                    <div className="flex items-center">
                        <Image src={ethLogo} width={25} height={50} alt="ethereum"/>
                        <p className="ml-2 font-bold text-4xl font-primary">{NFTPrice}</p>
                    </div>
                </div>
                <div className={styles['purchase-info__price-div--cta']}>
                    <Button green={false}>Make Offer</Button>
                    <Button green={true}>Buy Now</Button>
                </div>
            </div>
        </div>
    );
}