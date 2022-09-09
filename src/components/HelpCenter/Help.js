import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Help/Help.module.css";
import { DISCORD_SUPPORT_CHANNEL_INVITE_LINK } from "../../constants";
import GS_icons from "../../../public/assets/help-center/getting-started.png";
import buying from "../../../public/assets/help-center/buying.png";
import selling from "../../../public/assets/help-center/selling.png";
import creating from "../../../public/assets/help-center/creating.png";
import general from "../../../public/assets/help-center/faq.png";

export default function Help() {
	return (
		<Fragment>
			<div className={styles["help_us_container"]}>
				<div className={styles["help_us"]}>
					<div className={styles["help_us_heading"]}>Help Center</div>

					<div className="grid grid-rows-2 grid-cols-3 justify-center gap-8 mt-16">
						<Link href="/help-center/getting-started" passHref={true}>
							<div className="row-span-2 flex flex-col justify-center items-center p-6 rounded-lg border-2 cursor-pointer shadow hover:shadow-xl duration-300  hover:ring-offset-primary-300">
								<div className="w-24 h-24 relative">
									<Image src={GS_icons} alt={"Getting Started"} objectFit="contain" layout="fill" priority />
								</div>
								<p className="text-lg font-semibold mt-4">Getting Started</p>
							</div>
						</Link>
						<Link href="/help-center/buying" passHref={true}>
							<div className="flex flex-col justify-center items-center p-6 rounded-lg border-2 cursor-pointer shadow hover:shadow-xl duration-300  hover:ring-offset-primary-300">
								<div className="w-24 h-24 relative">
									<Image src={buying} alt={"Buying"} objectFit="contain" layout="fill" priority />
								</div>
								<p className="text-lg font-semibold mt-4">Buying</p>
							</div>
						</Link>
						<Link href="/help-center/selling" passHref={true}>
							<div className="flex flex-col justify-center items-center p-6 rounded-lg border-2 cursor-pointer shadow hover:shadow-xl duration-300  hover:ring-offset-primary-300">
								<div className="w-24 h-24 relative">
									<Image src={selling} alt={"Selling"} objectFit="contain" layout="fill" priority />
								</div>
								<p className="text-lg font-semibold mt-4">Selling</p>
							</div>
						</Link>
						<Link href="/help-center/creating" passHref={true}>
							<div className="flex flex-col justify-center items-center p-6 rounded-lg border-2 cursor-pointer shadow hover:shadow-xl duration-300  hover:ring-offset-primary-300">
								<div className="w-24 h-24 relative">
									<Image src={creating} alt={"Creating"} objectFit="contain" layout="fill" priority />
								</div>
								<p className="text-lg font-semibold mt-4">Creating</p>
							</div>
						</Link>
						<Link href="/help-center/faq" passHref={true}>
							<div className="flex flex-col justify-center items-center p-6 rounded-lg border-2 cursor-pointer shadow hover:shadow-xl duration-300  hover:ring-offset-primary-300">
								<div className="w-24 h-24 relative">
									<Image src={general} alt={"General"} objectFit="contain" layout="fill" priority />
								</div>
								<p className="text-lg font-semibold mt-4">General</p>
							</div>
						</Link>
					</div>

					<div className={styles["email_us"]}>
						<div>
							Didn&apos;t get your answer here? Please head over to the support channel on discord and ask your question there.
							<br />
							<a href={DISCORD_SUPPORT_CHANNEL_INVITE_LINK} className="text-primary-100" target="_blank" rel="noopener noreferrer">
								Click here to join the discord server
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
