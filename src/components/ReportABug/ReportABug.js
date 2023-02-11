import React, { useRef, useContext } from "react";
import Link from "next/link";
import styles from "../../../styles/ReportABug/reportABug.module.css";
import { useNewMoralisObject } from "react-moralis";
import StatusContext from "../../../store/status-context";
import { isEmailValid } from "../../utils/Validate";

export default function ReportABug() {
	const [, , setSuccess, setError] = useContext(StatusContext);
	const { save: saveContactMessage } = useNewMoralisObject("BugReports");

	const nameRef = useRef("");
	const emailRef = useRef("");
	const bugDescriptionRef = useRef("");

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const bugDescription = bugDescriptionRef.current.value;

		// EMAIL CHECK
		if (email.length != 0) {
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
		if (bugDescription.length < 5) {
			setError({
				title: "Invalid credentials!",
				message: "Please enter a valid description",
				showErrorBox: true,
			});
			messageRef.current.focus();
			return;
		}

		if (bugDescription !== "") {
			const userData = {
				name: name,
				email: email,
				bugDescription: bugDescription,
			};
			saveContactMessage(userData, {
				onSuccess: (obj) => {
					// Execute any logic that should take place after the object is saved.
					nameRef.current.value = "";
					emailRef.current.value = "";
					bugDescriptionRef.current.value = "";
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
		<div className={styles["report_a_bug_container"]}>
			<div className={styles["report_a_bug"]}>
				<div>
					<div className={styles["report_a_bug_heading"]}>Report a Bug</div>
				</div>

				<div className="mt-4">
					<div className={styles["report_a_bug_notice"]}>
						Thank you for reporting bugs! Identifying, reproducing, and documenting bugs is important to improve Musixverse. Feedback is vital to
						make our services even better. With bug reporting forms, email, and discord server, it&apos;s easy to report issues you encounter and
						request enhancements to any services or functionalities on our platform. You&apos;ll directly influence the platform&apos;s development
						and building of the future of the Music Industry. We at{" "}
						<a href={"/"} className="text-primary-500">
							Musixverse
						</a>
						, honestly appreciate your help.
					</div>
				</div>

				<div className="mt-5">
					<div className="font-primary font-medium text-primary-500 text-2xl">What&apos;s a Bug?</div>
				</div>

				<div className="mt-4">
					<div className={styles["report_a_bug_notice"]}>
						Not all issues are as clear-cut as a platform crash (But we definitely want to know about those, too!). As you use the platform,
						anything that strikes you as <span className="text-primary-500">weird</span>, <span className="text-primary-500">unexpected</span>, or{" "}
						<span className="text-primary-500">broken</span> can be termed as a bug and is important to let us know about.
						<br />
						<br />
						<span className="text-primary-500">Report everything</span> that you find. An issue might be glaringly obvious to you, but we may not
						even know about it if you don&apos;t report it.
					</div>
				</div>

				<div className="mt-5">
					<div className="mt-2 font-primary font-medium text-primary-500 text-2xl">What does a good bug report look like?</div>
				</div>

				<div className="mt-4">
					<div className={styles["report_a_bug_notice"]}>
						No matter what the bug is, we will <span className="text-primary-500">always</span> want to know this information:
						<br />
						<br />
						<ul className="list-disc pl-4">
							<li>What did you try to do?</li>
							<li>What steps were involved? (So that we can replicate)</li>
							<li>What did you expect to happen?</li>
							<li>What happened instead?</li>
						</ul>
						One or more of those may seem stupid or self-explanatory to you, but it’s <span className="text-primary-500">extremely helpful</span> to
						us if you take the time to write it all out. <span className="text-primary-500">Please don&apos;t assume we know everything! </span>{" "}
						Perhaps you learned how to do something in another application, and we have a totally different way to accomplish the same thing. Simply
						saying that something “doesn’t work” isn’t very helpful; explain it to us as simply and clearly as possible.
						<br />
						<br />
						Any supporting information you can think of adding will be appreciated.
						<br />
						<br />
						Eg. A screenshot or screen recording may be the clearest way to explain your bug.
						<br />
					</div>
				</div>

				<div className="mt-5">
					<div className="mt-2 font-primary font-medium text-primary-500 text-2xl">How do I report bugs?</div>
				</div>

				<div className="mt-4 font-primary dark:text-[#afafaf]">
					<div>
						The fastest and most convinient way to report a bug is by joining our Discord server:
						<br />
						<br />
						<ol className="list-decimal pl-4">
							<li>
								Join our Discord server{" "}
								<Link href="https://discord.com/invite/rXKb7rCqjG" passHref={true}>
									<a target="_blank" rel="noopener noreferrer" className="font-medium text-primary-500 hover:text-primary-700">
										here
									</a>
								</Link>
								.
							</li>
							<li>
								Pickup MXV Insider role in the <strong>#get-role</strong> channel
							</li>
							<li>
								Once you have the role, you will have access to the bug reporting channels on our server, and you can start reporting bugs and
								giving feedback.
							</li>
						</ol>
					</div>

					<div className="mt-8">
						Alternative ways to report a bug are given below.
						<br />
						<br />
						Sending us an email at:
						<br />
						<strong>
							<a href="mailto:contact@musixverse.com?subject=Bug Report" target="_blank" rel="noopener noreferrer">
								contact@musixverse.com
							</a>
						</strong>
						<br />
						<br />
						Or submit your comments anonymously using the form below.
						<br />
						<br />
						Please ensure to include as much detailed information about the issue as possible.
					</div>
				</div>

				<div className={styles["report_a_bug_form"]}>
					<div className={"dark:backdrop-blur-2xl dark:backdrop-brightness-200 " + styles["report_a_bug_box"]}>
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
											If you don&apos;t provide an email, we will not be able to respond to your query!
										</div>
									</div>
								</div>

								<div className="w-full mt-5 md:w-2/3 md:mt-0">
									<div>
										<label className="text-sm font-primary dark:opacity-50">Bug Description</label>
										<textarea
											className={"dark:bg-[#1a1a1a] mt-1 dark:border-transparent " + styles["report_a_bug-textarea"]}
											ref={bugDescriptionRef}
											name="message"
											rows="8"
											required
										></textarea>
									</div>

									<button className={styles["send_message_btn"]}>
										<span>
											Send<i className="fas fa-angle-double-right"></i>
										</span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
