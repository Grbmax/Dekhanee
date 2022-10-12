import { useState } from "react";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full bg-[#F4E9CD] text-black bg-opacity-95 transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col justify-center items-center mt-28">
        <a
          className="text-2xl lg:text-3xl font-bold hover:text-[#cd8d59] hover:underline my-4"
          href="#home"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          Home
        </a>
        <a
          className="text-2xl lg:text-3xl font-bold my-4 hover:text-[#cd8d59] hover:underline "
          href="#about"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          About Us
        </a>
        <a
          className="text-2xl lg:text-3xl font-bold my-4 hover:text-[#cd8d59] hover:underline "
          href="#products"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          Products
        </a>
        <a
          className="text-2xl lg:text-3xl font-bold my-4 hover:text-[#cd8d59] hover:underline "
          href="#trackOrder"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          Track My Order
        </a>
        <a
          className="text-2xl lg:text-3xl font-bold my-4 hover:text-[#cd8d59] hover:underline "
          href="#contact"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          Contact
        </a>
        <a
          className="text-2xl lg:text-3xl font-bold my-4 hover:text-[#cd8d59] hover:underline "
          href="#faqs"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          FAQs
        </a>
      </div>
    </div>
  );
}

/* export default function Hamburger() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="">
      <MobileNav open={open} setOpen={setOpen} />

      <div className="flex flex-row items-center p-5 text-left ">
        <div
          className="group relative w-6 h-5 cursor-pointer flex-col justify-between text-3xl flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button 
          <span
            className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
} */
import React from 'react'

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="">
      <MobileNav open={open} setOpen={setOpen} />

      <div className="flex flex-row items-center p-5 text-left ">
        <div
          className="group relative w-6 h-5 cursor-pointer flex-col justify-between text-3xl flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  )
}

export default Hamburger