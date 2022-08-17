/*import Link from "next/link";
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
*/
/*



import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";
import logo from '../public/Dekhanee-Logo.png'

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>

			<div className=" w-full bg-[#F4E9CD]">
				<div className='bg-[#468189] w-full h-10 py-2.5'>
					<p className=' font-mono font-light text-sm text-white text-center tracking-widest'>FREE SHIPPING ON ALL ORDERS ABOVE ₹1299</p>
				</div>
				<div className="w-full z-10 bg-[#F4E9CD]">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">

							<div className="flex justify-center text-left flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer">
									<span className="text-[#65968d]">Dekhanee:</span>
									<span className="text-[#172f3d]">The Beautiful</span>
								</h1>
							</div>

							<div className="hidden md:block">
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
						</div>
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
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
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
		</div>
	);
}

export default Navbar;*/

import Link from "next/link";
import { AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { useRef } from "react";

const Navbar = () => {

	const toggleCart = () => {
		if (ref.current.classList.contains('translate-x-full')) {
			ref.current.classList.remove('translate-x-full')
			ref.current.classList.add('translate-x-0')
		}
		else if (!ref.current.classList.contains('translate-x-full')) {
			ref.current.classList.remove('translate-x-0')
			ref.current.classList.add('translate-x-full')
		}
	}
	const ref = useRef()

	return (
		<>
			<nav className="absolute top-0 space-between flex items-center h-20 w-full z-50 text-sm bg-[#F4E9CD] px-2 md:px-5 lg:px-10">

				<div className="flex-1 p-5">
					<Link href="/"><img className='w-16 cursor-pointer' src="/Dekhanee-Logo.png" /></Link>

				</div>
				<div className="flex flex-shrink-0 ">
					<h1 className="font-bold text-xl cursor-pointer">
						<span className="text-[#65968d]">Dekhanee:</span>
						<span className="text-[#172f3d]">The Beautiful</span>
					</h1>
				</div>
				<div className="dropdown float-right">
					<button className="bg-transparent text-white font-semibold py-2 px-4 rounded inline-flex items-center">
						<svg className="w-8 h-8" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>


					<ul className="link-container dropdown-menu hidden mr-2 md:mr-5 lg:mr-10">
						<Link href="/"><a className="rounded-t navbar-link border border-gray-700">Home</a></Link>
						<Link href="/about"><a className="navbar-link border border-gray-700 border-t-0">About</a></Link>
						<Link href="/contact"><a className="navbar-link border border-gray-700 border-t-0">contact</a></Link>
						<Link href="/products"><a className="rounded-b navbar-link  border border-gray-700 border-t-0">Products</a></Link>
					</ul>
				</div>
				<div onClick={toggleCart} className="cart absolute right-0 top-7 mx-5 cursor-pointer ">
					<AiOutlineShoppingCart className='text-xl md:text-2xl' />
				</div>
				<div ref={ref} className=" w-72 sideCart absolute top-0 right-0 bg-green-100 px-8 py-10 transform transition-transform translate-x-full">
					<h2 className="font-bold underline text-xl text-center ">Shopping Cart</h2>
					<span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl">
						<AiFillCloseCircle />
					</span>
					<ol className="list-decimal font-semibold">
						<li>
							<div className="item flex my-5">
								<div className="w-2/3 font-semibold">Ear-rings</div>
								<div className="flex font-semibold items-center justify-center w-1/3 text-lg ">
									<AiOutlineMinusCircle className="cursor-pointer" /><span className="mx-3">1</span><AiOutlinePlusCircle className="cursor-pointer" />
								</div>
							</div>
						</li>
						<li>
							<div className="item flex my-5">
								<div className="w-2/3 font-semibold">Ear-rings</div>
								<div className="flex font-semibold items-center justify-center w-1/3 text-lg ">
									<AiOutlineMinusCircle className="cursor-pointer" /><span className="mx-3">1</span><AiOutlinePlusCircle className="cursor-pointer" />
								</div>
							</div>
						</li>
						<li>
							<div className="item flex my-5">
								<div className="w-2/3 font-semibold">Ear-rings</div>
								<div className="flex font-semibold items-center justify-center w-1/3 text-lg ">
									<AiOutlineMinusCircle className="cursor-pointer" /><span className="mx-3">1</span><AiOutlinePlusCircle className="cursor-pointer" />
								</div>
							</div>
						</li>
						<li>
							<div className="item flex my-5">
								<div className="w-2/3 font-semibold">Ear-rings</div>
								<div className="flex font-semibold items-center justify-center w-1/3 text-lg ">
									<AiOutlineMinusCircle className="cursor-pointer" /><span className="mx-3">1</span><AiOutlinePlusCircle className="cursor-pointer" />
								</div>
							</div>
						</li>
						<li>
							<div className="item flex my-5">
								<div className="w-2/3 font-semibold">Ear-rings</div>
								<div className="flex font-semibold items-center justify-center w-1/3 text-lg ">
									<AiOutlineMinusCircle className="cursor-pointer" /><span className="mx-3">1</span><AiOutlinePlusCircle className="cursor-pointer" />
								</div>
							</div>
						</li>




					</ol>
					<div className="flex">
						<button className="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">Checkout</button>
						<button className="flex mx-2  text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">Clear Cart</button>
					</div>
				</div>

			</nav>
		</>
	);
}

export default Navbar;
