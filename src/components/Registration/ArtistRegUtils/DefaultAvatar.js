import { useState, useEffect } from "react";

export default function DefaultAvatar(props){
    const[currImage, setCurrImage] = useState(1);

    const urls = [
        "https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631",
        "https://lh3.googleusercontent.com/ppG4cJGe5bapx_fVYTaF7uN2vysBjuSFxlIh16Rd_sqsc-MRvsw2yOe-iP0RHZMXnaePLbnCO9hx4ti1GJQP6uteb32wbeua21ys3g=w361",
        "https://lh3.googleusercontent.com/MYlZWpUkY6436fmMSha_qmbJ3FTxhFzdcxphNmB8qSUxvgphKTiWVDEyG8zTyMPxHqzkQYN_kwsMQmHGp9wIfeWhCqwwJ32hTcZCPLg=w361",
        "https://lh3.googleusercontent.com/guWTxFAOxLKB2wVSICbVDPTzDV01_OPcNz5STMcvzRMmbZF6THBJaoKrmetK0yXix32SvqmJtxNw5NwhTFzVsfKnTlvZ1lQbdqakWw=w361",
        "https://lh3.googleusercontent.com/InqKM6IlUvOaSD93iBg_FZI_QAABak7jCtR3HaiGcGq8RLG2ql3xU50N3I7Bt3Epy-h5h3ZbAXxZ-Fqb93MrCDtzowTYb_qsyBggBg=w361", 
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960"
    ];
    
    useEffect(()=>{
        props.onImageSelection("https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631");
    }, [props]);
    //Array of default avatar's urls
    
    //Map out all the imgs from url
    const defaultAvatars = urls.map((url, idx)=>{
        return(
            <img 
                className={"w-[30px] h-[30px] sm:w-[39px] sm:h-[39px] rounded-full bg-light-300 "+ (currImage === idx+1? "ring-2 ring-offset-2 ring-primary-100":"")}
                onClick={()=>{setCurrImage(idx+1); props.onImageSelection(urls[idx]);}} 
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