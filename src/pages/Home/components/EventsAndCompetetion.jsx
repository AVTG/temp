import { EventsData } from "./EventsData";
import { EventsElement } from './EventsElement.jsx';


import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './style.css';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


export const EventsAndCompetetion = () => {
  return (
    <div className="flex flex-col w-[100%]  gap-[48px]  relative bg-[#FAF6F0] rounded-[30px]   border-black mx-auto items-center py-[5rem]">
      <div className="flex flex-col w-10/12 items-start gap-[12px] relative ">
        <h1 className="text-[#191919] text-[2.2rem] tracking-[-2.88px] relative  mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black leading-[normal]">
          Events and Competitions
        </h1>
        <p className="relative  opacity-50 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[1.5rem] tracking-[-0.96px] leading-[normal]">
          Stay updated with the latest sports events and competitions organized by the college. From intercollegiate
          tournaments to friendly matches, there&#39;s something for everyone.
        </p>
      </div>
      <div className="flex flex-wrap items-start relative justify-center w-[95%] self-center overflow-hidden">
        <Swiper
          slidesPerView={4}
          navigation={window.innerWidth > 500}
          pagination={true}
          mousewheel={true}
          autoplay={{ delay: 1, disableOnInteraction: true }}
          keyboard={true}
          direction="horizontal"
          breakpoints={{
            250: {
              slidesPerView: 1,
              spaceBetween: 60,
            },

            940: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1324: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
    
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {
            EventsData.map((currElement) => (
              <SwiperSlide>
                <EventsElement key={currElement.id} currElement={currElement} />
              </SwiperSlide>
            ))
          }
        </Swiper>


      </div>
    </div>
  );
};