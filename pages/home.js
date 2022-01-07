import React, { Fragment } from "react";
import Cta from "./CtaSection/Cta.js";
import Hero from "./Hero/Hero.js";
import HowItWorks from "./HowItWorks/HowItWorks.js";
import Section2 from "./Section2/Section2.js";
import Section3 from "./Section3/Section3.js";
import MessageDemo from "./MessageDemo/MessageDemo";

export default function HomePage() {
    return (
        <Fragment>
            <Hero />
            <Section2 />
            <Section3 />
            <MessageDemo />
            <HowItWorks />
            <Cta isHomeSection={true} />
        </Fragment>
    );
}
