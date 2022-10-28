import { Fragment, useRef, useContext } from "react";
import styles from "../../../styles/ContactUs/contactUs.module.css";
import { useNewMoralisObject } from "react-moralis";
import StatusContext from "../../../store/status-context";
import { isEmailValid } from "../../utils/Validate";
import { DISCORD_INVITE_LINK } from "../../constants";

export default function ContactUs() {
	const [, , setSuccess, setError] = useContext(StatusContext);
	const { save: saveContactMessage } = useNewMoralisObject("ContactForm");

	const nameRef = useRef("");
	const emailRef = useRef("");
	const subjectRef = useRef("");
	const messageRef = useRef("");

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const subject = subjectRef.current.value;
		const message = messageRef.current.value;

		// EMAIL CHECK
		if (email) {
			const emailCheck = await isEmailValid(email);
			if (emailCheck.status === false) {
				setError({
					title: emailCheck.title || "Invalid input!",
					message: emailCheck.message,
					showErrorBox: true,
				});
				emailRef.current.focus();
				return;
			}
		}

		if (name.length !== 0) {
			// NAME CHECKS
			if (name.length < 2) {
				setError({
					title: "Invalid input!",
					message: "Please enter a valid name",
					showErrorBox: true,
				});
				nameRef.current.focus();
				return;
			}
		}

		// Subject Check
		if (subject.length < 5) {
			setError({
				title: "Invalid input!",
				message: "Please enter a valid subject with at least 5 characters",
				showErrorBox: true,
			});
			subjectRef.current.focus();
			return;
		}

		// Message Check
		if (message.length < 5) {
			setError({
				title: "Invalid input!",
				message: "Please enter a valid message with at least 5 characters",
				showErrorBox: true,
			});
			messageRef.current.focus();
			return;
		}

		if (message !== "") {
			const userData = {
				name: name,
				email: email,
				subject: subject,
				message: message,
			};
			saveContactMessage(userData, {
				onSuccess: (obj) => {
					// Execute any logic that should take place after the object is saved.
					nameRef.current.value = "";
					emailRef.current.value = "";
					subjectRef.current.value = "";
					messageRef.current.value = "";
					setSuccess((prevState) => ({
						...prevState,
						title: "Message sent",
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
						title: "Failed to save message",
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
							In order to best assist you, please share as many details as you can about your query. If applicable, please include any
							troubleshooting steps that you have already taken.
						</div>
					</div>

					<div className={styles["email_us"]}>
						<div>
							Email us at:
							<br />
							<a href="mailto:contact@musixverse.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
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
											<div className="font-primary text-primary-500 text-sm">
												You can leave an anonymous note but if you do not provide your email, we will not be able to connect with you
												and respond to your query.
											</div>
										</div>
									</div>

									<div className="w-full mt-5 md:w-2/3 md:mt-0">
										<div className={styles["inputBox"]}>
											<label className="text-sm font-primary dark:opacity-50">Subject</label>
											<input
												className="dark:bg-[#1a1a1a] mt-1 dark:border-transparent"
												type="text"
												ref={subjectRef}
												name="subject"
												autoComplete="off"
												required
											/>
										</div>

										<div className="mt-4">
											<label className="text-sm font-primary dark:opacity-50">Message</label>
											<textarea
												className={"dark:bg-[#1a1a1a] mt-1 dark:border-transparent " + styles["textarea_contact"]}
												ref={messageRef}
												name="message"
												rows="6"
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

					<div className="w-full text-center mt-20">
						<div>
							Want to explain the issue in detail to our team? Please head over to the support channel on discord and tell us about the problem
							there.
							<br />
							<a href={DISCORD_INVITE_LINK} className="text-primary-500" target="_blank" rel="noopener noreferrer">
								Click here to join the discord server
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
