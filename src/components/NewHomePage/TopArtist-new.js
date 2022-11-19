import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import SwiperArtist from "./utils/SwiperArtist";
import swiperBG from "../../../public/assets/homepage/swiperBG.png";
import sarthak_d_b from "../../../public/assets/new-homepage/cover_sarthak_d.png";
import sarthak_d_w from "../../../public/assets/new-homepage/cover_sarthak_w.png";
import sarthak_m_d from "../../../public/assets/new-homepage/sarthak_d.png";
import sarthak_m_w from "../../../public/assets/new-homepage/sarthak_w.png";

export default function TopArtists() {
	const { theme } = useTheme();
	const [bg, setBg] = useState([sarthak_d_b,sarthak_d_w,sarthak_m_d,sarthak_m_w]);

	return (
		<div className="relative mt-28">
			<h1 className="text-3xl font-semibold text-center font-primary">
				Top Artists on M<span className="text-primary-500">x</span> Catalog
			</h1>
			<div className="relative w-full mt-10 overflow-hidden rounded-2xl">
				<div className="absolute z-10 mt-10 text-sm text-white right-6 lg:right-16">
					<div className="space-x-4">
						<span className="py-2 px-8 font-primary cursor-pointer bg-[rgba(255,255,255,0.4)] rounded-3xl">
							<Link href="https://www.instagram.com/musixverse" passHref>
								<a target="_blank" rel="noopener noreferrer">
									<span>View all</span>
								</a>
							</Link>
						</span>
						<span className="px-3 py-2 font-primary cursor-pointer bg-[rgba(255,255,255,0.4)] rounded-full">
							<Link href="/help-center" passHref={true}>
								<span>
									<i className="fa-solid fa-circle-info"></i>
								</span>
							</Link>
						</span>
					</div>
				</div>
				<div className="hidden w-full h-full duration-500 transition-all ease-out md:block hover:scale-110">
					<Image src={theme==="dark"? bg[0]:bg[1]} alt="Cover art for Top Artist" layout="responsive" priority />
				</div>
				<div className="w-full h-full duration-500 ease-out md:hidden hover:scale-110">
					<Image src={theme==="dark"? bg[2]:bg[3]} alt="Cover art for Top Artist" layout="responsive" priority />
				</div>
			</div>

			{/* Swiper Component for Artist */}
			<SwiperArtist setCurrBg={setBg} />

			{/* Bottom image section */}
			{/* <div className="absolute">
				<Image src={swiperBG} alt="Top Artist section background design" layout="responsive" priority />
			</div> */}
		</div>
	);
}
