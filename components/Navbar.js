import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {

    return (
        <>
        <div className="flex-1">

            <nav className=" top-0 flex items-center h-32 w-full text-sm bg-[#99582A] px-2 md:px-5 lg:px-10">

                <div className="dropdown">
                    <button className="bg-transparent text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    <ul className="link-container dropdown-menu hidden mr-2 md:mr-5 lg:mr-10">
                        <Link href="/home"><a className="rounded-t navbar-link border border-gray-700">Home</a></Link>
                        <Link href="/about"><a className="navbar-link border border-gray-700 border-t-0">About</a></Link>
                        <Link href="/products"><a className="navbar-link border border-gray-700 border-t-0">Products</a></Link>
                    </ul>
                    </button>
                  </div>
                  
                <div className="flex-1 p-5">
                    <Link href="/"><h1 className="text-white text-center font-bold">LOGO</h1></Link>
                </div>


                <div className="flex ">

                    <Link href="/account">
                    <AiOutlineUser className=" text-2xl text-white cursor-pointer hover:text-yellow-600" />
                    </Link>
                    
                    <Link href="/">
                    <FiSearch className=" text-2xl text-white cursor-pointer hover:text-yellow-600" />
                    </Link>
                
                
                    <Link href="/cart">
                    <AiOutlineShoppingCart className="text-2xl text-white cursor-pointer hover:text-yellow-600" />
                    </Link>
                </div>
            
            </nav>
        </div>
        </>
    );
}

export default Navbar;

