import React from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineCloseCircle, AiFillMinusCircle, AiFillPlusCircle,AiOutlineUser} from 'react-icons/ai'
import { useRef } from "react";
import Image from "next/image";
import DekhaneeLogo from "../public/DekhaneeLogo.png"

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
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

      <div id="navbar" className="sticky top-0 flex items-center shadow-md bg-[#F4E9CD] w-full text-black">
        
        <div id="menu" className="w-1/3 justify-start">
          <Hamburger />
        </div>

        <div id="logo" className=" flex justify-center text-center w-1/3 text-black text-2xl md:text-4xl lg:text-5xl italic font-semibold">
        <Image src={DekhaneeLogo} alt="profilepciture" height={8*14} width={8*14} className='p-2'/>
          {/* <Link href={""}>Dekhanee</Link> */}
        </div>
        
        <div className="mx-auto flex justify-center items-center space-x-10">

          <div className="flex justify-center items-center">
            <button onClick={toggleCart}>
              <AiOutlineShoppingCart className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center items-center">
            <button>
              <AiOutlineUser className="h-6 w-6"/>
            </button>
          </div>

          <div className="flex justify-center items-center">
            <button className=" text-black text-xl">Login</button>
          </div>

          <div ref={ref} className={`sideCart w-72 h-[100vh] absolute top-0 right-0 bg-[#F4E9CD] p-10 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0': 'translate-x-full'}`}>
            <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl"><AiOutlineCloseCircle /></span>
            <h2 className="font-bold text-xl text-center"> Shoping Cart </h2>
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