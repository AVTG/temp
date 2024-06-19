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
            <div className="flex flex-wrap w-[100%] items-start justify-center gap-[12px_12px] p-[120px] relative  bg-[#f0efef] rounded-[30px] overflow-hidden">
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
            </div>

            <FAQs />

            {/* contact us page */}
            {/* <div className="flex flex-wrap w-[100%] items-center gap-[48px_48px] p-[120px] relative bg-[#0e0e0e] rounded-[30px] overflow-hidden">
                <div className="min-w-[600px] gap-[24px]  flex flex-col items-start relative mx-auto">
                    <div className="flex items-start gap-[10px] relative self-stretch w-full">
                        <div className="relative mt-[-1.00px] [font-family:'Inter',Helvetica] font-black text-[#fffafa] text-[72px] tracking-[-2.88px] leading-[normal]">
                            Contact Us
                        </div>
                    </div>
                    <div className="flex-wrap gap-[24px_24px] self-stretch w-full flex items-start justify-center relative">
                        <div className="flex flex-col min-w-max items-start gap-[4px] relative ">
                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#fffbfb] text-[24px] tracking-[-0.96px] leading-[normal]">
                                Phone
                            </div>
                            <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#fffbfb] text-[24px] tracking-[-0.96px] leading-[normal]">
                                123-456-7890
                            </div>
                        </div>
                        <div className="flex flex-col min-w-[256px] items-start gap-[4px] relative flex-1 grow">
                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#fffbfb] text-[24px] tracking-[-0.96px] leading-[normal]">
                                Email
                            </div>
                            <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#fffbfb] text-[24px] tracking-[-0.96px] leading-[normal]">
                                info@collegesports.com
                            </div>
                        </div>
                        <div className="flex flex-col min-w-[256px] items-start gap-[4px] relative ">
                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#fffbfb] text-[24px] tracking-[-0.96px] leading-[normal]">
                                Office Location
                            </div>
                            <p className="relative [font-family:'Inter',Helvetica] font-normal text-[#fffbfb] text-[24px] tracking-[-0.96px] leading-[normal]">
                                123 Main Street, City, State
                            </p>
                        </div>

                        <button className=" box-border flex items-center justify-center gap-[10px] pt-[40px] pb-0 px-0 relative  w-full [font-family:'Inter',Helvetica] font-normal text-[#fffbfb] text-[3rem] tracking-[-0.96px] leading-[normal]">
                            Submit
                        </button>
                    </div>
                </div>
            </div> */}

            <Footer />
        </div>



    )
}