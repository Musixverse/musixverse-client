import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import cover_sarthak from "../../../public/assets/new-homepage/cover_sarthak.png";
import cover_m from "../../../public/assets/new-homepage/cover_m.png";
import SwiperArtist from "./utils/SwiperArtist";
import swiperBG_b from "../../../public/assets/homepage/swiperBG_b.png";
import swiperBG_w from "../../../public/assets/homepage/swiperBG_w.png";

export default function TopArtists() {
	const { theme } = useTheme();
	const [bg, setBg] = useState([cover_sarthak, cover_m]);

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
				<div className="hidden w-full h-full duration-500 ease-out md:block hover:scale-110">
					<Image src={bg[0]} className="hidden transition duration-500" alt="Cover art for Top Artist" layout="responsive" priority />
				</div>
				<div className="w-full h-full duration-500 ease-out md:hidden hover:scale-110">
					<Image src={bg[1]} className="hidden transition duration-500" alt="Cover art for Top Artist" layout="responsive" priority />
				</div>
			</div>

			{/* Swiper Component for Artist */}
			<SwiperArtist setCurrBg={setBg} />

			{/* Bottom image section */}
			{/* <div className="absolute hidden w-full md:block top-3/4">
				<Image src={theme === "dark" ? swiperBG_b : swiperBG_w} alt="Top Artist section background design" layout="responsive" priority />
			</div> */}
		</div>
	);
}
