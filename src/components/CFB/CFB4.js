import Image from "next/image";

export default function CFB4(){
    return(
        <div className={styles['cfb4__container']}>
            {/* Image */}
            <div>
                <h1>Join our Community Feedback Board for exclusive privileges on Musixverse.</h1>
                <div>
                    <div>
                        <h2>AS AN ARTIST</h2>
                        <p>You will be among the first people to mint and sell NFTs on MXV. We will market 
                        your art across the internet and will guarantee a good price for your first NFT.</p>
                    </div>
                    <div>
                        <h2>AS A FAN/COLLECTOR</h2>
                        <p>You will be among the first people to transact on the platform and take home some freshly minted NFTs. 
                        We will airdrop tokens to finance your first purchase on Musixverse.</p>
                    </div>
                </div>
            </div>
            {/* Image */}
        </div>
    );
}