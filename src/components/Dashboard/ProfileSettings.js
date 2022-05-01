// import CoverPhoto from "./DashboardUtils/CoverPhoto";
import EditProfilePhoto from "./DashboardUtils/EditProfilePhoto";
import RightProfileSection from "./DashboardUtils/RightProfileSection";

export default function ProfileSettings(){
    return(
        <div className="flex-1 p-10 bg-light-300 rounded-xl">
            <h1 className="text-4xl mb-9 font-tertiary">PROFILE SETTINGS</h1>
            <div className="flex">
                <EditProfilePhoto/>
                {/* Right Profile Section */}
                <RightProfileSection/>
            </div>
        </div>
    );
}