import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import styles from "../../../../styles/TrackInfo/TrackEditionDropdown.module.css";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function TrackEditionDropdown({ optionsArray, localTokenId, numberOfCopies }) {
	const [currentFilter, setCurrentFilter] = useState("#" + localTokenId + " of " + numberOfCopies);

	useEffect(() => {
		setCurrentFilter("#" + localTokenId + " of " + numberOfCopies);
	}, [localTokenId, numberOfCopies]);

	// Map all the options into a items renderable array
	const dropdownOptions = optionsArray.map((option, idx) => {
		return (
			<Menu.Item key={idx}>
				{({ active }) => (
					<Link key={idx} href={`/track/polygon/${option.tokenId}`} passHref={true}>
						<a>
							<li
								className={classNames(
									active ? "bg-gray-100 dark:bg-dark-800 text-gray-900" : "text-gray-700",
									"block px-4 py-2 text-xs cursor-pointer dark:text-light-100 hover:bg-light-200 dark:hover:bg-dark-800"
								)}
							>
								#{option.localTokenId} of {numberOfCopies}
							</li>
						</a>
					</Link>
				)}
			</Menu.Item>
		);
	});

	return (
		<Menu as="div" className="relative inline-block w-full text-left text-xs">
			{/* The visible dropdown button */}
			<div>
				<Menu.Button className={"dark:bg-dark-800 hover:dark:border-[#6cc027] dark:text-light-100 " + styles["menu-button"]}>
					{currentFilter}
					<ChevronDownIcon className="ml-1 h-4 w-4 text-[#6cc027]" aria-hidden="true" />
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
				<Menu.Items className="text-center absolute w-max right-0 z-10 mt-2 origin-top-right rounded-md shadow-lg bg-light-300 dark:bg-dark-600 ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className={styles["menu-item-div"]}>{dropdownOptions}</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
