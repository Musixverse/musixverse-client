const ConnectionButton = ({ onClick, connectionStatus, buttonText, verifiedText }) => {
	return (
		<button
			type="button"
			onClick={() => onClick()}
			className={
				connectionStatus
					? `flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-light-100 dark:bg-[#323232] text-primary-500`
					: `flex w-fit items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-primary-600 hover:bg-primary-700 text-light-100`
			}
			disabled={connectionStatus}
		>
			{connectionStatus ? (
				<>
					<i className="fa-solid fa-circle-check text-primary-500 text-xl mr-2"></i>
					{verifiedText}
				</>
			) : (
				buttonText
			)}
		</button>
	);
};

export default ConnectionButton;
