import CoverPhoto from "./CoverPhoto";
import UserInfo from "./UserInfo";

export default function CoverPhotoSection({ coverImage, setCoverImage, username, setUsername, name, setName, email, setEmail, bio, setBio }) {
    return (
        <div className="flex-1 mt-10 md:ml-20 md:mt-0">
            <CoverPhoto coverImage={coverImage} setCoverImage={setCoverImage} />
            <UserInfo username={username} setUsername={setUsername} name={name} setName={setName} email={email} setEmail={setEmail} bio={bio} setBio={setBio} />
        </div>
    );
}
