"use client";
import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { content } from "../../constant";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const leftArrowHandler = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const rightArrowHandler = () => {
    setIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[url('https://odotech.co.tz/img/intro-carousel/1.png')] w-full h-full bg-cover bg-no-repeat bg-center ">
      <div className="h-[90vh] relative flex flex-col items-center justify-center bg-black opacity-70">
        <div className="absolute top-[50%] -translate-y-1/2 left-0 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white w-10 h-10 cursor-pointer"
            viewBox="0 0 320 512"
            onClick={leftArrowHandler}
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>
        <div className="absolute top-[50%] -translate-y-1/2 right-0 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white w-10 h-10 cursor-pointer"
            viewBox="0 0 320 512"
            onClick={rightArrowHandler}
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>

        <div className="text-white w-[75%]">
          <div>
            {content.map((item, i) => (
              <Fade key={i}>
                <div
                  className={`${index === i ? "block" : "hidden"} text-center`}
                >
                  <h2 className={`text-[32px] capitalize font-bold`}>
                    {" "}
                    {item.title}{" "}
                  </h2>
                  <p className="pt-4"> {item.text} </p>
                </div>
              </Fade>
            ))}
          </div>
          <div className="mt-8 flex max-sm:flex-col max-sm:w-[80%] mx-auto justify-center">
            <a
              href="https://wa.me/+255624454589?text=Habari"
              className="p-2 rounded-[50px] font-medium flex items-center justify-center py-2 px-8 m-[10px] bg-[#3EC1D5]"
            >
              <svg
                className="fill-white w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>

              <span>Let's chat!</span>
            </a>

            <a
              href="https://www.youtube.com/watch?v=xuxv1fucKiA"
              className="p-2 rounded-[50px] font-medium flex items-center justify-center py-2 px-8 m-[10px] bg-[#3EC1D5]"
              data-vbtype="video"
              data-autoplay="true"
            >
              <svg
                className="fill-white w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
              </svg>
              <span>Watch Video</span>
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center w-[120px] absolute left-[50%] -translate-x-1/2 bottom-3">
          {content.map((item, i) => (
            <div key={i}>
              <div
                className={` w-8 h-1 transition-all duration-500 ${
                  index === i ? "bg-white" : "bg-gray-700"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
