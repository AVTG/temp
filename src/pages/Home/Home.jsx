import React from "react";
import { Navbar } from "../../common/Navbar";
import { SportsProgram } from "./components/SportsProgram";
import { Facilities } from "./components/Facilities";
import { EventsAndCompetetion } from "./components/EventsAndCompetetion";
import { AboutUs } from "./components/AboutUs";
import { FAQs } from "./components/FAQs";
import { useRef } from "react";
import Footer from "../../common/Footer";

export const Home = () => {

    const contentRef = useRef(0);


    return (


        // container
        <div className="bg-[#ffffff] w-100% box-border flex-col ">
            <Navbar contentRef={contentRef} />

            {/* Image  */}
            <div className="w-[100%]overflow-x-hidden relative mb-5">
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


            {/* sports program */}
            <SportsProgram setContentRef={ref => contentRef.current = ref} />

            {/* Events and Competetitions */}
            <EventsAndCompetetion />




            {/* Photo gallery */}
            {/* <div className="flex flex-wrap w-[100%] items-start justify-center gap-[12px_12px] p-[120px] relative  bg-[#f0efef] rounded-[30px] overflow-hidden">
                <div className="relative flex-1 min-w-[411px] grow h-[300px] bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                    <div className="left-[129px] absolute h-[29px] top-[135px] opacity-25 [font-family:'Inter',Helvetica] font-bold text-black text-[24px] text-center tracking-[-0.96px] leading-[normal]">
                        DESCRIPTION
                    </div>
                </div>
                <div className="relative flex-1 min-w-[411px] grow h-[300px] bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                    <div className="left-[129px] absolute h-[29px] top-[135px] opacity-25 [font-family:'Inter',Helvetica] font-bold text-black text-[24px] text-center tracking-[-0.96px] leading-[normal]">
                        DESCRIPTION
                    </div>
                </div>
                <div className="relative flex-1 min-w-[411px] grow h-[300px] bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                    <div className="left-[129px] absolute h-[29px] top-[135px] opacity-25 [font-family:'Inter',Helvetica] font-bold text-black text-[24px] text-center tracking-[-0.96px] leading-[normal]">
                        DESCRIPTION
                    </div>
                </div>
                <div className="relative flex-1 min-w-[411px] grow h-[300px] bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                    <div className="left-[129px] absolute h-[29px] top-[135px] opacity-25 [font-family:'Inter',Helvetica] font-bold text-black text-[24px] text-center tracking-[-0.96px] leading-[normal]">
                        DESCRIPTION
                    </div>
                </div>
                <div className="relative flex-1 min-w-[411px] grow h-[300px] bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                    <div className="left-[129px] absolute h-[29px] top-[135px] opacity-25 [font-family:'Inter',Helvetica] font-bold text-black text-[24px] text-center tracking-[-0.96px] leading-[normal]">
                        DESCRIPTION
                    </div>
                </div>
                <div className="relative flex-1 min-w-[411px] grow h-[300px] bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                    <div className="left-[129px] absolute h-[29px] top-[135px] opacity-25 [font-family:'Inter',Helvetica] font-bold text-black text-[24px] text-center tracking-[-0.96px] leading-[normal]">
                        DESCRIPTION
                    </div>
                </div>
                <div className="relative flex-1 min-w-[411px] grow h-[300px] bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                    <div className="left-[129px] absolute h-[29px] top-[135px] opacity-25 [font-family:'Inter',Helvetica] font-bold text-black text-[24px] text-center tracking-[-0.96px] leading-[normal]">
                        DESCRIPTION
                    </div>
                </div>
                <div className="relative flex-1 min-w-[411px] grow h-[300px] bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                    <div className="left-[129px] absolute h-[29px] top-[135px] opacity-25 [font-family:'Inter',Helvetica] font-bold text-black text-[24px] text-center tracking-[-0.96px] leading-[normal]">
                        DESCRIPTION
                    </div>
                </div>
                <div className="relative flex-1 min-w-[411px] grow h-[300px] bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                    <div className="left-[199px] absolute h-[29px] top-[135px] opacity-25 [font-family:'Inter',Helvetica] font-bold text-black text-[24px] text-center tracking-[-0.96px] leading-[normal]">
                        DESCRIPTION
                    </div>
                </div>
                <div className="relative flex-1 min-w-[411px] grow h-[300px] bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                    <div className="left-[199px] absolute h-[29px] top-[135px] opacity-25 [font-family:'Inter',Helvetica] font-bold text-black text-[24px] text-center tracking-[-0.96px] leading-[normal]">
                        DESCRIPTION
                    </div>
                </div>
                <div className="relative flex-1 min-w-[411px] grow h-[300px] bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                    <div className="left-[199px] absolute h-[29px] top-[135px] opacity-25 [font-family:'Inter',Helvetica] font-bold text-black text-[24px] text-center tracking-[-0.96px] leading-[normal]">
                        DESCRIPTION
                    </div>
                </div>
            </div> */}

            <FAQs />

            <Footer />
        </div>



    )
}