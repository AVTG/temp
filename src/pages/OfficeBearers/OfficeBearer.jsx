import { Navbar } from "../../common/Navbar";
import Footer from "../../common/Footer";
import { Card } from "../../common/Card";
import { Data } from '../../Data';

export const OfficeBearer = () => {
    return (
        <div className="bg-[#e8e8e8] w-[100%] space-y-10">
            <Navbar />
            <div className="w-11/12 mx-auto flex-col space-y-14">
                <div className="flex-col space-y-5 items-center">
                    <div className="  [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.88px] leading-[normal] text-center">Office Bearers </div>

                    <div className="flex flex-wrap gap-5 justify-center">
                        {Data.SportsData[0].positions.map((currPosition, index) => {
                            return <Card key={index + 1} currPosition={currPosition} sportsName="Sports Board" />
                        })}
                    </div>
                </div>
                <div className="flex-col space-y-5 items-center">
                    <div className="  [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.88px] leading-[normal] text-center">General Secretary & Nominee</div>

                    <div className="flex flex-wrap gap-5 justify-center">
                        {Data.SportsData[1].positions.map((currPosition, index) => {
                            return <Card key={index + 1} currPosition={currPosition} sportsName="Sports Board" />
                        })}
                    </div>
                </div>
                <div className="flex-col space-y-5 items-center ">
                    <div className="  [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.88px] leading-[normal] text-center">Club Secretary And In-Charge</div>

                    <div className="flex flex-wrap gap-5 justify-center">
                        {Data.SportsData.filter(object => {
                            return object.id > 0
                        }).map(object => {
                            console.log(object);

                            return object.positions.map((currPosition, index) => {
                                return <Card key={index + 1} currPosition={currPosition} sportsName={object.sportsName} />
                            })

                        })}

                    </div>



                </div>
            </div>
            <Footer />
        </div>
    )
}