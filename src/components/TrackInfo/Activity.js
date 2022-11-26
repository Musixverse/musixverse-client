import Image from "next/image";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import styles from "../../../styles/TrackInfo/Activity.module.css";
import { convertTimestampToDate } from "../../utils/ConvertTimestampToDate";
import LinkToBlockExplorer from "./TrackInfoUtils/LinkToBlockExplorer";
import ActivityDetails from "./TrackInfoUtils/ActivityDetails";

export default function Activity({ artist, activity }) {
	const { Moralis } = useMoralis();

	return (
		<div className={"dark:bg-dark-600 " + styles["sales-history"]}>
			<h1 className={styles["sales-history__heading"]}>Activity</h1>
			<div className="overflow-y-auto max-h-32">
				{activity.tokenActivity &&
					activity.tokenActivity.map((_activity, index) => {
						return <ActivityDetails key={index} activity={_activity} />;
					})}
				<div className="flex">
					<div className={"dark:bg-dark-800 " + styles["sales-history__action"]}>
						<i className="text-xl fa-solid fa-compact-disc"></i>
					</div>

					<div className="ml-3 font-secondary">
						<div className="flex items-center text-sm font-medium sm:text-base">
							Minted with a base price of &nbsp;
							<Image src={"/assets/matic-logo.svg"} width={15} height={15} alt="matic icon" />
							<p className="ml-1 font-semibold font-primary">
								{activity.tokenMintedInfo ? Moralis.Units.FromWei(activity.tokenMintedInfo.price) : ""}
							</p>
						</div>
						<p className="text-[#8a8a8a] text-sm">
							by&nbsp;
							{artist ? (
								<Link href={artist.isBand ? `/profile/band/${artist.username}` : `/profile/${artist.username}`} className="cursor-pointer">
									<a>
										@{artist.username}&nbsp;
									</a>
								</Link>
							) : null}
							on&nbsp;
							{activity.tokenMintedInfo ? convertTimestampToDate(activity.tokenMintedInfo.block_timestamp) : ""}
							{activity.tokenMintedInfo ? <LinkToBlockExplorer transactionHash={activity.tokenMintedInfo.transaction_hash} /> : ""}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
