import LockAccount from "./DashboardUtils/LockAccount";
import Notification from "./DashboardUtils/Notification";

export default function AccountHelp(){
    return(
        <div className="flex-1 p-10 mb-10 pb-14 bg-light-300 rounded-xl">
            <h1 className="mb-6 text-4xl font-tertiary">ACCOUNT HELP</h1>
            <p className="max-w-[510px] mb-14 font-secondary text-[15px]">Search for any issues related to your NFT or your account. If you don&apos;t find your issue mention you can contact use</p>
            <Notification heading={"General Help"} description={<> Visit our <a className="font-medium text-primary-100">help center</a> to learn how to get started with buying, selling, and creating. </>} toggleSwitch={false}/>
            <Notification heading={"Contact Musixverse"} description={<>Can&apos;t find the answers you’re looking for? You can submit a request <a className="font-medium text-primary-100" href="#">here.</a> </>} toggleSwitch={false}/>
            <LockAccount/>
            {/* <LockAccount/> */}
            {/* <Compromised */}
        </div>
    );
}