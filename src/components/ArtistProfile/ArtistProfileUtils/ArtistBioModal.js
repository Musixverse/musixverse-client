import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function ArtistBioModal(props){
    const artistName = "Ben";
    const artistBio = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illo ad eaque ipsa molestias distinctio cupiditate veniam, velit recusandae itaque deleniti voluptatum, quibusdam alias odit! Quibusdam, sed nulla. Pariatur, similique Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illo ad eaque ipsa molestias distinctio cupiditate veniam, velit recusandae itaque deleniti voluptatum, quibusdam alias odit! Quibusdam, sed nulla. Pariatur, similique Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illo ad eaque ipsa molestias distinctio cupiditate veniam, velit recusandae itaque deleniti voluptatum, quibusdam alias odit! Quibusdam, sed nulla. Pariatur, similique Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illo ad eaque ipsa molestias distinctio cupiditate veniam, velit recusandae itaque deleniti voluptatum, quibusdam alias odit! Quibusdam, sed nulla. Pariatur, similique";
    const cancelButtonRef = useRef(null)

    return(
        <Transition.Root show={props.showModal} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" initialFocus={cancelButtonRef} onClose={()=>props.setShowModal(false)}>
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
                            <div className="px-4 pt-5 pb-6 bg-white sm:p-8 sm:pb-6">
                                <div className="sm:flex sm:items-start">
                                    {/* Some Icon we want to render */}
                                    {/* <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationIcon className="w-6 h-6 text-red-600" aria-hidden="true" />
                                    </div> */}
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        {/* Artist Info Modal Heading */}
                                        <Dialog.Title as="h3" className="mb-4 text-lg font-medium leading-6 text-gray-900">
                                            About {artistName}
                                        </Dialog.Title>
                                        {/* Artist Bio */}
                                        <p className="text-sm text-gray-500">
                                            {artistBio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => props.setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}