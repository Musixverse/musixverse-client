import { useState, useRef, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import styles from "../../../styles/Registration/Confirm.module.css";
import B_blackhole from "../../../public/assets/registration/dark_black_hole.svg";
import W_blackhole from "../../../public/assets/registration/white_black_hole.svg";
import StatusContext from "../../../store/status-context";
import ArtistEmailVerificationSuccessModal from "./ArtistRegUtils/ArtistEmailVerificationSuccessModal";
import CollectorEmailVerificationSuccessModal from "./ArtistRegUtils/CollectorEmailVerificationSuccessModal";
import ReCAPTCHA from "react-google-recaptcha";

export default function Confirm() {
	const router = useRouter();
	const { theme } = useTheme();
	const { user, Moralis, refetchUserData } = useMoralis();
	const [, , setSuccess, setError] = useContext(StatusContext);
	const recaptchaRef = useRef(null);

	const [artistEmailVerificationSuccess, setArtistEmailVerificationSuccess] = useState(false);
	const [collectorEmailVerificationSuccess, setCollectorEmailVerificationSuccess] = useState(false);
	const [checkCounter, setCheckCounter] = useState(0);
	useEffect(() => {
		const checkEmailVerified = setTimeout(async () => {
			setCheckCounter((prev) => prev + 1);
			console.log("changeConfirmEmailPage");
			if (user) {
				await refetchUserData();
				if (user.attributes.emailVerified) {
					if (user && user.attributes.isArtist) {
						setArtistEmailVerificationSuccess(true);
					} else {
						setCollectorEmailVerificationSuccess(true);
					}
				}
			}
		}, 2000);
		return () => clearTimeout(checkEmailVerified);
	}, [checkCounter]);

	const backToApp = async (e) => {
		e.preventDefault();
		await refetchUserData();

		if (user.attributes.isArtist) {
			router.push(`/profile/${user.attributes.username}`);
		} else {
			router.push("/mxcatalog/new-releases");
		}
		return;
	};

	const resendVerificationEmail = async (e) => {
		e.preventDefault();

		const recaptchaValue = recaptchaRef.current.getValue();
		const res = await fetch(`/api/validate-captcha`, { method: "POST", body: JSON.stringify({ recaptchaValue: recaptchaValue }) });
		const status = await res.json();

		if (status.success === true) {
			await Moralis.User.requestEmailVerification(user.attributes.email)
				.then(() => {
					setSuccess((prevState) => ({
						...prevState,
						title: "Verification email sent",
						message: "An email is sent to your registered email address. Please verify your email.",
						showSuccessBox: true,
					}));
					recaptchaRef.current.reset();
					return;
				})
				.catch((error) => {
					// Show the error message somewhere
					alert("Error: " + error.code + " " + error.message);
				});
		} else {
			setError({
				title: "reCAPTCHA failed",
				message: `Please click "I'm not a robot" before clicking "Resend"`,
				showErrorBox: true,
			});
		}
	};

	return (
		<div className={styles["register"]}>
			<div className={"dark:bg-dark-800 " + styles["register__container"]}>
				{/* Main container */}
				<div className={styles["confirm__container"]}>
					<Image src={theme === "dark" ? W_blackhole : B_blackhole} width={440} height={318} alt="Black-hole" />
					<span className="flex flex-col items-center justify-center pt-8">
						<p className="text-4xl font-tertiary sm:text-5xl text-center">CONFIRM YOUR EMAIL</p>
						<p className="font-secondary text-[15px] text-center">{user && user.attributes.email}</p>
						<p className="font-secondary text-[15px] text-center mt-4">Please check your inbox and follow instructions in the mail to continue</p>
						<p className="font-secondary text-[12px] text-center">You will automatically be redirected once you confirm your email</p>
						<p className="font-secondary text-[13px] text-center mt-6">
							Didn&apos;t receive the email?
							<br />
							Make sure to check your Promotions tab and Spam folder
						</p>
					</span>
					<form onSubmit={backToApp} className="mt-8">
						{user && user.attributes.isArtist ? (
							<button
								type="submit"
								className="flex justify-center items-center space-x-3 bg-light-100 hover:bg-light-200 text-[14px] text-dark-600 py-2 px-6 rounded-lg font-primary font-semibold max-w-[210px]"
							>
								Go to Profile
							</button>
						) : (
							<button
								type="submit"
								className="flex justify-center items-center space-x-3 bg-light-100 hover:bg-light-200 text-[14px] text-dark-600 py-2 px-6 rounded-lg mt-6 font-primary font-semibold max-w-[210px]"
							>
								Go to Mx Catalog
							</button>
						)}
					</form>
					<button
						type="button"
						className="flex justify-center items-center bg-primary-600 hover:bg-primary-700 text-[14px] text-light-100 py-3 md:px-8 px-4 rounded-lg mt-6 font-primary font-semibold"
						onClick={resendVerificationEmail}
					>
						Resend verification email
					</button>
					<div className="mt-4">
						<ReCAPTCHA
							ref={recaptchaRef}
							size="normal"
							badge="inline"
							theme={"light"}
							sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
						/>
					</div>
					<p className="font-secondary text-[14px] text-center mt-8">
						Email incorrect? Update your email by going to{" "}
						<Link href="/settings/profile-settings" passHref>
							<a className="text-primary-600 hover:text-primary-700">Settings</a>
						</Link>
					</p>
				</div>
			</div>
			<ArtistEmailVerificationSuccessModal isOpen={artistEmailVerificationSuccess} setOpen={setArtistEmailVerificationSuccess} />
			<CollectorEmailVerificationSuccessModal isOpen={collectorEmailVerificationSuccess} setOpen={setCollectorEmailVerificationSuccess} />
		</div>
	);
}
