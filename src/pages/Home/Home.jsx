import React from "react";
import { Navbar } from "../../common/Navbar";
import { SportsProgram } from "./components/SportsProgram";
import { Facilities } from "./components/Facilities";
import { EventsAndCompetetion } from "./components/EventsAndCompetetion";
import { AboutUs } from "./components/AboutUs";
import { FAQs } from "./components/FAQs";
import { useRef } from "react";
import Footer from "../../common/Footer";
import { ImageGallery } from "./components/ImageGallery";

export const Home = () => {

    const contentRef = useRef(0);


    return (


        // container
        <div className="bg-[#ffffff] w-100% box-border flex-col ">
            <Navbar contentRef={contentRef} />

            {/* Image  */}
            <div className="w-[100%]overflow-x-hidden relative ">
                <img
                    className="relative"
                    src="https://c.animaapp.com/o8DcutcR/img/picsart-24-02-21-19-03-01-373-1.png"
                    alt="abcd"
                />
            </div >

            {/* AboutUs */}
            <AboutUs />


            {/* facilities */}
            <Facilities />

            {/* Events and Competetitions */}
            <EventsAndCompetetion />

            {/* sports program */}
            <SportsProgram setContentRef={ref => contentRef.current = ref} />

            {/* Image gallery */}
            <ImageGallery/>

        

            <FAQs />

            <Footer />
        </div>



    )
}