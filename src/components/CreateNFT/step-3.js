import { useMoralis } from "react-moralis";

const SplitsAndContributors = ({ step, nextStep, prevStep }) => {
    const { user } = useMoralis();

    return (
        <div className="container mx-auto pt-36 pb-20 min-h-screen">
            <div className="text-2xl font-secondary text-gray-500">Step {step}</div>
            <div className="flex flex-wrap justify-center content-center items-center">
                <div className="grid gap-y-10 justify-items-center">
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6 md:mb-0">
                                <label htmlFor="rec-year" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Add Splits & Contributors
                                </label>
                                <div className="grid grid-cols-3 p-3 px-8 bg-light-300 rounded-md items-center">
                                    <div className="col-span-2">{user.attributes.name}</div>
                                    <div>
                                        <input
                                            className="appearance-none w-full bg-gray-200 text-gray-700 border-2 border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                            id="rec-year"
                                            type="number"
                                            placeholder="Split %"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex mt-10 justify-center">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="w-full px-6 py-3 text-md text-primary-200 bg-light-100 hover:bg-primary-200 hover:text-light-100 font-primary rounded border border-primary-200"
                                    >
                                        Add contributor
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="w-full flex justify-between">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                prevStep();
                            }}
                            className="text-black text-md bg-light-300 font-primary rounded px-6 py-2"
                        >
                            Back
                        </button>
                        <div className="w-full flex justify-end">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className="mr-4 text-black text-md bg-light-300 font-primary rounded px-6 py-2"
                            >
                                Skip
                            </button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    nextStep();
                                }}
                                className="text-white text-md bg-primary-200 hover:bg-primary-300 font-primary rounded px-6 py-2"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplitsAndContributors;
