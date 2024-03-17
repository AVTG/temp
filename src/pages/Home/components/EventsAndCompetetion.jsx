import React from "react";
import { EventsData } from "./EventsData";
import { EventsElement } from './EventsElement.jsx';

export const EventsAndCompetetion = () => {
  return (
    <div className="flex flex-col w-[100%]  gap-[48px]  relative bg-[#FAF6F0] rounded-[30px]   border-black mx-auto items-center py-[5rem]">
      <div className="flex flex-col w-10/12 items-start gap-[12px] relative ">
        <div className="text-[#191919] text-[2.2rem] tracking-[-2.88px] relative  mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black leading-[normal]">
          Events and Competitions
        </div>
        <p className="relative  opacity-50 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[1.5rem] tracking-[-0.96px] leading-[normal]">
          Stay updated with the latest sports events and competitions organized by the college. From intercollegiate
          tournaments to friendly matches, there&#39;s something for everyone.
        </p>
      </div>
      <div className="flex flex-wrap items-start gap-[0px_32px] relative justify-center w-[90vw] self-center overflow-hidden">
          {
            EventsData.map((currElement) => (
               <EventsElement key={currElement.id} currElement={currElement} />
            ))
          }

        {/* <div className="flex flex-col min-w-[400px] items-start justify-center gap-[4px] relative flex-1 grow rounded-[20px] overflow-hidden">
          <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-[12px] px-[32px] py-[24px] relative bg-[#191919] rounded-[20px] overflow-hidden [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[20px] tracking-[-0.80px] leading-[normal]">
              November 15-18, 2022
            </div>
            <div className="relative flex-1 grow h-[2px] bg-[#191919]" />
          </div>
          <div className="flex flex-col items-start justify-center gap-[10px] pl-0 pr-[24px] py-0 relative self-stretch w-full ">
            <div className="flex flex-col items-start justify-center gap-[12px] p-[32px] relative self-stretch w-full bg-[#f7f7f7] rounded-[20px] overflow-hidden [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
                Intercollegiate Basketball Tournament
              </div>
              <p className="relative self-stretch opacity-50 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[-0.96px] leading-[normal]">
                Watch the best college basketball teams battle it out in the annual intercollegiate tournament. Date:
                November 15-18, 2022
              </p>
            </div>
        </div>
        <div className="flex flex-col min-w-[400px] items-start justify-center gap-[4px] relative flex-1 grow rounded-[20px] overflow-hidden">
          <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-[12px] px-[32px] py-[24px] relative flex-[0_0_auto] bg-[#191919] rounded-[20px] overflow-hidden">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[20px] tracking-[-0.80px] leading-[normal]">
                December 3, 2022
              </div>
            </div>
            <div className="relative flex-1 grow h-[2px] bg-[#191919]" />
          </div>
          <div className="flex flex-col items-start justify-center gap-[10px] pl-0 pr-[24px] py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start justify-center gap-[12px] p-[32px] relative self-stretch w-full bg-[#f7f7f7] rounded-[20px] overflow-hidden">
              <div className="relative self-stretch [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
                College Football Championship
              </div>
              <p className="relative self-stretch opacity-50 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[-0.96px] leading-[normal]">
                Cheer for your favorite college football team as they compete for the championship title. Date: December
                3, 2022
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[400px] items-start justify-center gap-[4px] relative flex-1 grow rounded-[20px] overflow-hidden">
          <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-[12px] px-[32px] py-[24px] relative flex-[0_0_auto] bg-[#191919] rounded-[20px] overflow-hidden">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[20px] tracking-[-0.80px] leading-[normal]">
                January 20-22, 2023
              </div>
            </div>
            <div className="relative flex-1 grow h-[2px] bg-[#191919]" />
          </div>
          <div className="flex flex-col items-start justify-center gap-[10px] pl-0 pr-[24px] py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col  items-start justify-center gap-[12px] p-[32px] relative self-stretch w-full bg-[#f7f7f7] rounded-[20px] overflow-hidden">
              <div className="text-black text-[40px] tracking-[-1.60px] relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black leading-[normal]">
                Gymkhana Badminton Tournament
              </div>
              <p className="relative self-stretch opacity-50 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] tracking-[-0.96px] leading-[normal]">
                Show off your badminton skills in the gymkhana badminton tournament. Open to all college students. Date:
                January 20-22, 2023
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};