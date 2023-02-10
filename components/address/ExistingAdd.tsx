import React from 'react'
import profilepicture from "../../public/profilepicture.png"
import Image from 'next/image'

function ExistingAdd () {
  return (
    <div>

      <div id='savedaddress' className=''>
        <div id='primaryaddress' className='m-auto w-3/4 h-3/4 border border-black'>
          Address1
      </div>

      <div id='secondaryaddress' className='m-auto w-3/4 h-3/4 border border-black'>
          Address2
        </div>
      </div>

    </div>
  )
}

export default ExistingAdd