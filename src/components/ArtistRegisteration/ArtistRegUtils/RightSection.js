


export default function RightSection(props){
    return(
        <div className="px-10 my-6 pt-14 bg-light-100 backdrop-blur-2xl backdrop-brightness-150 dark:bg-nav-dark dark:backdrop-blur-xl dark:backdrop-brightness-105 rounded-xl relative z-[2]">
            {props.children}
        </div>
    );
}