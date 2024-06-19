import React from "react";
import one from '../../../../src/assets/AboutPics/1.jpeg';
import two from '../../../../src/assets/AboutPics/2.jpeg';
import three from '../../../../src/assets/AboutPics/3.jpeg';
import four from '../../../../src/assets/AboutPics/4.jpeg';
import five from '../../../../src/assets/AboutPics/5.jpeg';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import "./style.css";
import { useState, useEffect } from "react";

export const AboutUs = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
    const [isReadMore, setIsReadMore] = useState(false);


    const SlideImages = [
        { img: one },
        { img: four },
        { img: three },
        { img: two },
        { img: five },

    ];

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const description = `At IIIITBH, we understand that your studies are a top priority. However, we also recognize the importance of maintaining a healthy body and mind. That’s why we encourage students to take breaks from their academic pursuits and participate in social sports. Whether it’s a friendly game of basketball, a refreshing run, or a relaxing yoga session, engaging in physical activity contributes to your overall well-being. As the premier sports body at IIITBH, we engage in various social and informal events, host tournaments, and collaborate on numerous initiatives, involving a vast number of dedicated individuals.`

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 850);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <div className=" flex-col items-center justify-center bg-[#ffffff] mx-auto my-[4rem] w-11/12 ">
            <div className="mx-auto [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.2px] leading-[normal] text-center">
                About Us
            </div>
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-2/5 items-center m-auto h-full about-slide">
                    <Slide>
                        {SlideImages.map((image, index) => (
                            <div key={index} className="each-fade">
                                <div className="image-container w-[80%] h-[300px] overflow-hidden object-fit pl-1 m-auto rounded-xl  backgroundSize: 'cover', backgroundPosition: 'center'">
                                    <img src={image.img} alt={`slide-${index}`} className="object-cover" />
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
                <div className="md:w-3/5 about-cont ">
                    <p className="p-8 opacity-70 text-[1.4rem] tracking-[-0.96px] leading-[30px] self-start [font-family:'Inter',Helvetica]  text-[#191919] ">

                        {isMobile ? (
                            isReadMore ? description : `${description.substring(0, 500)}....`
                        ) : (
                            description
                        )}
                        {isMobile && (
                            <span
                                style={{
                                    color: '#12b8c8',
                                    textTransform: 'capitalize',
                                    cursor: 'pointer',
                                }}
                                onClick={toggleReadMore}
                            >
                                {isReadMore ? ' show less' : ' read more'}
                            </span>
                        )}


                    </p>
                </div>
            </div>
        </div>

    )
}