export default function CatalogNav({currentSelection, setCurrentSelection}){
    return(
        <div className="flex flex-col items-center justify-center w-full h-[280px] bg-light-300">
            <h3 className="text-[#1D1D1D] text-5xl font-medium">M<span className="font-semibold text-primary-100">x</span> Catalog</h3>
            <ul className="flex mt-6 space-x-12 font-semibold">
                <li 
                    className={(currentSelection === 1? "text-black":"text-[#7B7B7B] hover:text-dark-100")+" cursor-pointer"} 
                    onClick={()=>{
                        setCurrentSelection(1);
                    }}
                >New Releases</li>
                <li 
                    className={(currentSelection === 2? "text-black":"text-[#7B7B7B] hover:text-dark-100")+" cursor-pointer"}
                    onClick={()=>{
                        setCurrentSelection(2);
                    }}
                >Explore</li>
                <li 
                    className={(currentSelection === 3? "text-black":"text-[#7B7B7B] hover:text-dark-100")+" cursor-pointer"}
                    onClick={()=>{
                        setCurrentSelection(3);
                    }}
                >Trending</li>
            </ul>
        </div>
    );
}