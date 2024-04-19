"use client";
import { filterButtons, portfolio } from "@/constant";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Portfolio = () => {
  const [products, setProducts] = useState([]);

  // save an array on loads
  useEffect(() => {
    const newArray = portfolio.flatMap((item) => item.items);
    setProducts(newArray);
  }, []);

  const filterProducts = (item) => {
    // collect all nested array
    const newArray = portfolio.flatMap((item) => item.items);

    portfolio.forEach(function (product) {
      if (item === "all") {
        setProducts(newArray);
      }

      if (product.category === item) {
        setProducts(product.items);
      }
    });
  };

  return (
    <div id="portfolio">
      <h4  className='before:absolute before:content-[""] before:left-[50%] before:top-[51px] before:-translate-x-1/2 before:w-[120px] before:h-[1px] before:bg-[#ddd] after:absolute after:content-[""] after:left-[50%] after:top-[50px] after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-[#3EC1D5] mt-[40px] font-bold text-[32px] text-center pb-[15px] relative'>
        {" "}
        OUR PORTFOLIO{" "}
      </h4>

      <div className="w-[90%] mx-auto text-center md:max-w-[70%]">
        {filterButtons.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => filterProducts(item)}
              className="px-[20px] py-[10px] uppercase shadow-md text-[12px] hover:text-white transition-all duration-500 hover:bg-[#3EC1D5] inline-block bg-white text-[#666666] m-[8px] ml-0 rounded-md"
            >
              {" "}
              {item}{" "}
            </button>
          );
        })}
        <div className="mt-8">
          <div className="flex justify-center sm:justify-start items-center flex-wrap gap-4">
            {products.map((item, i) => (
              <Fade key={i} delay={100}>
                <div className="max-w-[300px] mx-auto shadow-md" >
                  <div>
                    <Image
                      src={item.image}
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="mt-2 capitalize text-[22px] font-bold text-center">
                    {" "}
                    {item.title}{" "}
                  </h4>
                  <p className="mt-2 p-4"> {item.disaccount} </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

/*

*/
