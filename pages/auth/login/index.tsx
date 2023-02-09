import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc"
import { BsFacebook } from "react-icons/bs"


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
        pwd: {
          type: 'required',
          message: "Password is Required.",
        }
      }
      : {},
  };
};

export default function App() {
  //React-Hook-Form
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });

  //Form State
  const [formState, setFormState] = useState("login")
  
  const handleForgotPassword = () => {
    setFormState("forgotPassword")
  };

  const handleLogin  = () => {
    setFormState("login")
  }

  //Google Handler
  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: "http://localhost:3000" })
  }

  async function handleFacebookSignIn() {
    signIn('facebook')
  }

  const onSubmit = async (values: any) => {
    // Session Details
    const { mail_id, pwd } = values
    const result = await signIn("credentials", {
      username: mail_id,
      password: pwd,
      redirect: true,
      callbackUrl: "/"
    })

    try {
      await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='flex flex-col h-screen justify-start items-center'>
        <h1 className='text-3xl block font-medium italic mt-28 mb-5'>LOGIN</h1>
        {formState === "login" ? (
          <div className='w-full space-y-4 max-w-xs bg-[#F4E9CD] shadow-md rounded 
          px-8 pt-6 pb-8 mb-4 '>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                  Email-ID
                </label>
                <input {...register("mail_id")}
                  className='shadow appearance-none border 
                        rounded w-full py-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline'
                  id='username' type='mail' placeholder='user@gmail.com' />
                {errors?.mail_id && <p className='py-1 text-red-500 leading-tight 
                text-xs'>{errors.mail_id.message}</p>}
              </div>
              <div className='mb-2'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                  Password
                </label>
                <input {...register("pwd")}
                  className='shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='password' type='password' placeholder='Password' />
                {errors?.pwd && <p className='py-1 text-red-500 leading-tight 
                text-xs'>{errors.pwd.message}</p>}
              </div>
              <div className='flex flex-col mb-2 items-end w-full'>
                <button className='text-[14px] text-blue-500' 
                onClick={handleForgotPassword}>Forgot Password?</button>
              </div>
              <div className='flex flex-col space-y-2 items-center justify-center'>
                <button className="group relative p-1 w-full overflow-hidden rounded
                bg-white " type="submit">
                  <div className='absolute inset-0 w-2 bg-gray-700 transition-all
                  duration-[250ms] ease-out group-hover:w-full'></div>
                  <span className='relative text-gray-500 group-hover:text-white'>
                  Sign In
                  </span>
                </button>
                <div className='flex flex-row space-x-1'>
                  <p className='text-center text-gray-500 text-sm'>
                    Don't have an account yet?
                  </p>
                  <Link className='text-center text-blue-500 text-sm' href="/auth/signup">
                    Sign up
                  </Link>
                </div>
                <div className='flex flex-row justify-center items-center'>
                  <hr className='w-10 h-0.5 mr-2 bg-gray-500' />
                  <span className='text-gray-500 text-sm'>OR</span>
                  <hr className='w-10 h-0.5 ml-2 bg-gray-500' />
                </div>
              </div>
            </form>

            <button onClick={handleGoogleSignIn} className="group relative p-1
            w-full overflow-hidden rounded bg-white" type="submit">
            <div className='absolute inset-0 w-2 bg-gray-700 transition-all
            duration-[250ms] ease-out group-hover:w-full'></div>
              <span className='flex items-center relative text-gray-500
              group-hover:text-white justify-center'>
                <FcGoogle className='text-xl mr-2' />
                  Google
              </span>
            </button>

            <button onClick={handleFacebookSignIn} className="group relative p-1
            w-full overflow-hidden rounded bg-white" type="submit">
            <div className='absolute inset-0 w-2 bg-gray-700 transition-all
            duration-[250ms] ease-out group-hover:w-full'></div>
              <span className='flex items-center relative text-gray-500
              group-hover:text-white justify-center'>
                <BsFacebook className='text-xl mr-2' />
                  Facebook
              </span>
            </button>

            <p className='text-xs'>&copy;Dekhanee : The Beautiful. All rights reserved.</p>

          </div>
        ) : (
          <div className='w-full space-y-4 max-w-xs bg-[#F4E9CD] shadow-md 
          rounded px-8 pt-6 pb-8 mb-4 '>
            <form>
              <div className='mb-2'>
                <h2 className='text-center mb-2'>We will send you a link to reset your password.</h2>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                  Email-ID
                </label>
                <input
                  className='shadow appearance-none border 
                        rounded w-full py-2 px-3 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline'
                  id='username' type='mail' placeholder='user@gmail.com' />
              </div>
              
              <div>
              <button className="group relative p-1 w-full overflow-hidden rounded bg-white 
              text-lg shadow">
              <div className="absolute inset-0 w-2 bg-gray-700 transition-all 
              duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-gray-500 group-hover:text-white">
              Submit</span>
              </button>
              </div>
            </form>
            <div className='w-full text-center'>
              <button className='text-[14px] text-blue-500' onClick={handleLogin}>
                Cancel
              </button>
            </div>
            <p className='text-xs'>&copy;Dekhanee : The Beautiful. All rights reserved.</p>
          </div>
        )}
      </div>
    </>
  );
}
