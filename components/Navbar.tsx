import React from 'react'
import { BiUserCircle, BiSearchAlt2 } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Navbar = () => {
    return (
        <div className='bg-[#F4E9CD] text-black p-10 w-full'>
            <div className="flex flex-row items-center justify-center gap-10 lg:gap-16">
                <div className='flex flex-row gap-2 lg:gap-4 text-xl md:text-2xl lg:text-3xl w-1/3 items-center justify-start '>
                    <BiUserCircle />
                    <BiSearchAlt2 />
                    <AiOutlineShoppingCart />
                </div>
                <div className='flex text-2xl md:text-4xl lg:text-5xl  italic justify-center items-center font-semibold text-center w-1/3' >
                    Dekhanee
                </div>
                <div className='gap-4 flex w-1/3 items-center justify-end'>
                    <button className='border rounded-md h-6 w-20 lg:h-8 lg:w-24 bg-black text-white justify-center items-center text-sm lg:text-xl '>Login</button>
                    <button className='border-black border-2 rounded-md h-6 w-20 lg:h-8 lg:w-24 justify-center text-sm lg:text-xl items-center  '>Register</button>
                </div>

            </div>

            <div className="pt-10">
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900 md:text-xl lg:text-2xl ">Home</a>
                    <a className="mr-5 hover:text-gray-900 md:text-xl lg:text-2xl">About</a>
                    <a className="mr-5 hover:text-gray-900 md:text-xl lg:text-2xl">Products</a>
                    <a className="mr-5 hover:text-gray-900 md:text-xl lg:text-2xl">Contact</a>
                    <a className="mr-5 hover:text-gray-900 md:text-xl lg:text-2xl">FAQs</a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;

/* import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { BiUserCircle, BiSearchAlt2 } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className=" shadow-sm fixed w-full z-10 bg-[#F4E9CD] text-black lg:p-10 ">
                <div className="w-full">
                    <div className="flex flex-row items-center justify-center gap-16">
                        <div className='flex flex-row  gap-4 text-xl md:text-2xl lg:text-3xl w-1/3 items-center justify-start '>
                            <BiUserCircle />
                            <BiSearchAlt2 />
                            <AiOutlineShoppingCart />
                        </div>
                        <div className='flex text-3xl md:text-4xl lg:text-5xl  italic justify-center items-center font-semibold text-center w-1/3' >
                            Dekhanee
                        </div>
                        <div className='gap-4 flex w-1/3 items-center justify-end'>
                            <button className='border rounded-md h-7 w-14 bg-black text-white justify-center'>login</button>
                            <button className='border-black border-2 rounded-md h-7 w-20 justify-center'>Register</button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-shrink-0 ">
                        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            {/*  <div className="flex items-center  mx-20  justify-between w-full"> 

                            <div className="hidden md:block bg-[#F4E9CD]">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        activeClass="Home"
                                        to="about"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        activeClass="about"
                                        to="about"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        activeClass="work"
                                        to="work"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Projects
                                    </Link>

                                    <Link
                                        activeClass="Services"
                                        to="work"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Services
                                    </Link>

                                    <Link
                                        activeClass="contact"
                                        to="contact"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                            {/* </div> 
                            <div className="mr-10 flex md:hidden ">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div
                                    ref={ref}
                                    className="bg-[#F4E9CD] px-2 pt-2 pb-3 space-y-1 sm:px-3"
                                >
                                    <Link
                                        href="/home"
                                        activeClass="home"
                                        to="home"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/about"
                                        activeClass="about"
                                        to="about"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        About
                                    </Link>

                                    <Link
                                        href="/work"
                                        activeClass="work"
                                        to="work"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        href="/services"
                                        activeClass="services"
                                        to="services"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Services
                                    </Link>

                                    <Link
                                        href="/contact"
                                        activeClass="work"
                                        to="work"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Transition>
                </div>
            </nav>

        </div>
    );
}

export default Navbar; */