import Link from "next/link";
import Image from "next/image";
import discord from "../../../public/assets/social/discord.svg";

export default function FloatingHelp() {
	return (
		<div className="fixed right-0 bottom-0 z-40 pr-6 pb-6">
			<div className="relative group">
				<ul className="absolute hidden w-full pb-10 group-hover:block -top-36">
					<ul className="flex flex-col w-full dark:bg-dark-100 bg-light-300 rounded-xl">
						<li className="w-full px-4 py-3 text-sm bg-transparent cursor-pointer font-secondary rounded-t-xl whitespace-nowrap hover:bg-light-100 dark:hover:bg-dark-200">
							<Link href="https://discord.com/invite/rXKb7rCqjG" passHref>
								<a target="_blank" rel="noopener noreferrer" className="flex items-center">
									<i className="text-lg fa-brands fa-discord"></i>
									<span className="ml-2">Discord</span>
								</a>
							</Link>
						</li>
						<li className="w-full px-4 py-3 text-sm bg-transparent cursor-pointer font-secondary whitespace-nowrap hover:bg-light-100 dark:hover:bg-dark-200">
							<Link href="https://chat.whatsapp.com/FrWT0eT3uxF9ZKO3bB8GIt" passHref>
								<a target="_blank" rel="noopener noreferrer" className="flex items-center">
									<i className="text-lg fa-brands fa-whatsapp"></i>
									<span className="ml-2">WhatsApp</span>
								</a>
							</Link>
						</li>
						<li className="w-full px-4 py-3 text-sm bg-transparent cursor-pointer font-secondary rounded-b-xl whitespace-nowrap hover:bg-light-100 dark:hover:bg-dark-200">
							<Link href="/contact-us" passHref>
								<a target="_blank" rel="noopener noreferrer" className="flex items-center">
									<i className="fa-solid fa-comment-dots"></i>
									<span className="ml-2">Contact Us</span>
								</a>
							</Link>
						</li>
					</ul>
				</ul>
				<p className="flex items-center px-6 py-3 mt-5 text-sm font-medium md:text-base rounded-lg shadow-2xl font-primary dark:bg-dark-100 bg-light-300">
					<span className="mr-3 material-symbols-outlined">headset_mic</span>
					Get Help
				</p>
			</div>
		</div>
	);
}