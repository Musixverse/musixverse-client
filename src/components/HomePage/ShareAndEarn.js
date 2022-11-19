import Image from "next/image";
import { useTheme } from "next-themes";
import instruments from "../../../public/assets/homepage/instrument_b.svg";
import instruments_w from "../../../public/assets/homepage/instrument_w.svg";

export default function ShareAndEarn() {
	const { theme } = useTheme();

	return (
		<div className="relative flex items-center md:pt-28 bg-no-repeat bg-cover bg-center w-full overflow-x-hidden">
			<h1 className="hidden md:block text-[#3A3A3A] font-semibold text-7xl lg:text-8xl absolute leading-none z-[1] -mt-80 lg:mt-shareEarn2XlHeading">
				Share & <br /> Earn 10%
			</h1>
			<div className="flex flex-col-reverse md:flex-row items-center z-[2] md:ml-auto md:w-max w-full">
				<div className="relative w-[428px] lg:w-[476px] h-[317px] xl:w-[688px] xl:h-[462px] 2xl:w-[754px] 2xl:h-[526px]">
					<Image src={theme === "dark" ? instruments : instruments_w} objectFit="contain" layout="fill" priority alt="guitars" />
				</div>
				<div className="md:-ml-24 xl:ml-shareEarnGuitars 2xl:-ml-12 w-full md:w-fit md:h-fit flex flex-col backdrop-blur-[40px] rounded-3xl p-3 xl:p-5 bg-light-300 dark:bg-[#282828]">
					<div className="flex justify-between w-full">
						<h3 className="px-4 pt-4 mb-3 text-2xl font-semibold lg:text-3xl xl:text-4xl">Share & Earn 10%</h3>
						<button className="backdrop-blur-[40px] backdrop-brightness-[1.75] p-3 flex items-center justify-center self-start rounded-xl">
							<span className="material-symbols-outlined">info</span>
						</button>
					</div>
					<p className="max-w-md mb-3 text-[12px] lg:text-base xl:text-lg px-4">
						of the transaction fee whenever someone buys an NFT using your link.
					</p>
					<p className="max-w-md text-[12px] lg:text-base xl:text-lg mb-3 md:mb-7 px-4">
						Become a part of your favorite artist’s success story. Promote their NFTs and earn referral reward.
					</p>
					<div className="relative">
						{/* bg-green bar */}
						{/* CTA */}
						<div className="backdrop-blur-[40px] w-full backdrop-brightness-[1.75] p-3 rounded-2xl flex items-center justify-between z-20">
							<button className="max-w-[168px] md:max-w-none flex items-center justify-between w-full p-3 text-xs font-medium rounded-md lg:p-4 lg:rounded-lg lg:text-base md:w-max bg-primary-500 hover:bg-primary-400">
								Start Sharing
								<span className="ml-6 text-xs lg:ml-10 lg:text-base material-symbols-outlined">arrow_right_alt</span>
							</button>

							<p className="hidden lg:ml-12 text-[10px] lg:text-xs text-right md:block w-max">
								You need to sign into Musixverse to start <br /> earning rewards
							</p>
						</div>
						<div className="absolute z-[-1] w-full h-9 bg-primary-600 rounded-xl top-5 md:top-[45%]"></div>
						<p className="px-4 mt-4 text-xs md:hidden">
							You need to sign into Musixverse to start <br /> earning rewards
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
