import { signIn } from 'next-auth/react';
import React from 'react';
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
  mail_id: string;
  pwd: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.mail_id || values.pwd ? values : {},
    errors: !values.mail_id || !values.pwd
      ? {
          mail_id: {
            type: 'required',
            message: "Email-ID is required.",
          },
          pwd : {
            type: 'required',
            message: "Password is Required.",
          }
        }
      : {},
  };
};

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });

  const onSubmit = async (values : any) => {
    
    // Debug Block

    // try {
    //   const { mail_id, pwd } = values
    //   console.log("Username from auth/login: ", mail_id)
    //   console.log("Password from auth/login: ", pwd)
    // } catch (error) {
    //   console.log(error)
    // }

    // Session Details
    const { mail_id, pwd } = values
    const result = await signIn("credentials",{
      username : mail_id,
      password : pwd,
      redirect : true,
      callbackUrl : "/"
    })

    try {
        await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(values)
        }) 
    } catch (error) {
        console.log(error)
    }
  }
    
  return (
    <>
        <div className='flex flex-row h-screen justify-center items-center'>
            <div className='w-full max-w-xs'>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-[#F4E9CD] shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                            Email-ID
                        </label>
                        <input {...register("mail_id")}  
                        className='shadow appearance-none border 
                        rounded w-full py-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline' 
                        id='username' type='mail' placeholder='user@gmail.com'/>
                        {errors?.mail_id && <p className='py-1 text-red-500 leading-tight text-xs'>{errors.mail_id.message}</p>}
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                            Password
                        </label>
                        <input {...register("pwd")}  
                        className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        id='password' type='password' placeholder='Password'/>
                        {errors?.pwd && <p className='py-1 text-red-500 leading-tight text-xs'>{errors.pwd.message}</p>}
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
    </>
  );
}
