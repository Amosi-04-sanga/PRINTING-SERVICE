"use client";
import { services } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <div id="services" className="mt-14">
      <h3 className='uppercase before:absolute before:content-[""] before:left-[50%] before:top-[51px] before:-translate-x-1/2 before:w-[120px] before:h-[1px] before:bg-[#ddd] after:absolute after:content-[""] after:left-[50%] after:top-[50px] after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-[#3EC1D5] mt-[40px] font-bold text-[32px] text-center pb-[15px] relative'>
        services
      </h3>

      <div className="p-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3 ">
        {services.map((service, index) => (
          <Fade key={index} delay={index * 200}>
            <div className="flex items-start my-8 gap-5">
              <Image
                className="shrink-0"
                src={service.icon}
                alt="call"
                width={38}
                height={38}
              />
              <div className="flex flex-col">
                <h3 className="font-bold capitalize"> {service.title} </h3>
                <p> {service.text} </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      <div className="mt-8 text-center bg-[url('https://odotech.co.tz/img/call-to-action-bg.jpg')] bg-fixed bg-cover bg-no-repeat bg-center">
        <div className="py-16 px-4 md:max-w-[500px] mx-auto font-bold">
          <h3 className="text-[28px] ">
            We are the best and creative Graphics Designer and Software
            Developer
          </h3>
          <p className="mt-8">Let Us handle your Responsibility</p>

          <div className="mt-8 rounded-[25px] transition-all duration-500 py-[8px] px-[24px] border-2 border-solid border-[#fff] hover:bg-[#007bff]">
            <Link
              className="uppercase text-[16px] block py-[8px] px-[24px]"
              href="https://wa.me/+255624454589?text=Habari"
            >
              We bring reality through your imagination
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
