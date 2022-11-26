import Image from "next/image";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { convertTimestampToDate } from "../../../utils/ConvertTimestampToDate";
import LinkToBlockExplorer from "./LinkToBlockExplorer";
import styles from "../../../../styles/TrackInfo/Activity.module.css";

const PurchasedActivity = ({ activity }) => {
	const { Moralis } = useMoralis();

	return (
		<>
			<div className={"dark:bg-dark-800 " + styles["sales-history__action"]}>
				<i className="text-lg fa-solid fa-gavel"></i>
			</div>

			<div className="ml-3 font-secondary">
				<p className="font-medium">
					Purchased for &nbsp;
					<Image src={"/assets/matic-logo.svg"} width={15} height={15} alt="matic icon" />
					<span className="ml-1 font-semibold font-primary">{Moralis.Units.FromWei(activity.price)}</span>
				</p>

				<p className="text-[#8a8a8a] text-sm">
					by&nbsp;
					{activity ? (
						<Link href={`/profile/${activity.caller.username}`} className="cursor-pointer">
							<a>
								@{activity.caller.username}&nbsp;
							</a>
						</Link>
					) : null}
					{activity && activity.referrer && (
						<>
							using referral link of&nbsp;
							<Link href={`/profile/${activity.referrer.username}`} className="cursor-pointer">
								<a>
									@{activity.referrer.username}&nbsp;
								</a>
							</Link>
						</>
					)}
					on&nbsp;
					{convertTimestampToDate(activity.block_timestamp)}
					<LinkToBlockExplorer transactionHash={activity.transaction_hash} />
				</p>
			</div>
		</>
	);
};

export default PurchasedActivity;
