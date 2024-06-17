import { Card } from "../../common/Card";
export const SportsPageElement = ({ object }) => {

    return (
        <div className="w-[100%] bg-[#e8e8e8] space-y-9 ">
            <div className=" mx-auto text-center [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.88px] leading-[normal] self-start">{object.sportsName + " Club at IIITBH"}</div>

            <div className={`w-11/12 mx-auto space-y-5 flex flex-col-reverse lg:flex-row lg:gap-10 lg:space-y-0 justify-center gap-3 ${object.positions.length > 1 ? "" : "md:flex-row"}`}>
                {/* tenet */}
                <div className={`flex-col items-start ${object.positions.length > 1 ? "lg:max-w-[50%] " : "lg:max-w-[65%] "} space-y-3`}>
                    <div className="  [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2rem] tracking-[-2.88px] leading-[normal] ">
                        Tenet
                    </div>
                    <div className="flex-col space-y-3 items-center">
                        <div className="opacity-80  [font-family:'Inter',Helvetica] font-light text-black text-[1.35rem] tracking-[-0.96px] leading-[normal] italic">
                            ❝ {object.tenet.Quote} ❞
                        </div>

                        <div className="opacity-80  [font-family:'Inter',Helvetica] font-normal text-black text-[1.25rem] tracking-[-0.96px] leading-[normal] italic ">
                            ~ {object.tenet.Author}
                        </div>
                    </div>

                    <div className="opacity-75  [font-family:'Inter',Helvetica] font-normal text-black text-[1.3rem] tracking-[-0.96px] leading-[normal]">
                        {object.tenet.Desription}
                    </div>
                </div>

                {/* Position Of Responsibility Cards */}
                <div className="gap-3 items-center justify-center flex flex-wrap">
                    {
                        object.positions.map((currPosition, index) => {
                            return <Card key={index + 1} currPosition={currPosition} sportsName={object.sportsName} />
                        })
                    }
                </div>
            </div>

            {/* fields (if any) */}
            {object.fields.length > 0 &&
                <div className=" w-10/12 lg:w-9/12 mx-auto flex-col space-y-2">
                    <div className=" mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[1.5rem] tracking-[-1.60px] leading-[normal]">
                        Fields
                    </div>
                    <ol className=" flex-col space-y-1 list-disc pl-5">
                        {
                            object.fields.map((field, index) => {
                                return (
                                    <li key={index} className="opacity-70  [font-family:'Inter',Helvetica] font-normal text-black text-[1.15rem] tracking-[-0.96px] leading-[normal]">{field.field}</li>
                                )
                            })
                        }
                    </ol>

                </div>}
        </div>
    )

}