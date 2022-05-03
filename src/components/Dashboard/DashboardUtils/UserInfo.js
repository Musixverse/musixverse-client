export default function UserInfo(){
    return(
        <div className="flex-col flex-1 mt-10">
            <div className="flex space-x-4">
                <div className="flex-1 font-medium font-secondary">
                    <p className="mb-1">Username</p>
                    <input
                        type="text"
                        placeholder="Enter username"
                        spellCheck={false}
                        className="w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                    />
                </div>
                <div className="flex-1 font-medium font-secondary">
                    <p className="mb-1">Email Address</p>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-light-100 focus:border-primary-100"
                    />
                </div>
            </div>
            <div className="flex-1 mt-3 font-medium font-secondary">
                <p className="mb-1">Bio</p>
                <textarea placeholder="Enter your Bio" className="resize-none w-full h-[106px] border-2 border-light-100 focus:border-primary-100 rounded-lg outline-none px-4 py-3 text-sm"></textarea>
            </div>
        </div>
    );
}