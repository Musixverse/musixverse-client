export default function UserInfo({ username, setUsername, name, setName, email, setEmail, bio, setBio }) {
    return (
        <div className="flex-col flex-1 mt-5 md:mt-7">
            <div className="flex space-x-2 md:space-x-4">
                <div className="flex-1 text-sm font-medium md:text-base font-secondary">
                    <p className="mb-1">Name</p>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        placeholder="Enter name"
                        spellCheck={false}
                        className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                    />
                </div>
                <div className="flex-1 text-sm font-medium md:text-base font-secondary">
                    <p className="mb-1">Username</p>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        placeholder="Enter username"
                        spellCheck={false}
                        className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                    />
                </div>
                <div className="flex-1 text-sm font-medium md:text-base font-secondary">
                    <p className="mb-1">Email Address</p>
                    <input
                        type="email"
                        value={email}
                        id="email"
                        disabled
                        className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                    />
                </div>
            </div>
            <div className="flex-1 mt-3 font-medium font-secondary">
                <p className="mb-1 text-sm md:text-base">Bio</p>
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    id="bio"
                    placeholder="Tell your story to the world..."
                    className="resize-none w-full h-[106px] border-2 border-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 focus:border-primary-100 rounded-lg outline-none px-4 py-3 text-sm"
                ></textarea>
            </div>
        </div>
    );
}
