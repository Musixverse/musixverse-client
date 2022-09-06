import { Fragment } from "react";
import styles from "../../../styles/Help/Help.module.css";

export default function Help() {
	return (
		<Fragment>
			<div className={styles["help_us_container"]}>
				<div className={styles["help_us"]}>
					<div>
						<div className={styles["help_us_heading"]}>Help Center</div>
					</div>

					{/* <div className="mt-4">
                        <div className={styles["help_notice"]}>
                            Please note that{" "}
                            <a href="http://musixverse.com" className="text-primary-100">
                                musixverse.com
                            </a>{" "}
                            aggregates all tracks that users put up as NFTs and is not partnering with any of the artists displayed on the website. If you want
                            to contact one of the artists listed here, you must contact them directly through other social media platforms. We are not
                            responsible if someone else puts up an artists&apos; track as an NFT on our platform and cannot assist you regarding the same.
                        </div>
                    </div> */}

					<div className={styles["email_us"]}>
						<div>
							For any kind of help, please head over to the support channel on discord and ask your question there.
							<br />
							<a href="https://discord.gg/HVnJrECRSU" className="text-primary-100" target="_blank" rel="noopener noreferrer">
								Click here to join the discord server
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
