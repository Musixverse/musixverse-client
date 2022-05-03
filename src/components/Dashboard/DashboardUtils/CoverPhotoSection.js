import CoverPhoto from "./CoverPhoto";
import UserInfo from "./UserInfo";

export default function CoverPhotoSection(){
    return(
        <div className="flex-1 ml-20">
            <CoverPhoto/>
            <UserInfo/>
        </div>
    );
}