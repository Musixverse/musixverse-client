import React, { useState, Fragment } from "react";
import styles from "../../../styles/ContactUs/contactUs.module.css";

export default function ContactUs() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const onFocus = (event) => {
		if (event.target.autocomplete) {
			event.target.autocomplete = "No";
		}
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
							aggregates all songs that users put up as NFTs and is not partnering with any of the artists displayed on the website. If you want to contact one of the artists listed
							here, you must contact them directly through other social media platforms. We are not responsible if someone else puts up an artists&apos; song as an NFT on our platform and
							cannot assist you regarding the same.
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
							<div className={"dark:backdrop-blur-2xl dark:backdrop-brightness-200 "+styles["contact_us_box"]}>
								<form action="https://getform.io/f/91471bcd-4363-49f9-9762-bb91ed85745b" method="POST">
									<div className="flex flex-col md:flex-row md:space-x-8 xl:space-x-14">
										<div className="w-full md:w-1/3">
											<div className={styles["inputBox"]}>
												<label className="dark:opacity-50">Name&nbsp; (Optional)</label>
												<input className="dark:bg-[#1a1a1a] mt-1" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" onFocus={onFocus} />
											</div>

											<div className={"mt-4 "+styles["inputBox"]}>
												<label className="dark:opacity-50">Email Address&nbsp; (Optional)</label>
												<input className="dark:bg-[#1a1a1a] mt-1" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" onFocus={onFocus} />
											</div>

											<div className="mt-5">
												<div className="font-primary text-primary-100 text-sm">If you don&apos;t provide an email, we will not be able to respond to your query!</div>
											</div>
										</div>

										<div className="w-full mt-5 md:w-2/3 md:mt-0">
											<div>
												<label className="text-sm font-primary dark:opacity-50">Message</label>
												<textarea className={"dark:bg-[#1a1a1a] mt-1 "+styles["textarea_contact"]} name="message" rows="8" required></textarea>
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