/* import React, { useState } from "react";
import { BiUserCircle, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="bg-[#F4E9CD] text-black p-10 w-full">
      <div className="flex flex-row items-center justify-center gap-10 lg:gap-16">
        <div className="flex flex-row gap-2 lg:gap-4 text-xl md:text-2xl lg:text-3xl w-1/3 items-center justify-start ">
          <BiUserCircle />
          <BiSearchAlt2 />
          <AiOutlineShoppingCart />
        </div>
        <div className="flex text-2xl md:text-4xl lg:text-5xl  italic justify-center items-center font-semibold text-center w-1/3">
          Dekhanee
        </div>
        <div className="gap-4 flex w-1/3 items-center justify-end">
          <button className="border rounded-md h-6 w-20 lg:h-8 lg:w-24 bg-black text-white justify-center items-center text-sm lg:text-xl ">
            Login
          </button>
          <button className="border-black border-2 rounded-md h-6 w-20 lg:h-8 lg:w-24 justify-center text-sm lg:text-xl items-center  ">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar; */

import React from "react";
import Hamburger from "../components/Hamburger";
import Image from "next/image";
import DekhaneeLogo from "../public/DekhaneeLogo.png"
import Link from "next/link";
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-evenly bg-[#F4E9CD] w-full text-black sticky top-0">
        <div className=" w-1/3">
          <Hamburger />
        </div>
        <div className=" text-center w-1/3 text-black text-2xl md:text-4xl lg:text-5xl italic font-semibold">
        <Image src={DekhaneeLogo} alt="profilepciture" height={8*15} width={8*15} className='flex items-center justify-center'/>
          {/* <Link href={""}>Dekhanee</Link> */}
        </div>
        <div className="w-1/3 text-right p-5">
          <div className="">
            <button className="border-2 border-black p-1 rounded-lg bg-black text-white hover:bg-transparent hover:text-black">
              Login
            </button> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
