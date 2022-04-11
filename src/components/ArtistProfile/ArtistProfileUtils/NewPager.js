import { useTheme } from "next-themes";
import { useState, useRef } from "react";

export default function NewPager(props){
    /**
     * Data to be accepted in props:
     * A set state function for NFTs array index
     * maximum number of pages to be rendered
     */
    const {theme} = useTheme();
    const inputRef = useRef(1);
    const [currPage, setCurrPage] = useState(1);
    const maxPages = 20;//Replace this with props.numPages
    console.log(currPage);
    const handlePageDecrement = () => {
        if(currPage === 1)
            return;
        inputRef.current.value = currPage-1;
        setCurrPage(currPage-1);
    };

    const handlePageIncrement = () => {
        if(currPage === maxPages)
            return;
        inputRef.current.value = currPage+1;
        setCurrPage(currPage+1);
    };

    const handlePageInputChange = (e) => {
        // inputRef.current.size = Math.max(inputRef.current.value.length, 1);
        // inputRef.current.value = currPage;
        e.target.size = Math.max(e.target.value.length, 1);
        inputRef.current.value = e.target.value;
    }

    const handlePageRequest = (e) => {
        //If enter key is pressed only then considered a valid page change request
        if (e.keyCode !== 13)
            return;

        const pageRequested = Number(e.target.value);
        if(pageRequested > maxPages){
            e.target.value = maxPages;
            setCurrPage(maxPages);
        }
        else if(pageRequested < 1){
            e.target.value = 1;
            setCurrPage(1);
        }
        else{
            e.target.value = pageRequested;
            setCurrPage(pageRequested);
        }
    }

    return (
        <div className="flex justify-center mb-11">
            <div className={"flex rounded-md w-fit items-center "+(theme === "dark"? "bg-dark-100":"bg-light-300")}>
                {/* Previous Page*/}
                <button className="px-4 py-[7px] text-primary-300 hover:text-primary-200" onClick={handlePageDecrement}>
                    <i className="fas fa-caret-left"></i>
                </button>
                {/* Pager Input */}
                <p className="text-sm font-semibold px-7 font-secondary">
                    Page 
                    <input
                        ref={inputRef}
                        size={2} 
                        className="mx-1 text-sm font-semibold text-center bg-transparent border-b-2 outline-none font-secondary border-primary-100" 
                        onKeyUp={handlePageRequest}
                        onInput={handlePageInputChange} 
                        type={"text"}
                        defaultValue={"1"}
                    >
                    </input>
                    of <span>{maxPages}</span>
                </p>
                {/* Next Page*/}
                <button className="px-4 py-[7px] text-primary-300 hover:text-primary-200" onClick={handlePageIncrement}>
                    <i className="fas fa-caret-right"></i>
                </button>
            </div>
        </div>
    );
}