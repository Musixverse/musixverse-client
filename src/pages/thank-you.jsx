import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { meta_description } from "../constants";
import discord from "../../public/assets/social/discord.svg";
import facebook from "../../public/assets/social/facebook.svg";
import twitter from "../../public/assets/social/twitter.svg";
import instagram from "../../public/assets/social/instagram.svg";

function ThankYou() {
	return (
		<>
			<Head>
				<title>Musixverse | Thank You</title>
				<meta name="description" content={meta_description} />
			</Head>

			<main className="m-auto max-w-screen-2xl md:w-11/12 px-4 md:px-20 py-24 text-center">
				<h1 className="md:text-6xl text-5xl font-primary font-semibold mb-2 pt-20">Musixverse</h1>
				<p className="md:text-md text-sm">
					<i>Powering music ownership and provenance across the web and beyond</i>
				</p>

				<div className="flex flex-row justify-start sm:mt-24 mt-16 mb-10">
					<div className="w-full grid grid-cols-5 gap-4">
						<div className="col-span-5 p-10 border-2 border-gray-400 rounded-md">
							<div className="font-tertiary text-5xl">Thank you for joining the mailing list!</div>
							<div className="mt-16 font-secondary text-lg">Follow us on social media to stay in the loop and know more</div>

							<div className="flex justify-center mt-4 space-x-5">
								<a
									className="flex items-center justify-center p-2 rounded-md bg-dark-100"
									href="https://discord.com/invite/rXKb7rCqjG"
									target={"_blank"}
									rel="noopener noreferrer"
								>
									<Image src={discord} width={20} height={20} alt="discord"></Image>
								</a>
								<a
									className="flex items-center justify-center p-2 rounded-md bg-dark-100"
									href="https://twitter.com/musixverse"
									target={"_blank"}
									rel="noopener noreferrer"
								>
									<Image src={twitter} width={20} height={20} alt="twitter"></Image>
								</a>
								<a
									className="flex items-center justify-center p-2 rounded-md bg-dark-100"
									href=" https://www.instagram.com/musixverse/"
									target={"_blank"}
									rel="noopener noreferrer"
								>
									<Image src={instagram} width={20} height={20} alt="instagram"></Image>
								</a>
								<a
									className="flex items-center justify-center p-2 rounded-md bg-dark-100"
									href="https://www.facebook.com/Musixverse-104390125641359"
									target={"_blank"}
									rel="noopener noreferrer"
								>
									<Image src={facebook} width={20} height={20} alt="facebook"></Image>
								</a>
							</div>
						</div>
					</div>
				</div>

				<Link href="/" passHref={true}>
					<button className="px-5 py-3 mt-6 text-xs text-white bg-primary-200 hover:bg-primary-300 font-primary rounded-lg">
						Go Back to HomePage
					</button>
				</Link>
			</main>
		</>
	);
}

export default ThankYou;
