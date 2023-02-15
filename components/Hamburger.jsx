import { useState} from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
function MobileNav({ open, setOpen }) {
  const { data: session } = useSession()
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-60 bg-[#F4E9CD] text-black bg-opacity-95 border border-black transform ${open ? "-translate-x-0 " : "-translate-x-full "
        } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col justify-center items-center mt-10 ">
        <Link
          className="text-2xl  font-bold hover:text-[#cd8d59] hover:underline my-4 "
          href="/"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          Home
        </Link>
        <Link
          className="text-2xl  font-bold my-4 hover:text-[#cd8d59] hover:underline "
          href="#about"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          About Us
        </Link>
        <Link
          className="text-2xl  font-bold my-4 hover:text-[#cd8d59] hover:underline "
          href="product/earrings"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          Products
        </Link>
        <Link
          className="text-2xl  font-bold my-4 hover:text-[#cd8d59] hover:underline "
          href="/order"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          My Order
        </Link>
        <Link
          className="text-2xl  font-bold my-4 hover:text-[#cd8d59] hover:underline "
          href="#trackorder"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          Track My Order
        </Link>
        <Link
          className="text-2xl  font-bold my-4 hover:text-[#cd8d59] hover:underline "
          href="#contact"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          Contact
        </Link>
        <Link
          className="text-2xl  font-bold my-4 hover:text-[#cd8d59] hover:underline "
          href="#faqs"
          onClick={() => {
            setOpen(!open), scrollTo(top);
          }}
        >
          FAQs
        </Link>

      </div>
      <div className="flex justify-center mt-16">

      {session?.user ? (
              <>
                {session?.user.role === "admin" ? (
                  <>
                    <Link className="border-2 border-black p-1 rounded-lg hover:bg-black hover:text-white" href="/admin">Admin Panel</Link>
                  </>
                ) : (
                  <>
                    <Link className="border-2 border-black p-1 rounded-lg hover:bg-black hover:text-white" href="/user">Your Account</Link>
                  </>
                )}
               {/*  <button onClick={() => signOut()} className="border-2 border-black p-1 rounded-lg hover:bg-black hover:text-white">
                  Sign Out
                </button> */}
                 <button onClick={() => signOut()} className="group relative p-1 w-36 overflow-hidden rounded
                bg-white " type="submit">
                  <div className='absolute inset-0 w-2 bg-gray-700 transition-all
                  duration-[250ms] ease-out group-hover:w-full'></div>
                  <span className='relative text-gray-500 group-hover:text-white'>
                  Sign Out
                  </span>
                </button> 
              </>
            )
              : (
               
                /*  <button onClick={() => signIn()} className="border-2 border-black p-2 rounded-lg hover:bg-black hover:text-white ">
                    <div className='absolute inset-0 w-2 bg-gray-700 transition-all
                   duration-[250ms] ease-out group-hover:w-full'></div>
                   Register / Login
                 </button> */
                <button onClick={() => signIn()} className="group relative p-1 w-36 overflow-hidden rounded
                bg-white " type="submit">
                  <div className='absolute inset-0 w-2 bg-gray-700 transition-all
                  duration-[250ms] ease-out group-hover:w-full'></div>
                  <span className='relative text-gray-500 group-hover:text-white'>
                    Register / Login
                  </span>
                </button>
              )}
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

      <div className="flex flex-row items-center p-5 pt-0 text-left  ">
        <div
          className="group relative w-6 h-5 cursor-pointer flex-col justify-between text-3xl flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg  cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""
              }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg  cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"
              }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg  cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""
              }`}
          />
        </div>
      </div>
    </nav>
  )
}

export default Hamburger