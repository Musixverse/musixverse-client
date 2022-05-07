import { useContext } from "react";
import StatusContext from "../../../../store/status-context";

export default function ProfileSection3(){
    const [, , setSuccess, ] = useContext(StatusContext);

    const walletAddress = "0xce9ebe7144eadbb1436b7f5a33416534deab4434";

    const copyToCliboard = ()=>{
        navigator.clipboard.writeText(walletAddress);
        setSuccess({
            title: "Wallet address copied successfully",
            message: "",
            showSuccessBox: true,
        });
    }

    return(
        <div className="flex flex-col flex-1 p-8 mt-10 md:flex-row xl:p-10 bg-light-300 dark:bg-dark-100 rounded-xl">
            <h1 className="mb-4 text-3xl md:mb-0 md:mr-10 xl:text-4xl font-tertiary">WALLET ADDRESS</h1>
            <div className="flex items-center justify-between flex-1 px-4 py-2 rounded-lg bg-light-100 dark:bg-[#323232]">
                <span className="max-w-[180px] md:max-w-[280px] truncate md:text-base align-bottom text-sm font-secondary xl:max-w-none">{walletAddress}</span>
                <button className="w-fit h-fit" onClick={copyToCliboard}><i className="far fa-clipboard text-primary-100"></i></button>    
            </div>
        </div>
    );

    // return(
    //     <div className="flex items-end flex-1 p-8 mt-10 xl:p-10 bg-light-300 rounded-xl">
    //         <h1 className="mr-6 text-3xl xl:mr-10 xl:text-4xl font-tertiary min-w-fit">WALLET ADDRESS</h1>
    //         <div className="flex items-center justify-between flex-1 px-4 py-2 rounded-lg bg-light-100">
    //             {/* <div className="flex-1 overflow-hidden font-secondary whitespace-nowrap text-ellipsis flex-child">{walletAddress}</div> */}
    //             <p className="w-full overflow-hidden text-sm xl:text-base font-secondary whitespace-nowrap text-ellipsis">{walletAddress}</p>
    //             {/* <i onClick={copyToCliboard} className="far fa-clipboard text-primary-100"></i> */}
    //             <button className="outline-none whitespace-nowrap" onClick={copyToCliboard}><i className="inline-block far fa-clipboard text-primary-100"></i></button>
    //         </div>
    //     </div>
    // );
}