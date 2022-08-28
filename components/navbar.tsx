import Link from "next/link";
import { AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineShoppingCart } from "react-icons/ai";


const Navbar = () => {
    
    return (
        <>
            <nav className="absolute top-0 space-between flex items-center h-20 w-full z-50 text-sm bg-[#F4E9CD] px-2 md:px-5 lg:px-10">

                <div className="flex-1 p-5">
                    <Link href="/"><img className='w-16 cursor-pointer' src="/Dekhanee-Logo.png" /></Link>

                </div>
                <div className="flex flex-shrink-0 ">
                    <h1 className="font-bold text-xl md:text-2xl lg:text-2xl cursor-pointer justify-center">
                        <span className="text-[#65968d]">Dekhanee:</span>
                        <span className="text-[#172f3d]">The Beautiful</span>
                    </h1>
                </div>
                <div className="dropdown float-right">
                    <button className="bg-transparent text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                        <svg className="w-8 h-8" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>


                    <ul className="link-container dropdown-menu hidden mr-2 md:mr-5 lg:mr-10">
                        <Link href="/"><a className="rounded-t navbar-link border border-gray-700">Home</a></Link>
                        <Link href="/about"><a className="navbar-link border border-gray-700 border-t-0">About</a></Link>
                        <Link href="/contact"><a className="navbar-link border border-gray-700 border-t-0">contact</a></Link>
                        <Link href="/products"><a className="rounded-b navbar-link  border border-gray-700 border-t-0">Products</a></Link>
                    </ul>
                </div>
            
            </nav>
        </>
    );
}

export default Navbar;