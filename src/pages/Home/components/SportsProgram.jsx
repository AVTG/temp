import { Data } from '../../../Data';
import { SportsElement } from './SportsElement'
import { useEffect, useRef } from 'react'
export const SportsProgram = ({setContentRef}) => {
    const targetRef = useRef(0);
    useEffect(() => {
        setContentRef(targetRef);
    }, [targetRef , setContentRef]) ;


    return (
        <div ref={targetRef} className="flex flex-col w-10/12 items-center justify-center gap-[4rem] bg-[#ffffff] mx-auto mt-10"  >
            <div className="flex flex-col items-start gap-[0.6rem] w-full ">

                <div className=" mt-[-1.00px] [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.88px] leading-[normal]">
                    Sports Programs
                </div>

                <p className="opacity-60  [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                    Explore the wide range of sports programs offered by our college, from team sports to individual activities.
                </p>
            </div>


            <div className="flex flex-wrap items-center justify-center gap-[4rem] relative overflow-x-hidden mb-[6rem] w-[100%]">
                {
                    Data.SportsData.filter(object => {
                        return object.id > 0 
                    }).map((currElement) => {
                        return <SportsElement key={currElement.id} currElement={currElement} />
                    })
                }
            </div>

        </div>
    )
}