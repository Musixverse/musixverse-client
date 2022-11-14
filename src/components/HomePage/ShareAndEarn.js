import Image from "next/image";
import instruments from "../../../public/assets/homepage/shareEarnInstrument.png"

export default function ShareAndEarn(){
    return(
        <div className="bg-[url('/assets/homepage/shareEarnBG.png')] relative flex items-center md:pt-28 bg-no-repeat bg-cover bg-center w-full">
            <h1 className="hidden md:block text-[#3A3A3A] font-semibold text-8xl pt-8 absolute leading-none z-[1]">Share & <br/> Earn 10%</h1>
            <div className="flex flex-col-reverse md:flex-row items-center z-[2] ml-auto">
                <div className="relative h-auto w-auto">
                    <Image src={instruments} objectFit="contain" priority alt="guitars"/>    
                </div>
                <div className="-ml-12 w-full md:w-fit md:h-fit flex flex-col backdrop-blur-[40px] rounded-3xl p-5 bg-[#282828]">
                    <div className="flex justify-between w-full">
                        <h3 className="font-semibold text-4xl mb-3 px-4 pt-4">Share & Earn 10%</h3>
                        <button className="backdrop-blur-[40px] backdrop-brightness-[1.75] p-3 flex items-center justify-center self-start rounded-xl">
                            <span class="material-symbols-outlined">
                                info
                            </span>
                        </button>
                    </div>
                    <p className="mb-3 text-lg px-7">of the transaction fee whenever someone buys an <br/> NFT using your link.</p>
                    <p className="text-lg mb-7 px-7">Become a part of your favorite artist’s success story.<br/> Promote their NFTs and earn referral reward.</p>
                    <div className="relative">
                        {/* bg-green bar */}
                        {/* CTA */}
                        <div className="backdrop-blur-[40px] space-x-44 backdrop-brightness-[1.75] p-3 rounded-2xl flex items-center justify-between z-20">
                            <button className="flex w-full md:w-3/4 items-center justify-between p-4 font-medium rounded-lg bg-primary-500 hover:bg-primary-400">
                                Start Sharing
                                <span class="material-symbols-outlined ml-10">
                                    arrow_right_alt
                                </span>
                            </button>

                            <p className="hidden md:block text-xs text-right">You need to sign into Musixverse to start <br/> earning rewards</p>
                        </div>
                        <div className="absolute z-[-1] w-full h-9 bg-primary-600 rounded-xl top-5 md:top-[50%]"></div>
                        <p className="md:hidden mt-4 px-7 text-xs">You need to sign into Musixverse to start <br/> earning rewards</p>
                    </div>
                </div>
            </div>
        </div>
    );
}