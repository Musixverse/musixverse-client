import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import FilterNftTraits from "../FilterNftTraits";
import FilterTrackTraits from "../FilterTrackTraits";
import NftState from "../NftState";
import SortBy from "../SortBy";

export default function MobileFilterModal({
	showMobileFilter,
	setShowMobileFilter,
	setAppliedFilter,
	appliedFilter,
	currentSelection,
	currentMobileFilterType,
	setCurrentMobileFilterType,
}) {
	return (
		<Transition show={showMobileFilter && currentMobileFilterType !== 0}>
			<Transition.Child
				as={Fragment}
				enter="transition-all ease-in duration-200"
				enterFrom="opacity-0 translate-y-full"
				enterTo="opacity-100"
				leave="transition-all ease-out duration-300"
				leaveFrom="opacity-100"
				leaveTo="opacity-0 translate-y-full"
			>
				<div className="z-40 fixed top-0 w-screen h-screen p-10 lg:pb-12 pb-0 backdrop-blur-[40px] backdrop-brightness-200 bg-light-100 dark:bg-[rgba(19,19,19,0.4)] dark:backdrop-blur-[24px]">
					<div className="flex justify-between w-full">
						<h3 className="text-3xl md:text-4xl font-tertiary">MARKETPLACE FILTERS</h3>
						<div
							onClick={() => setShowMobileFilter(false)}
							className="flex items-center self-end justify-center w-8 h-8 mb-3 transition-all duration-200 rounded-lg cursor-pointer hover:bg-zinc-500/20 "
						>
							<i className="fa-solid fa-xmark"></i>
						</div>
					</div>

					<div className="flex justify-between w-full text-xs font-semibold md:text-base lg:text-lg my-7 font-primary">
						<p
							className={`text-center cursor-pointer ${currentMobileFilterType === 1 ? "text-primary-500" : ""}`}
							onClick={() => setCurrentMobileFilterType(1)}
						>
							<span className="material-symbols-outlined">queue_music</span>
							<br />
							Track Traits
						</p>
						<p
							className={`text-center cursor-pointer ${currentMobileFilterType === 2 ? "text-primary-500" : ""}`}
							onClick={() => setCurrentMobileFilterType(2)}
						>
							<span className="material-symbols-outlined">library_music</span>
							<br />
							NFT Traits
						</p>
						<p
							className={`text-center cursor-pointer ${currentMobileFilterType === 3 ? "text-primary-500" : ""}`}
							onClick={() => setCurrentMobileFilterType(3)}
						>
							<span className="material-symbols-outlined">dashboard_customize</span>
							<br />
							NFT State
						</p>
						<p
							className={`text-center cursor-pointer ${currentMobileFilterType === 4 ? "text-primary-500" : ""}`}
							onClick={() => setCurrentMobileFilterType(4)}
						>
							<span className="material-symbols-outlined">sort</span>
							<br />
							Sort By
						</p>
					</div>
					{/* Conditional Rendering of filterOptions */}
					{/* Need to make separate components for mobile */}
					{currentMobileFilterType === 1 ? (
						<FilterTrackTraits
							appliedFilter={appliedFilter}
							setAppliedFilter={setAppliedFilter}
							setCurrentFilterType={setCurrentMobileFilterType}
						/>
					) : currentMobileFilterType === 2 ? (
						<FilterNftTraits
							appliedFilter={appliedFilter}
							setAppliedFilter={setAppliedFilter}
							setCurrentFilterType={setCurrentMobileFilterType}
							currentSelection={currentSelection}
						/>
					) : currentMobileFilterType === 3 ? (
						<NftState appliedFilter={appliedFilter} setAppliedFilter={setAppliedFilter} setCurrentFilterType={setCurrentMobileFilterType} />
					) : currentMobileFilterType === 4 ? (
						<SortBy
							appliedFilter={appliedFilter}
							setAppliedFilter={setAppliedFilter}
							setCurrentFilterType={setCurrentMobileFilterType}
							currentSelection={currentSelection}
						/>
					) : null}
				</div>
			</Transition.Child>
		</Transition>
	);
}
