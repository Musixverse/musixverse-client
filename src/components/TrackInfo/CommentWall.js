import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CommentWallModal from "./TrackInfoUtils/CommentWallModal";

const CommentWall = ({ comment }) => {
	const [isCommentWallModalOpen, setCommentWallModalOpen] = useState(false);

	let truncatedComment = comment.newComment;
	if (truncatedComment && truncatedComment.length > 100) {
		truncatedComment = truncatedComment.substring(0, 100) + "...";
	}

	return (
		<>
			<div
				onClick={() => {
					setCommentWallModalOpen(true);
				}}
				className="relative flex flex-col w-full h-full overflow-hidden transition-all duration-700 rounded-lg shadow cursor-pointer bg-light-200 dark:bg-dark-600 hover:shadow-primary-500"
			>
				<div className="relative flex flex-col w-full h-full px-4 py-4">
					<Link href={`/profile/${comment.user.username}`} className="cursor-pointer">
						<a className="flex items-center space-x-2 w-fit">
							<div className="relative flex rounded-full">
								<Image priority src={comment.user.avatar} height="30" width="30" alt="current owner avatar" className="rounded-full" />
							</div>
							<p className="text-sm font-semibold">{comment.user.name}</p>
						</a>
					</Link>
					<p className="mt-4 text-sm">{truncatedComment}</p>
				</div>
			</div>
			<CommentWallModal isOpen={isCommentWallModalOpen} setOpen={setCommentWallModalOpen} comment={comment} />
		</>
	);
};

export default CommentWall;
