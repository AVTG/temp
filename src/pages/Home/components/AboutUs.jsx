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

    const description = ` We turn novices into champions here at IIT Delhi grounds. The best facilities provided by us have led to great results
                            and our presence is now being felt in the Delhi circles as well as in the inter-college meets outside. As an
                            organization, we are a group of around 300 people including players, coaches, trainers, and administrative staff who are
                            working to take our sporting standards at par with the best in the business. Apart from being the apex body for sports in IITD,
                            we are involved in a number of social events, informal events, hosting sports tournaments, and other collaborations and
                            therefore the number of people involved with BSA is huge.`

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 850);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return(
        <div className="md:flex flex-col items-start justify-center gap-[48px] mx-50 bg-[#ffffff] mx-auto mb-[4rem]">
        <div className="gap-[1.5rem] md:flex justify-between w-full border-solid border-0 ">
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
                <h1 className="[font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.88px] leading-[normal] underline px-5">About Us</h1>
                <p className="p-5 opacity-70 text-black text-[1.5rem] tracking-[-0.96px] leading-[normal] self-start">

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