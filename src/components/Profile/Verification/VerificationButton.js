const VerificationButton = ({ onClick, verifiedStatus, buttonText, verifiedText }) => {
	return (
		<button
			onClick={() => onClick()}
			className={
				verifiedStatus
					? `flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-light-100 text-primary-100`
					: `flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-primary-200 hover:bg-primary-300 text-light-100`
			}
			disabled={verifiedStatus}
		>
			{verifiedStatus ? (
				<>
					<i className="fa-solid fa-circle-check text-primary-100 text-xl mr-2"></i>
					{verifiedText}
				</>
			) : (
				buttonText
			)}
		</button>
	);
};

export default VerificationButton;
