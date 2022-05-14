import CustomButton from "../../layout/CustomButton";
// import EditProfilePhoto from "./DashboardUtils/EditProfilePhoto";
import ProfileSection1 from "./DashboardUtils/ProfileSection1";
import ProfileSection2 from "./DashboardUtils/ProfileSection2";
import ProfileSection3 from "./DashboardUtils/ProfileSection3";
// import RightProfileSection from "./DashboardUtils/RightProfileSection";
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
            <ProfileSection1/>
            {/* Section 2 */}
            <ProfileSection2/>            
            {/* Section 3 */}
            <ProfileSection3/>
        </div>
    );
}