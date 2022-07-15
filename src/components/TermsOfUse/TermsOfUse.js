export default function TermsOfUse() {
    return (
        <div className="w-full h-screen flex justify-center pt-36">
            <div className="w-full">
                <div>
                    <div className="font-primary text-5xl font-semibold text-primary-100">Terms of Use</div>
                </div>

                <div className="mt-5">
                    <div className="font-primary text-base">
                        Please note that{" "}
                        <a href={"/"} className="text-primary-100">
                            musixverse.com
                        </a>{" "}
                        aggregates all tracks that users put up as NFTs and is not partnering with any of the artists displayed on the website. If you want to
                        contact one of the artists listed here, you must contact them directly through other social media platforms. We are not responsible if
                        someone else puts up an artists&apos; track as an NFT on our platform and cannot assist you regarding the same.
                    </div>
                </div>
            </div>
        </div>
    );
}
