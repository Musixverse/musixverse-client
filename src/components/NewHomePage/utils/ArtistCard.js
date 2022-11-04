import Image from "next/image";
import Link from "next/link";

export default function ArtistCard({ instagramProfileURL, imageURL, name, description }) {
	return (
		<div className="relative z-10">
			<Link href={instagramProfileURL ?? ""} passHref>
				<a target="_blank" href="noopener noreferrer" className="group flex flex-col rounded-lg w-56 h-80 cursor-pointer">
					<div className="flex w-full h-full">
						<Image src={imageURL} alt="Top artist cover art" objectFit="fill" priority></Image>
					</div>
					<div className="absolute flex w-56 h-full">
						<span className="opacity-0 group-hover:opacity-100 transition duration-500 justify-end text-white cursor-pointer z-10 absolute right-4 top-4">
							<i className="fa-solid fa-arrow-right"></i>
						</span>
						<div className="z-10 p-6 pt-44 text-white">
							<h1 className="font-tertiary text-2xl uppercase">{name}</h1>
							<p className="font-primary text-sm mt-2">{description}</p>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}
