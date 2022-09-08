import { Fragment } from "react";
import styles from "../../../styles/Help/Help.module.css";
import { DISCORD_SUPPORT_CHANNEL_INVITE_LINK } from "../../constants";
import HelpCard from "./utils/HelpCard";
import GS_icons from "../../../public/assets/help-center/getting-started.png";
import buying from "../../../public/assets/help-center/buying.png";
import selling from "../../../public/assets/help-center/selling.png";
import creating from "../../../public/assets/help-center/creating.png";
import faq from "../../../public/assets/help-center/faq.png";

const card_array = [
  {	icon: GS_icons,	label: "Getting Started" },
  {	icon: buying,	label: "Buying" },
  {	icon: selling,	label: "Selling" },
  {	icon: creating,	label: "Creating" },
  {	icon: faq,	label: "FAQ" },
];

export default function Help() {
	return (
		<Fragment>
			<div className={styles["help_us_container"]}>
				<div className={styles["help_us"]}>
					<div>
						<div className={styles["help_us_heading"]}>Help Center</div>
					</div>
					<div className="flex flex-wrap justify-center gap-8">
						{card_array.map((card, idx) => {
							return <HelpCard key={idx} help_icon={card.icon} label={card.label} />;
						})}
					</div>
					{/* <div className={styles["email_us"]}>
						<div>
							For any kind of help, please head over to the support channel on discord and ask your question there.
							<br />
							<a href={DISCORD_SUPPORT_CHANNEL_INVITE_LINK} className="text-primary-100" target="_blank" rel="noopener noreferrer">
								Click here to join the discord server
							</a>
						</div>
					</div> */}
				</div>
			</div>
		</Fragment>
	);
}
