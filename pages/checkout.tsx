import React from 'react'
import { AiOutlineShoppingCart, AiOutlineCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import {BsFillBagCheckFill  } from 'react-icons/bs'
import Link from 'next/link'
const checkout = ({ cart, subTotal, addToCart, removeFromCart }) => {
    return (
        <div className='container m-auto'>
            <h1 className='font-bold text-center text-3xl my-8'>Checkout</h1>
            <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
            <div className="mx-auto flex m-2">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="px-2 w-full">
                <div className=" mb-4">
                    <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                    <textarea id="address" name="address" cols="30" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">

                    </textarea>
                </div>
            </div>
            <div className="mx-auto flex m-2">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                        <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                        <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="mx-auto flex m-2">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                        <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                        <input type="email" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <h2 className='font-semibold text-xl'>2. Review Cart Items & Pay</h2>
            <div className="sideCart  bg-[#F4E9CD] p-6 m-2">

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
                {/* <Link href={'/checkout'}><button className="flex mt-16 border-0 border-black py-2 px-8 focus:outline-none">Checkout</button></Link>
            <button onClick={clearCart} className="flex mt-16 border-2 border-black py-2 px-8 focus:outline-none">clear cart</button> */}
            </div>
            <div className="mx-8">

                <Link href={'/checkout'}><button className="flex mr-2  border-0 bg-[#F4E9CD] border-black py-2 px-2 focus:outline-none rounded test-sm"><BsFillBagCheckFill className='m-1'/>Pay ₹{subTotal}</button></Link>

            </div>
        </div>
    )
}

export default checkout