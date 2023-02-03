import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { InferGetServerSidePropsType } from 'next'

type Cards = {
 id : number,
 name : string,
 type : string,
 category : string,
 inventory_id : number,
 description : string,
 MSRP : number,
 SP : number,
 image : string
}

export const getStaticProps = async() => {
  const res = await fetch(`http://localhost:3000/api/products/fetchProducts`)
  const cards: Cards[] = await res.json()
  return {
    props: {
      cards,
    },
  }
}

function Earrings({ cards }: InferGetServerSidePropsType<typeof getStaticProps>) {
    //for(var i = 0; i < Object.keys(cards).length; i++)
    // {
    //     console.log(cards[i])
    // 

    const image = { image : "/../public/ear-rings/3.jpeg" }

    return (
      <>
      <Image src={image.image} alt='Stone Earring' height={480} width={480} />
      <div className='flex flex-row justify-center items-center h-screen w-full space-x-3'>
      {
        cards.map((card) => 
        <>
        <div className='p-2 block items-center bg-white border-gray-200 rounded-lg'>
        <p>{card.name}</p>
        <p>{card.description}</p>
        <p>{card.category}</p>
        <p>{card.MSRP} {card.SP}</p>
        </div>
        </>
        )
      }
      </div>
      </>
    )

}

export default Earrings

