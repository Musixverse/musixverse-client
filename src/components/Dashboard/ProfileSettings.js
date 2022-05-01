import CustomButton from "../../layout/CustomButton";
import EditProfilePhoto from "./DashboardUtils/EditProfilePhoto";
import RightProfileSection from "./DashboardUtils/RightProfileSection";
// import { useContext } from "react";
// import StatusContext from "../../../store/status-context";

export default function ProfileSettings(){
    const walletAddress = "0xce9ebe7144eadbb1436b7f5a33416534deab4434";

    const copyToCliboard = ()=>{
        
        navigator.clipboard.writeText(walletAddress);
    }

    return(
        <div className="flex-1 mb-10">
            {/* Section 1 */}
            <div className="w-full p-10 bg-light-300 rounded-xl">
                <h1 className="text-4xl mb-9 font-tertiary">PROFILE SETTINGS</h1>
                <div className="flex">
                    <EditProfilePhoto/>
                    <RightProfileSection/>
                </div>
            </div>
            {/* Section 2 */}
            <div className="w-full p-10 mt-10 bg-light-300 rounded-xl">
                <h1 className="mb-8 text-4xl font-tertiary min-w-fit">SOCIAL PROFILES</h1>
                <div className="flex mb-6">
                    <div className="mr-8 font-secondary">
                        <h3 className="mb-4 text-lg font-medium">Add accounts</h3>
                        <p className="max-w-[219px] text-[15px]">Social connections help collectors verify you and your accounts.</p>
                    </div>
                    <div className="flex flex-1 space-x-4">
                        <div className="flex-1 font-medium font-secondary">
                            <p className="mb-2">Spotify account</p>
                            <input
                                type="text"
                                placeholder="Enter account url"
                                autoCorrect={false}
                                className="w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                            />
                        </div>
                        <div className="flex-1 font-medium font-secondary">
                            <p className="mb-2">Instagram account</p>
                            <input
                                type="text"
                                placeholder="Enter account url"
                                autoCorrect={false}
                                className="w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                            />
                        </div>
                    </div>
                    {/* <CustomButton green={true}>Save Changes</CustomButton> */}
                </div>
                <CustomButton green={true}>Save Changes</CustomButton>
            </div>
            {/* Section 3 */}
            <div className="flex items-end w-full p-10 mt-10 bg-light-300 rounded-xl">
                <h1 className="mr-10 text-4xl font-tertiary min-w-fit">WALLET ADDRESS</h1>
                <div className="flex items-center justify-between w-full px-4 py-2 rounded-lg bg-light-100 ">
                    <span className="font-secondary">{walletAddress}</span>
                    <button className="outline-none" onClick={copyToCliboard}><i className="far fa-clipboard text-primary-100"></i></button>
                </div>
            </div>
        </div>
    );
}