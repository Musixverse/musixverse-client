import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import styles from "../../../styles/HomePage/getStartedArtist.module.css";

export default function GetStartedArtist(){
	const { theme } = useTheme();

    return(
        <div className="rounded-[1.5rem] md:p-0 p-4 lg:rounded-[2.5rem] xl:rounded-[3.5rem] flex flex-col md:flex-row md:items-center bg-light-100 dark:bg-[#202020] mt-28">
            <div className={styles['img']}>
                <Image alt="artists" src={theme==="dark"? "/assets/homepage/startArtistdark.png": "/assets/homepage/startArtistlight.png"} priority objectFit="cover" layout="fill"/>
            </div>

            <div className="flex flex-col flex-1 pr-12">
                <h2 className={styles['get-started-heading']}>Get Started as an Artist</h2>
                <div className="flex flex-col w-full">
                    <div className="flex md:flex-row flex-col items-start justify-between w-full max-w-[90%]">
                        <div className="flex flex-col md:flex-row">
                            <h1 className={styles['units']}>01</h1>
                            <div className="flex flex-col">
                                <h2 className={styles['info-headers']}>Get your crypto wallet ready</h2>
                                <p className={styles['info-body']}>Check out our guide on how to set up a wallet <a href="https://medium.com/@musixverse/how-to-set-up-a-crypto-wallet-metamask-477be25c0f5f" target={"_blank"} rel="noreferrer" className="text-primary-500 hover:text-primary-400">here.</a></p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-4 md:mt-0 md:ml-4 xl:ml-8 md:flex-row">
                            <h1 className={styles['units']}>02</h1>
                            <div className="flex flex-col">
                                <h2 className={styles['info-headers']}>Sign up as an Artist</h2>
                                <p className={styles['info-body']}><Link href={"/"} passHref><a target={"_blank"} rel="noreferrer" className="text-primary-500 hover:text-primary-400">Connect Wallet</a></Link> to sign up and provide basic information about yourself.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-4 md:my-0 md:mt-7 md:flex-row">
                        <h1 className={styles['units']}>03</h1>
                        <div className="flex flex-col">
                            <h2 className={styles['info-headers']}>Verify and Create</h2>
                            <p className={styles['info-body']}>Verify your artist profile using a government issued ID and start minting NFTs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}