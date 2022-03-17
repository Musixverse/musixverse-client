import Register_sub from "./Register_sub";

export default function ArtistOrUser() {
    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <p className="text-4xl sm:text-5xl font-tertiary">SIGN UP</p>
                <p className="text-[13px] sm:text-[15px] font-secondary">
                    What&apos;s the difference Between Artist & Collectors?
                </p>
                <div className="mt-8 space-y-3">
                    <Register_sub artist={true} />
                    <Register_sub artist={false} />
                </div>
                <div className="flex items-start mt-12 space-x-3">
                    <i className="text-[18px] fa fa-exclamation-circle"></i>
                    <p className="text-[13px] font-secondary">Don&apos;t worry, you can switch your user profile to an artist profile at any stage you&apos;d like.</p>
                </div>
            </div>
            <div className="w-16 h-1 -mb-6 mt-44 rounded-xl bg-primary-200"></div>
        </div>
    );
}
