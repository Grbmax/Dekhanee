import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className=" bg-[#A1C6EA] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-15">
				<div className="p-5 ">
					
					<ul>
					<Link href={"/"}>
						<p className="text-black-1000 font-bold text-3xl pb-6 cursor-pointer">
							<span className="text-[#65968d]">Dekhanee: </span>
							<span className="text-[#172f3d]">The Beautiful</span>
						</p>
						</Link>
						<div className="flex gap-6 pb-4">
							<FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
							<Link href='https://www.facebook.com/Dekhanee'><FaFacebook className="text-2xl cursor-pointer hover:text-pink-600" />
							</Link>
							<FaWhatsapp className="text-2xl cursor-pointer hover:text-pink-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-black font-bold text-2xl pb-2">Products</p>
						<li className="text-gray-900 text-md pb-2 font-semibold hover:text-pink-600 cursor-pointer">
							Ear Rings
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-black font-bold text-2xl pb-2">Company</p>
						<li className="text-gray-900 text-md pb-2 font-semibold hover:text-pink-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-900 text-md pb-2 font-semibold hover:text-pink-600 cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-black font-bold text-2xl pb-2">Support</p>
						
						<li className="text-gray-900 text-md pb-2 font-semibold hover:text-pink-600 cursor-pointer">
						<Link href={"/contact"}>Contact Us </Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center p-3 bg-[#131414]">
				<h6 className=" text-white font-inter">
					© 2021-2022 All rights reserved | Built with 
					<span className="text-red-600 font-inter cursor-pointer"> ❤ </span>
					by{" "}
					<span className="hover:text-blue-600 font-inter cursor-pointer">
						Project Aspects {" "}
					</span>
				</h6>
			</div>
		</>
	);
}

export default Footer;