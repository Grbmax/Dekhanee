import Image from 'next/image'
import profilepicture from "../public/profilepicture.png"
import React from 'react'
import Navbar from '../components/Navbar'
import { AiOutlineArrowRight } from 'react-icons/ai';

const account = () => {
  return (
    <>
    <Navbar/>
    <div className='bg-[#FFFFFF] w-full h-screen'>
      {/* First Section */}
        <div id='first_section' className='bg-[#EFEFEF] flex w-full h-36 items-center px-16 space-x-16'>
            <Image src={profilepicture} alt="profilepciture" height={8*12} width={8*12} className="border border-[#F4E9CD] rounded-full"/>
            <h1 className='text-5xl m-5'>Welcome, $Name$ !</h1>
        </div>

      {/* Second Section */}
        <div id='second_section' className='bg-[#FFFFFF] w-full flex flex-col space-y-8 py-8'>

          <div id='orderHistory' className='bg-[#FFFFFF] hover:bg-[#EFEFEF] box-content h-24 w-10/12 border-black border rounded-xl m-auto flex items-center justify-between'>
            <button className='text-2xl p-8'>Order History</button>
            <AiOutlineArrowRight className='h-8 w-8 mx-8'/>
          </div>
          <div id='yourAddresses' className='bg-[#FFFFFF] hover:bg-[#EFEFEF] box-content h-24 w-10/12 border-black border rounded-xl m-auto flex items-center justify-between'>
            <button className='text-2xl p-8'>Your Addresses</button>
            <AiOutlineArrowRight className='h-8 w-8 mx-8'/>
          </div>
          <div id='paymentOptions' className='bg-[#FFFFFF] hover:bg-[#EFEFEF] box-content h-24 w-10/12 border-black border rounded-xl m-auto flex items-center justify-between'>
            <button className='text-2xl p-8'>Payment Options</button>
            <AiOutlineArrowRight className='h-8 w-8 mx-8'/>
          </div>
          <div id='loginSecurity' className='bg-[#FFFFFF] hover:bg-[#EFEFEF] box-content h-24 w-10/12 border-black border rounded-xl m-auto flex items-center justify-between'>
            <button className='text-2xl p-8'>Login & Security</button>
            <AiOutlineArrowRight className='h-8 w-8 mx-8'/>
          </div>
          <div id='contactUs' className='bg-[#FFFFFF] hover:bg-[#EFEFEF] box-content h-24 w-10/12 border-black border rounded-xl m-auto flex items-center justify-between'>
            <button className='text-2xl p-8'>Contact Us</button>
            <AiOutlineArrowRight className='h-8 w-8 mx-8'/>
          </div>
        
        </div>

      {/* Logout */}
        <div id='logout' className='bg-[#FFFFFF] box-content h-24 w-10/12  m-auto flex items-center justify-center'>
          <button className='text-2xl p-8'>Logout</button>
        </div>

    </div>

    </>
  )
}

export default account
