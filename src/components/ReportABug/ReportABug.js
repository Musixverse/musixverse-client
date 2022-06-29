import React, { useState, useRef } from "react";
import styles from "../../../styles/ReportABug/reportABug.module.css";

export default function ReportABug() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const nameRef = useRef(null);
    const emailRef = useRef(null);
	const bugDescripttionRef = useRef(null);

	const onFocus = (event) => {
		if (event.target.autocomplete) {
			event.target.autocomplete = "No";
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<div className={styles["report_a_bug_container"]}>
			<div className={styles["report_a_bug"]}>
				<div>
					<div className={styles["report_a_bug_heading"]}>Report a Bug</div>
				</div>

				<div className="mt-4">
					<div className={styles["report_a_bug_notice"]}>
						First, <span className="text-primary-100">thank you for reporting bugs!</span> Identifying, reproducing, and documenting bugs is not always fun or easy, but it’s an
						important part of making excellent software. It can also be rewarding, as you&apos;ll have a direct influence on the platform development. We at{" "}
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
						Not all issues are as clear-cut as a platform crash (But we definitely want to know about those, too!). As you use the platform, anything that strikes you as{" "}
						<span className="text-primary-100">weird</span>, <span className="text-primary-100">unexpected</span>, or <span className="text-primary-100">broken</span> can
						be termed as a bug and is important to let us know about.
						<br />
						<br />
						<span className="text-primary-100">Report everything</span> that you find. An issue might be glaringly obvious to you, but if you don’t report it, we may not even know
						about it.
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
						One or more of those may seem stupid or self-explanatory to you, but it’s <span className="text-primary-100">extremely helpful</span> to us if you take the time to
						write it all out. <span className="text-primary-100">Don’t assume we know anything!</span> Perhaps you learned how to do something in another application, and we have a
						totally different way to accomplish the same thing. Simply saying that something “doesn’t work” isn’t very helpful; spell it out for us as simply and clearly as possible.
						<br />
						<br />
						Any supporting information you can think of adding will be appreciated. Attach anything you think might be helpful. Eg. A screenshot or screen recording may be the clearest
						way to explain your bug.
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
					<div className={"dark:backdrop-blur-2xl dark:backdrop-brightness-200 "+styles["report_a_bug_box"]}>
						<form onSubmit={handleFormSubmit}>
							<div className="flex flex-col md:flex-row md:space-x-8 xl:space-x-14">
								<div className="w-full md:w-1/3">
									<div className={styles["inputBox"]}>
										<label className="dark:opacity-50">Name&nbsp; (Optional)</label>
										<input className="dark:bg-[#1a1a1a] mt-1" type="text" ref={nameRef} name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" onFocus={onFocus} />
									</div>

									<div className={"mt-4 "+styles["inputBox"]}>
										<label className="dark:opacity-50">Email Address&nbsp; (Optional)</label>
										<input className="dark:bg-[#1a1a1a] mt-1" type="email" ref={emailRef} name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" onFocus={onFocus} />
									</div>

									<div className="mt-5">
										<div className="font-primary text-primary-100 text-sm">If you don&apos;t provide an email, we will not be able to respond to your query!</div>
									</div>
								</div>

								<div className="w-full mt-5 md:w-2/3 md:mt-0">
									<div>
										<label className="text-sm font-primary dark:opacity-50">Bug Description</label>
										<textarea className={"dark:bg-[#1a1a1a] mt-1 "+styles["textarea_contact"]} ref={bugDescripttionRef} name="message" rows="8" required></textarea>
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