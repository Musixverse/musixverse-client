import Modal from "../../../layout/Modal/Modal";

const CommentUpdatedModal = ({ isOpen, setOpen, previousComment, newComment }) => {
	return (
		<>
			<Modal
				isOpen={isOpen}
				image={
					<div className="mx-auto flex items-center relative justify-center h-24 w-24">
						<i className="fa-solid fa-comment text-4xl"></i>
					</div>
				}
				title={"Comment Updated"}
				content={
					<div>
						{previousComment && (
							<>
								<div>
									<p className="text-start font-semibold text-base">Previous Comment</p>
									<p className="mt-2 p-4 bg-light-200 dark:bg-dark-200 rounded text-start">{previousComment}</p>
								</div>
								<i className="fa-solid fa-arrow-down-long text-xl text-center my-4"></i>
							</>
						)}
						<p className="text-start font-semibold text-base">New Comment</p>
						<p className="mt-2 p-4 bg-light-200 dark:bg-dark-200 rounded text-start">{newComment}</p>
					</div>
				}
				onClose={() => {
					setOpen(false);
				}}
			></Modal>
		</>
	);
};

export default CommentUpdatedModal;
