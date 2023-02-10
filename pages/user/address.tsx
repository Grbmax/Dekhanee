import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import profilepicture from "../../public/profilepicture.png"
import NewAddForm from '../../components/address/NewAddForm'

function address() {
const { data: session } = useSession()
  return (
    <>
    <div id='first_section' className='bg-[#EFEFEF] flex w-full h-36 items-center px-16 space-x-16'>
      <Image src={profilepicture} alt="profilepciture" height={8*12} width={8*12} className="border border-[#F4E9CD] rounded-full"/>
      <h1 className='text-5xl m-5'>Welcome, {session?.user.name}</h1>
    </div>

    <NewAddForm/>
    </>
  )
}

export default address