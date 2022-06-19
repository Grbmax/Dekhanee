import Link from 'next/link'
function Footer() {
    return (
      <>
        <div className='top-100 bg-orange-900 flex justify-between w-full items-center  bottom-0 left-0'>
    
            <div></div>
            <div>
            
                <h1 className='text-white font-bold'>ABOUT US</h1>
                <h3 className='text-white'> 100k+ orders delivered globally. World class products, Proudly made in India.  </h3>
                <h3 className='text-white'>Customer Support – support@xyz.com</h3>

            </div>
            <div>
              <h1 className='text-white font-bold ustify-between w-full items-center'>POLICES</h1>      
              <Link href='/Return'><h3 className='text-white'>Return & Cancellation Policy</h3></Link>
              <Link href='/Terms'><h3 className='text-white'>Terms & Conditions</h3></Link>
              <Link href='/Privacy_Policy'><h3 className='text-white'>Privacy Policy</h3></Link>
              <Link href='/Shipping_Policy'><h3 className='text-white'>Shipping Policy</h3></Link>
              <Link href='/Contact_Us'><h3 className='text-white'>Contact Us</h3></Link>
            </div>
            <div></div>
            
          
    
        </div>
      </>
    )
  }
  
  export default Footer