import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const MarketplaceChooser = () => {
    const router = useRouter();
    const [active, setActive] = useState("");

    useEffect(() => {
        if (router.pathname.startsWith("/marketplace/new-releases")) setActive("new-releases");
        else if (router.pathname.startsWith("/marketplace/explore")) setActive("explore");
    }, [router.pathname]);

    return (
        <div className="flex flex-col w-full justify-center pt-16 pb-24 dark:bg-dark-200">
            <div className="flex justify-center">
                <ul className="nav nav-tabs flex flex-row space-x-8">
                    <li className="nav-item flex-auto text-center">
                        <Link href="/marketplace/new-releases" passHref>
                            <a
                                className={
                                    active == "new-releases"
                                        ? "w-full px-10 py-3 my-2 rounded-md bg-primary-100 text-light-100"
                                        : "w-full px-10 py-3 my-2 rounded-md hover:bg-light-300 dark:hover:bg-dark-100"
                                }
                            >
                                New Releases
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item flex-auto text-center">
                        <Link href="/marketplace/explore" passHref>
                            <a
                                className={
                                    active == "explore"
                                        ? "w-full px-16 py-3 my-2 rounded-md bg-primary-100 text-light-100"
                                        : "w-full px-16 py-3 my-2 rounded-md hover:bg-light-300 dark:hover:bg-dark-100"
                                }
                            >
                                Explore
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MarketplaceChooser;
