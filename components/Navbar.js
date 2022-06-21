import Link from "next/link";
import React from "react";
import Image from 'next/image'
import logo from '../public/Dekhanee-Logo.png'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {

    return (
        <>
            <div className="fixed shadow-md  z-50 w-full  flex justify-between items-center">

                <nav className=" top-0 flex items-center h-91px w-full text-sm bg-[#F4E9CD] px-5 md:px-5 lg:px-10">

                    <div className="dropdown">
                        <button className="bg-transparent text-[#031926] font-semibold py-2 px-4 rounded inline-flex items-center">
                            <svg className="w-8 h-8" fill="none" stroke="#031926" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <ul className="link-container dropdown-menu hidden mr-2 md:mr-5 lg:mr-10">
                                <Link href="/home"><a className="rounded-t navbar-link border border-gray-700">Home</a></Link>
                                <Link href="/about"><a className="navbar-link border border-gray-700 border-t-0">About</a></Link>
                                <Link href="/products"><a className="navbar-link border border-gray-700 border-t-0">Products</a></Link>
                            </ul>
                        </button>
                    </div>

                    <div className="flex-1 py-4">
                        <Link href="/"><div className="text-center cursor-pointer"><Image
                            src={logo}
                            alt="Picture of the author"
                            width="80px"
                            height="80px"
                        /></div></Link>
                    </div>


                    <div className="flex items-center space-x-4 px-4 justify-between">

                        <Link href="/">
                            <FiSearch className=" text-2xl text-[#031926] cursor-pointer hover:text-yellow-600" />
                        </Link>

                        <Link href="/account">
                            <AiOutlineUser className=" text-2xl text-[#031926] cursor-pointer hover:text-yellow-600" />
                        </Link>

                        <Link href="/cart">
                            <AiOutlineShoppingCart className="text-2xl text-[#031926] cursor-pointer hover:text-yellow-600" />
                        </Link>
                    </div>

                </nav>
            </div>
        </>
    );
}

export default Navbar;

