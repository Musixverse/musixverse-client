import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import ArtistCard from "./ArtistCard";
import { TopArtist } from "./TopArtistData";

export default function SwiperArtist(){
    return(
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
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
            </div>    
        </div>
    );
}