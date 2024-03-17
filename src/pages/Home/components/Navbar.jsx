

import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      className={`flex items-center fixed  w-[100vw] justify-evenly z-50 bg-Nabvar-bg text-white  backdrop-blur-sm	`}
    >
      <NavLink className="relative min-w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#fffcfc] text-fonts text-[23px] text-center  leading-[19px]" to="/">
        <span className="font-bold">
          SPORTS BOARD
          <br />
        </span>
        <span className="font-semibold text-[20px]">IIIT BHAGALPUR</span>
      </NavLink>
      <div className="inline-flex h-[65px] items-center justify-center gap-[1rem] relative font-[30px]">
        <NavLink className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-lightgray text-[20px] tracking-[-1.5px] leading-[28px] whitespace-nowrap" to="/">
          Home
        </NavLink>
        <NavLink className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-fonts text-[20px] tracking-[-1.5px] leading-[28px] whitespace-nowrap" to="/About">
          About
        </NavLink>
        <NavLink className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-fonts text-[20px] tracking-[-1.5px] leading-[28px] whitespace-nowrap" to="/OfficeBearer">
          Office Bearer
        </NavLink>
        <NavLink className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-fonts text-[20px] tracking-[-1.5px] leading-[28px] whitespace-nowrap" to="/Sports">
          Sports
        </NavLink>
        <NavLink className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-fonts text-[20px] tracking-[-1.5px] leading-[28px] whitespace-nowrap" to="/Events">
          Events
        </NavLink>
      </div>
    </div>
  );
};
