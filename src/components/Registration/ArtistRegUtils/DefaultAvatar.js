import { useState } from "react";

export default function DefaultAvatar(props){
    const[currImage, setCurrImage] = useState(1);
    
    //Map out all the imgs from url
    const defaultAvatars = props.urls.map((url, idx)=>{
        return(
            <img 
                className={"w-[30px] h-[30px] sm:w-[39px] sm:h-[39px] rounded-full bg-light-300 "+ (currImage === idx+1? "ring-2 ring-offset-2 ring-primary-100":"")}
                onClick={()=>{setCurrImage(idx+1); props.onImageSelection(props.urls[idx]);}} 
                src={url} 
                key={idx} 
                alt="default avatar"
            ></img>
        );
    });
    return(
        <>
            {defaultAvatars}
        </>
    );
}