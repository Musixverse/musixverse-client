import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function ArtistCard({ instagramProfileURL, imageURL_b, imageURL_w, name, description }) {
	const { theme } = useTheme();

	return (
		<div className="relative z-10 flex justify-center">
			<Link href={instagramProfileURL ?? ""} passHref>
				<a target="_blank" href="noopener noreferrer" className="group flex flex-col rounded-lg w-56 h-80 cursor-pointer">
					<div className="flex w-full h-full">
						<Image src={theme === 'dark'? imageURL_b:imageURL_w} alt="Top artist cover art" objectFit="fill" priority></Image>
					</div>
					<div className="absolute flex w-56 h-full">
						<span className="opacity-0 group-hover:opacity-100 transition duration-500 justify-end text-white cursor-pointer z-10 absolute right-4 top-4">
							<i className="fa-solid fa-arrow-right"></i>
						</span>
						<div className="z-10 p-6 pt-48 text-black dark:text-white">
							<h1 className="font-tertiary text-2xl uppercase">{name}</h1>
							<p className="font-secondary text-sm mt-2">{description}</p>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}
