import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { InferGetServerSidePropsType } from 'next'

type Cards = {
  id: number,
  name: string,
  type: string,
  category: string,
  inventory_id: number,
  description: string,
  MSRP: number,
  SP: number,
  image: string
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/products/fetchProducts`)
  const cards: Cards[] = await res.json()
  return {
    props: {
      cards,
    },
  }
}

function Earrings({ cards }: InferGetServerSidePropsType<typeof getStaticProps>) {

  const image = { image: "/../public/product/ear-rings/Jhumkas/3.jpeg" }

  return (
    <>


      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4 ">
            {
              cards.map((card) =>
                <>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <Link href={'/product/abc'} className="h-48 rounded overflow-hidden">
                      <img alt="ecommerce" className=" object-center w-full h-full " src="https://dummyimage.com/420x260" />
                    </Link>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{card.category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{card.name}</h2>
                      <p className="mt-1">{card.SP}</p>
                    </div>
                  </div>
                </>

              )
            }
            {/* </div> */}
          </div>
        </div>
      </section>


    </>
  )

}

export default Earrings

{/* <div className='p-2 block items-center bg-white border-gray-200 rounded-lg'>
                <p>{card.name}</p>
                <p>{card.description}</p>
                <p>{card.category}</p>
                <p>{card.MSRP} {card.SP}</p>
              </div> */}


//for(var i = 0; i < Object.keys(cards).length; i++)
// {
//     console.log(cards[i])
// 
{/*  <Image src={image.image} alt='Stone Earring' height={480} width={480} /> */ }/* fgdfggdf */