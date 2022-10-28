import { useRouter } from "next/router";
import RequiredAsterisk from "../../../layout/RequiredAsterisk";

const BandButtons = ({}) => {
	const router = useRouter();

	return (
		<div className="mt-16">
			<div className="flex flex-col justify-end max-w-xs mt-4 space-x-0 space-y-3 sm:max-w-none sm:flex-row sm:space-y-0 sm:space-x-3 md:self-end">
				<button
					type="button"
					onClick={() => router.push("/settings/band-dashboard")}
					className="flex items-center px-10 py-3 text-sm font-primary font-bold rounded-md bg-light-100 hover:bg-[#dde7e7e3] dark:bg-[#323232] dark:hover:bg-dark-600 dark:border-[#323232]"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="flex items-center justify-between px-4 py-3 text-sm font-bold rounded-md font-primary bg-primary-500 hover:bg-primary-600 text-light-100"
				>
					Create
					<span className="ml-24 text-xl">
						<i className="fa-solid fa-arrow-right-long"></i>
					</span>
				</button>
			</div>

			<div className="flex mt-2 md:self-end sm:justify-end text-xs text-[#777777]">
				Fields marked with
				<div className="mr-3">
					<RequiredAsterisk />
				</div>
				are required
			</div>
		</div>
	);
};

export default BandButtons;
