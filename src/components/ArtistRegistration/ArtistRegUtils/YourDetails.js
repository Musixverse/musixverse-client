import SelectAvatar from "./SelectAvatar";
import Button from "./Button";
import { useState, useRef } from "react";
// import { Transition } from 'react-transition-group';
export default function YourDetails(){
    const bio = useRef(null);
    const facebook = useRef(null);
    const twitter = useRef(null);
    const spotify = useRef(null);
    const instagram = useRef(null);

    const [showBasicDetails, setShowBasicDetails] = useState(true);
    const [showSocialDetails, setShowSocialDetails] = useState(false);
    return(
        <>
            <div className={showBasicDetails? "":"hidden"}>
                <SelectAvatar/>
                {/* <div className="flex-1"> */}
                    <p className="mt-8 text-[16px] font-secondary font-bold">Your Name</p>
                    <input type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" />
                {/* </div> */}
                <div className="flex flex-col sm:flex-row mt-3 text-[16px] font-secondary font-bold space-y-4 sm:space-x-3 sm:space-y-0">
                    <div className="flex-1">
                        <p>Username</p>
                        <input type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" />
                    </div>
                    <div className="flex-1">
                        <p>Email Address</p>
                        <input type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" />
                    </div>
                </div>
                <div className="flex flex-col mt-8">
                    <div className="flex items-center justify-start mb-2 space-x-3">
                        <input type="checkbox" required/>
                        <p className="text-[16px] font-secondary font-bold">
                            Permission of listening rights
                        </p>
                    </div>
                    <p className="text-[13px] font-secondary lg:max-w-[468px] max-w-none">
                        Confirm that you are providing permissions to Musixverse to use your music for non-monetized streaming, both on Musixverse and any external apps and platforms which are directly associated with or part of the Musixverse platform.
                    </p>
                    <div className="flex items-center justify-start pt-2 mt-3 space-x-3">
                        <input type="checkbox" required/>
                        <p className="text-[16px] font-secondary font-bold">
                            Guidelines for submission
                        </p>
                    </div>
                    <p className="text-[13px] font-secondary lg:max-w-[468px] max-w-none mt-2">
                        Confirm that none of your submissions,both current and future contain any infringing or unauthorized copyrighted material.
                    </p>
                </div>
                <button onClick={()=>{setShowSocialDetails(true); setShowBasicDetails(false);}} className="flex justify-center items-center space-x-3 bg-primary-200 text-[14px] text-light-100 p-3 rounded-lg mt-6 font-primary font-bold max-w-[210px]">Continue</button>
            </div>

            <div className={"min-w-[468px] "+ (showSocialDetails? "":"hidden")}>
                <p className="text-[16px] font-primary font-bold">Tell us about yourself</p>
                <textarea spellCheck="false" ref={bio} className="font-secondary text-base w-full p-1 resize-none h-[200px] mt-2 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" ></textarea>
                <p className="text-[16px] font-primary font-bold mt-4">Add your socials(Optional)</p>
                <div className="mt-2">
                    <p className="text-[16px] font-secondary font-bold">Instagram</p>
                    <input spellCheck="false" ref={instagram} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
                    <p className=" text-[16px] font-secondary font-bold">Facebook</p>
                    <input spellCheck="false" ref={facebook} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
                    <p className=" text-[16px] font-secondary font-bold">Twitter</p>
                    <input spellCheck="false" ref={twitter} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
                    <p className=" text-[16px] font-secondary font-bold">Spotify</p>
                    <input spellCheck="false" ref={spotify} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
                </div>
                {/* Re-design buttons */}
                <div className="flex space-x-3">
                    <button onClick={()=>{setShowSocialDetails(false); setShowBasicDetails(true);}} className="flex justify-center items-center space-x-3 bg-primary-200 text-[14px] text-light-100 p-3 rounded-lg mt-6 font-primary font-bold max-w-[210px]">Back</button>
                    <Button>Submit</Button>
                    <Button>Skip</Button>
                </div>
            </div>
        </>
    );
}
// export default function YourDetails(){
//     const bio = useRef(null);
//     const facebook = useRef(null);
//     const twitter = useRef(null);
//     const spotify = useRef(null);
//     const instagram = useRef(null);

//     const [showBasicDetails, setShowBasicDetails] = useState(true);
//     const [showSocialDetails, setShowSocialDetails] = useState(false);
//     const duration = 1;
//     const transitionStyles = {
//         entering: { opacity: 1, transform: 'translateX(200px)' },
//         entered:  { opacity: 1 },
//         exiting:  { opacity: 0 },
//         exited:  { opacity: 0 },
//     };

