import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Home() {
    return(
        <>
        <div className='bg-black h-10 py-2.5'>
             <p className=' font-mono font-light text-sm text-white text-center tracking-widest'>FREE SHIPPING ON ALL ORDERS ABOVE ₹1299</p>
        </div>
        <Navbar/>
        <h1 className='text-3xl font-bold' >Home</h1>
        <Footer/>
        </>
    )
  }
  
  export default Home