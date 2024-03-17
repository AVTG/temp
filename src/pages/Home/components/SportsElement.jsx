

export const SportsElement = (props) => {
    return (
        <div className="flex flex-col gap-[1.5rem] items-center justify-center ">
                    <img
                        className="w-[200px] h-[200px] object-cover"
                        alt="Ellipse"
                        src={props.currElement.image}
                    />
                    <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[1.75rem] tracking-[-1.92px] leading-[normal]">
                        {props.currElement.sportsName}
                    </div>
                </div>
    )
}