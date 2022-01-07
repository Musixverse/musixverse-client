import React, { Fragment } from "react";
import Hero from "../pageComponents/HomePage/Hero";
import Section2 from "../pageComponents/HomePage/Section2";
import Section3 from "../pageComponents/HomePage/Section3";
import MessageDemo from "../pageComponents/HomePage/MessageDemo";
import HowItWorks from "../pageComponents/HomePage/HowItWorks";
import Cta from "../pageComponents/HomePage/Cta";

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
