import DashboardNav from "../../components/Dashboard/DashboardNav";
import ProfileSettings from "../../components/Dashboard/ProfileSettings";

export default function Dashboard(){
    return(
        <div className="flex items-center justify-center bg-light-200 dark:bg-dark-200">
            <div className="flex w-full max-w-[1920px] mt-36 px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                {/* Dashboard Navigation */}
                {/* DashboardNav */}
                <DashboardNav/>
                <ProfileSettings/>
            </div>
        </div>
    );
}