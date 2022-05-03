import Link from "next/link";

export default function DashboardNav(){
    return(
        <div className="p-8 xl:pl-10 xl:py-10 pr-dashboardNav bg-light-300 rounded-xl max-h-[350px] mr-12 xl:mr-16">
            <h1 className="text-3xl xl:text-4xl mb-9 font-tertiary">DASHBOARD</h1>
            <div className="flex flex-col font-medium font-secondary min-w-[129px]">
                <Link href={"/dashboard/profile-settings"} passHref>
                    <p className="hover:text-[#4b9013] cursor-pointer max-w-fit">
                        <i className="mb-5 mr-3 text-xl fas fa-user-circle"></i>
                        Profile
                    </p>
                </Link>
                <Link href={"/dashboard/notifications-settings"} passHref>
                    <p className="hover:text-[#4b9013] cursor-pointer max-w-fit">
                        <i className="mb-5 mr-3 text-xl fas fa-bell"></i>
                        Notifications
                    </p>
                </Link>
                <Link href={"/dashboard/account-help"} passHref>
                    <p className="hover:text-[#4b9013] cursor-pointer max-w-fit">
                        <i className="mr-3 text-xl fas fa-question-circle"></i>
                        Account Help
                    </p>
                </Link>
            </div>
        </div>
    );
}