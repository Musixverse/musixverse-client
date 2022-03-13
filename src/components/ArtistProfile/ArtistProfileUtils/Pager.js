import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import JumpToStart from "./JumpToStart";

export default function Pager(){
    const [currentPage, setCurrentPage] = useState(1);

    // useEffect(()=>{
        
    // },[]);
    //Requirements:
    //Next, Prev functionality
    //Page Jump Functionality
    //Jump to start/end functionality
    //Memoize the component
    const numPages = 9; //change to-> props.rows
    //Currently supports intervals of size 3
    const pageIndexer = [];
    const currInterval = Math.floor((currentPage + 2) / 3);
    
    const handlePageChange = (e) => {
        const clickedPageIndex = parseInt(e.target.textContent);

		if (currentPage === clickedPageIndex) 
            return;
		setCurrentPage(clickedPageIndex);
    }

    const handlePageIncrement = () => {
        if(currentPage == numPages)
            return;
        setCurrentPage(currentPage+1);
    }

    for(let i = 1; i <= numPages; i++){
        pageIndexer.push(
            <li key={i} onClick={handlePageChange} className={(Math.floor((i+2)/3) === currInterval? "inline-flex items-center ":"hidden ") + "relative px-4 py-2 text-sm cursor-pointer font-medium border "+ (currentPage === i? " bg-primary-100 text-light-100 border-primary-100":" text-gray-500 bg-white border-gray-300 hover:bg-gray-50")}>
              {i}
            </li>
        );
        //relative inline-flex items-center px-4 py-2 text-sm font-medium border   ----  text-gray-500 bg-white border-gray-300 hover:bg-gray-50
        //relative inline-flex items-center px-4 py-2 text-sm font-medium border   ----  bg-primary-100 text-light-100 border-primary-100
        //currentPage === i? " bg-primary-100 text-light-100 border-primary-100":" text-gray-500 bg-white border-gray-300 hover:bg-gray-50"
    }
    return(
        <div className="flex items-center justify-between my-11">
            {/* Mobile Pager Div */}
            {/* Will add soon */}


            {/* Main Pager Div  */}
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
                <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <li className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50">
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                    </li>
                    {currInterval !== 1? <JumpToStart currInterval={currInterval} currentPage={currentPage} handlePageChange={handlePageChange}/>: null}
                    {pageIndexer}
                    {/* <JumpToEnd/> */}
                    <li onClick={handlePageIncrement} className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50">
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                    </li>
                </nav>
            </div>
        </div>
    );
}