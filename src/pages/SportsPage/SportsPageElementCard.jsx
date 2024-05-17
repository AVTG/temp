import { MdOutlinePermPhoneMsg } from "react-icons/md";



export const SportsPageElementCard = ({ currPosition }) => {
    return (

        <div className="flex flex-col items-center justify-center p-4 min-w-[200px] w-[200px] max-h-min bg-white rounded-3xl space-y-3 ">
            <div className="h-[200px] overflow-hidden rounded-xl  ">
                <img src={currPosition.image} alt="" className="object-center object-cover" />
            </div>
            <div className="flex flex-col items-center space-y-1">
                <h2
                    className="[font-family:'Inter-Bold',Helvetica] text-center font-semibold text-black text-[1.5rem] tracking-[-0.80px] leading-[normal]" >
                    {currPosition.position}
                </h2>
                <h3 className=" text-center [font-family:'Inter-Bold',Helvetica] font-normal text-black text-[1.4rem] tracking-[-0.80px] leading-[normal]">{currPosition.name}</h3>
                <div className="flex justify-center items-center space-x-2">
                    <MdOutlinePermPhoneMsg size="1.5rem" />
                    <h1 className="[font-family:'Inter-Bold',Helvetica]  text-black text-[1.3rem] tracking-[-0.80px] leading-[normal] text-center">{currPosition.mobno}</h1>
                </div>
            </div>
        </div>
    )
}