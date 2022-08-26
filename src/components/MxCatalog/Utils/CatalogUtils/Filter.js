import Image from "next/image";
import { useState, Fragment } from "react";
import FilterSvg from "../../../../../public/assets/Catalog/Filter.svg";
import mxvLogo from "../../../../../public/assets/Catalog/MXVlogo.svg";
import { Transition } from "@headlessui/react";
import FilterNftTraits from "./FilterNftTraits";
import FilterTrackTraits from "./FilterTrackTraits";
import NftState from "./NftState";
import SortBy from "./SortBy";

export default function Filter({ appliedFilter, setAppliedFilter, currentSelection }) {
	const [currentFilterType, setCurrentFilterType] = useState(0);

	return (
		<div className={currentFilterType !== 0 ? "z-40 sticky flex mr-10 top-24" : "z-10 sticky flex mr-10 top-24"}>
			{/* Filter CTA */}
			<div className="z-40 self-start p-4 flex flex-col items-center justify-center border border-[#BFBFBF] rounded-2xl backdrop-blur-[40px] backdrop-brightness-200 bg-[rgba(255,255,255,0.8)]">
				{/* Filter icon */}
				<div onClick={() => setCurrentFilterType(0)} className="flex items-center justify-center p-4 cursor-pointer rounded-xl bg-light-300">
					<Image src={FilterSvg} objectFit="contain" width={25} height={22} alt="Filter" />
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
						<p className="my-2 w-full">Track&nbsp;Traits</p>
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
				<div className="flex items-center mt-28 mb-2">
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
					<div style={{ zIndex: "30" }} className="w-screen h-screen left-0 top-0 bg-black/50 backdrop-blur-sm fixed" />
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
					<div className="z-40 absolute self-start p-12 ml-7 backdrop-blur-[40px] backdrop-brightness-200 bg-light-100 rounded-2xl">
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
