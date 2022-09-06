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
