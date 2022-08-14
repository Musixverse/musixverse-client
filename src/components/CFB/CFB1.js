import Image from "next/image";
import styles from "../../../styles/CFB/CFB1.module.css";

export default function CFB1() {
	const scrollToRef = () => {
		window.scrollTo(0, 500);
	};

	return (
		<div className={styles["cfb1__container"]}>
			<button className={styles["cfb-banner__circle-dropdown"]} onClick={scrollToRef}>
				<img src="/assets/CFB/circle_dropdown.png" className="z-[5]" width={50} height={50} alt="circle dropdown" />
			</button>
			<p className="text-3xl font-semibold text-center font-primary text-primary-200">MXV INSIDER COMMUNITY</p>
			<p className="max-w-xs pt-6 text-xs text-center font-secondary sm:max-w-2xl">
				The Insider Community is a group of select individuals with exclusive access to Musixverse and its features before anyone else. In return, we
				will ask you to provide feedback about the platform as we continue to build and improve it
			</p>
		</div>
	);
}
