import Link from 'next/link'
import React from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

const cart = ({ cart, subTotal, addToCart, removeFromCart, clearCart }) => {
  return (
    <div>
      <div className="sideCart  bg-[#F4E9CD] p-6 m-2 border border-black rounded shadow-md">

        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 &&
            <div className="my-4 font-semibold">No items in the cart</div>}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className=" font-semibold">{cart[k].name}</div>
                  <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].variant) }} />
                    <span className="mx-2 text-sm">{cart[k].qty}</span> <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].variant) }} />
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
        <span className='font-bold'>Subtotal: ₹{subTotal}</span>
        {/* <Link href={'/checkout'}><button className="flex mt-16 border-0 border-black py-2 px-8 focus:outline-none">Checkout</button></Link> */}
      </div>
      <div className="mx-8 flex flex-row mb-5">

        <Link href={'/checkout'}><button className="flex mr-2  border bg-[#F4E9CD] border-black py-2 px-2 focus:outline-none rounded test-sm "><BsFillBagCheckFill className='m-1' />Pay ₹{subTotal}</button></Link>
        <button onClick={clearCart} className="flex mr-2  border bg-[#F4E9CD] border-black py-2 px-2 focus:outline-none rounded test-sm">clear cart</button>

      </div>
    </div>
  )
}

export default cart
/* 
import React from 'react'

const cart = () => {
  return (
    <div>cart</div>
  )
}

export default cart */