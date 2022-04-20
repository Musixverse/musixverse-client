import { useTheme } from "next-themes";
import { useState, useRef, useContext } from "react";
import StatusContext from "../../../../store/status-context";

export default function Pager(props){
    const [currPage, setCurrPage] = useState(1);
    const [, , , setErrorDetails] = useContext(StatusContext);

    const {theme} = useTheme();
    const inputRef = useRef(1);

    const maxPages = props.maxPages;
    
    const handlePageDecrement = () => {
        if(currPage === 1)
            return;
        inputRef.current.value = currPage-1;
        setCurrPage(currPage-1);
        props.onPageChange(currPage-2);
    };

    const handlePageIncrement = () => {
        if(currPage === maxPages)
            return;
        inputRef.current.value = currPage+1;
        // setSuccessDetails({
        //     title: "Page change successfull",
        //     message: "Page was successfully changed to "+`${currPage+1}`,
        //     showSuccessBox: true,
        // });
        setCurrPage(currPage+1);
        props.onPageChange(currPage);
    };

    const handlePageInputChange = (e) => {
        e.target.size = Math.max(e.target.value.length, 1);
        inputRef.current.value = e.target.value;
    }

    const handlePageRequest = (e) => {
        //If enter key is pressed only then considered a valid page change request
        if (e.keyCode !== 13)
            return;

        const pageRequested = Number(e.target.value);
        if(isNaN(pageRequested)){
            setErrorDetails({
                title: "Invalid page request!",
                message: `Page numbers can be numeric only. Kindly enter a numeric page number.`,
                showErrorBox: true,
            });
            e.target.value = currPage;
            e.target.size = Math.max(e.target.value.length, 1);
        }
        else if(pageRequested > maxPages){
            e.target.value = maxPages;
            setCurrPage(maxPages);
            props.onPageChange(maxPages-1);
        }
        else if(pageRequested < 1){
            e.target.value = 1;
            setCurrPage(1);
            props.onPageChange(0);
        }
        else{
            e.target.value = pageRequested;
            setCurrPage(pageRequested);
            props.onPageChange(pageRequested-1);
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