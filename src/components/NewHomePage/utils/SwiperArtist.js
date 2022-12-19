import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";

import ArtistCard from "./ArtistCard";
import { TopArtistsData } from "./TopArtistsData";

export default function SwiperArtist({ setCurrBg }) {
	const onHover = function (item) {
		setCurrBg([item.bgURL_d_b,item.bgURL_d_w, item.bgURL_m_b, item.bgURL_m_w]);
	};

	return (
		<div className="swiper-container">
			<Swiper
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1280: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1440: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					1800: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				}}
				autoHeight={false}
				autowidth={"false"}
				enabled={true}
				cssMode={true}
				centerInsufficientSlides={true}
				navigation={true}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Mousewheel, Keyboard]}
				className="mx-10 absolute bottom-32"
			>
				{TopArtistsData.map((artist, index) => {
					return (
						<SwiperSlide key={index} onMouseEnter={() => onHover(artist)}>
							<ArtistCard
								name={artist.name}
								instagramProfileURL={artist.instagramProfileURL}
								imageURL_b={artist.imageURL_b}
								imageURL_w={artist.imageURL_w}
								description={artist.description}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
