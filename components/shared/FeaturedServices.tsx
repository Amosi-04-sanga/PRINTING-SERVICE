import { FeaturedService, whatsaap } from "@/constant";
import Image from "next/image";
import React from "react";
import FadeInSection from "./FadeInSection";

const FeaturedServices = () => {
  return (
    <div className="bg-[#333333] text-white p-8 grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
      {FeaturedService.map((service, index) => {
        return (
          <FadeInSection key={index} >
            <div  className="py-8 flex flex-col">
              <Image width={48} height={48} src={service.image} alt="icon" />
              <h4 className="mt-4"> {service.title} </h4>
              <p className="mt-4"> {service.description} </p>
            </div>
          </FadeInSection>
        );
      })}
    </div>
  );
};

export default FeaturedServices;
