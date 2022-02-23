import Image from "next/image";
import { useState } from "react";
import Dropdown from "./ArtistProfileUtils/Dropdown";

export default function Filter(){
    const [currentlyActive, setCurrentlyActive] = useState(1);

    const handleFilterChange = (e)=>{
        const selectedCategory = e.target.textContent;

        if(selectedCategory == "All Records")
            setCurrentlyActive(1);
        else if(selectedCategory == "For Sale")
            setCurrentlyActive(2);
        else
            setCurrentlyActive(3);
    }

    return(
        <div className="bg-light-300 mt-[85px] p-6 rounded-xl flex justify-between items-end">
            {/* Left Section */}
            <div className="flex items-start w-1/3">
                <Image src={"/assets/record_b.svg"} alt="vinyl disc" height={30} width={30}></Image>
                <div className="ml-4 flex-grow">
                    <h4 className="font-tertiary text-[36px] leading-none">RECORDS</h4>
                    <div className="my-1 flex-grow border-t-[2px] border-dark-200"></div>
                    {/* Owned NFTs Category Filters */}
                    <div className="text-[#757373] dark:text-light-100">
                        <span className={"text-sm cursor-pointer " + (currentlyActive==1? "text-dark-100 font-semibold":"font-medium")} onClick={handleFilterChange}>All Records</span>
                        <span className={"mx-4 text-sm cursor-pointer " + (currentlyActive==2? "text-dark-100 font-semibold":"font-medium")} onClick={handleFilterChange}>For Sale</span>
                        <span className={"text-sm cursor-pointer " + (currentlyActive==3? "text-dark-100 font-semibold":"font-medium")} onClick={handleFilterChange}>Collections</span>
                    </div>
                </div>
            </div>
            {/* Right Section */}
            <div className="bg-white rounded-xl flex px-4 py-2 items-center border-2 border-white hover:border-primary-100">
                <p className="mt-[0.85px] text-sm font-medium text-gray-700">Sort By: </p>
                <Dropdown/>
            </div>
        </div>
    );
}