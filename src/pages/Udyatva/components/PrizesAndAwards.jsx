import { Data } from "../../../Data";
export const PrizesAndAwards = () => {
    return (
        <div className="flex flex-col w-full items-start justify-center gap-[1rem] mx-auto relative bg-[#FAF6F0] py-8">
            <div className="flex flex-col items-start gap-[0.5rem] relative w-10/12 mx-auto ">
                <div className="text-[#191919] text-[2.2rem] tracking-[-2.88px] relative  mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black leading-[normal]">
                    Prizes and Awards
                </div>
                <p className="relative  opacity-50 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[1.5rem] tracking-[-0.96px] leading-[normal]">
                    Highlights the prizes and awards that will be given to the winners of the sports events, mentioning the director of the college as the one who will present the awards.
                </p>
            </div>
            <div className="justify-center flex flex-wrap items-start relative gap-1  w-10/12 mx-auto">

                {
                    Data.UdyatvaData.PrizesAndAwardsData.map(object => {
                        return (
                            <div key={object.id} className="flex flex-col min-w-[300px] max-w-[400px] grow items-start justify-center gap-[0.3rem] p-[24px] relative bg-[#F9EFDB] rounded-[10px] overflow-hidden">
                                <div className="text-[#191919] text-[2rem] tracking-[-2.88px] relative  mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black leading-[normal]">
                                    {object.heading}
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