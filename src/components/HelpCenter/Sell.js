import { useState } from "react";
import styles from "../../../styles/Faq/Accordion.module.css";
import { sellNFT } from "./utils/helpData";

export default function GettingStarted(){
    const [currentlyExpanded, setCurrentlyExpanded] = useState(0);
    const sellNFTAccordion = sellNFT.map((elem, idx)=>{
        return(
            <div key={idx} className={"accordion-item "+styles['faq-item']}>
                {/* FAQ Item Heading */}
                <button 
                    className={"relative flex items-center w-full px-5 py-4 text-sm sm:text-base text-left  transition border-b border-primary-100 rounded-none bg-transparent focus:outline-none dark:hover:text-primary-200 hover:text-primary-200 "+(idx === 0? "":"collapsed") + (currentlyExpanded === idx? " text-primary-200":"text-gray-800 dark:text-light-200")} 
                    type="button" 
                    onClick={()=>{
                            if(currentlyExpanded !== idx)
                                setCurrentlyExpanded(idx);
                            else
                                setCurrentlyExpanded(-1);
                        }
                    }
                    data-bs-toggle="collapse" 
                    data-bs-target={"#"+elem.content_id}
                    aria-expanded="true"
                    aria-controls={elem.content_id}
                >
                    <span className={"mr-3 material-symbols-outlined text-primary-200 "+(currentlyExpanded === idx? "hidden":"")}>add_circle</span>
                    <span className={"mr-3 text-primary-200 material-symbols-outlined "+(currentlyExpanded === idx? "":"hidden")}>do_not_disturb_on</span>
                    {elem.heading}
                </button>
                {/* FAQ Item Content */}
                <div 
                    id={elem.content_id}
                    className={"accordion-collapse collapse "+(idx === 0? "show":"")} 
                    data-bs-parent="#accordionExample"
                >
                    <div className="pt-3 pr-4 text-sm pl-14 sm:pt-4 accordion-body font-secondary sm:text-base">
                        {elem.body}
                    </div>
                </div>
            </div>
        );
    });

    return(
        <div className="self-start w-full mt-28 mb-14 p-8 pb-12 dark:bg-dark-100 bg-light-100 rounded-xl">
            {/* FAQ Category Heading */}
            <h3 className="mb-5 text-center font-medium sm:text-3xl text-primary-200">Sell NFT</h3>
            <div className="w-full rounded-none accordion" id="accordionExample">
                {sellNFTAccordion}
            </div>
        </div>
    );
}