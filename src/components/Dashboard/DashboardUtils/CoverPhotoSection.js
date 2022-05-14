import CoverPhoto from "./CoverPhoto";
import UserInfo from "./UserInfo";

export default function CoverPhotoSection(){
    return(
        <div className="flex-1 mt-10 md:ml-20 md:mt-0">
            <CoverPhoto/>
            <UserInfo/>
        </div>
    );
}