import React from "react";
import { OrderOfBusiness } from "./components/OrderOfBusiness";
import { AboutUdyatva } from "./components/AboutUdyatva";
import { Navbar } from "../../common/Navbar";
import Footer from "../../common/Footer";
import { SportsEvents } from "./components/SportsEvents";
import { PrizesAndAwards } from "./components/PrizesAndAwards";

export const Udyatva = () => {
  return (
    <div className="flex-col items-start relative bg-white w-[100%] space-y-[4rem]">

      <Navbar/>


      {/* About Udyatva */}
      <AboutUdyatva/>

      {/* Order of business */}
      <OrderOfBusiness/>

      {/* Sports Events */}
      <SportsEvents/>

      {/* Prizes And Awards */}
      <PrizesAndAwards/>

      <Footer/>
    </div>
  );
};
