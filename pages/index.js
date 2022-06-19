import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'


export default function Home() {
  return (
    <>
      <Head>
        <title>Dekhanee: The Beautiful</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <div className='bg-black h-10 py-2.5'>
          <p className=' font-mono font-light text-sm text-white text-center tracking-widest'>FREE SHIPPING ON ALL ORDERS ABOVE ₹1299</p>
          </div>

      <Navbar/>
        
      <Slider/>

      <div className='bg-gray-700'>
        <h1 className='font-bold text-4xl items-center min-h-screen p-6'>Testimonial</h1>
      </div>


        {/*}
        <div className='bg-gray-700 h-100p w-100p'>
          <div>
            <div className='bg-black'>
              <p className='text-white'>Reviews</p>
            </div>
          </div>
  </div>*/}
          
      <Footer/>

      

    </>
  )
}
