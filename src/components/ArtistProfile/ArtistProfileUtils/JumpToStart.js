export default function JumpToStart(props){
    return(
        <>
            <li onClick={props.handlePageChange} className={(props.currInterval !== 1? "inline-flex items-center ":"hidden ") + "relative px-4 py-2 text-sm cursor-pointer font-medium border"}>
              1
            </li>
            <span className="relative px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300">
              ...
            </span>
        </>
    );
}