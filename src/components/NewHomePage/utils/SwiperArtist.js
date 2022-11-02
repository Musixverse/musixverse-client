import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";

import ArtistCard from "./ArtistCard";
import { TopArtist } from "./TopArtistData";

export default function SwiperArtist({setCurrBg}){

    const onHover = function(item) {
        setCurrBg([item.bgURL_d,item.bgURL_m]);
    }

    return(
        <div className="swiper-container">
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
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280:{
                            slidesPerView: 4,
                            spaceBetween: 40,
                        }
                    }
                }
                autoHeight={false}
                autowidth={false}
                enabled={true}
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper mx-10 absolute bottom-32"
            >
                {TopArtist.map((item, index) => {
                    return (
                        <SwiperSlide key={index} onMouseEnter={() => onHover(item)}>
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
        </div>
    );
}