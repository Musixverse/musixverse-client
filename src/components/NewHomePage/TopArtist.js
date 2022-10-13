import Image from 'next/image';
import Link from "next/link";
import CoverImage from "../../../public/assets/new-homepage/cover-image.png";
import ArtistCard from './utils/ArtistCard';
import Sarthak_Kalyani from "../../../public/assets/new-homepage/sarthak_kalyani.png";
import Jatayu from "../../../public/assets/new-homepage/jatayu.png";
import Submarine_in_space from "../../../public/assets/new-homepage/submarine_in_space.png";
import Sommaiya from "../../../public/assets/new-homepage/sommaiya.png";

export default function TopArtist(){
    return(
        <div className="relative">
            <h1 className="font-primary text-3xl text-center">Top Artist on M<span className="text-primary-100">x</span> Catalog</h1>
            <div className="w-full mt-10 relative">
                <div className="text-sm z-10 absolute right-36 mt-10">
                    <div className="space-x-4">
                        <span className="py-2 px-8 font-primary cursor-pointer bg-[rgba(255,255,255,0.4)] rounded-3xl">
                            <Link href="/mx-catalog" passHref={true}>
                                <span>View all</span>
                            </Link>
                        </span>
                        <span className="px-3 py-2 font-primary cursor-pointer bg-[rgba(255,255,255,0.4)] rounded-full">
                            <Link href="/help-center" passHref={true}>
                                <span><i className="fa-solid fa-circle-info"></i></span>
                            </Link>
                        </span>
                    </div>
                </div>
                <Image src={CoverImage} alt="Cover art for Top Artist" layout="responsive" priority />
            </div>

            {/* Desktop view Carousel */}
            <div id="carouselExampleControls-d" className="carousel hidden xl:block slide relative bottom-48" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <div className="w-full flex justify-center gap-x-8">
                            <ArtistCard name="Sarthak Kalyani" imageURL={Sarthak_Kalyani} description="The Singer who wowed AR Rahman" />
                            <ArtistCard name="Jatayu" imageURL={Jatayu} description="The Jazz-Rock Quartet introducing Indian tunes to the world" />
                            <ArtistCard name="Submarine in Space" imageURL={Submarine_in_space} description="The Signer touching all the right cords" />
                            <ArtistCard name="Sommaiya" imageURL={Sommaiya} description="The artist taking Indian Hip-hop Global" />
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-8"
                    type="button"
                    data-bs-target="#carouselExampleControls-d"
                    data-bs-slide="prev"
                >
                    <span className="bg-primary-100 rounded-2xl h-28 w-4 inline-block" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-8"
                    type="button"
                    data-bs-target="#carouselExampleControls-d"
                    data-bs-slide="next"
                >
                    <span className="bg-primary-100 rounded-2xl h-28 w-4 inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Tab view Carousel */}
            <div id="carouselExampleControls-t" className="carousel hidden md:block xl:hidden slide relative bottom-28" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <div className="w-full flex justify-center gap-x-8">
                            <ArtistCard name="Sarthak Kalyani" imageURL={Sarthak_Kalyani} description="The Singer who wowed AR Rahman" />
                            <ArtistCard name="Jatayu" imageURL={Jatayu} description="The Jazz-Rock Quartet introducing Indian tunes to the world" />
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="w-full flex justify-center gap-x-8">
                            <ArtistCard name="Submarine in Space" imageURL={Submarine_in_space} description="The Signer touching all the right cords" />
                            <ArtistCard name="Sommaiya" imageURL={Sommaiya} description="The artist taking Indian Hip-hop Global" />
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
            <div id="carouselExampleControls-m" className="carousel md:hidden slide relative" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <div className="w-full flex justify-center gap-x-8">
                            <ArtistCard name="Sarthak Kalyani" imageURL={Sarthak_Kalyani} description="The Singer who wowed AR Rahman" />
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="w-full flex justify-center gap-x-8">
                            <ArtistCard name="Jatayu" imageURL={Jatayu} description="The Jazz-Rock Quartet introducing Indian tunes to the world" />
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="w-full flex justify-center gap-x-8">
                            <ArtistCard name="Submarine in Space" imageURL={Submarine_in_space} description="The Signer touching all the right cords" />
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="w-full flex justify-center gap-x-8">
                            <ArtistCard name="Sommaiya" imageURL={Sommaiya} description="The artist taking Indian Hip-hop Global" />
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