import Link from "next/link";

export default function SettingsNav() {
    return (
        <div className="dark:bg-dark-100 lg:mb-0 mb-8 lg:block md:flex md:justify-between p-8 xl:pl-10 xl:py-10 lg:pr-settingsNav bg-light-300 rounded-xl max-h-[350px] lg:mr-12 xl:mr-16">
            <h1 className="mb-6 text-3xl md:mb-0 xl:text-4xl font-tertiary lg:mb-9">SETTINGS</h1>
            <div className="space-y-3 md:space-y-0 items-start flex-col flex-none lg:items-start md:items-center lg:flex-none md:flex-1 flex md:flex-row lg:flex-col font-medium font-secondary min-w-[129px] justify-around lg:space-y-5">
                <Link href={"/settings/profile-settings"} passHref>
                    <p className="hover:text-[#4b9013] text-sm md:text-base cursor-pointer max-w-fit">
                        <i className="mr-3 text-lg md:text-xl fas fa-user-circle"></i>
                        Profile
                    </p>
                </Link>
                <Link href={"/settings/notifications-settings"} passHref>
                    <p className="hover:text-[#4b9013] cursor-pointer text-sm md:text-base max-w-fit">
                        <i className="mr-3 text-lg md:text-xl fas fa-bell"></i>
                        Notifications
                    </p>
                </Link>
                <Link href={"/settings/account-help"} passHref>
                    <p className="hover:text-[#4b9013] cursor-pointer text-sm md:text-base max-w-fit">
                        <i className="mr-3 text-lg md:text-xl fas fa-question-circle"></i>
                        Account Help
                    </p>
                </Link>
            </div>
        </div>
    );
}
