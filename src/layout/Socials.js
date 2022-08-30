import Image from "next/image";
import Link from "next/link";
import discord from "../../public/assets/social/discord.svg";
import facebook from "../../public/assets/social/facebook.svg";
import twitter from "../../public/assets/social/twitter.svg";
import instagram from "../../public/assets/social/instagram.svg";
import youtube from "../../public/assets/social/youtube.svg";
import telegram from "../../public/assets/social/telegram.svg";
import linkedin from "../../public/assets/social/linkedin.svg";

const Socials = () => {
	return (
		<div className="footer__social mt-2">
			<button className="flex justify-center items-center">
				<Link href="https://discord.com/invite/rXKb7rCqjG" passHref>
					<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
						<Image src={discord} width={20} height={20} alt="discord"></Image>
					</a>
				</Link>
			</button>
			<button className="flex justify-center items-center">
				<Link href="https://www.instagram.com/musixverse/" passHref>
					<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
						<Image src={instagram} width={20} height={20} alt="instagram"></Image>
					</a>
				</Link>
			</button>
			<button className="flex justify-center items-center">
				<Link href="https://twitter.com/musixverse" passHref>
					<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
						<Image src={twitter} width={20} height={20} alt="twitter"></Image>
					</a>
				</Link>
			</button>
			<button className="flex justify-center items-center">
				<Link href="https://www.facebook.com/Musixverse-104390125641359" passHref>
					<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
						<Image src={facebook} width={20} height={20} alt="facebook"></Image>
					</a>
				</Link>
			</button>
			<button className="flex justify-center items-center">
				<Link href="https://www.linkedin.com/company/musomatic" passHref>
					<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
						<Image src={linkedin} width={20} height={20} alt="LinkedIn"></Image>
					</a>
				</Link>
			</button>
			<button className="flex justify-center items-center">
				<Link href="https://www.youtube.com/channel/UCloNloMRDKaB-0e-xeaTdXw" passHref>
					<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
						<Image src={youtube} width={20} height={20} alt="YouTube"></Image>
					</a>
				</Link>
			</button>
			<button className="flex justify-center items-center">
				<Link href="https://t.me/+7e4mG5yhutswNWVl" passHref>
					<a target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
						<Image src={telegram} width={20} height={20} alt="Telegram"></Image>
					</a>
				</Link>
			</button>
		</div>
	);
};

export default Socials;
