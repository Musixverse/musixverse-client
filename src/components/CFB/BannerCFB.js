import styles from "../../../styles/CFB/BannerCFB.module.css";
import Link from "next/link";

export default function BannerCFB() {
	return (
		<>
			<div className={"dark:bg-dark-600 " + styles["cfb-banner__container"]}>
				<img src="/assets/CFB/Girl_Banner.png" className={styles["cfb-banner__left-image"]} width={500} height={500} alt="Girl with music icons" />
				<div className={styles["cfb-banner__subcontainer"]}>
					<p className="font-semibold text-center font-primary">Hello there!</p>
					<p className="max-w-lg text-3xl font-semibold text-center font-primary">We invite you to be a part of our Insider Community!</p>
					<p className="max-w-xl pt-6 text-xs text-center font-secondary">
						Community is at the core of Musixverse. We are building a platform that will bring together artists and fans like never before, help
						each other do great things together, and empower each other in the process.
					</p>
					<Link href="https://cfbmusixverse.paperform.co/" passHref={true}>
						<a target="_blank" rel="noopener noreferrer">
							<button className="px-5 py-3 mt-6 text-xs text-white bg-primary-600 hover:bg-primary-700 font-primary rounded-xl">
								Join the MXV Insider Community
							</button>
						</a>
					</Link>
				</div>
				<img src="/assets/CFB/Boy_Banner.png" className={styles["cfb-banner__right-image"]} alt="Boy with music icons" />
			</div>
		</>
	);
}
