import Head from "next/head";
import { useState } from "react";
import CatalogBody from "../../components/MxCatalog/ProdVersion/CatalogBody";
import CatalogNav from "../../components/MxCatalog/ProdVersion/CatalogNav";

export default function MxCatalog(){
    // Will be maintaining a state here for the type of marketplace (currentSelection (Integer))
    const [currentSelection, setCurrentSelection] = useState(1);
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
                    {/*  */}
                    <CatalogBody currentSelection={currentSelection}/>
                </div>
            </div>
        </>
    );
}