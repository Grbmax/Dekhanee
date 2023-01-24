import React from 'react'
import Link from 'next/link'

const earrings = () => {
  return (

    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center p-5">
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-2xl ">
              <Link href={'/product/earing'}>
                <div className="block relative h-48 rounded overflow-hidden ">
                  <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="../ear-rings/1.jpeg" />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-2xl">
              <Link href={'/product/earing'}>
                <div className="block relative h-48  rounded overflow-hidden ">
                  <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="../ear-rings/2.jpeg" />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                  <p className="mt-1">$21.15</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-2xl">
              <Link href={'/product/earing'}>
                <div className="block relative h-48  rounded overflow-hidden ">
                  <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="../ear-rings/3.jpeg" />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                  <p className="mt-1">$12.00</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-2xl">
              <Link href={'/product/earing'}>
                <div className="block relative h-48  rounded overflow-hidden ">
                  <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="../ear-rings/4.jpeg" />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                  <p className="mt-1">$18.40</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-2xl">
              <Link href={'/product/earing'}>
                <div className="block relative h-48  rounded overflow-hidden ">
                  <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="../ear-rings/5.jpeg" />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-2xl">
              <Link href={'/product/earing'}>
                <div className="block relative h-48  rounded overflow-hidden ">
                  <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="../ear-rings/6.jpeg" />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                  <p className="mt-1">$21.15</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-2xl">
              <Link href={'/product/earing'}>
                <div className="block relative h-48  rounded overflow-hidden ">
                  <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="../ear-rings/7.jpeg" />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                  <p className="mt-1">$12.00</p>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-2xl">
              <Link href={'/product/earing'}>
                <div className="block relative h-48  rounded overflow-hidden ">
                  <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="../ear-rings/8.jpeg" />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                  <p className="mt-1">$18.40</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default earrings