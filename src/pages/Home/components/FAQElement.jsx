import { useState } from "react"

export const FAQElement = (props) => {
    const [show, setShow] = useState(props.currQuestion.id === 1);
    function changeAnswerHandler(e) {
        setShow(!show);
        e.stopPropagation();
    }

    return (
        <div className="flex flex-col items-start relative self-stretch w-full rounded-[20px]  border border-solid border-[#6b6767b9] overflow-hidden">
            <div className="flex items-center justify-between  relative self-stretch w-full  bg-[#f7f7f7]" >
                <div className="relative max-w-[80%] min-w-[50%] [font-family:'Inter',Helvetica] font-medium text-black text-[1.4rem] tracking-[-1px] leading-[normal] cursor-pointer p-[1.5rem]" onClick={(e) => { changeAnswerHandler(e) }}>
                    {props.currQuestion.question}
                </div>


                <button className={` text-[2rem] font-bold px-[1.5rem] ${show ? 'rotate-90' : 'rotate-0'}`} onClick={(e) => { changeAnswerHandler(e) }} > {`>`} </button>
            </div>

            <div className={`flex items-start gap-[10px] p-[1rem] relative self-stretch w-full transition-all duration-1000 ${show ? "block" : "hidden"}`}>
                <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black text-[1.25rem] tracking-[-0.96px] leading-[normal] opacity-60">
                    {props.currQuestion.answer}
                </p>
            </div>

        </div>
    )
}
