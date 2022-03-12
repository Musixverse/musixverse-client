
import Image from "next/Image";
import arrow from "../../../public/assets/registeration/arrow.svg";
import artist_mic from "../../../public/assets/registeration/artist_mic.svg";
import collection_category from "../../../public/assets/registeration/collector.svg";


export default function SignUp_sub(category) {
    return(
        <div>
            {category=="artist" ? <Image src={artist_mic} width={40} height={40} alt="artist_mic" /> 
            : <Image src={collection_category} width={40} height={40} alt="collection_category" />}
            <div>
                {category==="artist_mic"?<p>ARTIST</p>:<p>COLLECTOR</p>}
                {category==="artist_mic"?<p>An Artist can Buy & Browse NFTs<br />but cannot Sale any</p>
                :
                <p>A Collector can Buy & Browse NFTs and<br />also Sell any NFT</p>}
            </div>
            <div>
                <Image src={arrow} width={40} height={40} alt="right arrow"></Image>
            </div>
        </div>
    )
}