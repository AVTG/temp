import { Data } from "../../../Data";
export const SportsEvents = () => {
    return (
        <div className="flex flex-col w-10/12 items-start gap-[48px] relative bg-white mx-auto">
            <div className="flex flex-col items-start gap-[0.5rem] relative w-full">
                <div className="text-[#191919] text-[2.2rem] tracking-[-2.88px] relative  mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black leading-[normal]">
                    Sports Events
                </div>
                <p className="relative  opacity-50 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[1.5rem] tracking-[-0.96px] leading-[normal]">
                    Showcases the different sports events that will take place during Udyatva, providing information about each
                    event and its rules.
                </p>
            </div>
            <div className="justify-center flex flex-wrap items-start relative gap-1  w-full ">

                {
                    Data.UdyatvaData.SportsEvents.map(object => {
                        return (
                            <div key={object.id} className="flex flex-col min-w-[300px] max-w-[400px] grow items-start justify-center gap-[0.3rem] p-[24px] relative bg-[#f7f7f7] rounded-[10px] overflow-hidden">
                                <div className="text-[#191919] text-[2rem] tracking-[-2.88px] relative  mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black leading-[normal]">
                                    {object.sportsName}
                                </div>
                                <p className="relative  opacity-50 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[1.3rem] tracking-[-0.96px] leading-[normal]">
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