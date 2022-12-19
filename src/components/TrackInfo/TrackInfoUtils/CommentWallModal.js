import Link from "next/link";
import Image from "next/future/image";
import Modal from "../../../layout/Modal/Modal";

const CommentWallModal = ({ isOpen, setOpen, comment }) => {
	return (
		<>
			<Modal
				isOpen={isOpen}
				classes="max-w-[36rem]"
				image={
					<div className="relative flex items-center justify-center w-24 h-24 mx-auto text-5xl text-primary-500">
						<i className="fa-solid fa-comment"></i>
					</div>
				}
				title={"Comment Wall"}
				content={
					<div className="text-justify whitespace-pre-wrap max-h-[500px] overflow-y-scroll">
						<div className="relative flex flex-col w-full h-full px-4">
							<Link href={`/profile/${comment.user.username}`} className="cursor-pointer">
								<a className="flex items-center space-x-2 w-fit">
									<div className="relative flex rounded-full">
										<Image priority src={comment.user.avatar} height="30" width="30" alt="current owner avatar" className="rounded-full" />
									</div>
									<p className="text-sm font-semibold">{comment.user.name}</p>
								</a>
							</Link>
							<p className="mt-6 text-base">{comment.newComment}</p>
						</div>
					</div>
				}
				onClose={() => {
					setOpen(false);
				}}
			></Modal>
		</>
	);
};

export default CommentWallModal;
