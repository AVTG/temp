export const Facilities = () => {
    return (
        <div className="mt-10 flex flex-col w-[100%] items-center  bg-[#FAF6F0] rounded-[30px] box-border py-[4rem] gap-[2.5rem] mb-[4rem]">
            <div className="flex flex-col  items-start mx-auto box-border w-10/12">
                <div className=" [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.2px] leading-[normal]">
                    Facilities
                </div>


                <p className="opacity-60 [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal]">
                    Highlights the state-of-the-art facilities available at the college for sports and gymkhana activities, such
                    as sports fields, gymnasiums, swimming pools, and fitness centers.
                </p>
            </div>



            <div className="flex items-center justify-center flex-wrap gap-[50px] w-10/12">
                <div className="flex flex-col w-[250px] h-[250px] items-center relative justify-center">
                    <img
                        className="w-full  object-cover"
                        alt="Pexels monstera"
                        src="https://c.animaapp.com/o8DcutcR/img/pexels-monstera-production-6999241-2@2x.png"
                    />
                    <div className="absolute w-[100%] bottom-[40px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#fffcfc] text-[2rem] text-center tracking-[-1.92px] leading-[normal]">
                        Gymnassium
                    </div>
                </div>

                <div className="flex flex-col w-[250px] h-[250px] items-center relative justify-center">
                    <img
                        className="w-full object-cover"
                        alt="Istockphoto"
                        src="https://c.animaapp.com/o8DcutcR/img/istockphoto-526209153-612x612-2@2x.png"
                    />
                    <div className="absolute w-[100%] bottom-[40px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#fffcfc] text-[2rem] text-center tracking-[-1.92px] leading-[normal]">
                        Indoor Arenas
                    </div>
                </div>
                <div className="flex flex-col w-[250px] h-[250px] items-center relative justify-center">
                    <img
                        className="w-full object-cover"
                        alt="Istockphoto"
                        src="https://c.animaapp.com/o8DcutcR/img/istockphoto-526209153-612x612-2@2x.png"
                    />
                    <div className="absolute w-[100%] bottom-[40px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#fffcfc] text-[2rem] text-center tracking-[-1.92px] leading-[normal]">
                        Indoor Arenas
                    </div>
                </div>
                <div className="flex flex-col w-[250px] h-[250px] items-center relative justify-center">
                    <img
                        className="w-full  object-cover"
                        alt="Esport"
                        src="https://c.animaapp.com/o8DcutcR/img/esport-2@2x.png"
                    />
                    <div className="absolute w-[100%] bottom-[40px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#fffcfc] text-[2rem] text-center tracking-[-1.92px] leading-[normal]">
                        E-Sports
                    </div>
                </div>
            </div>
        </div>
    )
}