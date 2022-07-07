import ProfileSection1 from "./SettingsUtils/ProfileSection1";
import ProfileSection2 from "./SettingsUtils/ProfileSection2";
import ProfileSection3 from "./SettingsUtils/ProfileSection3";

export default function ProfileSettings({
    avatar,
    setAvatar,
    coverImage,
    setCoverImage,
    username,
    setUsername,
    name,
    setName,
    email,
    setEmail,
    bio,
    setBio,
    spotify,
    setSpotify,
    instagram,
    setInstagram,
    twitter,
    setTwitter,
    facebook,
    setFacebook,
    handleSave,
    balance,
    walletAddress,
}) {
    return (
        <div className="flex-1 mb-10">
            {/* Section 1 */}
            <ProfileSection1
                avatar={avatar}
                setAvatar={setAvatar}
                coverImage={coverImage}
                setCoverImage={setCoverImage}
                username={username}
                setUsername={setUsername}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                bio={bio}
                setBio={setBio}
                handleSave={handleSave}
            />
            {/* Section 2 */}
            <ProfileSection2
                spotify={spotify}
                setSpotify={setSpotify}
                instagram={instagram}
                setInstagram={setInstagram}
                twitter={twitter}
                setTwitter={setTwitter}
                facebook={facebook}
                setFacebook={setFacebook}
                handleSave={handleSave}
            />
            {/* Section 3 */}
            <ProfileSection3 balance={balance} walletAddress={walletAddress} />
        </div>
    );
}
