import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
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
				<div className={styles["contact_us_"]}>
					<div>
						<div className={styles["contact_us_heading"]}>Contact Us</div>
					</div>

					<div className="mt-4">
						<div className={styles["contact_notice"]}>
							Please note that{" "}
							<Link to={"/"} className="text-primary-100">
								musixverse.com
							</Link>{" "}
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
								Singhyuvraj179@gmail.com
							</a>
							<br />
							<br />
							Or submit your queries anonymously using the form below.
						</div>
					</div>

					<div className={styles["contact_form"]}>
						<div className={styles["contact_us_div"]}>
							<div className={styles["contact_us_box"]}>
								<form className={styles["message_inputs"]} action="https://getform.io/f/91471bcd-4363-49f9-9762-bb91ed85745b" method="POST">
									<div>
										<div>
											<div className="inputBox">
												<input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" onFocus={onFocus} />
												<label>Name&nbsp; (Optional)</label>
											</div>

											<div className="inputBox">
												<input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" onFocus={onFocus} />
												<label>Email Address&nbsp; (Optional)</label>
											</div>

											<div className="mt-5">
												<div className={styles["provide_email"]}>If you don&apos;t provide an email, we will not be able to respond to your query!</div>
											</div>
										</div>

										<div className={styles["message_box"]}>
											<div>
												<label className="message">Message</label>
												<textarea className={styles["textarea_contact"]} name="message" rows="8" required></textarea>
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
			</div>
		</Fragment>
	);
}