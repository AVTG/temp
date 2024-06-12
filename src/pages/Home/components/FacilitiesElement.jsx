import React, {  useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark } from '@fortawesome/free-solid-svg-icons';
import logonew from '../../../assets/logonew.png';
import Sportsbg from '../../../assets/Sportsbg.jpg';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./style.css";
export const FacilitiesElement = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
  const [isReadMore, setIsReadMore] = useState(false);
  const backgroundImage = 'url(default-background.jpg)' ;

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  
  const toggleModal = () => {
    setIsActive(!isActive);
  };

  const closeModal = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isActive]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-[250px] items-center relative justify-center"
      onClick={toggleModal}
      style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
       <div className="flex flex-col w-[250px] h-[250px] items-center relative justify-center">
      <img
        className="w-full object-cover"
        alt="Pexels monstera"
        src={props.currElement.image}
      />
      <div className="absolute w-[100%] bottom-[40px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#fffcfc] text-[2rem] text-center tracking-[-1.92px] leading-[normal]">
        {props.currElement.FacilityTitle}
      </div>
      </div>
      <div>
        <div className={`modal ${isActive ? 'active' : ''}`} style={{ transition: 'opacity 0.3s ease' }}>
          <div className="popupbg " onClick={closeModal}></div>
          <div
            className="popup bg-black backdrop-opacity-100 backdrop-blur-sm h-lvh w-1vw flex justify-center items-center ">
            <div className='popup_mid flex-col  rounded-xl bg-white overflow-auto'
              onClick={e => e.stopPropagation()} style={{ backgroundImage: `url(${Sportsbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="flex-col justify-start items-center ">
                <div className="flex justify-between items-center">
                  <NavLink to="/" className="flex justify-center items-center space-x-2">
                    <div className="w-[65px] py-2">
                      <img src={logonew} alt="logo" />
                    </div>
                    <div className="relative min-w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-black text-[1.4rem] text-center leading-[19px] flex-col space-y-1">
                      <div className="font-bold">
                        SPORTS BOARD
                      </div>
                      <div className="w-[100%] border-black border" />
                      <div className="font-semibold text-[1.2rem] tracking-[1.5px]">IIIT BHAGALPUR</div>
                    </div>
                  </NavLink>
                  <div>
                    <button className="border-2 px-4 font-bold text-[1.5rem]" onClick={closeModal}> <FontAwesomeIcon icon={faXmark} /></button>
                  </div>
                </div>
                <div>
                      <h4 className="[font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.2px] leading-[normal] flex justify-center">
                        {props.currElement.FacilityTitle}
                      </h4>
                    </div>
                  <div className="content">
                   
                    <div className="imgdes flex">
                    <div className="image-container md:flex md:w-1/4 w-[60%] mx-auto my-6 ">
                    <img src={props.currElement.FacilityBg} alt="Sports Field" className="fascilityimage"/>
                  </div>               
                    <div className="md:w-3/4 ">
                      <p className="opacity-60 [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal] m-2">
                      {isMobile ? (
                        isReadMore ? props.currElement.description : `${props.currElement.description.substring(0, 500)}....`
                      ) : (
                        props.currElement.description
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
               
                <div className="flex justify-center items-center">
                  <button
                    className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black-900 items-center"
                    onClick={closeModal}
                  >
                   
                    <span>Close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
