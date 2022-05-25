// import Image from "next/image";
import styles from "../../../styles/CFB/CFB4.module.css";
// import leftpng from "../../../public/assets/CFB/section5_left.png";
// import rightpng from "../../../public/assets/CFB/section5_right.png";

export default function CFB4(){
    return(
        <div className={styles['cfb4__container']}>
            {/* Image */}
            <img src="/assets/CFB/section5_left.png" className={styles['cfb4__image-left']} width={250} height={230} alt="svg" />
            <div className={"dark:bg-dark-100 "+styles['cfb4__card']}>
                <h1 className="font-primary text-2xl text-center font-semibold max-w-xl">Join our Community Feedback Board for exclusive privileges on Musixverse.</h1>
                <div className={styles['cfb4__card--innercard']}>
                    <div className={"dark:bg-dark-200 "+styles['cfb4__card--innercard2']}>
                        <h2>AS AN ARTIST</h2>
                        <p>You will be among the first people to mint and sell NFTs on MXV. We will market 
                        your art across the internet and will guarantee a good price for your first NFT.</p>
                    </div>
                    <div className={"dark:bg-dark-200 "+styles['cfb4__card--innercard2']}>
                        <h2>AS A FAN/COLLECTOR</h2>
                        <p>You will be among the first people to transact on the platform and take home some freshly minted NFTs. 
                        We will airdrop tokens to finance your first purchase on Musixverse.</p>
                    </div>
                </div>
            </div>
            {/* Image */}
            <img src="/assets/CFB/section5_right.png" className={styles['cfb4__image-right']} width={300} height={230} alt="svg" />
        </div>
    );
}