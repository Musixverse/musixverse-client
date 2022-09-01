export default function CustomButton({ green, onClick, children, classes }) {
	return (
		<button
			onClick={() => (onClick ? onClick() : {})}
			className={
				green
					? `rounded-lg bg-primary-100 hover:bg-primary-200 font-primary font-semibold text-light-100 ${classes ? classes : "text-lg px-8 py-2"}`
					: `rounded-lg bg-light-100 hover:bg-light-200 font-primary font-semibold text-lg text-dark-100 ${classes ? classes : "text-lg px-8 py-2"}`
			}
		>
			{children}
		</button>
	);
}
