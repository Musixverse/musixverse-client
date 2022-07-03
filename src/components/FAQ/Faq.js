import { useState } from "react";
import Accordion from "./FAQUtils/Accordion";
import Navigation from "./FAQUtils/Navigation";
import { generalData, whatDoINeedData, aboutMxvData, buyingAndSellingData, TransactionsAndTechnicalData, communityData } from "./FAQUtils/FaqData";

export default function Faq(){
    const [currentSelection, setCurrentSelection] = useState(0);
    
    const categories = ["General","What do I need to use the Platform","About Musixverse","Buying and Selling","Transactions and technical questions","Community"];
    const accordionData = [generalData, whatDoINeedData, aboutMxvData, buyingAndSellingData, TransactionsAndTechnicalData, communityData]
    return(
        <div className="flex flex-col w-full space-y-12 lg:flex-row lg:space-x-12 lg:space-y-0">
            <Navigation currentSelection={currentSelection} setCurrentSelection={setCurrentSelection} categories={categories}/>
            <Accordion category={categories[currentSelection]} data={accordionData[currentSelection]}/>
        </div>
    );
}