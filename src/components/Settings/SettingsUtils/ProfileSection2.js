import CustomButton from "../../../layout/CustomButton";

export default function ProfileSection2({ spotify, setSpotify, instagram, setInstagram, twitter, setTwitter, facebook, setFacebook, handleSave }) {
    return (
        <div className="w-full p-8 mt-10 xl:p-10 bg-light-300 dark:bg-dark-100 rounded-xl">
            <h1 className="mb-8 text-3xl xl:text-4xl font-tertiary min-w-fit">SOCIAL PROFILES</h1>
            <div className="flex flex-col mb-10 md:mb-6 md:flex-row">
                <div className="mb-10 md:mb-0 md:mr-2 xl:mr-8 font-secondary">
                    <h3 className="mb-1 text-lg font-medium md:mb-4">Add accounts</h3>
                    <p className="max-w-[320px] md:max-w-[219px] text-[15px]">Social connections help collectors verify you and your accounts.</p>
                </div>
                {/* Socials URLs input fields */}
                <div className="flex flex-col flex-1 space-y-2 md:space-y-4">
                    <div className="flex flex-col w-full space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                        <div className="flex-1 text-sm font-medium md:text-base font-secondary">
                            <p className="mb-1">Spotify account</p>
                            <input
                                type="url"
                                value={spotify}
                                onChange={(e) => setSpotify(e.target.value)}
                                id="spotify"
                                placeholder="Enter account url"
                                spellCheck={false}
                                className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                            />
                        </div>
                        <div className="flex-1 text-sm font-medium md:text-base font-secondary">
                            <p className="mb-1">Instagram account</p>
                            <input
                                type="url"
                                value={instagram}
                                onChange={(e) => setInstagram(e.target.value)}
                                id="instagram"
                                placeholder="Enter account url"
                                spellCheck={false}
                                className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                        <div className="flex-1 text-sm font-medium md:text-base font-secondary">
                            <p className="mb-1">Twitter account</p>
                            <input
                                type="url"
                                value={twitter}
                                onChange={(e) => setTwitter(e.target.value)}
                                id="twitter"
                                placeholder="Enter account url"
                                spellCheck={false}
                                className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                            />
                        </div>
                        <div className="flex-1 text-sm font-medium md:text-base font-secondary">
                            <p className="mb-1">Facebook account</p>
                            <input
                                type="url"
                                value={facebook}
                                onChange={(e) => setFacebook(e.target.value)}
                                id="facebook"
                                placeholder="Enter account url"
                                spellCheck={false}
                                className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={handleSave}>
                <CustomButton green={true}>Save Changes</CustomButton>
            </div>
        </div>
    );
}
