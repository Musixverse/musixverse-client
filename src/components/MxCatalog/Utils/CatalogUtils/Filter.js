import Image from "next/image";
import { useState, Fragment } from "react";
import { useTheme } from "next-themes";
import FilterSvg from "../../../../../public/assets/Catalog/Filter.svg";
import FilterSvg_white from "../../../../../public/assets/Catalog/filter_white.svg";
import mxvLogo from "../../../../../public/assets/Catalog/MXVlogo.svg";
import { Transition } from "@headlessui/react";
import FilterNftTraits from "./FilterNftTraits";
import FilterTrackTraits from "./FilterTrackTraits";
import NftState from "./NftState";
import SortBy from "./SortBy";

export default function Filter({ appliedFilter, setAppliedFilter, currentSelection }) {
	const {theme} = useTheme();
	const [currentFilterType, setCurrentFilterType] = useState(0);

	return (
		<div className={"lg:flex hidden "+(currentFilterType !== 0 ? "z-40 sticky mr-10 top-24" : "z-10 sticky mr-10 top-24")}>
			{/* Filter CTA */}
			<div className="z-40 self-start p-4 flex flex-col items-center justify-center border border-[#BFBFBF] rounded-2xl backdrop-blur-[40px] backdrop-brightness-200 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(19,19,19,0.4)] dark:backdrop-blur-[24px] dark:border-search-200 dark:border-2">
				{/* Filter icon */}
				<div onClick={() => setCurrentFilterType(0)} className="flex items-center justify-center p-4 cursor-pointer rounded-xl bg-light-300 dark:bg-search-200">
					<Image src={theme === "light" ? FilterSvg:FilterSvg_white} objectFit="contain" width={25} height={22} alt="Filter" />
				</div>

				{/* Filter Options */}
				<div className="flex flex-col mt-5 text-xs divide-y font-secondary">
					<div
						onClick={() => {
							setCurrentFilterType(1);
						}}
						className={(currentFilterType === 1 ? "text-primary-100 " : "") + "flex flex-col items-center justify-center cursor-pointer"}
					>
						<span className="material-symbols-outlined">queue_music</span>
						<p className="w-full my-2">Track&nbsp;Traits</p>
					</div>
					<div
						onClick={() => {
							setCurrentFilterType(2);
						}}
						className={(currentFilterType === 2 ? "text-primary-100 " : "") + "flex flex-col items-center justify-center cursor-pointer"}
					>
						<span className="mt-2 material-symbols-outlined">library_music</span>
						<p className="my-2">NFT Traits</p>
					</div>
					<div
						onClick={() => setCurrentFilterType(3)}
						className={(currentFilterType === 3 ? "text-primary-100 " : "") + "flex flex-col items-center justify-center cursor-pointer"}
					>
						<span className="mt-2 material-symbols-outlined">dashboard_customize</span>
						<p className="my-2">NFT State</p>
					</div>
					<div
						onClick={() => setCurrentFilterType(4)}
						className={(currentFilterType === 4 ? "text-primary-100 " : "") + "flex flex-col items-center justify-center cursor-pointer"}
					>
						<span className="mt-2 material-symbols-outlined">sort</span>
						<p className="my-2">Sort By</p>
					</div>
				</div>
				{/* MXV LOGO */}
				<div className="flex items-center mb-2 mt-28">
					<Image src={mxvLogo} height={37} width={37} objectFit="contain" alt="mxv logo" />
				</div>
			</div>

			{/* FILTER Modal */}
			<Transition show={currentFilterType !== 0}>
				<Transition.Child
					as={Fragment}
					enter="transition-all duration-200"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all duration-200"
					leaveTo="opacity-0"
					leaveFrom="opacity-100"
				>
					<div style={{ zIndex: "30" }} className="fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm" />
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter="transition-all ease-in duration-300"
					enterFrom="opacity-0 scale-75 translate-x-1/3"
					enterTo="opacity-100 scale-100"
					leave="transition-all ease-out duration-300"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-75 translate-x-1/3"
				>
					<div className="z-40 absolute self-start p-12 ml-7 backdrop-blur-[40px] backdrop-brightness-200 bg-light-100 dark:bg-[rgba(19,19,19,0.4)] dark:backdrop-blur-[24px] dark:border-search-200 dark:border-2 rounded-2xl">
						<div className="flex justify-between w-full">
							<h3 className="text-4xl font-tertiary">MARKETPLACE FILTERS</h3>
							<div
								onClick={() => setCurrentFilterType(0)}
								className="flex items-center self-end justify-center w-8 h-8 mb-3 transition-all duration-200 rounded-lg cursor-pointer hover:bg-zinc-500/20 "
							>
								<i className="fa-solid fa-xmark"></i>
							</div>
						</div>

						{/* Conditional Rendering of filterOptions */}
						{currentFilterType === 1 ? (
							<FilterTrackTraits appliedFilter={appliedFilter} setAppliedFilter={setAppliedFilter} setCurrentFilterType={setCurrentFilterType} />
						) : currentFilterType === 2 ? (
							<FilterNftTraits
								appliedFilter={appliedFilter}
								setAppliedFilter={setAppliedFilter}
								setCurrentFilterType={setCurrentFilterType}
								currentSelection={currentSelection}
							/>
						) : currentFilterType === 3 ? (
							<NftState appliedFilter={appliedFilter} setAppliedFilter={setAppliedFilter} setCurrentFilterType={setCurrentFilterType} />
						) : (
							<SortBy
								appliedFilter={appliedFilter}
								setAppliedFilter={setAppliedFilter}
								setCurrentFilterType={setCurrentFilterType}
								currentSelection={currentSelection}
							/>
						)}
					</div>
				</Transition.Child>
			</Transition>
		</div>
	);
}
