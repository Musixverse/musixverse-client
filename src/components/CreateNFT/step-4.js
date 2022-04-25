import Router from "next/router";

const Contributors = ({ step, nextStep, prevStep }) => {
    return (
        <div className="container mx-auto pt-36 pb-20 min-h-screen">
            <div className="text-2xl font-secondary text-gray-500">Step {step}</div>
            <div className="flex flex-wrap justify-center content-center items-center">
                <div className="grid gap-y-10 justify-items-center">
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6 md:mb-0">
                                <label htmlFor="rec-year" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Add Contributors
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                                    id="rec-year"
                                    type="number"
                                    placeholder="Recording Year"
                                />
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

export default Contributors;
