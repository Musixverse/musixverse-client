import Image from "next/image";
import getStartedAsArtist from "../../../public/assets/homepage/getStartedAsArtist.png";
import styles from "../../../styles/HomePage/getStartedAsArtist.module.css";
import Link from "next/link";

export default function GetStartedAsArtist() {
	return (
		<div className="flex flex-col w-full pt-28">
			<div className="relative rounded-[2.5rem]">
				<div className="hidden lg:flex absolute z-[2] pl-36 h-[400px] w-[436px] xl:h-[470px] xl:w-[506px] top-[-12%] xl:top-[-31%]">
					<div className={"bg-transparent self-center " + styles["white-circle"]}>
						<div className={"aspect-square rounded-full relative w-[280px] xl:w-[296px] border-[#fff] border-[40px] xl:border-[48px]"}></div>
					</div>
					<Image src={"/assets/homepage/artistCirclePpl.svg"} alt="musicians" priority objectFit="contain" layout="fill" />
				</div>
				<div className="absolute w-full h-full items-center pt-10 md:pt-0 justify-end flex flex-col z-[1]">
					{/* <h1 className="font-semibold opacity-[0.6] text-4xl md:block hidden md:text-6xl xl:text-7xl text-[#f2f2f2] lg:mr-startAsArtist2XlHeading">Get Started as<br/> an Artist</h1> */}
					<h1 className="font-semibold opacity-[0.6] text-4xl md:block hidden md:text-[3rem] xl:text-[3.75rem] leading-[1.5] -mb-5 text-[#f2f2f2] lg:mr-startAsArtist2XlHeading">
						Get Started as
						<br /> an Artist
					</h1>
					<div className="backdrop-blur-[80px] backdrop-brightness-[0.5] rounded-b-[2.5rem] flex w-full p-9">
						<h4 className="font-semibold text-3xl md:text-4xl text-[#f2f2f2] ml-auto">Get Started as an Artist</h4>
					</div>
				</div>
				<div className="w-full h-[358px] relative">
					<Image src={"/assets/homepage/artistBgFull.svg"} className="rounded-[2.5rem]" objectFit="cover" layout="fill" alt="background layer" />
				</div>
			</div>

			<div className="bg-light-300 dark:bg-[#202020] rounded-[1.75rem] md:space-x-4 2xl:rounded-[2.5rem] w-full mt-3 p-8 xl:p-12 2xl:p-14 flex flex-col md:flex-row space-y-14 md:space-y-0 items-start justify-between">
				<div className="flex flex-col space-y-4 leading-none lg:flex-row lg:space-y-0">
					<h1 className="mr-4 text-4xl font-semibold xl:mr-6 2xl:text-5xl">01</h1>
					<div className="flex flex-col">
						<h2 className="mb-1 text-2xl md:max-w-[340px] font-semibold 2xl:mb-3 2xl:text-3xl">Get your crypto wallet ready</h2>
						<p className="text-lg md:max-w-[340px]">
							Check out our guide on how to set up a wallet{" "}
							<a
								href="https://medium.com/@musixverse/how-to-set-up-a-crypto-wallet-metamask-477be25c0f5f"
								target={"_blank"}
								rel="noreferrer"
								className="text-primary-500 hover:text-primary-400"
							>
								here
							</a>
						</p>
					</div>
				</div>

				<div className="flex flex-col space-y-4 leading-none lg:flex-row lg:space-y-0">
					<h1 className="mr-4 text-4xl font-semibold xl:mr-6 2xl:text-5xl">02</h1>
					<div className="flex flex-col">
						<h2 className="mb-1 text-2xl md:max-w-[340px] font-semibold 2xl:mb-3 2xl:text-3xl">Sign up as an Artist</h2>
						<p className="text-lg md:max-w-[340px]">
							<Link href={"/"} passHref>
								<a target={"_blank"} rel="noreferrer" className="text-primary-500 hover:text-primary-400">
									Sign Up
								</a>
							</Link>{" "}
							and provide basic information about yourself.
						</p>
					</div>
				</div>

				<div className="flex flex-col space-y-4 leading-none lg:flex-row lg:space-y-0">
					<h1 className="mr-4 text-4xl font-semibold xl:mr-6 2xl:text-5xl">03</h1>
					<div className="flex flex-col">
						<h2 className="mb-1 text-2xl md:max-w-[340px] font-semibold 2xl:mb-3 2xl:text-3xl">Verify and Create</h2>
						<p className="text-lg md:max-w-[340px]">Verify your artist profile using a government issued ID and start minting NFTs.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
