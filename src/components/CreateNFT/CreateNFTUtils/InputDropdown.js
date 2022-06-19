import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function InputDropdown(props) {
    const [currentFilter, setCurrentFilter] = useState(props.optionsArray[0]);
    const handleOptionSelect = (e) => {
        //Currently, I have attached the idx with the selcted item
        //So we can keep a track of indx instead of keeping the entire string 
        //In our main nft creation states...
        // console.log(e.target.value);
        setCurrentFilter(e.target.textContent);
    };

    // Map all the options into a items renderable array
    const dropdownOptions = props.optionsArray.map((option, idx) => {
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
                <Menu.Button className="inline-flex justify-between text-sm font-medium dark:bg-[#323232] text-gray-700 bg-light-100 border-2 border-[#777777] dark:border-[#323232] w-full px-4 py-2 rounded-md hover:border-[#6cc027] hover:dark:border-[#6cc027] dark:text-light-100">
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
                    <div className="py-1 max-h-[200px] overflow-y-scroll">{dropdownOptions}</div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
