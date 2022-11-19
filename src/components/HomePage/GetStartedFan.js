import { useContext } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import styles from "../../../styles/HomePage/getStartedFan.module.css";
import AuthModalContext from "../../../store/authModal-context";

export default function GetStartedFan() {
	const [, setAuthModalOpen] = useContext(AuthModalContext);
	const { user, isAuthenticated } = useMoralis();

	return (
		<div className="rounded-[1.5rem] md:p-0 p-4 lg:rounded-[2.5rem] xl:rounded-[3.5rem] flex flex-col md:flex-row-reverse md:items-center bg-[#202020] my-28">
			<div className={styles["img"]}>
				<Image alt="artists" src={"/assets/homepage/startFandark.png"} priority objectFit="cover" layout="fill" />
			</div>

			<div className="flex flex-col flex-1 md:pl-16">
				<h2 className={styles["get-started-heading"]}>Get Started as a Fan</h2>
				<div className="flex flex-col w-full">
					<div className="flex md:flex-row flex-col items-start justify-between w-full max-w-[90%]">
						<div className="flex flex-col md:flex-row">
							<h1 className={styles["units"]}>01</h1>
							<div className="flex flex-col">
								<h2 className={styles["info-headers"]}>Get your crypto wallet ready</h2>
								<p className={styles["info-body"]}>
									Check out our guide on how to set up a wallet{" "}
									<a
										href="https://medium.com/@musixverse/how-to-set-up-a-crypto-wallet-metamask-477be25c0f5f"
										target={"_blank"}
										rel="noreferrer"
										className="text-primary-500 hover:text-primary-400"
									>
										here
									</a>
									.
								</p>
							</div>
						</div>
						<div className="flex flex-col mt-4 md:mt-0 md:ml-4 xl:ml-8 md:flex-row">
							<h1 className={styles["units"]}>02</h1>
							<div className="flex flex-col">
								<h2 className={styles["info-headers"]}>Sign up as a Collector</h2>
								<p className={styles["info-body"]}>
									<span
										onClick={() => {
											if (isAuthenticated && user) {
											} else {
												setAuthModalOpen(true);
											}
										}}
										className={isAuthenticated && user ? "" : "text-primary-500 hover:text-primary-400 cursor-pointer"}
									>
										Connect Wallet
									</span>{" "}
									to sign up and provide basic information about yourself.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col my-4 md:my-0 md:mt-7 md:flex-row">
						<h1 className={styles["units"]}>03</h1>
						<div className="flex flex-col">
							<h2 className={styles["info-headers"]}>Browse and buy NFTs</h2>
							<p className={styles["info-body"]}>Find your favorite artists and collect their NFTs.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
