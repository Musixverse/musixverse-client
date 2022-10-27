import Image from "next/image";
import Link from "next/link";
import CoverImage_d from "../../../public/assets/new-homepage/cover_d.png";
import CoverImage_m from "../../../public/assets/new-homepage/cover_m.png";
import ArtistCard from "./utils/ArtistCard";
import Sarthak_Kalyani from "../../../public/assets/new-homepage/sarthak_kalyani.png";
import Jatayu from "../../../public/assets/new-homepage/jatayu.png";
import Submarine_in_space from "../../../public/assets/new-homepage/submarine_in_space.png";
import Sommaiya from "../../../public/assets/new-homepage/sommaiya.png";
import Harry from "../../../public/assets/new-homepage/harry.png";

export default function TopArtists() {
	return (
		<div className="relative mt-20">
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

			{/* Desktop view Carousel */}
			<div id="carouselExampleControls-d" className="carousel hidden xl:block slide relative bottom-48 -mb-20" data-bs-ride="carousel">
				<div className="carousel-inner relative w-full overflow-hidden">
					<div className="carousel-item active relative float-left w-full">
						<div className="w-full flex justify-center gap-x-8">
							<ArtistCard
								name="Sarthak Kalyani"
								instagramProfileURL={"https://www.instagram.com/sarthak.kalyani"}
								imageURL={Sarthak_Kalyani}
								description="The singer who wowed AR Rahman"
							/>
							<ArtistCard
								name="Jatayu"
								instagramProfileURL={"https://www.instagram.com/jatayusounds"}
								imageURL={Jatayu}
								description="A Jazz Rock Fusion Band introducing the world to Indian tunes"
							/>
							<ArtistCard
								name="Submarine in Space"
								instagramProfileURL={"https://www.instagram.com/submarine_in_space"}
								imageURL={Submarine_in_space}
								description="The Critically Acclaimed IInstrumental Jazz-Rock Band"
							/>
							<ArtistCard
								name="Sommaiya"
								instagramProfileURL={"https://www.instagram.com/sommaiya_angrish"}
								imageURL={Sommaiya}
								description="A Genreless Musician and Filmmaker leaving his mark from New Delhi to New York"
							/>
						</div>
					</div>
					<div className="carousel-item relative float-left w-full">
						<div className="w-full flex justify-center gap-x-8">
							<ArtistCard
								name="Jatayu"
								instagramProfileURL={"https://www.instagram.com/jatayusounds"}
								imageURL={Jatayu}
								description="A Jazz Rock Fusion Band introducing the world to Indian tunes"
							/>
							<ArtistCard
								name="Submarine in Space"
								instagramProfileURL={"https://www.instagram.com/submarine_in_space"}
								imageURL={Submarine_in_space}
								description="The Critically Acclaimed IInstrumental Jazz-Rock Band"
							/>
							<ArtistCard
								name="Sommaiya"
								instagramProfileURL={"https://www.instagram.com/sommaiya_angrish"}
								imageURL={Sommaiya}
								description="A Genreless Musician and Filmmaker leaving his mark from New Delhi to New York"
							/>
							<ArtistCard
								name="Harry Arora"
								instagramProfileURL={"https://www.instagram.com/harrythisside"}
								imageURL={Harry}
								description="The singer touching all the right chords"
							/>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
					type="button"
					data-bs-target="#carouselExampleControls-d"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
					type="button"
					data-bs-target="#carouselExampleControls-d"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			{/* Tab view Carousel */}
			<div id="carouselExampleControls-t" className="carousel hidden md:block xl:hidden slide relative bottom-32 -mb-4" data-bs-ride="carousel">
				<div className="carousel-inner relative w-full overflow-hidden">
					<div className="carousel-item active relative float-left w-full">
						<div className="w-full flex justify-center gap-x-8">
							<ArtistCard
								name="Sarthak Kalyani"
								instagramProfileURL={"https://www.instagram.com/sarthak.kalyani"}
								imageURL={Sarthak_Kalyani}
								description="The Singer who wowed AR Rahman"
							/>
							<ArtistCard
								name="Jatayu"
								instagramProfileURL={"https://www.instagram.com/jatayusounds"}
								imageURL={Jatayu}
								description="A Jazz Rock Fusion Band introducing the world to Indian tunes"
							/>
						</div>
					</div>
					<div className="carousel-item relative float-left w-full">
						<div className="w-full flex justify-center gap-x-8">
							<ArtistCard
								name="Submarine in Space"
								instagramProfileURL={"https://www.instagram.com/submarine_in_space"}
								imageURL={Submarine_in_space}
								description="The Critically Acclaimed IInstrumental Jazz-Rock Band"
							/>
							<ArtistCard
								name="Sommaiya"
								instagramProfileURL={"https://www.instagram.com/sommaiya_angrish"}
								imageURL={Sommaiya}
								description="A Genreless Musician and Filmmaker leaving his mark from New Delhi to New York"
							/>
						</div>
					</div>
					<div className="carousel-item relative float-left w-full">
						<div className="w-full flex justify-center gap-x-8">
							<ArtistCard
								name="Sommaiya"
								instagramProfileURL={"https://www.instagram.com/sommaiya_angrish"}
								imageURL={Sommaiya}
								description="A Genreless Musician and Filmmaker leaving his mark from New Delhi to New York"
							/>
							<ArtistCard name="Harry Arora" imageURL={Harry} description="The singer touching all the right chords" />
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
					type="button"
					data-bs-target="#carouselExampleControls-t"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
					type="button"
					data-bs-target="#carouselExampleControls-t"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			{/* Mobile view carousel */}
			<div id="carouselExampleControls-m" className="carousel md:hidden slide relative bottom-56 -mb-20" data-bs-ride="carousel">
				<div className="carousel-inner relative w-full overflow-hidden">
					<div className="carousel-item active relative float-left w-full">
						<div className="w-full flex justify-center gap-x-8">
							<ArtistCard
								name="Sarthak Kalyani"
								instagramProfileURL={"https://www.instagram.com/sarthak.kalyani"}
								imageURL={Sarthak_Kalyani}
								description="The Singer who wowed AR Rahman"
							/>
						</div>
					</div>
					<div className="carousel-item relative float-left w-full">
						<div className="w-full flex justify-center gap-x-8">
							<ArtistCard
								name="Jatayu"
								instagramProfileURL={"https://www.instagram.com/jatayusounds"}
								imageURL={Jatayu}
								description="A Jazz Rock Fusion Band introducing the world to Indian tunes"
							/>
						</div>
					</div>
					<div className="carousel-item relative float-left w-full">
						<div className="w-full flex justify-center gap-x-8">
							<ArtistCard
								name="Submarine in Space"
								instagramProfileURL={"https://www.instagram.com/submarine_in_space"}
								imageURL={Submarine_in_space}
								description="The Critically Acclaimed IInstrumental Jazz-Rock Band"
							/>
						</div>
					</div>
					<div className="carousel-item relative float-left w-full">
						<div className="w-full flex justify-center gap-x-8">
							<ArtistCard
								name="Sommaiya"
								instagramProfileURL={"https://www.instagram.com/sommaiya_angrish"}
								imageURL={Sommaiya}
								description="A Genreless Musician and Filmmaker leaving his mark from New Delhi to New York"
							/>
						</div>
					</div>
					<div className="carousel-item relative float-left w-full">
						<div className="w-full flex justify-center gap-x-8">
							<ArtistCard
								name="Harry Arora"
								instagramProfileURL={"https://www.instagram.com/harrythisside"}
								imageURL={Harry}
								description="The singer touching all the right chords"
							/>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
					type="button"
					data-bs-target="#carouselExampleControls-m"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
					type="button"
					data-bs-target="#carouselExampleControls-m"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}
