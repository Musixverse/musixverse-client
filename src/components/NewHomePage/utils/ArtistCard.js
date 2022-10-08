import Image from "next/image";
import Link from "next/link";
import CoverArt from "../../../../public/assets/new-homepage/sarthak_kalyani.png";

export default function ArtistCard(imageURL,name,description){
    return(
        <div className="flex flex-col justify-between p-8 rounded-lg w-1/4 h-96">
            <span className="flex justify-end text-white">
                <Link href="/profile/sarthak" passHref={true}>
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </span>
            <Image src={imageURL ? imageURL : CoverArt} alt="Top artist cover art" layout="responsive" priority></Image>
            <h1 className="font-tertiary uppercase">{name}</h1>
            <p className="font-primary mt-2">{description}</p>
        </div>
    );
}