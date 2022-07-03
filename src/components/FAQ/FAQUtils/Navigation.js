export default function Navigation({currentSelection, setCurrentSelection, categories}){
    const navItems = categories.map((elem, idx)=>{
        return(
            <li 
                key={idx}
                onClick={()=>setCurrentSelection(idx)}
                className={(currentSelection === idx? "border-l-4 border-primary-200 text-primary-200 ":"text-gray-800 ")+"sm:text-base text-sm px-3 py-2 cursor-pointer hover:text-primary-200"}
            >{elem}</li>
        );
    })
    return(
        <ul className="self-start w-full p-8 lg:max-w-xs rounded-xl font-secondary bg-light-300">
            {navItems}
        </ul>
    );
}