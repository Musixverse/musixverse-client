import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
    const[currentFilter, setCurrentFilter] = useState("Latest Release");
    const handleOptionSelect = (e)=> {
        setCurrentFilter(e.target.textContent);
    }

    const optionsArray = ["Latest Release", "Oldest First", "License"];
    // Map all the options into a items renderable array
    const dropdownOptions = optionsArray.map((option, idx)=>{
        return(
            <Menu.Item key={idx}>
                {({ active }) => (
                    <li 
                    className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm cursor-pointer' )}
                    onClick={handleOptionSelect}
                    >
                        {option}
                    </li>
                )}
            </Menu.Item>
        );
    });

    return (
        <Menu as="div" className="relative inline-block text-left">
            {/* The visible dropdown button */}
            <div>
                <Menu.Button className="bg-transparent inline-flex justify-center ml-3 text-sm font-medium text-gray-700 focus:outline-none">
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
                <Menu.Items className="origin-top-right absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-light-300 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {dropdownOptions}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
  );
}