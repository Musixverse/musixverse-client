import EditProfilePhoto from "./EditProfilePhoto";
import CoverPhotoSection from "./CoverPhotoSection";

export default function ProfileSection1({
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
	handleSave,
	isBandSettings,
}) {
	return (
		<div className="w-full p-8 xl:p-10 bg-light-300 dark:bg-dark-100 rounded-xl">
			{!isBandSettings && <h1 className="text-3xl xl:text-4xl mb-9 font-tertiary">PROFILE SETTINGS</h1>}
			<div className="w-full flex flex-col md:flex-row">
				<EditProfilePhoto avatar={avatar} setAvatar={setAvatar} />
				<CoverPhotoSection
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
					isBandSettings={isBandSettings}
				/>
			</div>
		</div>
	);
}
