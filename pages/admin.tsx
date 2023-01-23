import React from 'react'
import { useState } from 'react'

type Credentials = {
    admin_id : string,
    admin_pwd : string
}

function admin() {
    const [term, setTerm] = useState('');

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(term)
    }
  return (
    <>
    <div className='bg-[#313131] bg-opacity-40'>
        <div className='flex flex-row justify-center items-center h-screen'>
            <div className='w-full max-w-xs'>
                <form onSubmit={submitForm} className='bg-[#F4E9CD] shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                            Username
                        </label>
                        <input value={term} onChange={(e) => setTerm(e.target.value)} 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username'/>
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                            Password
                        </label>
                        <input value={term} onChange={(e) => setTerm(e.target.value)} 
                        className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' type='password' placeholder='Password'/>
                        <p className='text-red-500 text-xs italic'>Enter your password.</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                         Sign In
                        </button>
                    </div>
                    <br></br>
                    <p className='text-center text-gray-500 text-xs'>
                 &copy;2023 GRY. Corp. All rights reserved. 
                </p>
                </form>
            </div>
        </div>
    </div>    
    </>
  )
}

export default admin
