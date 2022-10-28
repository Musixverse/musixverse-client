import Image from "next/image";
import Link from "next/link";
import CoverImage_d from "../../../public/assets/new-homepage/cover_d.png";
import CoverImage_m from "../../../public/assets/new-homepage/cover_m.png";
import SwiperArtist from "./utils/SwiperArtist";

export default function TopArtists() {
	return (
		<div className="relative mt-24">
			<h1 className="font-primary font-semibold text-3xl text-center">
				Top Artists on M<span className="text-primary-100">x</span> Catalog
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
				<div className="w-full h-full hidden md:block">
					<Image src={CoverImage_d} className="hidden" alt="Cover art for Top Artist" layout="responsive" priority />
				</div>
				<div className="w-full h-full md:hidden">
					<Image src={CoverImage_m} className="hidden" alt="Cover art for Top Artist" layout="responsive" priority />
				</div>
			</div>

            {/* Swiper Component for Artist */}
            <SwiperArtist />
        </div>
    );
}    