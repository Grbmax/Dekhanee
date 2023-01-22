import React from "react";
import Footer_bottom from "./Footer_bottom";
import Footer_socal from "./Footer_socal";
import Footer_top from "./Footer_top";

const Footer = () => {
  return (
    <>
    
      <div className="bg-[#F4E9CD] w-full text-black p-10">
        <Footer_top />
        <Footer_bottom />
        <Footer_socal />
      </div>
      <div className="flex bg-black items-center justify-center text-white h-10 w-full text-xl">
        Made with ❤️ by Yash, Gaurav & Rohit
      </div>
    </>
  );
};

export default Footer;
