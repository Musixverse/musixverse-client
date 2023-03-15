import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="w-full fixed z-40 max-w-[1920px] lg:px-16 xl:px-20 2xl:px-36">
        <nav className={"navbar duration-500 ease-in mx-auto " + customStyles}>
            <div className="flex flex-wrap items-center justify-start w-full pl-7 sm:pl-9 pr-16 lg:px-16 py-2">
                <Link href="/">
                    <a href="#" className="flex">
                        {theme === "dark" ? <Image src={logoWhite} alt="MXV Logo" width="75" /> : <Image src={logoBlack} alt="MXV Logo" width="75" />}
                    </a>
                </Link>

                {/* Internal links */}
                <div className="hidden ml-10 xl:block">
                    <ul className="flex flex-row items-center font-medium md:text-base md:space-x-3 xl:space-x-6 md:mt-0 sm:text-sm">
                        <li className="hover:text-primary-600">
                            <Link
                                href="/mxcatalog/new-releases"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-primary-600">
                            <Link
                                href="/mxlyrics"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Music
                            </Link>
                        </li>
                        <li className="hover:text-primary-600">
                            <Link
                                href="/discover-artists"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-primary-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                NFTs
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>            
  )
}

export default Navbar