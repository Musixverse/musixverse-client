import Link from "next/link";

export default function DashboardNav(){
    return(
        <div className="pl-10 pr-48 py-10 bg-light-300 rounded-xl max-h-[350px] mr-16">
            <h1 className="text-4xl mb-9 font-tertiary">DASHBOARD</h1>
            <div className="flex flex-col font-medium font-secondary">
                {/* <Link></Link> */}
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