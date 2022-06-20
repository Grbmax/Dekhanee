/*import Link from 'next/link'
function Footer() {
	return (
	  <>
		<div className='top-100 bg-orange-900 flex justify-between w-full items-center  bottom-0 left-0'>
    
			<div></div>
			<div>
		    
				<h1 className='text-white font-bold'>ABOUT US</h1>
				<h3 className='text-white'> 100k+ orders delivered globally. World class products, Proudly made in India.  </h3>
				<h3 className='text-white'>Customer Support – support@xyz.com</h3>

			</div>
			<div>
			  <h1 className='text-white font-bold justify-between w-full items-center'>POLICES</h1>      
			  <Link href='/Return'><h3 className='text-white '>Return & Cancellation Policy</h3></Link>
			  <Link href='/Terms'><h3 className='text-white'>Terms & Conditions</h3></Link>
			  <Link href='/Privacy_Policy'><h3 className='text-white'>Privacy Policy</h3></Link>
			  <Link href='/Shipping_Policy'><h3 className='text-white'>Shipping Policy</h3></Link>
			  <Link href='/Contact_Us'><h3 className='text-white'>Contact Us</h3></Link>
			</div>
			<div></div>
		    
		  
    
		</div>
	  </>
	)
  }
  
  export default Footer
*/
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className=" bg-[#F4E9CD] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-black-1000 font-bold text-3xl pb-6">
							<span className="text-[#65968d]">Dekhanee: </span>
							<span className="text-[#172f3d]">The Beautiful</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-blue-600" />
							<Link href='https://www.facebook.com/Dekhanee'><FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" /></Link>
							<FaWhatsapp className="text-2xl cursor-pointer hover:text-blue-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-black font-bold text-2xl pb-4">Products</p>
						<li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Ear Rings
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-black font-bold text-2xl pb-4">Company</p>
						<li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-black font-bold text-2xl pb-4">Support</p>
						<li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<Link href='/contact'> Contact Us </Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-[#468189]">
				<h1 className=" text-gray-800 font-semibold">
					© 2021-2022 All rights reserved | Built with ❤ by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						Project Aspects {" "}
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;