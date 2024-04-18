"use client";
import { navLinks } from "@/constant";
import { cancel, menu, more } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  const submenuHandler = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className="bg-headerbg sticky left-0 top-0 z-10">
      <div className="flex justify-between items-center px-4 text-white h-[10vh] ">
        <div className="cursor-pointer">LOGO</div>
        <div>
          <Image
            src={menu}
            alt="menu"
            width={30}
            height={30}
            className={`cursor-pointer ${isOpen ? "hidden" : "block"} `}
            onClick={menuHandler}
          />
          <Image
            src={cancel}
            alt="cancel"
            width={30}
            height={30}
            className={`cursor-pointer ${isOpen ? "block" : "hidden"} `}
            onClick={menuHandler}
          />
        </div>
      </div>

      <div
        className={`fixed top-0 pt-8 px-4 transition-all duration-500 min-w-[250px] min-h-[100vh] bg-[#000000] text-white ${
          isOpen ? "left-0" : "-left-[300px]"
        }  `}
      >
        {navLinks.map((link, index) => {
          return (
            <ul key={index}>
              <li className="p-1 my-4">
                <div className="flex items-center justify-between">
                  <Link
                    className="uppercase transition-all duration-300 hover:text-[#3EC1D5] text-[15px] block"
                    href={link.path}
                    onClick={ () => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>

                  {link.innerLinks ? (
                    <div
                      className="px-6 cursor-pointer"
                      onClick={submenuHandler}
                    >
                      <Image
                        width={18}
                        height={18}
                        className="shrink-0"
                        src={more}
                        alt="more_icon"
                      />
                    </div>
                  ) : null}
                </div>
                {link.innerLinks && isSubmenuOpen && (
                  <div className="pl-6 mt-2">
                    {link.innerLinks.map((item, i) => (
                      <Link
                        key={i}
                        className="uppercase transition-all duration-300 hover:text-[#3EC1D5] text-[15px] block"
                        href={item.path}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default TopNav;
