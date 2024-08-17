import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Hamburger from 'hamburger-react';
import logonew from '../assets/logonew.png'

export const Navbar = ({ contentRef }) => {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scrollToContent = () => {
    if (pathname !== "/") {
      navigate("/");
    }

    if (pathname === "/" && contentRef.current) {
      contentRef.current.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = () => {
    if (scrollToContent) {
      scrollToContent();
    }
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`flex items-center sticky w-[100%] justify-between px-8 z-50 ${pathname !== "/" ? " bg-[#F9EFDB] text-black" :
        " bg-black text-white"} backdrop-blur-sm max-h-min`}
    >
      <NavLink to="/" className="flex justify-center items-center space-x-2">
        <div className="w-[55px] py-2">
          <img src={logonew} alt="logo" />
        </div>
        <div className={`relative min-w-fit mt-[-1.00px] pl-2 [font-family:'Inter',Helvetica] font-bold ${pathname !== "/" ? "text-black" : "text-[#fffcfc]"} text-[#fffcfc] text-[1.3rem] text-center leading-[19px] space-y-1 flex-col items-center justify-center`} >
          <div className="font-bold">
            SPORTS BOARD
          </div>
          <div className={`w-[100%] ${pathname !== "/" ? "border-black" : "border-white"} border`} />
          <div className="font-semibold text-[1.1rem] tracking-[1.5px] text-center">IIIT BHAGALPUR</div>
        </div>
      </NavLink>

      <div className="hidden navbar:inline-flex items-center justify-center gap-[1rem] relative">
        <NavLink to="/" className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-lightgray text-[1.4rem] tracking-[-1.5px] leading-[28px] whitespace-nowrap border-r border-gray-500 pr-4" >
          Home
        </NavLink>
        <NavLink to="/OfficeBearer" className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-[1.4rem] tracking-[-1.5px] leading-[28px] whitespace-nowrap border-r border-gray-500 pr-4">
          Office Bearers
        </NavLink>
        <NavLink to="/" onClick={handleClick} className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-[1.4rem] tracking-[-1.5px] leading-[28px] whitespace-nowrap border-r border-gray-500 pr-4 hover:cursor-pointer">
          Sports
        </NavLink>
        <NavLink to="/Events" className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-[1.4rem] tracking-[-1.5px] leading-[28px] whitespace-nowrap pr-4">
          Events
        </NavLink>
      </div>

      <div className="navbar:hidden relative focus-visible:ring-white focus-visible:ring-opacity-75">
        <Hamburger toggled={isOpen} toggle={setOpen} aria-expanded={isOpen ? 'true' : 'false'}
          aria-haspopup="true" />
        <ul className={`absolute bg-white bg-opacity-100 px-6 right-0 text-black text-opacity-75 py-1 transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <li className="py-1 [font-family:'Montserrat',Helvetica] font-semibold text-lightgray text-[1.2rem] tracking-[-1.5px]">
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li className="py-1 [font-family:'Montserrat',Helvetica] font-semibold text-lightgray text-[1.2rem] tracking-[-1.5px]">
            <NavLink to="/OfficeBearer">
              Office Bearers
            </NavLink>
          </li>
          <li className="py-1 [font-family:'Montserrat',Helvetica] font-semibold text-lightgray text-[1.2rem] tracking-[-1.5px] hover:cursor-pointer" onClick={handleClick}>
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
