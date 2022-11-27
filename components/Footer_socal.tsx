import React from 'react'
import {FaFacebookF , FaInstagram  } from 'react-icons/fa'
import {FiTwitter  } from 'react-icons/fi'

const Footer_socal = () => {
  return (
    <div className='flex py-5 justify-center lg:justify-end gap-5 text-3xl'>
        <FaInstagram />
        <FaFacebookF />
        <FiTwitter />
    </div>
  )
}

export default Footer_socal