"use client";
import { about } from "@/constant";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div id='about' className="mt-20 relative px-8 bg-[url('/map.webp')] bg-fixed bg-cover bg-no-repeat bg-center">
      <h3 className='uppercase before:absolute before:content-[""] before:left-[50%] before:top-[51px] before:-translate-x-1/2 before:w-[120px] before:h-[1px] before:bg-[#ddd] after:absolute after:content-[""] after:left-[50%] after:top-[50px] after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-[#3EC1D5] font-bold text-[32px] text-center pb-[15px] relative'>
        ABOUT US
      </h3>
      <p className="mt-4">
        Odotech It Solutions is a company that deals with Graphics Designing,
        Printing Services, Stationery Services and System Development. The
        company established and registered in 2018 with its main office located
        at Msamvu Bus Terminal 1st Floor Room #20-21, Morogoro Tanzania.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {about.map((item, index) => (
          <Fade delay={index * 500} key={index}>
            <div className="max-w-[500px] mx-auto shadow-md">
              <div>
                <Image src={item.image} alt="image" className="w-full h-full" />
              </div>
              <h4 className="mt-2 capitalize text-[22px] font-bold text-center">
                {" "}
                {item.title}{" "}
              </h4>
              <p className="mt-2 p-4"> {item.text} </p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default About;
