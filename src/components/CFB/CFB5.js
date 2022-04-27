import Image from "next/image";

export default function CFB5(){
    return(
        <div className={styles['cfb5__container']}>
            <div>
                <div>
                    <h1>Get Started</h1>
                    <p>For more details, you can contact us at</p> 
                    <p>info@musixverse.com</p>

                    <p>To Know more about community Feedback Hub 
                    <br />Join Our Discord Server
                    </p>
                    <button>Join Discord Community</button>
                    <div className="flex space-x-5 md:justify-end;">
                        <button className="flex justify-center items-center">
                            <Image src={redit} width={20} height={20} alt="redit"></Image>
                        </button>
                        <button className="flex justify-center items-center">
                            <Image src={discord} width={20} height={20} alt="discord"></Image>
                        </button>
                        <button className="flex justify-center items-center">
                            <Image src={facebook} width={20} height={20} alt="facebook"></Image>
                        </button>
                        <button className="flex justify-center items-center">
                            <Image src={twitter} width={20} height={20} alt="twitter"></Image>
                        </button>
                        <button className="flex justify-center items-center">
                            <Image src={instagram} width={20} height={20} alt="instagram"></Image>
                        </button>
                    </div>
                </div>
                <div>
                    {/* Image */}
                </div>
            </div>
        </div>
    );
}