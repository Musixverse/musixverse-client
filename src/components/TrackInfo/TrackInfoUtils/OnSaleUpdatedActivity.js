import Link from "next/link";
import { convertTimestampToDate } from "../../../utils/ConvertTimestampToDate";
import LinkToBlockExplorer from "./LinkToBlockExplorer";
import styles from "../../../../styles/TrackInfo/Activity.module.css";

const PurchasedActivity = ({ activity }) => {
	return (
		<>
			<div className={"dark:bg-dark-200 " + styles["sales-history__action"]}>
				<i className="fa-solid fa-pen-to-square text-lg"></i>
			</div>

			<div className="ml-3 font-secondary">
				<p className="font-medium">
					{activity.onSale ? <>Listed for sale</> : <>Taken down from sale</>}
					&nbsp;
				</p>

				<p className="text-[#8a8a8a] text-sm">
					by&nbsp;
					{activity ? (
						<Link href={`/profile/${activity.caller.username}`} className="cursor-pointer">
							<a target="_blank" rel="noopener noreferrer">
								@{activity.caller.username}&nbsp;
							</a>
						</Link>
					) : null}
					on&nbsp;
					{convertTimestampToDate(activity.block_timestamp)}
					<LinkToBlockExplorer transactionHash={activity.transaction_hash} />
				</p>
			</div>
		</>
	);
};

export default PurchasedActivity;
