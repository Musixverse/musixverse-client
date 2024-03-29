import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import styles from "../../../styles/Help/Help.module.css";
import ReadSection from "./utils/ReadSection";
import { DISCORD_SUPPORT_CHANNEL_INVITE_LINK } from "../../config/constants";
import getting_started_b from "../../../public/assets/help-center/getting-started_b.png";
import getting_started_w from "../../../public/assets/help-center/getting-started_w.png";
import buying_b from "../../../public/assets/help-center/buying_b.png";
import buying_w from "../../../public/assets/help-center/buying_w.png";
import selling_b from "../../../public/assets/help-center/selling_b.png";
import selling_w from "../../../public/assets/help-center/selling_w.png";
import creating_b from "../../../public/assets/help-center/creating_b.png";
import creating_w from "../../../public/assets/help-center/creating_w.png";
import general_b from "../../../public/assets/help-center/faq_b.png";
import general_w from "../../../public/assets/help-center/faq_w.png";

export default function Help() {
	const { theme } = useTheme();

	return (
		<Fragment>
			<div className={styles["help_us_container"]}>
				<div className={styles["help_us"]}>
					{/* Help center Cards */}
					<div className="grid grid-rows-3 grid-cols-2 sm:grid-rows-2 sm:grid-cols-3 justify-center gap-8">
						<Link href="/help-center/getting-started" passHref={true}>
							<div className="col-span-2 sm:col-span-1 sm:row-span-2 flex flex-col justify-center items-center p-6 rounded-lg border-2 hover:border-transparent hover:dark:border-transparent dark:border-zinc-700 cursor-pointer shadow hover:shadow-primary-500 transition-all duration-500">
								<div className="w-32 h-32 relative">
									<Image
										src={theme === "dark" ? getting_started_b : getting_started_w}
										alt={"Getting Started"}
										objectFit="contain"
										layout="fill"
										priority
									/>
								</div>
								<p className="text-lg font-semibold mt-4">Getting Started</p>
							</div>
						</Link>
						<Link href="/help-center/buying" passHref={true}>
							<div className="flex flex-col justify-center items-center p-6 rounded-lg border-2 hover:border-transparent hover:dark:border-transparent dark:border-zinc-700 cursor-pointer shadow hover:shadow-primary-500 transition-all duration-500">
								<div className="w-28 h-28 relative">
									<Image src={theme === "dark" ? buying_b : buying_w} alt={"Buying"} objectFit="contain" layout="fill" priority />
								</div>
								<p className="text-lg font-semibold mt-4">Buying</p>
							</div>
						</Link>
						<Link href="/help-center/selling" passHref={true}>
							<div className="flex flex-col justify-center items-center p-6 rounded-lg border-2 hover:border-transparent hover:dark:border-transparent dark:border-zinc-700 cursor-pointer shadow hover:shadow-primary-500 transition-all duration-500">
								<div className="w-28 h-28 relative">
									<Image src={theme === "dark" ? selling_b : selling_w} alt={"Selling"} objectFit="contain" layout="fill" priority />
								</div>
								<p className="text-lg font-semibold mt-4">Selling</p>
							</div>
						</Link>
						<Link href="/help-center/creating" passHref={true}>
							<div className="flex flex-col justify-center items-center p-6 rounded-lg border-2 hover:border-transparent hover:dark:border-transparent dark:border-zinc-700 cursor-pointer shadow hover:shadow-primary-500 transition-all duration-500">
								<div className="w-28 h-28 relative">
									<Image src={theme === "dark" ? creating_b : creating_w} alt={"Creating"} objectFit="contain" layout="fill" priority />
								</div>
								<p className="text-lg font-semibold mt-4">Creating</p>
							</div>
						</Link>
						<Link href="/help-center/faq" passHref={true}>
							<div className="flex flex-col justify-center items-center p-6 rounded-lg border-2 hover:border-transparent hover:dark:border-transparent dark:border-zinc-700 cursor-pointer shadow hover:shadow-primary-500 transition-all duration-500">
								<div className="w-28 h-28 relative">
									<Image src={theme === "dark" ? general_b : general_w} alt={"General"} objectFit="contain" layout="fill" priority />
								</div>
								<p className="text-lg font-semibold mt-4">FAQs</p>
							</div>
						</Link>
					</div>

					{/* Recommended Reads Section */}
					<div className="mt-24">
						<ReadSection />
					</div>

					{/* Discord Link Section */}
					<div className={styles["email_us"]}>
						<div>
							Didn&apos;t get your answer here? Please head over to the support channel on discord and ask your question there.
							<br />
							<a href={DISCORD_SUPPORT_CHANNEL_INVITE_LINK} className="text-primary-500" target="_blank" rel="noopener noreferrer">
								Click here to join the discord server
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
