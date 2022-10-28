import { useState } from "react";
import Link from "next/link";
import { convertTimestampToDate } from "../../../utils/ConvertTimestampToDate";
import LinkToBlockExplorer from "./LinkToBlockExplorer";
import styles from "../../../../styles/TrackInfo/Activity.module.css";
import CommentUpdatedModal from "./CommentUpdatedModal";

const CommentUpdatedActivity = ({ activity }) => {
	const [isCommentUpdatedModalOpen, setCommentUpdatedModalOpen] = useState(false);

	return (
		<>
			<div className={"dark:bg-dark-800 " + styles["sales-history__action"]}>
				<i className="fa-solid fa-comment text-lg"></i>
			</div>

			<div className="ml-3 font-secondary">
				<p className="font-medium">
					<span
						onClick={() => {
							setCommentUpdatedModalOpen(true);
						}}
						className="text-[#8a8a8a] hover:text-primary-500 cursor-pointer hover:underline"
					>
						Comment
					</span>
					&nbsp;{activity.previousComment ? "updated" : "added"}&nbsp;
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
			<CommentUpdatedModal
				isOpen={isCommentUpdatedModalOpen}
				setOpen={setCommentUpdatedModalOpen}
				previousComment={activity.previousComment}
				newComment={activity.newComment}
			/>
		</>
	);
};

export default CommentUpdatedActivity;
