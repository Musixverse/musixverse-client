import Notification from "./DashboardUtils/Notification";

export default function NotificationSettings(){
    const walletAddress = "0xce9ebe7144eadbb1436b7f5a33416534deab4434";
    
    return(
        <div className="flex-1 p-10 mb-10 pb-14 bg-light-300 dark:bg-dark-100 rounded-xl">
            <div className="flex items-end justify-between w-full mb-5">
                <h1 className="text-4xl font-tertiary">NOTIFICATIONS SETTINGS</h1>
                <button className="px-8 py-2 text-[15px] rounded-3xl bg-dark-100 text-light-100 hover:bg-dark-200 font-primary">Reset Settings</button>
            </div>
            <p className="max-w-[383px] font-secondary text-[15px] mb-14">Selected notification for wallet address: {walletAddress}</p>
            <Notification 
                heading={"Musixverse Newsletter"} 
                description={"Occasional updates from the MXV team"}
                toggleSwitch={true}
            />
            <Notification 
                heading={"Items Sold"} 
                description={"When someone purchased one of your items"}
                toggleSwitch={true}
            />
        </div>
    );
}