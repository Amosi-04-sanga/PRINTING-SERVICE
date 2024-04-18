'use client'
import React, { useEffect, useState } from "react";

const FadeInSection = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const height = window.innerHeight;
      const offset = 200;

      if (top > offset && top < height - offset) {
        setVisible(true);
        console.log("section visible!");
      } else {
        setVisible(false);
        console.log("section not visible!");
      }

      window.addEventListener("scroll", handleScroll);
      console.log('scoll')

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  }, []);

  return (
    <div
      className={` opacity-0 transition-all duration-1000 ${
         "opacity-100"
      } `}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
