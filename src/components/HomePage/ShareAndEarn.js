import Image from "next/image";
import instruments from "../../../public/assets/homepage/shareEarnInstrument.png"

export default function ShareAndEarn(){
    return(
        <div className="bg-[url('/assets/homepage/shareEarnBG.png')] relative flex items-center pt-28 bg-no-repeat bg-cover bg-center w-full">
            <h1 className="text-[#3A3A3A] font-semibold text-[98px] pt-8 absolute leading-none z-[1]">Share & <br/> Earn 10%</h1>
            <div className="flex items-center z-[2] ml-auto">
                <div className="relative h-[571px] w-[820px]">
                    <Image src={instruments} objectFit="contain" priority alt="guitars"/>    
                </div>
                <div className="-ml-12 w-fit h-fit flex flex-col backdrop-blur-[40px] rounded-3xl p-5 bg-[#282828]">
                    <div className="flex justify-between w-full">
                        <h3 className="font-semibold text-[42px] mb-3 px-4 pt-4">Share & Earn 10%</h3>
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
                        <div className="backdrop-blur-[40px] backdrop-brightness-[1.75] p-3 rounded-2xl flex items-center justify-between z-20">
                            <button className="flex items-center p-4 font-medium rounded-lg bg-primary-500 hover:bg-primary-400">
                                Start Sharing
                                <span class="material-symbols-outlined ml-10">
                                    arrow_right_alt
                                </span>
                            </button>

                            <p className="text-xs text-right ml-44">You need to sign into Musixverse to start <br/> earning rewards</p>
                        </div>
                        <div className="absolute z-[-1] w-full h-9 bg-primary-600 rounded-xl top-[50%]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}