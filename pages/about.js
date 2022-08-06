import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function About() {
    return(
        <>
        <Navbar/>
        <div className="bg-[#131414]">
        <section id="highlights" className="w-full h-full lg:min-h-screen">
            <div className="p-6">
              <p className='text-5xl md:text-4.4xl mb-5 text-ted-red serif text-white text-center py-6'></p>
            </div>
          </section>
          <section id="highlights" className="w-full h-full lg:min-h-screen">
            <div className="p-6">
              <p className='text-5xl md:text-4.4xl mb-5 text-ted-red serif text-white text-center py-6'></p>
            </div>
          </section>
          </div>
        <Footer/>
        </>
    )
  }
  
  export default About