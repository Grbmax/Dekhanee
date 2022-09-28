import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BuyRentSellCard from '../components/BuyRentSellCard'
import Masthehad from '../components/masthead'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ÆR Realtors</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Masthehad />
      <BuyRentSellCard />
      <div className="h-96 bg-black"></div>
      <div className="h-96 bg-black"></div>
      <div className="h-96 bg-black"></div>
      <div className="h-96 bg-black"></div>
      <div className="h-96 bg-black"></div>
    </div>
  )
}

export default Home
