import Image from "next/image";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { convertTimestampToDate } from "../../../utils/ConvertTimestampToDate";
import LinkToBlockExplorer from "./LinkToBlockExplorer";
import styles from "../../../../styles/TrackInfo/Activity.module.css";

const PriceUpdatedActivity = ({ activity }) => {
	const { Moralis } = useMoralis();

	return (
		<>
			<div className={"dark:bg-dark-800 " + styles["sales-history__action"]}>
				<i className="text-lg fa-solid fa-pen-to-square"></i>
			</div>

			<div className="ml-3 font-secondary">
				<p className="font-medium">
					Updated price from &nbsp;
					<Image src={"/assets/matic-logo.svg"} width={15} height={15} alt="matic icon" />
					<span className="ml-1 font-semibold font-primary">{Moralis.Units.FromWei(activity.oldPrice)}</span>
					<span className="ml-2 mr-2">to</span>
					<Image src={"/assets/matic-logo.svg"} width={15} height={15} alt="matic icon" />
					<span className="ml-1 font-semibold font-primary">{Moralis.Units.FromWei(activity.newPrice)}</span>
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
					on&nbsp;
					{convertTimestampToDate(activity.block_timestamp)}
					<LinkToBlockExplorer transactionHash={activity.transaction_hash} />
				</p>
			</div>
		</>
	);
};

export default PriceUpdatedActivity;
