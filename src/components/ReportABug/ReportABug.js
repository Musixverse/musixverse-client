import React, { useRef, useContext } from "react";
import Link from "next/link";
import styles from "../../../styles/ReportABug/reportABug.module.css";
import { useNewMoralisObject } from "react-moralis";
import StatusContext from "../../../store/status-context";

export default function ReportABug() {
	const [, , setSuccess, setError] = useContext(StatusContext);
	const { save: saveContactMessage } = useNewMoralisObject("BugReports");

	const nameRef = useRef("");
	const emailRef = useRef("");
	const bugDescriptionRef = useRef("");

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const bugDescription = bugDescriptionRef.current.value;

		if (email.length != 0) {
			// EMAIL CHECKS
			const emailRegex = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);
			if (!emailRegex.test(email)) {
				setError({
					title: "Invalid credentials!",
					message: "Please enter a valid email",
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
						First, <span className="text-primary-100">thank you for reporting bugs!</span> Identifying, reproducing, and documenting bugs is not
						always fun or easy, but it’s an important part of making excellent software. It can also be rewarding, as you&apos;ll have a direct
						influence on the platform development. We at{" "}
						<a href={"/"} className="text-primary-100">
							Musixverse
						</a>
						, honestly appreciate your help.
					</div>
				</div>

				<div className="mt-5">
					<div className="font-primary font-medium text-primary-100 text-2xl">What&apos;s a Bug?</div>
				</div>

				<div className="mt-4">
					<div className={styles["report_a_bug_notice"]}>
						Not all issues are as clear-cut as a platform crash (But we definitely want to know about those, too!). As you use the platform,
						anything that strikes you as <span className="text-primary-100">weird</span>, <span className="text-primary-100">unexpected</span>, or{" "}
						<span className="text-primary-100">broken</span> can be termed as a bug and is important to let us know about.
						<br />
						<br />
						<span className="text-primary-100">Report everything</span> that you find. An issue might be glaringly obvious to you, but if you don’t
						report it, we may not even know about it.
					</div>
				</div>

				<div className="mt-5">
					<div className="mt-2 font-primary font-medium text-primary-100 text-2xl">What does a good bug report look like?</div>
				</div>

				<div className="mt-4">
					<div className={styles["report_a_bug_notice"]}>
						No matter what the bug is, we will <span className="text-primary-100">always</span> want to know this information:
						<br />
						<br />
						<ul>
							<li>What did you try to do?</li>
							<li>What steps did you take to do that?</li>
							<li>What did you expect to happen?</li>
							<li>What happened instead?</li>
						</ul>
						One or more of those may seem stupid or self-explanatory to you, but it’s <span className="text-primary-100">extremely helpful</span> to
						us if you take the time to write it all out. <span className="text-primary-100">Don’t assume we know anything!</span> Perhaps you
						learned how to do something in another application, and we have a totally different way to accomplish the same thing. Simply saying that
						something “doesn’t work” isn’t very helpful; spell it out for us as simply and clearly as possible.
						<br />
						<br />
						Any supporting information you can think of adding will be appreciated. Eg. A screenshot or screen recording may be the clearest way to
						explain your bug.
						<br />
						Head over to discord and report your issue. {/* Link added to the product-feedback channel on discord server */}
						<Link href="https://discord.com/invite/rXKb7rCqjG" passHref={true}>
							<a target="_blank" rel="noopener noreferrer" className="font-medium text-primary-100 hover:text-primary-300">
								Click here
							</a>
						</Link>{" "}
					</div>
				</div>

				<div className="mt-5">
					<div className="mt-2 font-primary font-medium text-primary-100 text-2xl">How do I report bugs?</div>
				</div>

				<div className="mt-4 font-primary dark:text-[#afafaf]">
					<div>
						Report bugs by sending us an email at:
						<br />
						<a href="mailto:contact@musixverse.com?subject=[Bug%20Report]" target="_blank" rel="noopener noreferrer">
							contact@musixverse.com
						</a>
						<br />
						<br />
						Or submit your comments anonymously using the form below.
						<br />
						<br />
						Please make sure to include as much detailed information about the issue as possible.
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
										<div className="font-primary text-primary-100 text-sm">
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
