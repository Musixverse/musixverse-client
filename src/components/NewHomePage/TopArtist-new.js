import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cover_sarthak from "../../../public/assets/new-homepage/cover_sarthak.png";
import cover_m from "../../../public/assets/new-homepage/cover_m.png";
import bg_design from "../../../public/assets/new-homepage/bg_design.png";
import SwiperArtist from "./utils/SwiperArtist";

export default function TopArtists() {
	const [bg, setBg] = useState([cover_sarthak, cover_m]);

	return (
		<div className="relative mt-20 mb-28">
			<h1 className="font-primary font-semibold text-3xl text-center">
				Top Artists on M<span className="text-primary-500">x</span> Catalog
			</h1>
			<div className="w-full mt-10 relative rounded-2xl overflow-hidden">
				<div className="text-sm z-10 absolute right-6 lg:right-16 text-white mt-10">
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
				<div className="w-full h-full hidden md:block hover:scale-110 duration-500 ease-out">
					<Image src={bg[0]} className="hidden transition duration-500" alt="Cover art for Top Artist" layout="responsive" priority />
				</div>
				<div className="w-full h-full md:hidden hover:scale-110 duration-500 ease-out">
					<Image src={bg[1]} className="hidden transition duration-500" alt="Cover art for Top Artist" layout="responsive" priority />
				</div>
			</div>

			{/* Swiper Component for Artist */}
			<SwiperArtist setCurrBg={setBg} />

			{/* Bottom image section */}
			<div className="hidden md:block absolute w-full top-3/4">
				<Image src={bg_design} alt="Top Artist section background design" layout="responsive" priority />
			</div>
		</div>
	);
}
