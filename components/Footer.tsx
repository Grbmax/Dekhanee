import React from "react";

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
const Footer = () => {
  return (
    <>

      <div className="bg-[#F4E9CD] w-full text-black p-10">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-1/2 text-4xl lg:text-5xl italic font-semibold pb-10">Dekhanee</div>
          <div className="flex flex-col w-full lg:w-1/2 text-center  lg:text-justify">
            <div className="flex flex-col text-xl ">For enquiries email us at:</div>
            <div className="text-2xl lg:text-3xl font-semibold ">contact@dekhanee.com</div>
          </div>
        </div>
        <div className="w-full pt-10 flex flex-col lg:flex-row text-[20px] md:text-[26px] lg:text-[28px] ">
          <div className="w-full lg:w-1/2 ">
            <div className="flex flex-wrap items-center justify-center text-center lg:text-justify">
              <div className=" w-full ">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="hover:text-gray-600">First Link</a>
                  </li>
                  <li>
                    <a className="hover:text-gray-600">Second Link</a>
                  </li>
                  <li>
                    <a className="hover:text-gray-600">Third Link</a>
                  </li>
                  <li>
                    <a className="hover:text-gray-600">Fourth Link</a>
                  </li>
                </nav>
              </div>

            </div>
          </div>
          <div className=" flex flex-col gap-4 w-full lg:w-1/2 ">
            <span className="flex flex-col text-2xl text-gray-900">SUBSCRIBE</span>
            <div className="flex flex-col lg:flex-row gap-5 text-end ">
              <input type="text" className="h-10 rounded-lg w-full lg:w-1/2" />
              <button type="submit" className="border-2 bg-black text-white h-12 w-32 rounded-lg text-2xl ">Submit</button>
            </div>
          </div>
        </div>
        <div className='flex justify-center lg:justify-end gap-5 text-3xl'>
          <FaInstagram />
          <FaFacebookF />
          <FiTwitter />
        </div>
      </div>
      {/*  <div className="flex bg-black items-center justify-center text-white h-10 w-full text-xl">
        Made with ❤️ by Yash, Gaurav & Rohit
      </div> */}
    </>
  );
};

export default Footer;
