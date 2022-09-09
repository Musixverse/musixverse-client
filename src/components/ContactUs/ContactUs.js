import { Fragment, useRef, useContext } from "react";
import styles from "../../../styles/ContactUs/contactUs.module.css";
import { useNewMoralisObject } from "react-moralis";
import StatusContext from "../../../store/status-context";
import { isEmailValid } from "../../utils/Validate";

export default function ContactUs() {
	const [, , setSuccess, setError] = useContext(StatusContext);
	const { save: saveContactMessage } = useNewMoralisObject("ContactForm");

	const nameRef = useRef("");
	const emailRef = useRef("");
	const messageRef = useRef("");

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const message = messageRef.current.value;

		// EMAIL CHECK
		const emailCheck = await isEmailValid(email);
		if (emailCheck.status === false) {
			setError({
				title: emailCheck.title || "Invalid credentials!",
				message: emailCheck.message,
				showErrorBox: true,
			});
			emailRef.current.focus();
			return;
		}

		if (name.length != 0) {
			// NAME CHECKS
			if (name.length < 2) {
				setError({
					title: "Invalid credentials!",
					message: "Please enter a valid name",
					showErrorBox: true,
				});
				nameRef.current.focus();
				return;
			}
		}

		// Message Check
		if (message.length < 5) {
			setError({
				title: "Invalid credentials!",
				message: "Please enter a valid message",
				showErrorBox: true,
			});
			messageRef.current.focus();
			return;
		}

		if (message !== "") {
			const userData = {
				name: name,
				email: email,
				message: message,
			};
			saveContactMessage(userData, {
				onSuccess: (obj) => {
					// Execute any logic that should take place after the object is saved.
					nameRef.current.value = "";
					emailRef.current.value = "";
					messageRef.current.value = "";
					setSuccess((prevState) => ({
						...prevState,
						title: "Message sent!",
						message: "Your message has been recorded successfully",
						showSuccessBox: true,
					}));
					return;
				},
				onError: (error) => {
					// Execute any logic that should take place if the save fails.
					// error is a Moralis.Error with an error code and message.
					setError((prevState) => ({
						...prevState,
						title: "Failed to save user information",
						message: JSON.stringify(error.message),
						showErrorBox: true,
					}));
					return;
				},
			});
		}
		return;
	};

	return (
		<Fragment>
			<div className={styles["contact_us_container"]}>
				<div className={styles["contact_us"]}>
					<div>
						<div className={styles["contact_us_heading"]}>Contact Us</div>
					</div>

					<div className="mt-4">
						<div className={styles["contact_notice"]}>
							Please note that{" "}
							<a href="http://musixverse.com" className="text-primary-100">
								musixverse.com
							</a>{" "}
							aggregates all tracks that users put up as NFTs and is not partnering with any of the artists displayed on the website. If you want
							to contact one of the artists listed here, you must contact them directly through other social media platforms. We are not
							responsible if someone else puts up an artists&apos; track as an NFT on our platform and cannot assist you regarding the same.
						</div>
					</div>

					<div className={styles["email_us"]}>
						<div>
							Email us at:
							<br />
							<a href="mailto:contact@musixverse.com" target="_blank" rel="noopener noreferrer">
								contact@musixverse.com
							</a>
							<br />
							<br />
							Or submit your queries anonymously using the form below.
						</div>
					</div>

					<div className={styles["contact_form"]}>
						<div className={"dark:backdrop-blur-2xl dark:backdrop-brightness-200 " + styles["contact_us_box"]}>
							<form onSubmit={handleFormSubmit}>
								<div className="flex flex-col md:flex-row md:space-x-8 xl:space-x-14">
									<div className="w-full md:w-1/3">
										<div className={styles["inputBox"]}>
											<label className="dark:opacity-50">Name&nbsp; (Optional)</label>
											<input
												className="dark:bg-[#1a1a1a] mt-1 dark:border-transparent"
												type="text"
												ref={nameRef}
												name="name"
												autoComplete="off"
											/>
										</div>

										<div className={"mt-4 " + styles["inputBox"]}>
											<label className="dark:opacity-50">Email Address&nbsp; (Optional)</label>
											<input
												className="dark:bg-[#1a1a1a] mt-1 dark:border-transparent"
												type="email"
												ref={emailRef}
												name="email"
												autoComplete="off"
											/>
										</div>

										<div className="mt-5">
											<div className="font-primary text-primary-100 text-sm">
												If you don&apos;t provide an email, we will not be able to respond to your query!
											</div>
										</div>
									</div>

									<div className="w-full mt-5 md:w-2/3 md:mt-0">
										<div>
											<label className="text-sm font-primary dark:opacity-50">Message</label>
											<textarea
												className={"dark:bg-[#1a1a1a] mt-1 dark:border-transparent " + styles["textarea_contact"]}
												ref={messageRef}
												name="message"
												rows="8"
												required
											></textarea>
										</div>

										<button className={styles["send_message_btn"]}>
											<span>
												Send Message<i className="fas fa-angle-double-right"></i>
											</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
