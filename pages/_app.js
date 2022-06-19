import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) 
{
    return <>
    <div className='bg-black h-10 py-2.5'>
        <p className=' font-mono font-light text-sm text-white text-center tracking-widest'>FREE SHIPPING ON ALL ORDERS ABOVE ₹1299</p>
      </div>
    <Navbar/>
    <Component {...pageProps}/>
    <Footer/>
    
    </>
}

export default MyApp
