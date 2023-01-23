import React from 'react';
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
  admin_id: string;
  admin_pwd: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.admin_id ? values : {},
    errors: !values.admin_id
      ? {
          admin_id: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));
  
  return (
    <>
    <div className='bg-[#313131] bg-opacity-60'>
        <div className='flex flex-row h-screen justify-center items-center'>
            <div className='w-full max-w-xs'>
                <form onSubmit={onSubmit} className='bg-[#F4E9CD] shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                            Username
                        </label>
                        <input {...register("admin_id")}  
                        className='shadow appearance-none border 
                        rounded w-full py-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline' 
                        id='username' type='text' placeholder='Username'/>
                        {errors?.admin_id && <p className='py-1 text-red-500 leading-tight text-xs italic'>{errors.admin_id.message}</p>}
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                            Password
                        </label>
                        <input {...register("admin_pwd")}  
                        className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 
                        text-gray-700 mb-3 leading-tight focus:outline-none 
                        focus:shadow-outline' type='password' placeholder='Password'/>
                        <p className='text-red-500 text-xs italic'>Enter your password.</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                         Sign In
                        </button>
                    </div>
                    <br></br>
                    <p className='text-center text-gray-500 text-xs'>
                 &copy;Dekkhanee : The Beautiful. All rights reserved. 
                </p> 
                </form>
            </div>
        </div>
    </div>
    </>
  );
}

