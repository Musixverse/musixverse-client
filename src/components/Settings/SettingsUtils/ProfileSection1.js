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
}) {
	return (
		<div className="w-full p-8 xl:p-10 bg-light-300 dark:bg-dark-100 rounded-xl">
			<h1 className="text-3xl xl:text-4xl mb-9 font-tertiary">PROFILE SETTINGS</h1>
			<div className="flex flex-col md:flex-row">
				<EditProfilePhoto avatar={avatar} setAvatar={setAvatar} handleSave={handleSave} />
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
				/>
			</div>
		</div>
	);
}
