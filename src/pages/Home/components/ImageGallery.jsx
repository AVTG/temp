import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Data } from '../../../Data';

export const ImageGallery = () => {
    return (
        <div className=' w-11/12 mx-auto flex-col justify-center items-center  space-y-8'>
            <div className="mx-auto [font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.2px] leading-[normal] text-center">
                Mementoes
            </div>

            <Slide indicators={true} arrows = {window.innerWidth > 500 } autoplay={true} pauseOnHover={true}>
                {
                    Data.SportsData.filter(object => {
                        return object.id > 0
                    }).map((object) => {
                        return object.SportsImage.map((image, index) => {
                            return (
                                <div className={`image-container ${window.innerWidth > 600? "w-[85%]" : "w-[100%]" } aspect-[2/1] overflow-hidden object-fit pl-1 m-auto rounded-xl object-cover object-center`}>
                                    <img src={image} alt={`slide-${index}`} className="object-fit object-center" />
                                </div>
                            )
                        })
                    }


                    )}
            </Slide>
        </div>
    )
}