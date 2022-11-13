import Image from "next/image";
import getStartedAsArtist from "../../../public/assets/homepage/getStartedAsArtist.png"
// import get
import styles from "../../../styles/HomePage/getStartedAsArtist.module.css";

export default function GetStartedAsArtist(){
    return(
        <div className="flex flex-col w-full pt-16">
            <div className="relative rounded-[2.5rem]">
                <div className="absolute z-[2] pl-36 h-[470px] w-[506px] flex top-[-31%]">
                    <div className={"bg-transparent self-center " + styles['white-circle']}>
                        <div className={"aspect-square rounded-full relative w-[296px] border-[#fff] border-[48px]"}></div>
                    </div>
                    <Image src={"/assets/homepage/artistCirclePpl.svg"} alt="musicians" priority objectFit="contain" layout="fill"/>
                </div>
                <div className="absolute w-full h-full items-center justify-end flex flex-col z-[1]">
                    <h1 className="font-semibold opacity-[0.6] text-[74px] -mb-7 text-[#f2f2f2]">Get Started as<br/> an Artist</h1>
                    <div className="backdrop-blur-[80px] backdrop-brightness-[0.5] rounded-b-[2.5rem] flex w-full p-9">
                        <h4 className="font-semibold text-4xl text-[#f2f2f2] ml-auto">Get Started as an Artist</h4>
                    </div>
                </div>
                <div className="w-full h-[358px] relative">
                    <Image src={"/assets/homepage/artistBgFull.svg"} className="rounded-[2.5rem]" objectFit="cover" layout="fill" alt="background layer"/>
                </div>
            </div>

            <div className="bg-[#202020] rounded-[2.5rem] w-full mt-3 p-16 flex flex-col md:flex-row space-y-14 md:space-y-0 items-center justify-between">
                <div className="flex flex-col space-y-4 md:flex-row leading-none">
                    <h1 className="text-5xl font-semibold mr-6">01</h1>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-2xl md:text-3xl mb-3">Sign up as an Artist</h2>
                        <p className="text-lg max-w-[340px]">Create an account and provide some basic information about yourself.</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 md:flex-row leading-none">
                    <h1 className="text-5xl font-semibold mr-6">02</h1>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-2xl md:text-3xl mb-3">Verify your profile</h2>
                        <p className="text-lg max-w-[340px]">Provide some additional details and get your profile verified.</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 md:flex-row leading-none">
                    <h1 className="text-5xl font-semibold mr-6">03</h1>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-2xl md:text-3xl mb-3">Launch your NFT</h2>
                        <p className="text-lg max-w-[340px]">Create an NFT and offer it for sale on Musixverse.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}