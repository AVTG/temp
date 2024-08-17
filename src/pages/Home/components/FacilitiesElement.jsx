import React, { useState, useEffect } from "react";
import logonew from '../../../assets/logonew.png';
import Sportsbg from '../../../assets/Sportsbg.jpg';
import { NavLink } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import "./style.css";

export const FacilitiesElement = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
  const [isReadMore, setIsReadMore] = useState(false);
  const backgroundImage = 'url(default-background.jpg)';

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const toggleModal = () => {
    setIsActive(!isActive);
  };

  const closeModal = () => {
    setIsActive(false);
  };
  
  const handleResize = () => {
    setIsMobile(window.innerWidth < 850);
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  return (
    <div
      className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-[250px] items-center relative justify-center bg-cover bg-center"
      style={{ backgroundImage }}
    >
      {/* Facility Home Icons */}
      <div
        className="facility-card w-[250px] h-[250px] relative cursor-pointer bg-transparent perspective-1000"
        onClick={toggleModal}
      >
        <div className="flip-card-inner w-full h-full transition-transform duration-500 transform-style-preserve-3d">
          {/* Front Side */}
          <div className="flip-card-front absolute w-full h-full bg-gray-200 shadow-md rounded-lg flex flex-col justify-center items-center backface-hidden">
            <img
              src={props.currElement.image}
              alt="Facility"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Back Side */}
          <div className="flip-card-back absolute inset-0 bg-white shadow-md rounded-lg flex justify-center items-center transform rotate-y-180 backface-hidden">
  <img
    src={props.currElement.image}
    alt="Facility"
    className="w-full h-full object-cover rounded-lg transform scale-x-[-1]"
  />
  <div className="absolute inset-x-0 bottom-5 font-bold text-white text-2xl text-center tracking-tight leading-normal info">
    {props.currElement.FacilityTitle}
  </div>
</div>


        </div>
      </div>

      {/* Modal */}
      <div>
        <div className={`modal ${isActive ? 'active' : ''} fixed top-0 left-0 w-full h-full hidden justify-center items-center opacity-0 invisible transition-opacity duration-300`}>
          <div className="popupbg" onClick={closeModal}></div>
          <div className="popup bg-black backdrop-opacity-100 backdrop-blur-sm h-full w-full flex justify-center items-center">
            <div
              className="popup_mid flex-col rounded-xl bg-white overflow-auto justify-between w-[90%] h-[90vh] max-h-max py-6"
              onClick={e => e.stopPropagation()}
              style={{ backgroundImage: `url(${Sportsbg})`, backgroundPosition: 'center' }}
            >
              <div className="flex-col justify-start items-center">
                <div className="flex justify-between items-center">
                  <NavLink to="/" className="flex justify-center items-center space-x-2 px-2">
                    <div className="w-[65px] py-2">
                      <img src={logonew} alt="logo" />
                    </div>
                    <div className="relative min-w-fit mt-[-1.00px] font-bold text-black text-[1.4rem] text-center flex-col space-y-1">
                      <div className="font-bold">SPORTS BOARD</div>
                      <div className="w-full border-black border" />
                      <div className="font-semibold text-[1.2rem] tracking-wide">IIIT BHAGALPUR</div>
                    </div>
                  </NavLink>
                  <div>
                    <button className="border-2 px-4 font-bold text-[1.5rem]" onClick={closeModal}>
                      <FaXmark />
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-[#191919] text-[2.2rem] tracking-tight flex justify-center">
                    {props.currElement.FacilityTitle}
                  </h4>
                </div>
                <div className="content p-8">
                  <div className="imgdes flex">
                    <div className="image-container md:flex md:w-1/4 w-[60%] mx-auto my-6">
                      <img
                        src={props.currElement.FacilityBg}
                        alt="Sports Field"
                        className="facility-image w-full mr-0 block rounded-lg object-cover aspect-square"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <p className="opacity-60 font-normal text-black text-[1.35rem] m-2">
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
                    className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg items-center"
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
