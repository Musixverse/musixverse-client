import LockAccount from "./SettingsUtils/LockAccount";
import Notification from "./SettingsUtils/Notification";
import Link from "next/link";

export default function AccountHelp() {
    return (
        <div className="flex-1 p-8 pb-12 mb-10 md:p-10 md:pb-14 bg-light-300 dark:bg-dark-100 rounded-xl">
            <h1 className="mb-6 text-3xl xl:text-4xl font-tertiary">ACCOUNT HELP</h1>
            <p className="max-w-[510px] mb-14 font-secondary text-[15px]">
                Search for any issues related to your NFT or your account. If you don&apos;t find your issue mention you can contact use
            </p>
            <Notification
                heading={"General Help"}
                description={
                    <>
                        {" "}
                        Visit our{" "}
                        <Link href={DISCORD_SUPPORT_CHANNEL_INVITE_LINK} passHref>
                            <a target="_blank" rel="noopener noreferrer" className="font-medium text-primary-100">
                                help center
                            </a>
                        </Link> to learn how to get started with buying, selling, and creating.{" "}
                    </>
                }
                toggleSwitch={false}
            />
            <Notification
                heading={"Contact Musixverse"}
                description={
                    <>
                        Can&apos;t find the answers you’re looking for? You can submit a request{" "}
                        <a className="font-medium text-primary-100" href="mailto:contact@musixverse.com">
                            here.
                        </a>{" "}
                    </>
                }
                toggleSwitch={false}
            />
            {/* <LockAccount /> */}
            {/* <LockAccount/> */}
            {/* <Compromised */}
        </div>
    );
}
