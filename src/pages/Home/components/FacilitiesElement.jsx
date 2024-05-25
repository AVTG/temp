import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faXmark } from '@fortawesome/free-solid-svg-icons';
import logonew from '../../../assets/logonew.png';
import Sportsbg from '../../../assets/Sportsbg.jpg';
import SportField from '../../../assets/SportField.jpg';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export const FacilitiesElement = (props) => {
  const { currElement } = props;
  const [isActive, setIsActive] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('url(default-background.jpg)');

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
            <div className='popup_mid flex-col content-center rounded-xl bg-white overflow-auto'
              onClick={e => e.stopPropagation()} style={{ backgroundImage: `url(${Sportsbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="flex-col justify-between items-center ">
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
                 
                  <div className="content">
                    <div>
                      <h4 className="[font-family:'Inter',Helvetica] font-black text-[#191919] text-[2.2rem] tracking-[-2.2px] leading-[normal] flex justify-center">
                        {props.currElement.FacilityTitle}
                      </h4>
                    </div>
                    <div className="imgdes flex">
                    <div className="image-container md:flex">
                    <img src={props.currElement.FacilityBg} alt="Sports Field" className="fascilityimage"/>
                  </div>               
                    <div className="flex justify-center items-center">
                      <p className="opacity-60 [font-family:'Inter',Helvetica] font-normal text-black text-[1.35rem] tracking-[-0.96px] leading-[normal] m-2">
                        {props.currElement.description}
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
