import React from 'react'
import Link from 'next/link'
import { InferGetServerSidePropsType } from 'next'


type Cards = {
  id: number,
  p_name: string,
  p_type: string,
  p_category: string,
  p_inventory_id: string
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/products/fetchList`)
  const cards: Cards[] = await res.json()
  return {
    props: {
      cards,
    },
  }
}

function earrings({ cards }: InferGetServerSidePropsType<typeof getStaticProps>) {
  //for(var i = 0; i < Object.keys(cards).length; i++)
  // {
  //     console.log(cards[i])
  // 
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center p-5">
            <div className='flex flex-row justify-center h-screen items-center w-full'>
              {
                cards.map((card) =>
                <>

                <p> {card.id} </p> <br/>
                <p> {card.p_name} </p> <br/>
                <p> {card.p_type} </p> <br/>

                </>
          )
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default earrings