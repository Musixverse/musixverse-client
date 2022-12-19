import Image from "next/image";
import { useTheme } from "next-themes";
import FilterSvg from "../../../../../../public/assets/Catalog/Filter.svg";
import FilterSvg_white from "../../../../../../public/assets/Catalog/filter_white.svg";

export default function MobileFilter({ setShowMobileFilter, setCurrentMobileFilterType }) {
	const { theme } = useTheme();
	return (
		<>
			{/* Filter Button */}
			<div
				onClick={() => {
					setShowMobileFilter(true);
					setCurrentMobileFilterType(1);
				}}
				className="mb-[35px] flex items-center justify-center px-8 py-2 rounded-lg cursor-pointer lg:hidden bg-light-300 dark:bg-search-200"
			>
				<Image src={theme === "dark" ? FilterSvg_white : FilterSvg} objectFit="contain" width={20} height={17} alt="Filter" />
				<p className="ml-3 font-semibold font-primary">Filters</p>
			</div>
		</>
	);
}
