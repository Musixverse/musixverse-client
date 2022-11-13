import Image from "next/image";
import getStartedAsFan from "../../../public/assets/homepage/getStartedAsFan.png"
import styles from "../../../styles/HomePage/getStartedAsFan.module.css";

export default function GetStartedAsFan(){
    return(
        <div className="flex flex-col w-full py-36">
            <div className="relative rounded-[2.5rem]">
                <div className="absolute z-[2] pr-36 h-[470px] w-[506px] flex top-[-12%] right-0">
                    <div className={"bg-transparent pt-6 " + styles['white-circle']}>
                        <div className={"aspect-square rounded-full relative w-[296px] border-[#fff] border-[48px]"}></div>
                    </div>
                    <Image src={"/assets/homepage/fanCirclePpl.svg"} alt="musicians" priority objectFit="contain" layout="fill"/>
                </div>
                <div className="absolute w-full h-full items-center justify-end flex flex-col z-[1]">
                    <h1 className="font-semibold opacity-[0.7] text-[74px] -mb-7 text-[#032C2D] mr-auto pl-32">Get Started as<br/> a Fan</h1>
                    <div className="backdrop-blur-[80px] backdrop-brightness-50 rounded-b-[2.5rem] flex w-full p-9">
                        <h4 className="font-semibold text-4xl text-[#f2f2f2] mr-auto">Get Started as a Fan</h4>
                    </div>
                </div>
                <div className="w-full h-[358px] relative">
                    <Image src={"/assets/homepage/fanBgFull.svg"} className="rounded-[2.5rem]" objectFit="cover" layout="fill" alt="background layer"/>
                </div>
            </div>
            {/* <div className="w-full h-[510px] relative">
                <Image alt="get started as artist" src={getStartedAsFan} layout="fill" priority/>
            </div> */}








            <div className="bg-[#202020] rounded-[2.5rem] w-full mt-3 p-16 flex items-center justify-between">
                <div className="flex leading-none">
                    <h1 className="text-[54px] font-semibold mr-6">01</h1>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-[28px] mb-3">Sign up as a collector</h2>
                        <p className="max-w-sm text-lg">Register and start your journey on Musixverse.</p>
                    </div>
                </div>

                <div className="flex leading-none">
                    <h1 className="text-[54px] font-semibold mr-6">02</h1>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-[28px] mb-3"> Browse and buy NFTs</h2>
                        <p className="max-w-sm text-lg">Look through the NFTs of your favorite artists and purchase the ones you like.</p>
                    </div>
                </div>

                <div className="flex leading-none">
                    <h1 className="text-[54px] font-semibold mr-6">03</h1>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-[28px] mb-3"> Enjoy the privileges</h2>
                        <p className="max-w-sm text-lg"> Enjoy exclusive privileges that come with being an NFT collector on Musixverse</p>
                    </div>
                </div>
            </div>
        </div>
    );
}