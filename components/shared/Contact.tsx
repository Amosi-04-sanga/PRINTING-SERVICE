"use client";
import { address } from "@/public/assets";
import Image from "next/image";
import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
import { Zoom } from "react-awesome-reveal";


const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("form submited!");
    clearForm();
  };

  return (
    <div id="contact" className="mt-20 text-center relative px-8">
      <h3 className='uppercase before:absolute before:content-[""] before:left-[50%] before:top-[51px] before:-translate-x-1/2 before:w-[120px] before:h-[1px] before:bg-[#ddd] after:absolute after:content-[""] after:left-[50%] after:top-[50px] after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-[#3EC1D5] mt-[40px] font-bold text-[32px] text-center pb-[15px] relative'>
        contact us
      </h3>
      <p className="mt-8">
        We are available 24/7 , So You may contact us at any time you wish
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="mt-14">
          <Image
            className="block mx-auto opacity-50"
            src={address}
            alt="location adress"
            width={30}
            height={30}
          />
          <h2 className="uppercase mt-4 text-[#999] font-bold">address</h2>
          <p className="mt-4">Msamvu Bus Terminal, Morogoro, Tanzania</p>
        </div>

        <div className="mt-14">
          <Image
            className="block mx-auto opacity-50"
            src={address}
            alt="location adress"
            width={30}
            height={30}
          />
          <h2 className="uppercase mt-4 text-[#999] font-bold">phone number</h2>
          <p className="mt-4">+25562454589</p>
        </div>

        <div className="mt-14">
          <Image
            className="block mx-auto opacity-50"
            src={address}
            alt="location adress"
            width={30}
            height={30}
          />
          <h2 className="uppercase mt-4 text-[#999] font-bold">email</h2>
          <p className="mt-4">sangaamosi04@gmail.com</p>
        </div>
      </div>

      <Zoom>
        <div className="mt-14 bg-blue-400 p-4 py-8 mx-auto max-w-[400px]">
          <form onSubmit={submitHandler}>
            <div className="mt-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter name"
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mt-4">
              <input
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mt-4">
              <input
                type="number"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mt-4">
              <textarea
                rows={2}
                value={message}
                placeholder="Enter message"
                onChange={(e) => setMessage(e.target.value)}
                required
                className="block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mt-8">
              <button className="px-8 text-white py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-500 block mx-auto">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Zoom>
    </div>
  );
};

export default Contact;
