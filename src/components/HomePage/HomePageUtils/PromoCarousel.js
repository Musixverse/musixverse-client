import PromoNftCard from "./PromoNftCards";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import styles from "../../../../styles/HomePage/promoCarousel.module.css";
import { useRouter } from "next/router";
import ArtistIntro from "./ArtistIntro";

export default function PromoCarousel({ tracks }) {
	const { theme } = useTheme();
	const [currSlide, setCurrSlide] = useState(1);
	const router = useRouter();
	let xDown = null;
	let yDown = null;

	useEffect(() => {
		const carouselRider = setInterval(() => {
			setCurrSlide((prevSlide) => {
				return (prevSlide % 8) + 1;
			});
		}, 6000);

		return () => clearInterval(carouselRider);
	}, []);

	const imgSrcs_darkTheme = [
		{ artistName: "Harry Arora", imgSrc: "/assets/homepage/slider/harryFull_b.png" },
		{ artistName: "Xubaan", imgSrc: "/assets/homepage/slider/xubaanFull_b.png" },
		{ artistName: "Jatayu", imgSrc: "/assets/homepage/slider/jatayuFull_b.png" },
		{ artistName: "Sarthak Kalyani", imgSrc: "/assets/homepage/slider/sarthakFull_b.png" },
		{ artistName: "Pooja Tiwari", imgSrc: "/assets/homepage/slider/poojaFull_b.png" },
		{ artistName: "Sommaiya", imgSrc: "/assets/homepage/slider/sommaiyaFull_b.png" },
		{ artistName: "Submarine In Space", imgSrc: "/assets/homepage/slider/submarineFull_b.png" },
		{ artistName: "Aditya Kalway", imgSrc: "/assets/homepage/slider/adityaFull_b.png" },
	];
	const imgSrcs_lightTheme = [
		{ artistName: "Harry Arora", imgSrc: "/assets/homepage/slider/harryFull_w.png" },
		{ artistName: "Xubaan", imgSrc: "/assets/homepage/slider/xubaanFull_w.png" },
		{ artistName: "Jatayu", imgSrc: "/assets/homepage/slider/jatayuFull_w.png" },
		{ artistName: "Sarthak Kalyani", imgSrc: "/assets/homepage/slider/sarthakFull_w.png" },
		{ artistName: "Pooja Tiwari", imgSrc: "/assets/homepage/slider/poojaFull_w.png" },
		{ artistName: "Sommaiya", imgSrc: "/assets/homepage/slider/sommaiyaFull_w.png" },
		{ artistName: "Submarine In Space", imgSrc: "/assets/homepage/slider/submarineFull_w.png" },
		{ artistName: "Aditya Kalway", imgSrc: "/assets/homepage/slider/adityaFull_w.png" },
	];

	const imgs = theme === "dark" ? imgSrcs_darkTheme : imgSrcs_lightTheme;

	//This function has to update the image being displayed
	const handleNftCardClick = (e, idx) => {
		e.preventDefault();
		// const token = 17;
		// if (idx === currSlide) {
		// 	// router.push(`/track/polygon/${token}`)
		// 	return;
		// }
		setCurrSlide(idx);
	};

	const handleTouchStart = (evt) => {
		const firstTouch = evt.touches[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	};

	const handleTouchMove = (evt) => {
		if (!xDown || !yDown) {
			return;
		}
		let xUp = evt.touches[0].clientX;
		let yUp = evt.touches[0].clientY;

		let xDiff = xDown - xUp;
		let yDiff = yDown - yUp;
		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			/*most significant*/
			if (xDiff <= 0) {
				/* left swipe */
				setCurrSlide((prev) => {
					return prev === 1 ? 8 : prev - 1;
				});
			} else {
				/* right swipe */
				setCurrSlide((prev) => {
					return prev === 8 ? 1 : prev + 1;
				});
			}
		}
		/* reset values */
		xDown = null;
		yDown = null;
	};
	return (
		<div className={styles["wrapper-container"]}>
			<div className={styles["artist-img"]}>
				<Image src={imgs[currSlide - 1].imgSrc} objectFit="cover" layout="fill" alt="artist" />
			</div>
			<div className="flex-1 mb-20 md:mb-0 md:-mt-20 promo-carousel-container" id="slider">
				{/* {inputs} */}
				<input type="radio" name="slider" id="s1" readOnly checked={currSlide === 1} />
				<input type="radio" name="slider" id="s2" readOnly checked={currSlide === 2} />
				<input type="radio" name="slider" id="s3" readOnly checked={currSlide === 3} />
				<input type="radio" name="slider" id="s4" readOnly checked={currSlide === 4} />
				<input type="radio" name="slider" id="s5" readOnly checked={currSlide === 5} />
				<input type="radio" name="slider" id="s6" readOnly checked={currSlide === 6} />
				<input type="radio" name="slider" id="s7" readOnly checked={currSlide === 7} />
				<input type="radio" name="slider" id="s8" readOnly checked={currSlide === 8} />

				{/* {labels} */}
				<label
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onClick={(e) => {
						handleNftCardClick(e, 1);
					}}
					htmlFor="s1"
					id="slide1"
				>
					<ArtistIntro artistName={"Harry Arora"} />
				</label>
				<label
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onClick={(e) => {
						handleNftCardClick(e, 2);
					}}
					htmlFor="s2"
					id="slide2"
				>
					<ArtistIntro artistName={"Xubaan"} isBand={true} />
				</label>
				<label
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onClick={(e) => {
						handleNftCardClick(e, 3);
					}}
					htmlFor="s3"
					id="slide3"
				>
					<ArtistIntro artistName={"Jatayu"} isBand={true} />
				</label>
				<label
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onClick={(e) => {
						handleNftCardClick(e, 4);
					}}
					htmlFor="s4"
					id="slide4"
				>
					<ArtistIntro artistName={"Sarthak Kalyani"} />
				</label>
				<label
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onClick={(e) => {
						handleNftCardClick(e, 5);
					}}
					htmlFor="s5"
					id="slide5"
				>
					<ArtistIntro artistName={"Pooja Tiwari"} />
				</label>
				<label
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onClick={(e) => {
						handleNftCardClick(e, 6);
					}}
					htmlFor="s6"
					id="slide6"
				>
					<ArtistIntro artistName={"Sommaiya"} />
				</label>
				<label
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onClick={(e) => {
						handleNftCardClick(e, 7);
					}}
					htmlFor="s7"
					id="slide7"
				>
					<ArtistIntro artistName={"Submarine In Space"} isBand={true} />
				</label>
				<label
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onClick={(e) => {
						handleNftCardClick(e, 8);
					}}
					htmlFor="s8"
					id="slide8"
				>
					<ArtistIntro artistName={"Aditya Kalway"} />
				</label>

				{/* <label onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onClick={(e)=>{handleNftCardClick(e, 1)}} htmlFor="s1" id="slide1"><PromoNftCard /></label>
				<label onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onClick={(e)=>{handleNftCardClick(e, 2)}} htmlFor="s2" id="slide2"><PromoNftCard /></label>
				<label onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onClick={(e)=>{handleNftCardClick(e, 3)}} htmlFor="s3" id="slide3"><PromoNftCard /></label>
				<label onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onClick={(e)=>{handleNftCardClick(e, 4)}} htmlFor="s4" id="slide4"><PromoNftCard /></label>
				<label onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onClick={(e)=>{handleNftCardClick(e, 5)}} htmlFor="s5" id="slide5"><PromoNftCard /></label> */}
			</div>
		</div>
	);
}
