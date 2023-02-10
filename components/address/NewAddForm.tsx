import React from 'react'

const NewAddForm = () => {
  return (
    <>
      <section className="text-gray-600 body-font">

        <div className="container px-5 py-24 items-center">
          <div className=" bg-gray-100 m-auto w-3/4 rounded-lg p-8 flex flex-col">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add Your Address</h2>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Apartment Name/ Flat no</label>
              <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:[#F4E9CD] focus:ring-2 focus:[#F4E9CD] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            </div>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Street Number</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            </div>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Landmark</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            </div>
            
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Postal Code</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            </div>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">State</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            </div>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">City</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            </div>

            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            
            <div className='flex space-x-6 items-center py-4'>
              <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
              <label>Use the delivery address for billing address</label>
            </div>

          </div>
        </div>
        
      </section>
    </>
  )
}

export default NewAddForm