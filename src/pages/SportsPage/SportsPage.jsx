import { Navbar } from "../../common/Navbar";
import Footer from "../../common/Footer";
// import image from './assets/AVTG.jpg';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {Data} from "../../Data"
import { SportsPageElement } from "./SportsPageElement";



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
            {/* <div className="flex flex-wrap items-center relative justify-center w-[95%] self-center overflow-hidden mx-auto mt-[2rem]">
                <Swiper
                    navigation={window.innerWidth > 500}
                    pagination={true}
                    mousewheel={true}
                    autoplay={{
                        delay: 3000,
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
            </div> */}

            <SportsPageElement object={object} />


            <Footer />

        </div>
    )
}