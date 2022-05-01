import Image from "next/image";
import styles from "../../../styles/CFB/CFB3.module.css";

export default function CFB3(){
    return(
        <div className={styles['cfb3__container']}>
            <div className={styles['cfb3__card']}>
                <div className={styles['cfb3__card--innercard']}>
                    <p  className="font-primary font-semibold text-3xl">Introducing Musixverse</p>
                    <p className="font-secondary text-sm max-w-xl text-center">
                    Musixverse aims to power ownership and distribution of music on the web 
                    and beyond and in the process empower artists and fans alike.</p>
                </div>
                <div className="flex mt-6 justify-evenly">
                    <div className={styles['cfb3__card--innercard2']}>
                        <h1>INVEST IN THE ARTIST</h1>
                        <p>Buy limited edition music created and sold directly by the artist 
                        packaged into Non-Fungible Tokens (NFTs) minted on the blockchain. 
                        These are akin to limited edition vinyl sold by artists in the physical world.</p>
                    </div>
                    <div className={styles['cfb3__card--innercard2']}>
                        <h1>ELIMINATE MIDDLEMEN</h1>
                        <p>Connect artists and fans like never before with no one in between. 
                        This connection lives beyond the bounds of any platform or service including Musixverse</p>
                    </div>
                    <div className={styles['cfb3__card--innercard2']}>
                        <h1>CONNECTION BEYOND BOUNDS</h1>
                        <p>Artists will know who their “real” fans are, and they can give back to 
                        their fans in any number of ways. Airdrop concerts + tickets, shares exclusive 
                        merch directly with fans, or jump on private chats with the artist…. 
                        Possibilities are limitless.</p>
                    </div>
                </div>
            </div>

            <p className="font-primary mt-14 font-semibold text-3xl text-primary-200">This is just a start</p>
            <p className="font-secondary text-sm max-w-2xl text-center pt-6">
            Everything that we are doing today is going to power the decentralized world of tomorrow. 
            Establishing ownership of these assets will be key to what you can and cannot do in the metaverse.
            </p>
        </div>
    );
}