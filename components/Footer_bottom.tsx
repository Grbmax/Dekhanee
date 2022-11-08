import React from "react";

const Footer_bottom = () => {
  return (
    <>
      <div className="w-full pt-10 lg:pt-24 flex flex-col lg:flex-row text-[20px] md:text-[26px] lg:text-[28px] ">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-wrap items-center justify-center text-center lg:text-justify">
            <div className=" lg:w-1/3 md:w-full w-full ">
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
            <div className="lg:w-1/3 md:w-full w-full ">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className=" hover:text-gray-600">First Link</a>
                </li>
                <li>
                  <a className=" hover:text-gray-600">Second Link</a>
                </li>
                <li>
                  <a className=" hover:text-gray-600">Third Link</a>
                </li>
                <li>
                  <a className="  hover:text-gray-600">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-full w-full ">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="  hover:text-gray-600">First Link</a>
                </li>
                <li>
                  <a className="  hover:text-gray-600">Second Link</a>
                </li>
                <li>
                  <a className="  hover:text-gray-600">Third Link</a>
                </li>
                <li>
                  <a className="  hover:text-gray-600">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-4 w-full lg:w-1/2 ">
          <span className="flex flex-col text-center lg:text-justify text-2xl text-gray-900">SUBSCRIBE</span>
          <div className="flex flex-col lg:flex-row gap-5 items-center ">
            <input type="text" className="h-10 rounded-lg w-full lg:w-1/2" />
            <button type="submit" className="border-2 bg-black text-white h-12 w-32 rounded-lg text-2xl ">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer_bottom;
