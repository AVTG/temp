import logonew from '../assets/logonew.png'
import {
  FaInstagram,
  FaDribbble,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

import { NavLink } from "react-router-dom";


const Footer = () => {
  const socialLinks = [
    { label: "YouTube", icon: FaYoutube },
    { label: "Instagram", icon: FaInstagram },
    { label: "Twitter", icon: FaXTwitter },
    { label: "Dribbble", icon: FaDribbble },
  ];

  const links = [
    [
      { label: "Navigation", key: "header" },
      { label: "About the Institute", key: "item", to: "https://www.iiitbh.ac.in/about-iiitbh" },
      { label: "Blog", key: "item", to: "/" },
      { label: "Administratation", key: "item", to: "https://www.iiitbh.ac.in/iiitbh-administration" },
      { label: "IIITBH Alumni", key: "item", to: "https://alumni.iiitbh.ac.in/" },
      { label: "Testimonials", key: "item", to: "/" },
    ],
    [
      { label: "Support", key: "header" },
      { label: "Help center", key: "item", to: "/" },
      { label: "Terms of service", key: "item", to: "/" },
      { label: "Legal", key: "item-2-3" },
      { label: "Privacy policy", key: "item", to: "/" },
      { label: "Status", key: "item", to: "/" },
    ],
    [
      { label: "Location", key: "header" },
      { label: "How To Reach", key: "item", to: "https://www.iiitbh.ac.in/how-reach" },
      { label: "Accomodations Nearby", key: "item", to: "https://www.iiitbh.ac.in/accomodation" },
    ],
  ];

  return (

    <div className="py-16 justify-evenly flex flex-wrap  backdrop-blur-lg bg-black  bg-opacity-70 text-white w-full p-4 relative">
      <div className="flex flex-col space-y-2 items-center w-[300px]">
        <NavLink to={"/"} className="footer-img flex items-center space-x-3">
          <img
            src={logonew}
            alt=""
            className="w-[70px] h-auto"
          />
          <div to={"/"} className="flex flex-col justify-center relative space-y-1">
            <div className="[font-family:'Montserrat',Helvetica] font-semibold text-[2rem] tracking-[-2px]   text-white text-opacity-85 leading-6 text-center">
              Sports Board
            </div>
            <div className="w-[100%] border self-center border-white"></div>
            <div className="[font-family:'Montserrat',Helvetica] font-semibold text-[1.5rem] tracking-[1.3px]  text-white text-opacity-85  text-center leading-6">
              IIIT Bhagalpur
            </div>
          </div>
        </NavLink>
        <div className="[font-family:'Montserrat',Helvetica]  text-white opacity-85">
          Copyright © 2024, SB, IIIT Bhagalpur
        </div>
        <div className="flex items-center space-x-3">
          {socialLinks.map((socialLink, index) => {
            const Icon = socialLink.icon;
            return (
              <Icon
                key={`social-${index}`}
                className="w-14 h-14 p-2 rounded-full bg-[#B3FFB3] text-black hover:bg-white hover:text-green-700 cursor-pointer"
              />
            );
          })}
        </div>
      </div>
      <div className="mx-2 flex flex-wrap sm:justify-around py-5 sm:py-0 justify-center space-x-10 ">
        {links.map((col, index) => {
          return (
            <ul key={`col-${index}`}>
              {col.map((link, index) => {
                return (
                  <li
                    key={`link-${col}-${index}`}
                    className={` ${link.key === "header" || link.key === "header"
                      ? "text-2xl text-white"
                      : "text-gray-400 hover:text-sky-500"
                      }`}
                  >
                    {link.key === "header" && (link.label)}
                    {link.key !== "header" && (
                      <NavLink to={link.to}>
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <div className='flex-col w-[300px] space-y-2'>
        <div className="[font-family:'Inter-SemiBold',Helvetica]  text-white text-[1.4rem]  leading-[30px]">Contact info</div>
        <div className="[font-family:'Inter-SemiBold',Helvetica]  text-gray-300 text-[1.05rem]  leading-[20px]">Indian Institute of Information Technology Bhagalpur.</div>
        <div className="space-x-3 [font-family:'Inter-SemiBold',Helvetica]  text-gray-300 text-[1.05rem]  leading-[20px]">
          <IoHome className='text-[1.2rem] text-[#F9EFDB] inline mr-1' />
          Bhagalpur College of Engineering Campus Sabour, Bhagalpur - 813210
        </div>
        <div className="space-x-3 [font-family:'Inter-SemiBold',Helvetica]  text-gray-300 text-[1.05rem]  leading-[18px]">
          <HiOutlineMail className='text-[1.4rem] text-[#F9EFDB] inline mr-2' />
          pro@iiitbh.ac.in
        </div>
      </div>
    </div>
  );
};

export default Footer;