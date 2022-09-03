export default function CustomButton({ green = false, greenOutline = false, error = false, onClick, children, classes }) {
	return (
		<button
			onClick={() => (onClick ? onClick() : {})}
			className={
				green
					? `rounded-lg bg-primary-100 hover:bg-primary-200 font-primary font-semibold text-light-100 ${classes ? classes : "text-lg px-8 py-2"}`
					: greenOutline
					? `rounded-lg bg-light-100 hover:bg-light-200 dark:bg-dark-100 border-2 border-primary-100 font-primary font-semibold  ${
							classes ? classes : "text-lg px-8 py-2"
					  }`
					: error
					? `rounded-lg bg-error-200 hover:bg-error-300 font-primary font-semibold text-light-100 ${classes ? classes : "text-lg px-8 py-2"}`
					: `rounded-lg bg-light-100 hover:bg-light-200 font-primary font-semibold text-lg text-dark-100 ${classes ? classes : "text-lg px-8 py-2"}`
			}
		>
			{children}
		</button>
	);
}
