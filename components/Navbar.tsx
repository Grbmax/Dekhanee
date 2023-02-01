import React from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiOutlineUser } from 'react-icons/ai'
import { useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import DekhaneeLogo from "../public/DekhaneeLogo.png"

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {

  //Session 
  const { data: session } = useSession()

  //DEUBG
  // console.log("Session Details: ", session);


  //Cart

  const ref = useRef<HTMLInputElement | null>(null);
  const toggleCart = () => {
    if (!ref.current) return;
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  return (
    <>


      <div className="flex items-center justify-center shadow-md bg-[#F4E9CD] w-full text-black z-10">

        <div className=" w-1/3">
          <Hamburger />
        </div>

        <div id="logo" className=" flex justify-center text-center w-1/3 text-black text-2xl md:text-4xl lg:text-5xl italic font-semibold">
          <Image src={DekhaneeLogo} alt="profilepciture" height={8 * 14} width={8 * 14} className='p-2' />
          {/* <Link href={""}>Dekhanee</Link> */}
        </div>


        <div className="w-1/3 p-5">
          <div className="flex space-x-2 justify-end ">
            {session?.user ? (
              <> 
                {session?.user.role === "admin" ? (
                <>
                  <Link className="border-2 border-black p-1 rounded-lg hover:bg-black hover:text-white" href="/admin">Admin Panel</Link>    
                </> 
                ):(
                <>
                  <Link className="border-2 border-black p-1 rounded-lg hover:bg-black hover:text-white" href="/user">Your Account</Link>
                </>
                )}
                <button onClick={() => signOut()} className="border-2 border-black p-1 rounded-lg hover:bg-black hover:text-white">
                  Sign Out
                </button></>
            )
              : (
                <button onClick={() => signIn()} className="border-2 border-black p-2 rounded-lg hover:bg-black hover:text-white">
                  Register / Login
                </button>
              )}

            <button onClick={toggleCart}>
              <AiOutlineShoppingCart className="h-6 w-6 items-center" />
            </button>
          </div>


          <div ref={ref} className={`sideCart w-72 h-[100vh] absolute top-0 right-0 bg-[#F4E9CD]  p-10 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-full': 'translate-x-0'}`}>
          {/* <div ref={ref} className={`sideCart w-72 h-[100vh] absolute top-0 right-0 bg-[#F4E9CD] px-8 py-10 transform transition-transform translate-x-full`}>
 */}            <h2 className="font-bold text-xl text-center"> Shoping Cart </h2>
            <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl"><AiOutlineCloseCircle /></span>
            <ol className="list-decimal font-semibold">
              {Object.keys(cart).length == 0 &&
                <div className="my-4 font-semibold">No items in the cart</div>}
              {Object.keys(cart).map((k) => {
                return (
                  <li key={k}>
                    <div className="item flex my-5">
                      <div className="w-2/3 font-semibold">{cart[k].name}</div>
                      <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].variant) }} />
                        <span className="mx-2 text-sm">{cart[k].qty}</span> <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].variant) }} />
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>
            <div className='font-bold text-start'>Subtotal: ₹{subTotal}</div>
            <Link href={'/checkout'}><button className="flex mt-16 border-0 border-black py-2 px-8 focus:outline-none">Checkout</button></Link>
            <button onClick={clearCart} className="flex mt-16 border-2 border-black py-2 px-8 focus:outline-none">clear cart</button>
          </div>

        </div>
      </div>
    </>
  );
};
/* dfgdfgdfg samp */
export default Navbar;