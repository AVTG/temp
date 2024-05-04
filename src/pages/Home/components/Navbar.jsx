import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react' ;



export const Navbar = ({ scrollToContent }) => {
  const handleClick = () => {
    // Scroll to the element using the passed function
    if (scrollToContent) {
      scrollToContent();
    }
  };
  const [isOpen, setOpen] = useState(false)



  return (
    <div
      className={`flex items-center sticky  w-[100%] justify-evenly z-50 bg-Nabvar-bg text-white  backdrop-blur-sm bg-black h-[65px] `}
    >
      <NavLink className="relative min-w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#fffcfc] text-fonts text-[23px] text-center  leading-[19px]" to="/">
        <span className="font-bold">
          SPORTS BOARD
          <br />
        </span>
        <span className="font-semibold text-[20px]">IIIT BHAGALPUR</span>
      </NavLink>


      <div className="hidden  sm:inline-flex items-center justify-center gap-[1rem] relative font-[30px]">
        <NavLink className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-lightgray text-[20px] tracking-[-1.5px] leading-[28px] whitespace-nowrap" to="/">
          Home
        </NavLink>
        <NavLink className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-fonts text-[20px] tracking-[-1.5px] leading-[28px] whitespace-nowrap" to="/About">
          About
        </NavLink>
        <NavLink className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-fonts text-[20px] tracking-[-1.5px] leading-[28px] whitespace-nowrap" to="/OfficeBearer">
          Office Bearers
        </NavLink>
        <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-fonts text-[20px] tracking-[-1.5px] leading-[28px] whitespace-nowrap hover:cursor-pointer " onClick={handleClick} >
          Sports
        </div>
        <NavLink className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-fonts text-[20px] tracking-[-1.5px] leading-[28px] whitespace-nowrap" to="/Events">
          Events
        </NavLink>
      </div>

      <div className="sm:hidden relative focus-visible:ring-white focus-visible:ring-opacity-75">
        <Hamburger toggled={isOpen} toggle={setOpen} aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"/>

        
            <ul className={`absolute  bg-white bg-opacity-90 px-6 right-0 text-black  text-opacity-75 py-1 transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'} `}>
              <li className="py-1 [font-family:'Montserrat',Helvetica] font-semibold text-lightgray text-[1.2rem] tracking-[-1.5px]">
                <NavLink to="/">
                  Home

                </NavLink>
              </li>
              <li className="py-1 [font-family:'Montserrat',Helvetica] font-semibold text-lightgray text-[1.2rem] tracking-[-1.5px] ">
              <NavLink to="/About">
                  About
                </NavLink>
              </li>
              <li className="py-1 [font-family:'Montserrat',Helvetica] font-semibold text-lightgray text-[1.2rem] tracking-[-1.5px]">
                <NavLink to="/Office-Bearers">
                  Office Bearers
                </NavLink>
              </li>
              <li className="py-1 [font-family:'Montserrat',Helvetica] font-semibold text-lightgray text-[1.2rem] tracking-[-1.5px] " onClick={handleClick} >
                Sports
              </li>
              <li className="py-1 [font-family:'Montserrat',Helvetica] font-semibold text-lightgray text-[1.2rem] tracking-[-1.5px]">
                <NavLink to="/Events">
                  Events
                </NavLink>
              </li>
            </ul>
       
        
      </div>

      

    </div>
  );
};
