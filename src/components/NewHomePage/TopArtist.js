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
        <div className="relative pb-48">
            <h1 className="font-primary text-3xl text-center">Top Artist on M<span className="text-primary-100">x</span> Catalog</h1>
            <div className="w-full mt-10 relative">
                <div className="text-sm z-10 absolute right-36 mt-10">
                    <div className="space-x-4">
                        <span className="p-2 font-primary cursor-pointer rounded-3xl">
                            <Link href="/mx-catalog" passHref={true}>
                                <span>View all</span>
                            </Link>
                        </span>
                        <span className="p-2 font-primary cursor-pointer rounded-full">
                            <Link href="/help-center" passHref={true}>
                                <span><i className="fa-solid fa-circle-info"></i></span>
                            </Link>
                        </span>
                    </div>
                </div>
                <Image src={CoverImage} alt="Cover art for Top Artist" layout="responsive" priority />
            </div>
            <div className="w-full flex absolute">
                <div className="inline-block w-4 h-20 bg-primary-100 rounded-2xl relative left-[122px] -top-4"></div>
                <div className="w-full flex justify-center gap-x-8 relative bottom-40">
                    <ArtistCard name="Sarthak Kalyani" imageURL={Sarthak_Kalyani} description="The Singer who wowed AR Rahman" />
                    <ArtistCard name="Jatayu" imageURL={Jatayu} description="The Jazz-Rock Quartet introducing Indian tunes to the world" />
                    <ArtistCard name="Submarine in Space" imageURL={Submarine_in_space} description="The Signer touching all the right cords" />
                    <ArtistCard name="Sommaiya" imageURL={Sommaiya} description="The artist taking Indian Hip-hop Global" />
                </div>
                <div className="inline-block w-4 h-20 bg-primary-100 rounded-2xl relative right-[122px] -top-4"></div>
            </div>
        </div>
    );
}