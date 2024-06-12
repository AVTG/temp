import { Data } from "../../../Data"
import { FAQElement } from "./FAQElement"
export const FAQs = () => {
    return (
        <div className="flex flex-col w-11/12  items-start gap-[1.5rem]  relative bg-[#ffffff] mx-auto my-[5rem]">
                <div className="relative m-9/12  mt-[-1.00px] [font-family:'Inter',Helvetica] font-black text-[#191919] text-[3rem] tracking-[-2.2px] leading-[normal] ">
                    FAQs
                </div>
            <div className="flex-col gap-[15px] self-stretch w-full  flex items-start relative">

                {
                    Data.HomeData.FAQDATA.map((currQuestion) => {
                        return <FAQElement key={currQuestion.id} currQuestion = {currQuestion} />
                    })
                }
            </div>
        </div>
    )
}