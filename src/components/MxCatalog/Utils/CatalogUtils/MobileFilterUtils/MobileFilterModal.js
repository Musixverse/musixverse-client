import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import FilterNftTraits from "../FilterNftTraits";
import FilterTrackTraits from "../FilterTrackTraits";
import NftState from "../NftState";
import SortBy from "../SortBy";

export default function MobileFilterModal({showMobileFilter, setShowMobileFilter,  setAppliedFilter, appliedFilter, currentSelection}){
    const [currentFilterType, setCurrentFilterType] = useState(1);
    return(
        <Transition show={showMobileFilter}>
            <Transition.Child
                as={Fragment}
                enter="transition-all ease-in duration-200"
                enterFrom="opacity-0 translate-y-full"
                enterTo="opacity-100"
                leave="transition-all ease-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 translate-y-full"
            >
                <div className="z-40 fixed top-0 w-screen h-screen p-12 lg:pb-12 pb-0 backdrop-blur-[40px] backdrop-brightness-200 bg-light-100 dark:bg-[rgba(19,19,19,0.4)] dark:backdrop-blur-[24px] dark:border-search-200 dark:border-2 rounded-2xl">
                    <div className="flex justify-between w-full">
                        <h3 className="text-3xl md:text-4xl font-tertiary">MARKETPLACE FILTERS</h3>
                        <div
                            onClick={() => setShowMobileFilter(false)}
                            className="flex items-center self-end justify-center w-8 h-8 mb-3 transition-all duration-200 rounded-lg cursor-pointer hover:bg-zinc-500/20 "
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>

                    <div className="flex justify-between w-full text-sm font-semibold md:text-base lg:text-lg my-7 font-primary">
                        <p
                            className={currentFilterType === 1? "text-[#5ab510]":""}
                            onClick={()=>setCurrentFilterType(1)}
                        >Track Traits</p>
                        <p 
                            className={currentFilterType === 2? "text-[#5ab510]":""}
                            onClick={()=>setCurrentFilterType(2)}
                        >NFT Traits</p>
                        <p 
                            className={currentFilterType === 3? "text-[#5ab510]":""}
                            onClick={()=>setCurrentFilterType(3)}
                        >NFT State</p>
                        <p 
                            className={currentFilterType === 4? "text-[#5ab510]":""}
                            onClick={()=>setCurrentFilterType(4)}
                        >Sort By</p>
                    </div>
                    {/* Conditional Rendering of filterOptions */}
                    {/* Need to make separate components for mobile */}
                    {currentFilterType === 1 ? (
                        <FilterTrackTraits 
                            appliedFilter={appliedFilter} 
                            setAppliedFilter={setAppliedFilter} 
                            setCurrentFilterType={setCurrentFilterType} 
                        />
                    ) : currentFilterType === 2 ? (
                        <FilterNftTraits
                            appliedFilter={appliedFilter}
                            setAppliedFilter={setAppliedFilter}
                            setCurrentFilterType={setCurrentFilterType}
                            currentSelection={currentSelection}
                        />
                    ) : currentFilterType === 3 ? (
                        <NftState 
                            appliedFilter={appliedFilter} 
                            setAppliedFilter={setAppliedFilter}
                            setCurrentFilterType={setCurrentFilterType} 
                        />
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
    );
}