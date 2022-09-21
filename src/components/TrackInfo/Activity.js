import Image from "next/image";
import Link from "next/link";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { convertTimestampToDate } from "../../utils/ConvertTimestampToDate";
import LinkToBlockExplorer from "./TrackInfoUtils/LinkToBlockExplorer";
import ActivityDetails from "./TrackInfoUtils/ActivityDetails";
import minted from "../../../public/assets/MINTED.svg";
import styles from "../../../styles/TrackInfo/Activity.module.css";

export default function Activity({ tokenId, artistAddress }) {
	const { Moralis } = useMoralis();
	const { data: artist } = useMoralisCloudFunction("fetchUsernameFromAddress", { address: artistAddress });
	const { data: tokenMintedInfo } = useMoralisCloudFunction("fetchTokenMintedInfo", { tokenId: tokenId });
	const { data: tokenActivity } = useMoralisCloudFunction("fetchTokenActivity", { tokenId: tokenId });

	return (
		<div className={"dark:bg-dark-100 " + styles["sales-history"]}>
			<h1 className={styles["sales-history__heading"]}>Activity</h1>
			<div className="max-h-32 overflow-y-auto">
				{tokenActivity &&
					tokenActivity.map((activity, index) => {
						return <ActivityDetails key={index} activity={activity} />;
					})}

				<div className="flex">
					<div className={"dark:bg-dark-200 " + styles["sales-history__action"]}>
						<Image src={minted} alt="minting logo" width={25} height={25}></Image>
					</div>

					<div className="ml-3 font-secondary">
						<div className="flex items-center text-sm sm:text-base font-medium">
							Minted with a base price of &nbsp;
							<Image src={"/assets/matic-logo.svg"} width={15} height={15} alt="matic icon" />
							<p className="ml-1 font-primary font-semibold">{tokenMintedInfo ? Moralis.Units.FromWei(tokenMintedInfo.price) : ""}</p>
						</div>
						<p className="text-[#8a8a8a] text-sm">
							by&nbsp;
							{artist ? (
								<Link href={`/profile/${artist.username}`} className="cursor-pointer">
									<a target="_blank" rel="noopener noreferrer">
										@{artist.username}&nbsp;
									</a>
								</Link>
							) : null}
							on&nbsp;
							{tokenMintedInfo ? convertTimestampToDate(tokenMintedInfo.block_timestamp) : ""}
							{tokenMintedInfo ? <LinkToBlockExplorer transactionHash={tokenMintedInfo.transaction_hash} /> : ""}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
