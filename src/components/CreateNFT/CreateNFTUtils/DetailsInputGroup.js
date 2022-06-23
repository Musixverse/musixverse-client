import InputDropdown from "./InputDropdown";
/*

"Explicit", "Clean [There is another version of this track that is explicit, but this is the clean version]", "Not Explicit"
*/

export default function DetailsInputGroup(){
    return(
        <div className="flex flex-col flex-1 space-y-2 sm:space-y-4">
            <div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
                    <p className="mb-1">TRACK ORIGIN</p>
                    <InputDropdown
                        optionsArray={["Original", "Cover","Remix", "Live", "Remastered","Radio Edit"]}
                    />
                </div>
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
                    <p className="mb-1">GENRE</p>
                    <InputDropdown
                        optionsArray={["Afrobeat", "Afropop", "Alternative", "Big Band", "Blues", "Children's Music", "Classical", "Comedy", "Country", "Dance", "Electronic", "Fitness and Workout", "Folk", "French Pop", "German Folk", "German Pop","Hip Hop", "J-Pop","Jazz","K-Pop","Rap"]}
                    />
                </div>
            </div>
            <div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
                    <p className="mb-1">RECORDING YEAR</p>
                    <input
                        type="number"
                        min={"1860"}
                        max={"2022"}
                        defaultValue={"2000"}
                        placeholder="Enter the recording year"
                        spellCheck={false}
                        className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                    />
                </div>
                <div className="flex-1 text-sm font-semibold md:text-base font-secondary">
                    <p className="mb-1">EXPLICIT CONTENT</p>
                    <InputDropdown
                        optionsArray={["Explicit", "Clean (There is another version of this track that is explicit, but this is the clean version)", "Not Explicit"]}
                    />
                    {/* <input
                        type="text"
                        placeholder="Enter account url"
                        spellCheck={false}
                        className="dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                    /> */}
                </div>
            </div>
        </div>
    );
}