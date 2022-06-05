import React from "react";

export default function CategoryModal({ showCategoryModal, setShowCategoryModal, setEnterPressed }) {
    return (
        <>
            {showCategoryModal ? (
                <>
                    <div className="bg-dark-100 bg-opacity-50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-4xl">
                            {/*content*/}
                            <div className="items-center content-center place-content-center justify-center border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex md:px-24 sm:px-16 xs:px-4 xs:mt-32 pt-10 pb-8 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-primary font-semibold">Are you a Musician or a Fan/Investor?</h3>{" "}
                                </div>
                                <i
                                    className="fas fa-times text-xl hover:text-primary-200 cursor-pointer absolute top-4 right-5"
                                    onClick={() => setShowCategoryModal(false)}
                                ></i>
                                {/*body*/}
                                <div className="relative w-full pb-10 flex-auto mt-14 justify-center">
                                    <div className="mergeRow dojoDndItem mergeRow-radio justify-center" id="mergeRow-1">
                                        <div className="field-group justify-center">
                                            <div className="w-2/3 grid grid-cols-2 justify-center m-auto interestgroup_field radio-group" id="MERGE1">
                                                <label className="radio col-span-1 cursor-pointer" htmlFor="MERGE1-0">
                                                    <input
                                                        type="radio"
                                                        data-dojo-type="dijit/form/RadioButton"
                                                        name="MERGE1"
                                                        id="MERGE1-0"
                                                        value="Musician"
                                                        className="av-radio cursor-pointer focus:ring-0 text-primary-100"
                                                        required
                                                    />
                                                    <span>&nbsp;&nbsp;Musician</span>
                                                </label>
                                                <label className="radio col-span-1 cursor-pointer" htmlFor="MERGE1-1">
                                                    <input
                                                        type="radio"
                                                        data-dojo-type="dijit/form/RadioButton"
                                                        name="MERGE1"
                                                        id="MERGE1-1"
                                                        value="Fan/Investor"
                                                        className="av-radio cursor-pointer focus:ring-0 text-primary-100"
                                                        required
                                                    />
                                                    <span>&nbsp;&nbsp;Fan/Investor</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 pb-9 border-t border-solid border-blueGray-200 rounded-b">
                                    <input
                                        type="submit"
                                        className="px-8 py-2 cursor-pointer bg-light-200 hover:bg-primary-100 text-gray-600 hover:text-light-100 border border-gray-300 hover:border-primary-100 rounded"
                                        onClick={() => setEnterPressed(false)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
