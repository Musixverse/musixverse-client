


export default function Button(props){
    return(
        <button className="flex justify-center items-center space-x-3 bg-primary-200 text-[14px] text-light-100 p-3 rounded-lg mt-6 font-primary font-bold max-w-[210px]">{props.children}</button>
    )
}