import Image from 'next/image'
import profilepicture from "../../public/profilepicture.png"
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';

const account = () => {
  const { data: session } = useSession()

  return (
    <div className='bg-[#FFFFFF] w-full h-auto'>

        <div id='first_section' className='bg-[#EFEFEF] flex w-full h-36 items-center px-16 space-x-16'>
            <Image src={profilepicture} alt="profilepciture" height={8*12} width={8*12} className="border border-[#F4E9CD] rounded-full"/>
            <h1 className='text-5xl m-5'>Welcome, {session?.user.name}</h1>
        </div>

        <div id='second_section' className='bg-[#FFFFFF] w-full flex flex-col space-y-8 py-8'>

          <Link href="/user/order">
          <div id='orderHistory' className='bg-[#FFFFFF]  hover:bg-[#EFEFEF] box-content h-24 w-10/12 border-black border m-auto flex items-center justify-between'>
            <p className='text-xl p-8'>Order History</p>
            <AiOutlineArrowRight className='h-8 w-8 mx-8'/>
          </div>
          </Link>

          <div id='yourAddresses' className='bg-[#FFFFFF] hover:bg-[#EFEFEF] box-content h-24 w-10/12 border-black border m-auto flex items-center justify-between'>
            <p className='text-xl p-8'>Your Addresses</p>
            <AiOutlineArrowRight className='h-8 w-8 mx-8'/>
          </div>
          
          <div id='paymentOptions' className='bg-[#FFFFFF] hover:bg-[#EFEFEF] box-content h-24 w-10/12 border-black border m-auto flex items-center justify-between'>
            <p className='text-xl p-8'>Payment Options</p>
            <AiOutlineArrowRight className='h-8 w-8 mx-8'/>
          </div>
          
          <div id='loginSecurity' className='bg-[#FFFFFF] hover:bg-[#EFEFEF] box-content h-24 w-10/12 border-black border m-auto flex items-center justify-between'>
            <p className='text-xl p-8'>Login & Security</p>
            <AiOutlineArrowRight className='h-8 w-8 mx-8'/>
          </div>

          <div id='contactUs' className='bg-[#FFFFFF] hover:bg-[#EFEFEF] box-content h-24 w-10/12 border-black border m-auto flex items-center justify-between'>
            <p className='text-xl p-8'>Contact Us</p>
            <AiOutlineArrowRight className='h-8 w-8 mx-8'/>
          </div>
        
        </div>

        {/* <div id='logout' className='bg-[#FFFFFF] h-24 w-10/12 m-auto flex items-center justify-center'>
          <button className='text-xl'>Logout</button>
        </div> */}

    </div>

    
  )
}

export default account