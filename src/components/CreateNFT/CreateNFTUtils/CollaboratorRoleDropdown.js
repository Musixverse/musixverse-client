import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import styles from "../../../../styles/CreateNFT/InputDropdown.module.css";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function CollaboratorRoleDropdown({ optionsArray, setCollaboratorRole, index }) {
    const [currentFilter, setCurrentFilter] = useState(optionsArray[0]);

    useEffect(() => {
        setCollaboratorRole(index, currentFilter);
    }, []);

    const handleOptionSelect = (e) => {
        setCurrentFilter(e.target.textContent);
        setCollaboratorRole(index, e.target.textContent);
    };

    // Map all the options into a items renderable array
    const dropdownOptions = optionsArray.map((option, idx) => {
        return (
            <Menu.Item key={idx}>
                {({ active }) => (
                    <li
                        className={classNames(
                            active ? "bg-gray-100 dark:bg-dark-200 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm cursor-pointer dark:text-light-100"
                        )}
                        onClick={handleOptionSelect}
                        value={idx}
                    >
                        {option}
                    </li>
                )}
            </Menu.Item>
        );
    });

    return (
        <Menu as="div" className="relative inline-block w-full text-left">
            {/* The visible dropdown button */}
            <div>
                <Menu.Button className={"dark:bg-[#323232] hover:dark:border-[#6cc027] dark:text-light-100 dark:border-[#323232] " + styles["menu-button"]}>
                    {currentFilter}
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
                <Menu.Items className="absolute right-0 z-10 w-56 mt-3 origin-top-right rounded-md shadow-lg bg-light-300 dark:bg-dark-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className={styles["menu-item-div"]}>{dropdownOptions}</div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
