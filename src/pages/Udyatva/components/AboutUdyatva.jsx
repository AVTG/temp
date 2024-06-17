import { Data } from "../../../Data"
export const AboutUdyatva = () => {
    return (
        <div className="flex-col  items-start justify-center space-x-[48px] space-y-[48px] w-10/12  bg-[#ffffff] mx-auto ">
            <div className="flex-col items-center gap-[0.5rem]">

                <div className="  [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.88px] leading-[normal] self-start">
                    About Udyatva
                </div>
                <p className="opacity-60  [font-family:'Inter',Helvetica] font-normal text-black text-[1.5rem] tracking-[-0.96px] leading-[normal] self-start">
                    Experience the thrill and excitement of Udyatva, a three-day college sports extravaganza!
                </p>
            </div>
            <div className="justify-center gap-[1.5rem] flex flex-wrap self-center ">

                {
                    Data.UdyatvaData.AboutUdyatva.map(object => {
                        return (
                            <div key={object.id} className="min-w-[200px] gap-[12px] p-[2.2rem] flex-col max-w-[310px] items-start justify-start rounded-[10px] overflow-hidden bg-[#F9EFDB]">
                                <div className="relative mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[1.7rem] tracking-[-1.60px] leading-[normal]">
                                    {object.heading}
                                </div>
                                <p className="opacity-50 relative [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                                    {object.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}