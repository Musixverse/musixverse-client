/**
 * @param {*} props (text, textClass, marqueeWidth for >= md & smaller devices) 
 * @returns Maruqee Text component 
 */

export default function MarqueeText(props){
    return(
        <div 
            className={"relative flex overflow-x-hidden " + 
            (props.marqueeWidth? props.marqueeWidth:"w-[104px] md:w-[115px]")}
        >
            <div className="animate-marquee whitespace-nowrap">
                <h6 className={"mr-4 " + props.textClass}>
                    {props.text}
                </h6>
            </div>
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                <h6 className={"mr-4 " + props.textClass}>
                    {props.text}
                </h6>
            </div>
        </div>
    );
}