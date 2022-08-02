import Image from "next/image";
import { useState, Fragment } from "react";
import FilterSvg from "../../../../../public/assets/Catalog/Filter.svg";
import mxvLogo from "../../../../../public/assets/Catalog/MXVlogo.svg";
import { Dialog, Transition } from '@headlessui/react'
import FilterNftTraits from "./FilterNftTraits";
import ShowHide from "./ShowHide";

export default function Filter(){
    const [currentFilter, setCurrentFilter] = useState(0);

    return(
        <div className="sticky z-10 flex top-24">
            {/* Filter CTA */}
            <div className="self-start p-2 flex flex-col items-center justify-center border border-[#BFBFBF] rounded-2xl backdrop-blur-[40px] backdrop-brightness-200 bg-[rgba(255,255,255,0.8)] ">
                {/* Filter icon */}
                <div
                    onClick={()=>setCurrentFilter(0)}
                    className="flex items-center justify-center p-4 cursor-pointer rounded-xl bg-light-300">
                    <Image src={FilterSvg} objectFit="contain" width={25} height={22} alt="Filter"/>
                </div>
                {/* Filter Options */}
                <div className="flex flex-col mt-5 text-xs divide-y font-secondary">
                    <div
                        onClick={()=>{
                            setCurrentFilter(1); 
                        }}
                        className={(currentFilter === 1? "text-primary-100 ":"") + "flex flex-col items-center justify-center cursor-pointer"}
                    >
                        <span className="material-symbols-outlined">library_music</span>
                        <p className="my-2">NFT Traits</p>
                    </div>
                    <div
                        onClick={()=>setCurrentFilter(2)} 
                        className={(currentFilter === 2? "text-primary-100 ":"") + "flex flex-col items-center justify-center cursor-pointer"}
                    >
                        <span className="mt-2 material-symbols-outlined">dashboard_customize</span>
                        <p className="my-2">Show/Hide</p>
                    </div>
                    <div
                        onClick={()=>setCurrentFilter(3)} 
                        className={(currentFilter === 3? "text-primary-100 ":"") + "flex flex-col items-center justify-center cursor-pointer"}
                    >
                        <span className="mt-2 material-symbols-outlined">sort</span>
                        <p className="my-2">Sort By</p>
                    </div>
                </div>
                {/* MXV LOGO */}
                <div
                    className="flex items-center mt-8 mb-2"
                >
                    <Image src={mxvLogo} height={37} width={37} objectFit="contain" alt="mxv logo"/>
                </div>
            </div>
            {/* FILTER Modal */}
            <Transition show={currentFilter !== 0}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-all ease-in-out duration-400"
                    enterFrom="opacity-0 scale-75 translate-x-1/3"
                    enterTo="opacity-100 scale-100"
                    leave="transition-all ease-out duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-75 translate-x-1/3"
                >
                    <div className="z-40 absolute self-start p-12 ml-7 backdrop-blur-[40px] backdrop-brightness-200 bg-[rgba(255,255,255,0.8)] rounded-2xl">
                        <h3 className="text-4xl font-tertiary">MARKETPLACE FILTERS</h3> 

                        {/* Conditional Rendering of filterOptions */}
                        {currentFilter === 1? <FilterNftTraits/>:<ShowHide/>}
                    </div>
                </Transition.Child>
            </Transition>
        </div>
    );
}

/*
<div
                        className="fixed bottom-0 right-0 z-50 px-5 py-4 -translate-x-4 -translate-y-4 border border-none rounded-lg shadow-2xl xl:w-4/12 lg:w-5/12 md:w-8/12 text-light-200 bg-primary-100"
                        role="alert"
                    >
                        <strong className="font-semibold">{success.title}</strong>
                        <br />
                        <br />
                        <span className="block sm:inline">{success.message}</span>
                        <div
                            onClick={handleClose}
                            className="absolute flex items-center justify-center w-8 h-8 transition-all duration-200 rounded-md cursor-pointer top-1 right-1 hover:bg-primary-200"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>

*/