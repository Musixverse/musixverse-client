import { useTheme } from "next-themes";
import Image from "next/image";
import recordImageB from "../../../../public/assets/record_b.svg";
import recordImageW from "../../../../public/assets/record_w.svg";


export default function Stats(){
    const {theme} = useTheme();
    return(
        <div className="grid grid-cols-2 gap-3 p-5 mt-8 font-medium md:m-0 md:w-fit xl:gap-5 dark:bg-nav-dark dark:backdrop-blur-xl dark:backdrop-brightness-105 opacity-90 rounded-2xl bg-light-200 backdrop-blur-xl backdrop-brightness-150">
            {/* <div className="hidden text-center font-secondary md:inline-block">
                <h1 className="text-xl font-bold xl:text-2xl">535</h1>
                <p>Following</p>
            </div> */}
            <div className="text-center">
                <h1 className="text-xl font-bold xl:text-2xl">23</h1>
                <p>Followers</p>
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold xl:text-2xl"><Image src={theme !== "dark"? recordImageB:recordImageW} width={18} height={18} alt="records" />&nbsp;19</h1>
                <p>Tracks Released</p>
            </div>
        </div>    
    );
}