import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import styles from "../../../../../styles/CreateNFT/InputDropdown.module.css";
import { City } from "country-state-city";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function CitiesDropdown({ initialValue, setChoice, dropdownType, setCurrentFilterType, countryOfOrigin, stateOfOrigin }) {
	const [currentFilter, setCurrentFilter] = useState(initialValue === "" ? "Select Here" : initialValue);
	const cityOfOriginArray = City.getCitiesOfState(countryOfOrigin.isoCode, stateOfOrigin.isoCode);

	const handleOptionSelect = (e) => {
		setCurrentFilterType(0);
		if (e.target.textContent === "Select Here (Reset)") {
			setCurrentFilter("Select Here");
			setChoice({
				type: dropdownType,
				selectedChoice: "",
			});
		} else {
			const selectedValue = cityOfOriginArray[e.target.getAttribute("data-location")];
			setCurrentFilter(selectedValue);
			setChoice({
				type: dropdownType,
				selectedChoice: selectedValue,
			});
		}
	};

	// Map all the options into a items renderable array
	const dropdownOptions = cityOfOriginArray.map((option, idx) => {
		return (
			<Menu.Item key={idx}>
				{({ active }) => (
					<li
						className={classNames(
							active ? "bg-gray-100 dark:bg-dark-800 text-gray-900" : "text-gray-700",
							"flex px-4 py-2 items-center text-sm cursor-pointer dark:text-light-100"
						)}
						onClick={handleOptionSelect}
						data-location={idx}
					>
						{option.name.length > 20 ? option.name.substring(0, 17) + "..." : option.name}
					</li>
				)}
			</Menu.Item>
		);
	});

	return (
		<Menu as="div" className="relative inline-block w-full text-left">
			{/* The visible dropdown button */}
			<div>
				<Menu.Button
					className={
						"dark:bg-[#323232] bg-[#D9D9D9] hover:dark:border-[#6cc027] dark:text-light-100 dark:border-[#323232] inline-flex justify-between items-center text-sm font-medium text-[#383838] border-2 border-transparent w-full px-4 py-2 rounded-md hover:border-[#6cc027]"
					}
				>
					{currentFilter.name
						? currentFilter.name && currentFilter.name.length > 20
							? currentFilter.name.substring(0, 17) + "..."
							: currentFilter.name
						: currentFilter}

					<ChevronDownIcon className="ml-2 h-5 w-5 text-[#6cc027]" aria-hidden="true" />
				</Menu.Button>
			</div>
			{/* Dropdown menu */}
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 w-56 mt-3 origin-top-right rounded-md shadow-lg bg-light-300 dark:bg-dark-600 ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className={styles["menu-item-div"]}>
						{[
							<Menu.Item key="-1">
								{({ active }) => (
									<li
										className={classNames(
											active ? "bg-gray-100 dark:bg-dark-800 text-gray-900" : "text-gray-700",
											"block px-4 py-2 text-sm cursor-pointer dark:text-light-100"
										)}
										onClick={handleOptionSelect}
									>
										Select Here (Reset)
									</li>
								)}
							</Menu.Item>,
							...dropdownOptions,
						]}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
