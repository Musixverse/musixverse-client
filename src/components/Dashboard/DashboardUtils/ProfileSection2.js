import CustomButton from "../../../layout/CustomButton";

export default function ProfileSection2(){
    return(
        <div className="w-full p-8 mt-10 xl:p-10 bg-light-300 rounded-xl">
            <h1 className="mb-8 text-3xl xl:text-4xl font-tertiary min-w-fit">SOCIAL PROFILES</h1>
            <div className="flex mb-6">
                <div className="mr-2 xl:mr-8 font-secondary">
                    <h3 className="mb-4 text-lg font-medium">Add accounts</h3>
                    <p className="max-w-[219px] text-[15px]">Social connections help collectors verify you and your accounts.</p>
                </div>
                {/* Socials URLs input fields */}
                <div className="flex flex-col flex-1 space-y-4">
                    <div className="flex w-full space-x-4">
                        <div className="flex-1 font-medium font-secondary">
                            <p className="mb-1">Spotify account</p>
                            <input
                                type="text"
                                placeholder="Enter account url"
                                spellCheck={false}
                                className="w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                            />
                        </div>
                        <div className="flex-1 font-medium font-secondary">
                            <p className="mb-1">Facebook account</p>
                            <input
                                type="text"
                                placeholder="Enter account url"
                                spellCheck={false}
                                className="w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                            />
                        </div>
                    </div>
                    <div className="flex w-full space-x-4">
                        <div className="flex-1 font-medium font-secondary">
                            <p className="mb-1">Twitter account</p>
                            <input
                                type="text"
                                placeholder="Enter account url"
                                spellCheck={false}
                                className="w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                            />
                        </div>
                        <div className="flex-1 font-medium font-secondary">
                            <p className="mb-1">Instagram account</p>
                            <input
                                type="text"
                                placeholder="Enter account url"
                                spellCheck={false}
                                className="w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <CustomButton green={true}>Save Changes</CustomButton>
        </div>
    );
}