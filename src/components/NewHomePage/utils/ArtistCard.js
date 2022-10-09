import Image from "next/image";
import Link from "next/link";

export default function ArtistCard({imageURL,name,description}){
    return(
        <div className="relative z-10">
            <div className="flex flex-col justify-end rounded-lg w-56 h-80">
                <div className="absolute flex w-full h-full">
                    <Image src={imageURL} alt="Top artist cover art" objectFit="fill" priority></Image>
                </div>
                <span className="flex justify-end text-white cursor-pointer z-10 absolute right-4 top-4">
                    <Link href="/profile/sarthak" passHref={true}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </span>
                <div className="z-10 p-8 align-bottom">
                    <h1 className="font-tertiary text-2xl uppercase">{name}</h1>
                    <p className="font-primary text-sm mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
}