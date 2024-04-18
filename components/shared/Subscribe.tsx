"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

const Subscribe = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const SubmitHandler = (e: any) => {
    e.preventDefault();
    console.log("phone number submited!");
    setPhoneNumber("");
  };

  return (
    <div className="mt-14 w-[80%] max-w-[400px]">
      <form onSubmit={SubmitHandler}>
        <div className="flex ">
          <input
            className="block text-black rounded-l-lg w-full p-2 focus:outline-none"
            type="tel"
            required
            placeholder="Phone number"
          />

          <input
            className="px-4 text-white  py-2 rounded-r-lg bg-blue-500 hover:bg-blue-600 transition-all duration-500 block mx-auto"
            type="button"
            value="Subscribe"
          />
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
