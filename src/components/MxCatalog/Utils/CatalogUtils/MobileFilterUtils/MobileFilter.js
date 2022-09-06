import Image from "next/image";
import { useTheme } from "next-themes";
import FilterSvg from "../../../../../../public/assets/Catalog/Filter.svg";
import FilterSvg_white from "../../../../../../public/assets/Catalog/filter_white.svg";

export default function MobileFilter({ showMobileFilter, setShowMobileFilter }) {
	const { theme } = useTheme();
	return (
		<>
			{/* Filter Button */}
			<div
				onClick={() => setShowMobileFilter(true)}
				className="mb-[35px] flex items-center justify-center px-8 py-2 rounded-lg cursor-pointer lg:hidden bg-light-300 dark:bg-search-200"
			>
				<Image src={theme === "light" ? FilterSvg : FilterSvg_white} objectFit="contain" width={20} height={17} alt="Filter" />
				<p className="ml-3 font-semibold font-primary">Filters</p>
			</div>
		</>
	);
}
