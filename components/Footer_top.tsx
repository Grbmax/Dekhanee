import React from "react";

const Footer_top = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-1/2 text-4xl lg:text-5xl italic font-semibold pb-10">Dekhanee</div>
      <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-justify">
        <div className="flex flex-col text-xl">For enquiries email us at:</div>
        <div className="text-2xl lg:text-3xl font-semibold">contact@dekhanee.com</div>
      </div>
    </div>
  );
};

export default Footer_top;
