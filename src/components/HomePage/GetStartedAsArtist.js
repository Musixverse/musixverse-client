import Image from "next/image";
import getStartedAsArtist from "../../../public/assets/homepage/getStartedAsArtist.png"

export default function GetStartedAsArtist(){
    return(
        <div className="flex flex-col w-full">
            <div className="w-full h-[510px] relative">
                <Image alt="get started as artist" src={getStartedAsArtist} layout="responsive" priority/>
            </div>
            <div className="bg-[#202020] rounded-[2.5rem] w-full mt-3 p-16 flex items-center justify-between">
                <div className="flex leading-none">
                    <h1 className="text-[54px] font-semibold mr-6">01</h1>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-[28px] mb-3">Sign up as an Artist</h2>
                        <p className="text-lg max-w-[340px]">Create an account and provide some basic information about yourself.</p>
                    </div>
                </div>

                <div className="flex leading-none">
                    <h1 className="text-[54px] font-semibold mr-6">02</h1>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-[28px] mb-3">Verify your profile</h2>
                        <p className="text-lg max-w-[340px]">Provide some additional details and get your profile verified.</p>
                    </div>
                </div>

                <div className="flex leading-none">
                    <h1 className="text-[54px] font-semibold mr-6">03</h1>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-[28px] mb-3">Launch your NFT</h2>
                        <p className="text-lg max-w-[340px]">Create an NFT and offer it for sale on Musixverse.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}