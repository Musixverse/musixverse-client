import EditProfilePhoto from "./EditProfilePhoto";
import CoverPhotoSection from "./CoverPhotoSection";

export default function ProfileSection1(){
    return(
        <div className="w-full p-8 xl:p-10 bg-light-300 dark:bg-dark-100 rounded-xl">
            <h1 className="text-3xl xl:text-4xl mb-9 font-tertiary">PROFILE SETTINGS</h1>
            <div className="flex flex-col md:flex-row">
                <EditProfilePhoto/>
                <CoverPhotoSection/>
            </div>
        </div>
    );
}