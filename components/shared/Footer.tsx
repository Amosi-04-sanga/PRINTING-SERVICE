import { usefulLinks } from "@/constant";
import { angleRight, facebook, instagram, twitter } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <div className="mt-8 p-4 text-white bg-[#111]">
      <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
        <div className="relative">
          <h3 className="mt-8">ODOTECH IT SOLUTIONS</h3>
          <div className='mt-1 h-[2px] bg-[#555] w-full before:absolute before:content-[""] before:left-[30px] before:top-[60px] before:-translate-x-1/2 before:w-[60px] before:h-[2px] before:bg-[#3EC1D5] ' />
          <p className="mt-4 ">
            Odotech It Solutions is a solutions-driven graphics and software
            communications company with a history of success connecting brand
            with consumers. While some companies simply provide products,
            Odotech provides integrated solutions that deliver your message,
            change perceptions and drive sales. Think of us as your full-service
            creative agaency without the agency fees.
          </p>
        </div>

        <div className="relative">
          <h3 className="mt-8">USEFUL LINKS</h3>
          <div className='mt-1 h-[2px] bg-[#555] w-full before:absolute before:content-[""] before:left-[30px] before:top-[60px] before:-translate-x-1/2 before:w-[60px] before:h-[2px] before:bg-[#3EC1D5] ' />
          <div className="mt-4 ">
            {usefulLinks.map((item, index) => (
              <Link className="hover:text-[#3EC1D5] transition-all duration-500 " key={index} href={item.path}>
                <div className="mb-4">
                  <div className="flex gap-2 items-center justify-start">
                    <Image
                      src={angleRight}
                      alt="angle icon"
                      width={8}
                      height={8}
                      className="shrink-0"
                    />
                    <p> {item.link} </p>
                  </div>
                  <div className="mt-2 h-[1px] bg-[#555] w-full" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative">
          <h3 className="mt-8">CONTACTS</h3>
          <div className='mt-1 h-[2px] bg-[#555] w-full before:absolute before:content-[""] before:left-[30px] before:top-[60px] before:-translate-x-1/2 before:w-[60px] before:h-[2px] before:bg-[#3EC1D5] ' />
          <p className="mt-4 ">Msamvu Bus Terminal, Morogoro</p>
          <p className="mt-2">Tanzania</p>
          <p className="mt-8">Phone: +255 (0) 686 343 100</p>
          <p className="mt-2">E-mail: support@odotech.co.tz</p>
          <p className="mt-2">G-mail: sp.odotech@gmail.com</p>

          <div className="mt-4 flex gap-4">
            <Link href="">
              <div className="flex items-center justify-center rounded-full p-2 bg-[#333] hover:bg-[#3EC1D5] transition-all duration-500">
                <Image
                  src={twitter}
                  alt="twitter"
                  width={20}
                  height={20}
                  className="shrink-0"
                />
              </div>
            </Link>

            <Link href="">
              <div className="flex items-center justify-center rounded-[50%] p-2 bg-[#333] hover:bg-[#3EC1D5] transition-all duration-500">
                <Image
                  src={facebook}
                  alt="facebook"
                  width={20}
                  height={20}
                  className="shrink-0"
                />
              </div>
            </Link>

            <Link href="">
              <div className="flex items-center justify-center rounded-full p-2 bg-[#333] hover:bg-[#3EC1D5] transition-all duration-500">
                <Image
                  src={instagram}
                  alt="instagram"
                  width={18}
                  height={18}
                  className="shrink-0"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="relative">
          <h3 className="mt-8">OUR NEWSLETTER</h3>
          <div className='mt-1 h-[2px] bg-[#555] w-full before:absolute before:content-[""] before:left-[30px] before:top-[60px] before:-translate-x-1/2 before:w-[60px] before:h-[2px] before:bg-[#3EC1D5] ' />
          <p className="mt-4 ">
            To get latest news and updates about our services such as Graphics
            Designing, Printing and Software Development, Please subscribe below
            by entering your valid phone number.
          </p>
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default Footer;
