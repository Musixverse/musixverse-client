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
				className="relative w-full h-full flex flex-col rounded-lg bg-light-200 dark:bg-dark-100 shadow hover:shadow-primary-100 overflow-hidden transition-all duration-700 cursor-pointer"
			>
				<div className="relative flex flex-col w-full h-full px-4 py-4">
					<Link href={`/profile/${comment.user.username}`} className="cursor-pointer">
						<a target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 w-fit">
							<div className="rounded-full flex relative">
								<Image priority src={comment.user.avatar} height="30" width="30" alt="current owner avatar" className="rounded-full" />
							</div>
							<p className="text-sm font-semibold">{comment.user.name}</p>
						</a>
					</Link>
					<p className="text-sm mt-4">{truncatedComment}</p>
				</div>
			</div>
			<CommentWallModal isOpen={isCommentWallModalOpen} setOpen={setCommentWallModalOpen} comment={comment} />
		</>
	);
};

export default CommentWall;
