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
							<a href="mailto:Singhyuvraj179@gmail.com" target="_blank" rel="noopener noreferrer">
								singhyuvraj179@gmail.com
							</a>
							<br />
							<br />
							Or submit your queries anonymously using the form below.
						</div>
					</div>

					<div className={styles["contact_form"]}>
							<div className={styles["contact_us_box"]}>
								<form action="https://getform.io/f/91471bcd-4363-49f9-9762-bb91ed85745b" method="POST">
									<div className="flex space-x-10">
										<div className="w-1/3">
											<div className={styles["inputBox"]}>
												<label className="dark:opacity-50">Name&nbsp; (Optional)</label>
												<input className="dark:bg-[#1a1a1a]" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" onFocus={onFocus} />
											</div>

											<div className={"mt-4 "+styles["inputBox"]}>
												<label className="dark:opacity-50">Email Address&nbsp; (Optional)</label>
												<input className="dark:bg-[#1a1a1a]" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" onFocus={onFocus} />
											</div>

											<div className="mt-5">
												<div className="font-primary text-primary-100 text-sm">If you don&apos;t provide an email, we will not be able to respond to your query!</div>
											</div>
										</div>

										<div className="w-2/3">
											<div>
												<label className="font-primary dark:opacity-50">Message</label>
												<textarea className={"dark:bg-[#1a1a1a] "+styles["textarea_contact"]} name="message" rows="8" required></textarea>
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