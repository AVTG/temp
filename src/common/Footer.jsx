import logonew from '../assets/logonew.png'
import {
  FaInstagram,
  FaDribbble,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
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
      { label: "Navigation", key: "header", to:"/" },
      { label: "About the Institute", key: "item", to:"https://www.iiitbh.ac.in/about-iiitbh" },
      { label: "Blog", key: "item", to:"/" },
      { label: "Administratation", key: "item" , to:"https://www.iiitbh.ac.in/iiitbh-administration"},
      { label: "IIITBH Alumni", key: "item", to:"https://alumni.iiitbh.ac.in/" },
      { label: "Testimonials", key: "item" , to:"/"},
    ],
    [
      { label: "Support", key: "header" , to:"/"},
      { label: "Help center", key: "item" , to:"/"},
      { label: "Terms of service", key: "item" , to:"/"},
      { label: "Legal", key: "item-2-3" },
      { label: "Privacy policy", key: "item" , to:"/" },
      { label: "Status", key: "item" , to:"/"},
    ],
  ];

  return (

    <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  backdrop-blur-lg bg-black  bg-opacity-70 text-white w-full p-4 relative justify-center">
      <div className="flex flex-col space-y-2 items-center">
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
      <div className="mx-2 flex flex-wrap w-[90%] sm:justify-around py-5 sm:py-0 justify-center gap-4">
        {links.map((col, index) => {
          return (
            <ul  key={`col-${index}`}>
              {col.map((link, index) => {
                return (
                  <li
                    key={`link-${col}-${index}`}
                    className={`text-gray-400 ${link.key === "header" || link.key === "header"
                      ? "text-2xl text-white"
                      : ""
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
      <div className="footer-form flex flex-col  ">
        <label className="text-lg font-semibold text-white">
          Stay up to date
        </label>
        <input
          type="email"
          placeholder="Subscribe to our email"
          className="mt-2 w-full border-none rounded-lg py-3 px-6"
        />
      </div>
    </div>
  );
};

export default Footer;