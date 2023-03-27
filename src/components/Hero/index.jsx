import React from "react";
import hero_sm from "../../assets/Rectangle 27.png";
import hero_lg from "../../assets/HeroSection.png"
import Chart from "../utils/Charts";
import Release from "../utils/Release";
import "../../index.css"


const Hero = ({ endpoint: { title, release, items, songs } }) => {
  return (
    <>
       <div className="mb-10 mmd:ml-[10%] delay">
            <div className="mmd:mt-[3em] md:pt-[5em] flex flex-row md:flex-col md:gap-6 gap-3">
              <div className="w-1/2 md:w-full">
                <img src={hero_sm} alt="hero_sm" className="md:nike-container hidden md:block" />
                <img src={hero_lg} alt="hero_lg" className="md:hidden block mmd:min-h-[100%]" />
              </div>
              <div className="pl-2 md:nike-container w-1/2 md:w-full">
                <h1 className="text-slate-100 font-bold md:mb-2">{title}</h1>
                <div className="flex flex-col md:flex-row md:gap-6 overflow-scroll scroll-smooth scroll-hidden">
                  {items?.map((item, i) => (
                    <Chart {...item} key={i} />
                  ))}
                </div>
              </div>
            </div>


            <div className="md:nike-container mt-6 relative">
              <h1 className="text-slate-100 font-bold mb-2">{release}</h1>
              <div className="flex flex-row gap-x-4 overflow-scroll scroll-smooth scroll-hidden pb-16">
                {songs?.map((img, i) => (
                  <Release {...img} key={i} />
                ))}
              </div>
            </div>
       </div>
    </>
  );
};

export default Hero;
