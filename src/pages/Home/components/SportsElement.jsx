import { NavLink } from "react-router-dom"


export const SportsElement = (props) => {
    return (
        <NavLink to={`/sports/${props.currElement.id}`} className="flex flex-col gap-[1.5rem] items-center justify-center ">
            <img
                className="w-[200px] h-[200px] object-cover"
                alt="Ellipse"
                src={props.currElement.image}
            />
            <div className="[font-family:'Inter-SemiBold',Helvetica]  text-black text-[1.65rem] tracking-[-2.2px] leading-[normal]">
                {props.currElement.sportsName}
            </div>
        </NavLink>
    )
}