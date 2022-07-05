import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';

export default function TeamModal({imgUrl,name,position,role,socialLinks,description,showModal,setShowModal}) {
  const cancelButtonRef = useRef(null)

  

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setShowModal(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-2xl transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="flex space-x-5">
                        <div className="flex justify-content-center align-items-center">
                            <img src={imgUrl} width={150} height={150} className="rounded-full" alt="Team member" />
                        </div>
                        <div className="flex flex-col items-start justify-center font-primary">
                            <div className="font-bold">{name}</div>
                            <div className="mt-2">{position}</div>
                            <div className="mt-1">{role}</div>
                            <div className="flex mt-2">
                                <a  href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-twitter me-4" aria-hidden="true"></i>
                                </a>
                                <a className="ml-8" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a className="ml-8" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">{description}</div>
                </div>



                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowModal(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowModal(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
