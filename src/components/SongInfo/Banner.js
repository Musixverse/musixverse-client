import Image from "next/image";
import CustomButton from "../../Layouts/CustomButton";
import ethLogo from "../../../public/assets/Eth_logo.svg";
import styles from "../../../styles/SongInfo/Banner.module.css";

export default function Banner(){
    const price = 0.3;

    return(
        <div className={styles['banner']}>
            <div className={styles['banner__container']}>
                <p>This Song is available to buy</p>
                {/* CTA */}
                <div className={styles['banner__container--cta']}>
                    <p className="mr-2">Reserved Price</p>
                    <Image src={ethLogo} width={12.5} height={25} alt="ethereum logo"/>
                    <p className="font-bold ml-1">{price}</p>

                    <div className={styles['banner__container--cta--buttons']}>
                        <CustomButton green={false}>Make Offer</CustomButton>
                        <CustomButton green={true}>Buy Now</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
}