//     return(
//         <>
//             <Transition mountOnEnter={true}
//                 unmountOnExit={true} in={showBasicDetails} timeout={duration}>
//                 {state => (
//                     <div style={{
//                         ...transitionStyles[state]
//                     }}>
//                         <SelectAvatar/>
//                         {/* <div className="flex-1"> */}
//                             <p className="mt-8 text-[16px] font-secondary font-bold">Your Name</p>
//                             <input type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" />
//                         {/* </div> */}
//                         <div className="flex flex-col sm:flex-row mt-3 text-[16px] font-secondary font-bold space-y-4 sm:space-x-3 sm:space-y-0">
//                             <div className="flex-1">
//                                 <p>Username</p>
//                                 <input type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" />
//                             </div>
//                             <div className="flex-1">
//                                 <p>Email Address</p>
//                                 <input type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" />
//                             </div>
//                         </div>
//                         <div className="flex flex-col mt-8">
//                             <div className="flex items-center justify-start mb-2 space-x-3">
//                                 <input type="checkbox" required/>
//                                 <p className="text-[16px] font-secondary font-bold">
//                                     Permission of listening rights
//                                 </p>
//                             </div>
//                             <p className="text-[13px] font-secondary lg:max-w-[468px] max-w-none">
//                                 Confirm that you are providing permissions to Musixverse to use your music for non-monetized streaming, both on Musixverse and any external apps and platforms which are directly associated with or part of the Musixverse platform.
//                             </p>
//                             <div className="flex items-center justify-start pt-2 mt-3 space-x-3">
//                                 <input type="checkbox" required/>
//                                 <p className="text-[16px] font-secondary font-bold">
//                                     Guidelines for submission
//                                 </p>
//                             </div>
//                             <p className="text-[13px] font-secondary lg:max-w-[468px] max-w-none mt-2">
//                                 Confirm that none of your submissions,both current and future contain any infringing or unauthorized copyrighted material.
//                             </p>
//                         </div>
//                         <button onClick={()=>setShowSocialDetails(true)} className="flex justify-center items-center space-x-3 bg-primary-200 text-[14px] text-light-100 p-3 rounded-lg mt-6 font-primary font-bold max-w-[210px]">Continue</button>
//                     </div>
//                 )}
//             </Transition>

//             <Transition
//                 in={showSocialDetails} 
//                 timeout={duration} 
//                 onEnter={() => setShowBasicDetails(false)}
//                 onExited={() => setShowBasicDetails(true)}
//                 mountOnEnter={true}
//                 unmountOnExit={true}
//             >
//                 {state => (
//                     <div 
//                         style={{
//                             ...transitionStyles[state]
//                         }}
//                         className={"min-w-[468px]"}
//                     >
//                         <p className="text-[16px] font-primary font-bold">Tell us about yourself</p>
//                         <textarea spellCheck="false" ref={bio} className="font-secondary text-base w-full p-1 resize-none h-[200px] mt-2 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:border-primary-100" ></textarea>
//                         <p className="text-[16px] font-primary font-bold mt-4">Add your socials(Optional)</p>
//                         <div className="mt-2">
//                             <p className="text-[16px] font-secondary font-bold">Instagram</p>
//                             <input spellCheck="false" ref={instagram} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
//                             <p className=" text-[16px] font-secondary font-bold">Facebook</p>
//                             <input spellCheck="false" ref={facebook} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
//                             <p className=" text-[16px] font-secondary font-bold">Twitter</p>
//                             <input spellCheck="false" ref={twitter} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
//                             <p className=" text-[16px] font-secondary font-bold">Spotify</p>
//                             <input spellCheck="false" ref={spotify} type="text" className="w-full p-1 border-2 border-gray-500 rounded-md shadow-sm outline-none font-secondary focus:border-primary-100" />
//                         </div>
//                         {/* Re-design buttons */}
//                         <div className="flex space-x-3">
//                             <button onClick={()=>setShowSocialDetails(false)} className="flex justify-center items-center space-x-3 bg-primary-200 text-[14px] text-light-100 p-3 rounded-lg mt-6 font-primary font-bold max-w-[210px]">Back</button>
//                             <Button>Submit</Button>
//                             <Button>Skip</Button>
//                         </div>
//                     </div>
//                 )}
//             </Transition>
//         </>
//     );
// }