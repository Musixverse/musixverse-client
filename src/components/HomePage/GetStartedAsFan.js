import Image from "next/image";
import getStartedAsFan from "../../../public/assets/homepage/getStartedAsFan.png"
import styles from "../../../styles/HomePage/getStartedAsFan.module.css";
import Link from "next/link";

export default function GetStartedAsFan(){
    return(
        <div className="flex flex-col w-full py-28">
            <div className="relative rounded-[2.5rem]">
                <div className="hidden lg:flex absolute z-[2] pr-36 h-[400px] w-[436px]xl:h-[470px] xl:w-[506px] top-[5%] xl:top-[-3%] right-0">
                    <div className={"bg-transparent -mt-5 " + styles['white-circle']}>
                        <div className={"aspect-square rounded-full relative w-[280px] xl:w-[296px] border-[#fff] border-[40px] xl:border-[48px]"}></div>
                    </div>
                    <Image src={"/assets/homepage/fanCirclePpl.svg"} alt="musicians" priority objectFit="contain" layout="fill"/>
                </div>
                <div className="absolute w-full h-full items-center justify-end pt-10 md:pt-0 md:justify-end flex flex-col z-[1]">
                    <h1 className="font-semibold opacity-[0.7] text-4xl md:text-[3.75rem] xl:text-[4.5rem] leading-[1.5] -mb-5 md:block hidden text-light-200 md:text-[#032C2D] md:mr-auto pl-startAsFan2XlHeading">Get Started as<br/> a Fan</h1>
                    <div className="backdrop-blur-[80px] backdrop-brightness-50 rounded-b-[2.5rem] flex w-full p-9">
                        <h4 className="font-semibold text-3xl md:text-4xl text-[#f2f2f2] mr-auto">Get Started as a Fan</h4>
                    </div>
                </div>
                <div className="w-full h-[358px] relative">
                    <Image src={"/assets/homepage/fanBgFull.svg"} className="rounded-[2.5rem]" objectFit="cover" layout="fill" alt="background layer"/>
                </div>
            </div>
            {/* <div className="w-full h-[510px] relative">
                <Image alt="get started as artist" src={getStartedAsFan} layout="fill" priority/>
            </div> */}

            {/* <div className="bg-[#202020] rounded-[2.5rem] w-full mt-3 p-16 flex flex-col md:flex-row space-y-14 md:space-y-0 items-center justify-between">
                <div className="flex flex-col space-y-4 leading-none lg:flex-row lg:space-y-0">
                    <h1 className="mr-6 text-5xl font-semibold">01</h1>
                    <div className="flex flex-col">
                        <h2 className="mb-3 text-2xl font-semibold md:text-3xl">Sign up as a collector</h2>
                        <p className="max-w-sm text-lg">Register and start your journey on Musixverse.</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 leading-none lg:flex-row lg:space-y-0">
                    <h1 className="mr-6 text-5xl font-semibold">02</h1>
                    <div className="flex flex-col">
                        <h2 className="mb-3 text-2xl font-semibold md:text-3xl"> Browse and buy NFTs</h2>
                        <p className="max-w-sm text-lg">Look through the NFTs of your favorite artists and purchase the ones you like.</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 leading-none lg:flex-row lg:space-y-0">
                    <h1 className="mr-6 text-5xl font-semibold">03</h1>
                    <div className="flex flex-col">
                        <h2 className="mb-3 text-2xl font-semibold md:text-3xl"> Enjoy the privileges</h2>
                        <p className="max-w-sm text-lg"> Enjoy exclusive privileges that come with being an NFT collector on Musixverse</p>
                    </div>
                </div>
            </div> */}
            <div className="bg-[#202020] rounded-[1.75rem] md:space-x-4 2xl:rounded-[2.5rem] w-full mt-3 p-8 xl:p-12 2xl:p-14 flex flex-col md:flex-row space-y-14 md:space-y-0 items-start justify-between">
                <div className="flex flex-col space-y-4 leading-none lg:flex-row lg:space-y-0">
                    <h1 className="mr-4 text-4xl font-semibold xl:mr-6 2xl:text-5xl">01</h1>
                    <div className="flex flex-col">
                        <h2 className="mb-1 text-2xl font-semibold 2xl:mb-3 2xl:text-3xl">Get your crypto wallet ready</h2>
                        <p className="text-lg md:max-w-[340px]">Check out our guide on how to set up a wallet <a href="https://www.instagram.com/p/CiKtwJChpqV/" target={"_blank"} rel="noreferrer" className="text-primary-500 hover:text-primary-400">here</a></p>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 leading-none lg:flex-row lg:space-y-0">
                    <h1 className="mr-4 text-4xl font-semibold xl:mr-6 2xl:text-5xl">02</h1>
                    <div className="flex flex-col">
                        <h2 className="mb-1 text-2xl font-semibold 2xl:mb-3 2xl:text-3xl">Sign up as a Collector</h2>
                        <p className="text-lg md:max-w-[340px]"><Link href={"/"} passHref><a target={"_blank"} rel="noreferrer" className="text-primary-500 hover:text-primary-400">Connect Wallet</a></Link> to sign up and provide basic information about yourself.</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 leading-none lg:flex-row lg:space-y-0">
                    <h1 className="mr-4 text-4xl font-semibold xl:mr-6 2xl:text-5xl">03</h1>
                    <div className="flex flex-col">
                        <h2 className="mb-1 text-2xl font-semibold 2xl:mb-3 2xl:text-3xl">Browse and buy NFTs</h2>
                        <p className="text-lg md:max-w-[340px]">Find your favorite artists and collect their NFTs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}