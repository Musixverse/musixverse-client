import Image from "next/image";
import { useState } from "react";
import FilterSvg from "../../../../../public/assets/Catalog/Filter.svg";
import mxvLogo from "../../../../../public/assets/Catalog/MXVlogo.svg";


export default function Filter(){
    const [currentFilter, setCurrentFilter] = useState(0);

    return(
        <div className="fixed z-40 self-start p-2 flex flex-col items-center justify-center border border-[#BFBFBF] rounded-2xl backdrop-blur-[40px] backdrop-brightness-200 bg-[rgba(255,255,255,0.8)] ">
            <div className="flex items-center justify-center p-4 rounded-xl bg-light-300">
                <Image src={FilterSvg} objectFit="contain" width={25} height={22} alt="Filter"/>
            </div>
            {/* Filter Options */}
            <div className="flex flex-col mt-5 text-xs divide-y font-secondary">
                <div
                    onClick={()=>setCurrentFilter(1)}
                    className="flex flex-col items-center justify-center cursor-pointer"
                >
                    <span className="material-symbols-outlined">library_music</span>
                    <p className="my-2">NFT Traits</p>
                </div>
                <div
                    onClick={()=>setCurrentFilter(2)} 
                    className="flex flex-col items-center justify-center cursor-pointer"
                >
                    <span className="mt-2 material-symbols-outlined">dashboard_customize</span>
                    <p className="my-2">Show/Hide</p>
                </div>
                <div
                    onClick={()=>setCurrentFilter(3)} 
                    className="flex flex-col items-center justify-center cursor-pointer"
                >
                    <span className="mt-2 material-symbols-outlined">sort</span>
                    <p className="my-2">Sort By</p>
                </div>
            </div>

            <div
                className="flex items-center mt-8 mb-2"
            >
                <Image src={mxvLogo} height={37} width={37} objectFit="contain" alt="mxv logo"/>
            </div>
        </div>
    );
}