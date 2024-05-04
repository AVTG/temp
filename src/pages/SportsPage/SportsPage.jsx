// import { useLocation } from "react-router-dom"
import { Navbar } from "../Home/components/Navbar";
import image from './assets/AVTG.jpg';
import { MdOutlinePermPhoneMsg } from "react-icons/md";
export const SportsPage = () => {
    // const location = useLocation();
    // const sportsName = location.pathname.split("/").at(-1);
    // console.log(sportsName) ;

    return (

        <div class="bg-[#e8e8e8] w-[100%]  min-h-[100vh]">
            <Navbar />

            {/* card */}
            <div className="w-10/12 mx-auto pt-[100px]">
                <div class="flex flex-col items-center justify-center p-4 max-w-[200px] bg-white rounded-3xl space-y-2">
                    <div className="w-[150px] max-h-[200px] overflow-hidden rounded-xl  ">
                        <img src={image} alt="" className="object-center object-cover" />
                    </div>
                    <div className="flex flex-col  items-center">
                        <h2
                            class="[font-family:'Inter-Bold',Helvetica] font-semibold text-black text-[1.5rem] tracking-[-0.80px] leading-[normal]" >
                            Vice President
                        </h2>
                        <h3 class="[font-family:'Inter-Bold',Helvetica] font-semibold text-black text-[1.3rem] tracking-[-0.80px] leading-[normal]">AVTG</h3>
                        <div className="flex justify-center items-center space-x-2">
                            <MdOutlinePermPhoneMsg size="1.5rem" />
                            <h1 class="[font-family:'Inter-Bold',Helvetica]  text-black text-[1.3rem] tracking-[-0.80px] leading-[normal] text-center">9664468638</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}