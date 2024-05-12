import React from "react";
import { Navbar } from "./components/Navbar";
import { SportsProgram } from "./components/SportsProgram";
import { Facilities } from "./components/Facilities";
import { EventsAndCompetetion } from "./components/EventsAndCompetetion";
import { FAQs } from "./components/FAQs";
import { useRef } from "react";
import Footer from "./components/Footer" ;

export const Home = () => {


    const contentRef = useRef(0);
    // const scrollToContent = () => {
    //     if (contentRef.current) {
    //         contentRef.current.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };


    return (


        // container
        <div className="bg-[#ffffff] w-100% box-border ">
            {
                // console.log(SportsProgram.targetRef)
            }
            <Navbar contentRef={contentRef} />

            {/* Image  */}
            <div className="w-[100%]overflow-x-hidden relative mb-5">
                <img
                    className="relative"
                    src="https://c.animaapp.com/o8DcutcR/img/picsart-24-02-21-19-03-01-373-1.png"
                    alt="abcd"
                />
            </div >

            {/* About */}
            <div className="flex flex-col  items-start justify-center gap-[48px] w-10/12  bg-[#ffffff] mx-auto mb-[4rem]">
                <div className="flex flex-col items-center gap-[0.5rem]">

                    <div className="  [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.88px] leading-[normal] self-start">
                        About
                    </div>
                    <p className="opacity-60  [font-family:'Inter',Helvetica] font-normal text-black text-[1.5rem] tracking-[-0.96px] leading-[normal] self-start">
                        Provides a brief introduction to the college sports and gymkhana, highlighting its history, facilities, and
                        achievements.
                    </p>
                </div>
                <div className="justify-center gap-[1.5rem] flex flex-wrap self-center ">
                    <div className="min-w-[200px] gap-[12px] p-[2.2rem] flex flex-col max-w-[310px] items-start justify-start  rounded-[10px] overflow-hidden bg-[#F9EFDB]">
                        <div className=" mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[1.7rem] tracking-[-1.60px] leading-[normal]">
                            History
                        </div>
                        <p className="opacity-50  [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                            Discover the rich history of our college sports and gymkhana, spanning over decades.
                        </p>
                    </div>
                    <div className="min-w-[200px] gap-[12px] p-[2.2rem] flex flex-col max-w-[310px] items-start justify-start rounded-[10px] overflow-hidden bg-[#F9EFDB]">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[1.7rem] tracking-[-1.60px] leading-[normal]">
                            Achievements
                        </div>
                        <p className="opacity-50 relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                            Learn about the remarkable achievements of our college sports teams and individual athletes.
                        </p>
                    </div>
                    <div className="min-w-[200px] justify-start gap-[12px] p-[2.2rem]  flex flex-col max-w-[310px] items-start  rounded-[10px] bg-[#F9EFDB]">
                        <div className=" mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[1.7rem] tracking-[-1.60px] leading-[normal]">
                            Events
                        </div>
                        <p className="opacity-50 [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                            Stay updated with the latest sports events and competitions happening at our college.
                        </p>
                    </div>
                    <div className="min-w-[200px] justify-start gap-[12px] p-[2.2rem]  flex flex-col max-w-[310px] items-start  bg-[#F9EFDB] rounded-[10px]">
                        <div className=" mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[1.7rem] tracking-[-1.60px] leading-[normal]">
                            Facilities
                        </div>
                        <p className="opacity-50 relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                            Explore our state-of-the-art facilities that cater to a wide range of sports and activities.
                        </p>
                    </div>
                </div>

            </div>


            {/* facilities */}
            <Facilities />


            {/* sports program */}
            <SportsProgram setContentRef={ref => contentRef.current = ref} />

            {/* Events and Competetitions */}
            <EventsAndCompetetion />

            {/* Athlete Profiles */}
            {/* <div className="flex flex-col w-10/12 items-start gap-[3rem] relative bg-[#ffffff] mx-auto my-[4rem]">
                <div className="flex flex-col items-start gap-[0.5rem] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-start  relative w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.5rem] tracking-[-2.88px] leading-[normal]">
                        Athlete Profiles
                    </div>
                    <p className="opacity-60 relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[1.5rem] tracking-[-0.96px] leading-[normal]">
                        Features profiles of outstanding athletes and sports personalities associated with the college, showcasing
                        their achievements, awards, and contributions.
                    </p>
                </div>
                <div className="flex-wrap justify-center gap-[4px_4px] self-stretch w-full flex-[0_0_auto] flex items-start relative">
                    <div className="min-w-[400px] justify-center gap-[12px] p-[24px] flex-1 grow flex flex-col max-w-[610px] items-start relative bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[1.85rem] tracking-[-1.60px] leading-[normal]">
                            Champion Athletes
                        </div>
                        <p className="opacity-50 relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                            Discover the stories of our champion athletes who have excelled in their respective sports and brought
                            glory to our college.
                        </p>
                    </div>
                    <div className="min-w-[400px] justify-center gap-[12px] p-[24px] flex-1 grow flex flex-col max-w-[610px] items-start relative bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[1.85rem] tracking-[-1.60px] leading-[normal]">
                            Award-Winning Coaches
                        </div>
                        <p className="opacity-50 relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                            Learn from the best! Get inspired by our award-winning coaches who have trained and mentored athletes to
                            reach their full potential.
                        </p>
                    </div>
                    <div className="min-w-[400px] justify-center gap-[12px] p-[24px] flex-1 grow flex flex-col max-w-[610px] items-start relative bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[1.85rem] tracking-[-1.60px] leading-[normal]">
                            Hall of Fame
                        </div>
                        <p className="opacity-50 relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                            Explore the prestigious Hall of Fame, honoring the legendary athletes who have made a lasting impact on
                            our college&#39;s sports legacy.
                        </p>
                    </div>
                    <div className="min-w-[400px] justify-center gap-[12px] p-[24px] flex-1 grow flex flex-col max-w-[610px] items-start relative bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[1.85rem] tracking-[-1.60px] leading-[normal]">
                            Community Heroes
                        </div>
                        <p className="opacity-50 relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                            Meet our sports personalities who have not only achieved greatness in their sports but also made
                            significant contributions to the community.
                        </p>
                    </div>
                    <div className="min-w-[400px] justify-center gap-[12px] p-[24px] flex-1 grow flex flex-col max-w-[610px] items-start relative bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[1.85rem] tracking-[-1.60px] leading-[normal]">
                            Inspiring Journeys
                        </div>
                        <p className="opacity-50 relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                            Be inspired by the incredible journeys of our athletes, from overcoming obstacles to achieving their
                            dreams on and off the field.
                        </p>
                    </div>
                </div>
            </div> */}


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

            <Footer/>
        </div>



    )
}