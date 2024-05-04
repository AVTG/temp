export const FacilitiesElement = (props) => {
    return (
        <div className="flex flex-col w-[250px] h-[250px] items-center relative justify-center">
            <img
                className="w-full  object-cover"
                alt="Pexels monstera"
                src={props.currElement.image}
            />

            <div className="absolute w-[100%] bottom-[40px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#fffcfc] text-[2rem] text-center tracking-[-1.92px] leading-[normal]">
                {props.currElement.FacilityTitle}
            </div>
        </div>
    )
}