import { Data } from '../../../Data.js';
import { FacilitiesElement } from './FacilitiesElement.jsx'

export const Facilities = () => {

    
    return (
        <div className=" flex flex-col w-[100%] items-center  rounded-[30px] box-border py-[2rem] gap-[2.5rem] mb-[4rem]">
            <div className="flex flex-col  items-start mx-auto box-border w-10/12 space-y-3">
                <div className=" [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.2px] leading-[normal]">
                    Facilities
                </div>


                <p className="opacity-60 [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                At our college, we take pride in offering state-of-the-art sports facilities that cater to athletes of all levels. Our campus boasts modern, fully-equipped gyms, expansive sports fields, and specialized courts for basketball, tennis, and volleyball. Beyond the physical amenities, we foster a culture of encouragement and support. We believe in the power of teamwork and sportsmanship, encouraging all athletes to push their limits while building lasting friendships and a sense of community.
                </p>
            </div>



            <div className="flex items-center justify-center flex-wrap gap-[50px] w-10/12">
                {
                    Data.HomeData.FacilitiesData.map( (currElement) => {
                        return <FacilitiesElement key = {currElement.id} currElement = {currElement}/>
                    })
                }
            </div>
        </div>
    )
}