import { FacilitiesData } from './FacilitiesData.js'
import { FacilitiesElement } from './FacilitiesElement.jsx'

export const Facilities = () => {

    
    return (
        <div className="mt-10 flex flex-col w-[100%] items-center  bg-[#FAF6F0] rounded-[30px] box-border py-[4rem] gap-[2.5rem] mb-[4rem]">
            <div className="flex flex-col  items-start mx-auto box-border w-10/12">
                <div className=" [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.2px] leading-[normal]">
                    Facilities
                </div>


                <p className="opacity-60 [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                    Highlights the state-of-the-art facilities available at the college for sports and gymkhana activities, such
                    as sports fields, gymnasiums, swimming pools, and fitness centers.
                </p>
            </div>



            <div className="flex items-center justify-center flex-wrap gap-[50px] w-10/12">
                {
                    FacilitiesData.map( (currElement) => {
                        return <FacilitiesElement key = {currElement.id} currElement = {currElement}/>
                    })
                }
            </div>
        </div>
    )
}