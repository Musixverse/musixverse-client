import PromoNftCard from "./PromoNftCards";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import styles from "../../../../styles/HomePage/promoCarousel.module.css";
import ArtistIntro from "./ArtistIntro";


export default function PromoCarousel({ tracks }) {
	const { theme } = useTheme();
	const [currSlide, setCurrSlide] = useState(1);
	
	let xDown = null;
	let yDown = null;

	
	useEffect(() => {
		const carouselRider = setInterval(() => {
			setCurrSlide((prevSlide) => {
				return (prevSlide % 8) + 1;
			});
		}, 6000);

		return () => clearInterval(carouselRider);
	}, [currSlide]);

	const imgSrcs_darkTheme = useMemo(()=>[
		{ artistName: "Harry Arora", imgSrc: "/assets/homepage/slider/harryFull_b.png" },
		{ artistName: "Xubaan", imgSrc: "/assets/homepage/slider/xubaanFull_b.png" },
		{ artistName: "Jatayu", imgSrc: "/assets/homepage/slider/jatayuFull_b.png" },
		{ artistName: "Sarthak Kalyani", imgSrc: "/assets/homepage/slider/sarthakFull_b.png" },
		{ artistName: "Pooja Tiwari", imgSrc: "/assets/homepage/slider/poojaFull_b.png" },
		{ artistName: "Sommaiya", imgSrc: "/assets/homepage/slider/sommaiyaFull_b.png" },
		{ artistName: "Submarine In Space", imgSrc: "/assets/homepage/slider/submarineFull_b.png" },
		{ artistName: "Aditya Kalway", imgSrc: "/assets/homepage/slider/adityaFull_b.png" },
	],[]);
	const imgSrcs_lightTheme = useMemo(()=>[
		{ artistName: "Harry Arora", imgSrc: "/assets/homepage/slider/harryFull_w.png" },
		{ artistName: "Xubaan", imgSrc: "/assets/homepage/slider/xubaanFull_w.png" },
		{ artistName: "Jatayu", imgSrc: "/assets/homepage/slider/jatayuFull_w.png" },
		{ artistName: "Sarthak Kalyani", imgSrc: "/assets/homepage/slider/sarthakFull_w.png" },
		{ artistName: "Pooja Tiwari", imgSrc: "/assets/homepage/slider/poojaFull_w.png" },
		{ artistName: "Sommaiya", imgSrc: "/assets/homepage/slider/sommaiyaFull_w.png" },
		{ artistName: "Submarine In Space", imgSrc: "/assets/homepage/slider/submarineFull_w.png" },
		{ artistName: "Aditya Kalway", imgSrc: "/assets/homepage/slider/adityaFull_w.png" },
	],[]);

	const imgs = useMemo(()=>theme === "dark" ? imgSrcs_darkTheme : imgSrcs_lightTheme, [theme, imgSrcs_darkTheme, imgSrcs_lightTheme]) ;

	useEffect(()=>{
		tracks.forEach((element, idx) => {
			if(element.artist === imgs[idx].artistName){
				imgs[idx] = {
					...imgs[idx], 
					hasMinted: true
				}
			}
		});
	},[tracks, imgs])
	
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

				{imgs.map((item, idx)=>{
					return (
						<label
							key={"s"+(idx+1)}
							onTouchStart={handleTouchStart}
							onTouchMove={handleTouchMove}
							onClick={(e) => {
								handleNftCardClick(e, (idx+1));
							}}
							htmlFor={"s"+(idx+1)}
							id={"slide"+(idx+1)}
						>
							{imgs[idx].hasMinted === true? 
								<PromoNftCard 
									artist={tracks[idx].artist} 
									artwork={tracks[idx].artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
									title={tracks[idx].title}
									price={tracks[idx].price}
									tokenId={tracks[idx].localTokenId}
									audio={tracks[idx].audio.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
									trackId={tracks[idx].trackId}
								/>
								:
								<ArtistIntro artistName={item.artistName} />
							}
						</label>
					);
				})}

				{/* <label
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onClick={(e) => {
						handleNftCardClick(e, 1);
					}}
					htmlFor="s1"
					id="slide1"
				>
					{imgs[0].hasMinted === true? 
						<PromoNftCard 
							artist={tracks[0].artist} 
							artwork={tracks[0].artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							title={tracks[0].title}
							price={Moralis.Units.FromWei(tracks[0].price)}
							tokenId={tracks[0].localTokenId}
						/>
						:
						<ArtistIntro artistName={"Harry Arora"} />
					}
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
					{imgs[1].hasMinted === true? 
						<PromoNftCard 
							artist={tracks[1].artist} 
							artwork={tracks[1].artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							title={tracks[1].title}
							price={Moralis.Units.FromWei(tracks[1].price)}
							tokenId={tracks[1].localTokenId}
						/>
						:
						<ArtistIntro artistName={"Xubaan"} isBand={true} /> 
					}
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
					{imgs[2].hasMinted === true? 
						<PromoNftCard 
							artist={tracks[2].artist} 
							artwork={tracks[2].artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							title={tracks[2].title}
							price={Moralis.Units.FromWei(tracks[2].price)}
							tokenId={tracks[2].localTokenId}
						/>
						:
						<ArtistIntro artistName={"Jatayu"} isBand={true} /> 
					}
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
					{imgs[3].hasMinted === true? 
						<PromoNftCard 
							artist={tracks[3].artist} 
							artwork={tracks[3].artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							title={tracks[3].title}
							price={Moralis.Units.FromWei(tracks[3].price)}
							tokenId={tracks[3].localTokenId}
						/>
						:
						<ArtistIntro artistName={"Sarthak Kalyani"} />
					}
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
					{imgs[4].hasMinted === true? 
						<PromoNftCard 
							artist={tracks[4].artist} 
							artwork={tracks[4].artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							title={tracks[4].title}
							price={Moralis.Units.FromWei(tracks[4].price)}
							tokenId={tracks[4].localTokenId}
						/>
						:
					<ArtistIntro artistName={"Pooja Tiwari"} />
}
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
					{imgs[5].hasMinted === true? 
						<PromoNftCard 
							artist={tracks[5].artist} 
							artwork={tracks[5].artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							title={tracks[5].title}
							price={Moralis.Units.FromWei(tracks[5].price)}
							tokenId={tracks[5].localTokenId}
						/>
						:
						<ArtistIntro artistName={"Sommaiya"} />
					}
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
					{imgs[6].hasMinted === true? 
						<PromoNftCard 
							artist={tracks[6].artist} 
							artwork={tracks[6].artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							title={tracks[6].title}
							price={Moralis.Units.FromWei(tracks[6].price)}
							tokenId={tracks[6].localTokenId}
						/>
						:
						<ArtistIntro artistName={"Submarine In Space"} isBand={true} />
					}
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
					{imgs[7].hasMinted === true? 
						<PromoNftCard 
							artist={tracks[7].artist} 
							artwork={tracks[7].artwork.uri.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_NODE_URL)}
							title={tracks[7].title}
							price={Moralis.Units.FromWei(tracks[7].price)}
							tokenId={tracks[7].localTokenId}
						/>
						:
						<ArtistIntro artistName={"Aditya Kalway"} />
					}
				</label> */}
			</div>
		</div>
	);
}
