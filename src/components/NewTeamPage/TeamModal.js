import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

export default function Example({showModal, setShowModal, memberImage, title, fullName, role, socialLinks, description, dob, profileSong}) {
  const closeButtonRef = useRef(null)
//https://youtu.be/A16rrXFlMAA
  return (
    <Transition.Root show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setShowModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-transparent rounded-lg shadow-xl sm:my-8 sm:max-w-2xl sm:w-full">
                        <div className="px-4 pt-5 pb-6 dark:backdrop-blur-[7px] backdrop-blur-[7px] bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(255,255,255,0.06)] sm:p-8 sm:pb-0">
                            <div className="sm:flex sm:items-start">
                                <div className="relative flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto overflow-hidden bg-red-100 rounded-full sm:mx-0 sm:h-24 sm:w-24">
                                    <Image src={memberImage} alt="member" objectFit='cover' layout='fill' priority></Image>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">
                                        {fullName}
                                    </Dialog.Title>
                                    <div className='mt-1 text-sm text-black dark:text-light-100'>
                                        <p>{title}, {role}</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500 dark:text-light-200">
                                            {description}
                                        </p>
                                    </div>
                                    <div className='flex items-center mt-5 space-x-3'>
                                        <p className='text-sm text-black dark:text-light-100'>Know him more: </p>
                                        <div className="flex items-center space-x-3">
                                            <a className='outline-none' href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-twitter hover:text-primary-200" aria-hidden="true"></i>
                                            </a>
                                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-linkedin hover:text-primary-200" aria-hidden="true"></i>
                                            </a>
                                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-github hover:text-primary-200" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 pt-0 dark:backdrop-blur-[7px] backdrop-blur-[7px] bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(255,255,255,0.06)] sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                            type="button"
                            className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 rounded-md shadow-sm focus:outline-none dark:text-light-200 bg-light-100 hover:bg-light-200 dark:bg-dark-100 hover:dark:bg-dark-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setShowModal(false)}
                            ref={closeButtonRef}
                            >
                            Close
                            </button>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </div>
        </div>
        </Dialog>
    </Transition.Root>
  );
}