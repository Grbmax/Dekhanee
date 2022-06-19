import Link from "next/link";

const Navbar = () => {

    return (
        <>
            <nav className=" top-0 flex items-center h-32 w-full text-sm bg-orange-900 px-2 md:px-5 lg:px-10">

                <div className="dropdown">
                    <button className="bg-transparent text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    <ul className="link-container dropdown-menu hidden mr-2 md:mr-5 lg:mr-10">
                        <Link href="/home"><a className="rounded-t navbar-link border border-gray-700">Home</a></Link>
                        <Link href="/about"><a className="navbar-link border border-gray-700 border-t-0">About</a></Link>
                        <Link href="/products"><a className="navbar-link border border-gray-700 border-t-0">Products</a></Link>
                    </ul>
                    </button>
                  </div>
                  
                <div className="flex-1 p-5">
                    <Link href="/"><h1 className="text-white text-center font-bold">LOGO</h1></Link>
                </div>

                <div>
                    <Link href="/cart"><a className="text-white">CART</a></Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

