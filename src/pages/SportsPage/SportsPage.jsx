import { Navbar } from "../../common/Navbar";
import Footer from "../../common/Footer";
// import image from './assets/AVTG.jpg';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {Data} from "../../Data"
import { SportsPageElement } from "./SportsPageElement";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export const SportsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []
    )

    const location = useLocation();
    // const [searchParams] = useSearchParams();

    let id = null;

    if (location.pathname.includes("sports")) {
        id = location.pathname.split("/").at(-1);
    }

    let object = Data.SportsData.find(obj => obj.id === Number(id));

    return (

        <div className="bg-[#e8e8e8] w-[100%]  min-h-[100vh] flex-col space-y-5">
            <Navbar />

            {/* sport image */}
            <div className="flex flex-wrap items-center relative justify-center w-[95%] self-center overflow-hidden mx-auto mt-[2rem]">
                <Swiper
                    navigation={window.innerWidth > 500}
                    pagination={true}
                    mousewheel={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                    }}
                    keyboard={true}
                    direction="horizontal"



                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    className="mySwiper w-[100%]" >
                    <SwiperSlide>
                        <div className="w-[100%] h-[500px] bg-white border-black border-1">

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[100%] h-[500px] bg-white border-black border-1">

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[100%] h-[500px] bg-white border-black border-1">

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[100%] h-[500px] bg-white border-black border-1">

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[100%] h-[500px] bg-white border-black border-1">

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <SportsPageElement object={object} />

            {
                //     <div className="w-10/12 mx-auto flex justify-center space-x-[3rem] ">
                //     <div className=" flex-col items-start space-y-4">
                //         <div className="  [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2rem] tracking-[-2.88px] leading-[normal] ">
                //             Tenet
                //         </div>
                //         <div className="flex-col space-y-3 items-center">
                //             <div className="opacity-80  [font-family:'Inter',Helvetica] font-light text-black text-[1.35rem] tracking-[-0.96px] leading-[normal] italic">
                //                 ❝ A hundred or a fifty is just the number, but what really matters is the team goals and the team contributions. ❞
                //             </div>

                //             <div className="opacity-80  [font-family:'Inter',Helvetica] font-normal text-black text-[1.25rem] tracking-[-0.96px] leading-[normal] italic ">
                //                 ~ Kumar Sangakkara
                //             </div>
                //         </div>

                //         <div className="opacity-75  [font-family:'Inter',Helvetica] font-normal text-black text-[1.3rem] tracking-[-0.96px] leading-[normal]">
                //             Cricket, a bat-and-ball game, is more than just a sport. This Sport unites our diverse student body, acts as a common language that bridges backgrounds and fosters camaraderie. It embodies qualities such as resilience, teamwork, respect, and strategic thinking—values we champion at IITBH. Major tournaments and friendly matches transform cricket into a vibrant community celebration, enhancing our campus spirit and fostering unity. At IIITBH, cricket is not just a sport it’s a cherished tradition and a vital part of our communal identity, igniting passion and bringing us together in the true spirit of sportsmanship.
                //         </div>
                //     </div>
                //     {/* Position Of Responsibility Cards */}
                //     <div className="flex flex-wrap justify-center items-center gap-5 min-w-max max-w-[450px]">
                //         <div className="flex flex-col items-center justify-center p-4 w-[200px] max-h-min bg-white rounded-3xl space-y-2 ">
                //             <div className="w-[150px] h-[200px] overflow-hidden rounded-xl  ">
                //                 <img src={image} alt="" className="object-center object-cover" />
                //             </div>
                //             <div className="flex flex-col items-center">
                //                 <h2
                //                     className="[font-family:'Inter-Bold',Helvetica] font-semibold text-black text-[1.5rem] tracking-[-0.80px] leading-[normal]" >
                //                     Vice President
                //                 </h2>
                //                 <h3 className="[font-family:'Inter-Bold',Helvetica] font-semibold text-black text-[1.3rem] tracking-[-0.80px] leading-[normal]">AVTG</h3>
                //                 <div className="flex justify-center items-center space-x-2">
                //                     <MdOutlinePermPhoneMsg size="1.5rem" />
                //                     <h1 className="[font-family:'Inter-Bold',Helvetica]  text-black text-[1.3rem] tracking-[-0.80px] leading-[normal] text-center">9664468638</h1>
                //                 </div>
                //             </div>
                //         </div>
                //         <div className="flex flex-col items-center justify-center p-4 max-w-[200px] bg-white rounded-3xl space-y-2 ">
                //             <div className="w-[150px] max-h-[200px] overflow-hidden rounded-xl  ">
                //                 <img src={image} alt="" className="object-center object-cover" />
                //             </div>
                //             <div className="flex flex-col items-center">
                //                 <h2
                //                     className="[font-family:'Inter-Bold',Helvetica] font-semibold text-black text-[1.5rem] tracking-[-0.80px] leading-[normal]" >
                //                     Vice President
                //                 </h2>
                //                 <h3 className="[font-family:'Inter-Bold',Helvetica] font-semibold text-black text-[1.3rem] tracking-[-0.80px] leading-[normal]">AVTG</h3>
                //                 <div className="flex justify-center items-center space-x-2">
                //                     <MdOutlinePermPhoneMsg size="1.5rem" />
                //                     <h1 className="[font-family:'Inter-Bold',Helvetica]  text-black text-[1.3rem] tracking-[-0.80px] leading-[normal] text-center">9664468638</h1>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
            }

            {/* <div className="w-10/12 mx-auto flex-col space-y-2">
                <div className=" mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[1.5rem] tracking-[-1.60px] leading-[normal]">
                    Fields
                </div>
                <ol className=" flex-col space-y-1 list-disc pl-5">
                    <li className="opacity-70  [font-family:'Inter',Helvetica] font-normal text-black text-[1.15rem] tracking-[-0.96px] leading-[normal]">The Cricket field with overall diameter of 150 yards with the pitch length of 22 yards</li>
                    <li className="opacity-70  [font-family:'Inter',Helvetica] font-normal text-black text-[1.15rem] tracking-[-0.96px] leading-[normal]">Practice area enclosed with net, pitch length of 22 yards</li>
                </ol>

            </div> */}

            <Footer />

        </div>
    )
}