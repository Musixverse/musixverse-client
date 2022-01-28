import Image from "next/image";
import styles from "../../../styles/SongInfo/PurchaseInfo.module.css";
import ethLogo from "../../assets/Eth_logo.svg";

export default function  PurchaseInfo(){
    return (
        <div className={styles['purchase-info']}>
            {/* Heading DIV */}
            <div className={styles['purchase-info__heading']}>
                <h1 className="font-tertiary text-3xl">PURCHASE INFO</h1>

                <p className={styles['purchase-info__heading--p']}>
                    Creator Share 
                    {/* {' '} */}
                    <i className="ml-2 mr-2 fas fa-arrow-right"></i>
                    {/* {' '} */}
                    20% {/* to be replaced with the fetched share */}
                </p>
            </div>
            {/* Border Line Div */}
            <div className="flex-grow border-t-2 border-gray-400"></div>
            {/* Current Owner DIV*/}
            <div className={styles['purchase-info__current-owner']}>
                <p className={styles['purchase-info__heading--p']}>Current Owner</p>
                <p className="font-secondary">@benkessler</p>
            </div>

            <div className="flex-grow border-t-2 border-gray-400"></div>
            {/* Price Options */}
            <div className="my-3">
                <div className="flex flex-col">
                    <p className={styles['purchase-info__heading--p']}>Price (x3 -3Copies)</p>
                    {/* main div */}
                    <div className="flex items-center">
                        <Image src={ethLogo} width={25} height={50} alt="ethereum"/>
                        <p className="ml-2 font-bold text-4xl font-primary">0.3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}