// import Carousal  from "3d-react-carousal";
// import Carousel from "react-spring-3d-carousel";
import PromoNftCard from "./PromoNftCards";
// import { config } from "react-spring";
import { useState } from "react";

export default function PromoCarousel() {
	const [currSlide, setCurrSlide] = useState(0);
	const slides = [
		{
			key: 1,
			content: <PromoNftCard />,
		},
		{
			key: 2,
			content: <PromoNftCard />,
		},
		{
			key: 3,
			content: <PromoNftCard />,
		},
	];
	// const slides = [<PromoNftCard key={1}/>,<PromoNftCard key={2}/>,<PromoNftCard key={3}/>,]
	return (
		<div className="promo-nft-carousel-container" style={{ width: "50%", height: "500px" }}>
			{/* <Carousel
                slides={slides}
                showNavigation={false}
                animationConfig={config.slow}
                goToSlide={currSlide}
            /> */}
		</div>
	);
}
