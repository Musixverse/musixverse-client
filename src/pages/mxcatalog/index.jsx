import Head from "next/head";
import { useReducer, useState } from "react";
import CatalogBody from "../../components/MxCatalog/ProdVersion/CatalogBody";
import CatalogNav from "../../components/MxCatalog/ProdVersion/CatalogNav";

const reducer = (state, action) => {
    switch(action.type){
        case "GENRE":
            return {...state, genre: action.selectedChoice};
        case "LANGUAGE":
            return {...state, language: action.selectedChoice};
        case "DURATION":
            return {...state, duration: action.selectedChoice};
        case "NUMCOLLAB":
            return {...state, numberOfCollborators: action.selectedChoice};
        case "TAGS":
            return {...state, tags: action.selectedChoice};
        case "PARENTALADV":
            return {...state, parentalAdvisory: action.selectedChoice};
        case "STATUS":
            return {...state, status: action.selectedChoice};
        case "COUNTRYOFORIGIN":
            return {...state, countryOfOrigin: action.selectedChoice};
        case "NUMCOPIES":
            return {...state, numberOfCopies: action.selectedChoice};
        case "RESALEROYALTY":
            return {...state, resaleRoyalty: action.selectedChoice};
        case "VOCALS":
            return {...state, vocals: action.selectedChoice};
        case "VERIFIED":
            return {...state, verifiedOnly: action.selectedChoice};
        case "HASSPLITS":
            return {...state, hasSplits: action.selectedChoice};
        case "LYRICS":
            return {...state, lyrics: action.selectedChoice};
        case "PRICE":
            return {...state, price: action.selectedChoice};
        case "DATE":
            return {...state, date: action.selectedChoice};
        default:
            return state;
    }
}


export default function MxCatalog(){
    // Will be maintaining a state here for the type of marketplace (currentSelection (Integer))
    //Initially set to load the newly released nfts first
    const [currentSelection, setCurrentSelection] = useState(1);
    const [appliedFilter, dispatch] = useReducer(reducer, {
        genre: "",
        language: "",
        duration: "",
        numberOfCollborators: "",
        tags: "",
        parentalAdvisory: "",
        status: "",
        countryOfOrigin: "",
        numberOfCopies: "",
        resaleRoyalty: "",

        vocals: false,
        hasSplits: false,
        verifiedOnly: false,
        lyrics: false,

        price: true,
        date: true,
    });
    console.log("UPDATED STATE: ",appliedFilter);
    // const [appliedFilter, setAppliedFilter] = useState({
    //     genre: "",
    //     language: "",
    //     duration: "",
    //     numberOfCollborators: "",
    //     tags: "",
    //     parentalAdvisory: "",
    //     status: "",
    //     countryOfOrigin: "",
    //     numberOfCopies: "",
    //     resaleRoyalty: ""
    // });
    return(
        <>
            <Head>
				<title>Musixverse | Catalog</title>
				<meta name="description" content="Musixverse" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <CatalogNav {...{currentSelection, setCurrentSelection}}/>
            <div className="flex flex-col items-center justify-center w-full bg-light-200 dark:bg-dark-200">
				<div className="w-full max-w-[1920px] px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-36">
                    {/* Main Catalog Body */}
                    <CatalogBody 
                        currentSelection={currentSelection} 
                        appliedFilter={appliedFilter} 
                        setAppliedFilter={dispatch}
                    />
                </div>
            </div>
        </>
    );
}