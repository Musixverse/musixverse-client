import Image from "next/image";
import getStartedAsFan from "../../../public/assets/homepage/getStartedAsFan.png"

export default function GetStartedAsFan(){
    return(
        <div className="flex flex-col w-full pb-28">
            <div className="w-full h-[510px] relative">
                <Image alt="get started as artist" src={getStartedAsFan} layout="fill" priority/>
            </div>
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