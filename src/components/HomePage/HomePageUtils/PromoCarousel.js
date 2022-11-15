import PromoNftCard from "./PromoNftCards";
import { useState } from "react";
import Image from "next/image";

export default function PromoCarousel() {
	const [currSlide, setCurrSlide] = useState(1);
	const imgSrcs = ["/assets/homepage/harryFull.png","/assets/homepage/zubaanFull.png"]

	//This function has to update the image being displayed
	const handleNftCardClick = (e, idx) => {
		if(idx !== currSlide)
			setCurrSlide(idx);
	}

	return (
		<div className="flex flex-col items-center flex-1 h-[426px] lg:h-[592px] xl:h-[758px]">
			<div className="w-[402px] md:w-[290px] lg:w-[536px] xl:w-[584px] 2xl:w-[616px] aspect-square relative">
				<Image src={imgSrcs[(currSlide-1)%2]} objectFit="cover" layout="fill" alt="artist"/>
			</div>
			<div className="flex-1 mb-20 md:mb-0 md:-mt-20 promo-carousel-container" id="slider">
				<input type="radio" name="slider" id="s1" defaultChecked/>
				<input type="radio" name="slider" id="s2"/>
				<input type="radio" name="slider" id="s3"/>
				<input type="radio" name="slider" id="s4"/>
				<input type="radio" name="slider" id="s5"/>

				<label onClick={(e)=>{handleNftCardClick(e, 1)}} htmlFor="s1" id="slide1"><PromoNftCard /></label>
				<label onClick={(e)=>{handleNftCardClick(e, 2)}} htmlFor="s2" id="slide2"><PromoNftCard /></label>
				<label onClick={(e)=>{handleNftCardClick(e, 3)}} htmlFor="s3" id="slide3"><PromoNftCard /></label>
				<label onClick={(e)=>{handleNftCardClick(e, 4)}} htmlFor="s4" id="slide4"><PromoNftCard /></label>
				<label onClick={(e)=>{handleNftCardClick(e, 5)}} htmlFor="s5" id="slide5"><PromoNftCard /></label>
			</div>
		</div>
	);
}
