export default function Notartist() {
	return (
		<div className="pt-8 min-h-screen flex flex-col justify-center items-center">
			<div className="p-6 rounded-2xl bg-white dark:bg-dark-600">
				<span className="flex justify-center items-center w-14 h-14 border-2 rounded-full border-error-600">
					<i className="fa-solid fa-exclamation text-2xl text-error-600"></i>
				</span>
			</div>
			<p className="font-tertiary text-4xl sm:text-5xl mt-6">OOPS! Something&apos;s not right</p>
			<p className="font-secondary text-sm sm:text-base text-center">
				You don&apos;t have an Artist account. To create an NFT, you <br /> need to switch to an Artist profile.
			</p>
			<div className="flex gap-4 mt-20">
				<button className="px-8 py-3 mt-6 font-semibold text-black text-xs bg-light-300/60 hover:bg-light-300 font-primary rounded-xl dark:bg-dark-600 dark:text-white">
					Back
				</button>
				<button className="px-8 py-3 mt-6 font-semibold text-xs text-white bg-primary-500 hover:bg-primary-600 font-primary rounded-xl">
					Switch to an artist profile &nbsp; <i className="fa-solid fa-arrow-right-long"></i>
				</button>
			</div>
		</div>
	);
}
