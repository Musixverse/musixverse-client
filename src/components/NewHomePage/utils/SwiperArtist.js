import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";

import ArtistCard from "./ArtistCard";
import { TopArtist } from "./TopArtistData";

export default function SwiperArtist(){
    return(
        <Swiper
            breakpoints={
                {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                }
            }
            // slidesPerView={4}
            // spaceBetween={25}
            autoHeight={false}
            autowidth={false}
            // centeredSlides={true}
            enabled={true}
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mx-10 absolute bottom-32"
        >
            {TopArtist.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <ArtistCard
                            name={item.name}
                            instagramProfileURL={item.instagramProfileURL}
                            imageURL={item.imageURL}
                            description={item.description}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}