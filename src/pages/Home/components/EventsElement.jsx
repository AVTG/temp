export const EventsElement = (props) => {
  return (
    <div className="flex flex-col max-w-[25rem] items-start justify-center gap-[4px] relative rounded-[20px] overflow-hidden ">
      <div className="flex items-center relative self-stretch w-full transition-all duration-1000">
        <div className="flex flex-col items-start justify-center gap-[12px] px-[32px] py-[24px] relative bg-[#191919] rounded-[20px] overflow-hidden [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[1rem] tracking-[-0.80px] leading-[normal] ">
          {props.currElement.date}
        </div>
        <div className="relative flex-1 grow h-[2px] bg-[#191919]" />
      </div>
      <div className="flex flex-col items-start justify-center gap-[10px] pl-0 pr-[24px] py-0 relative self-stretch w-full ">
        <div className="flex flex-col items-start justify-center gap-[12px] p-[32px] relative self-stretch w-full  rounded-[20px] overflow-hidden [font-family:'Inter-Black',Helvetica] font-semibold text-black text-[1.65rem] tracking-[-1.60px] leading-[normal] bg-[#C4DFDF]">
        {props.currElement.heading}
        <p className="relative self-stretch opacity-50 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[1.3rem] tracking-[-0.96px] leading-[normal]">
        {props.currElement.description}
        </p>
        </div>
      </div>
    </div>
  )
}