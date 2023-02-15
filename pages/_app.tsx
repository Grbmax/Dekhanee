import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect, ReactNode } from "react"
import { SessionProvider } from "next-auth/react"
import Navbar_2 from "../components/Navbar_2";

interface IProps {
  children: ReactNode;
  session: any;
}


function MyApp({ Component, pageProps }: AppProps, { children, session }: IProps) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {

    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }

    } catch (error) {
      console.error(error);
      localStorage.clear()
    }

  }, [])

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt)
  }

  const addToCart = (itemCode: any, qty: any, price: any, name: any, variant: any) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty

    }
    else {
      newCart[itemCode] = { qty: 1, price, name, variant }
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const clearCart = () => {
    setCart({})
    saveCart({})
  }
  const removeFromCart = (itemCode: any, qty: any, price: any, name: any, variant: any) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty

    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  return (
    <>
      <SessionProvider session={session}>
        <div className="bg-[#EFEFEF] bg-opacity-100">

          {/* <Navbar_2 key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>  */}
          <Navbar key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
          <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
          <Footer />
        </div>
      </SessionProvider>
    </>
  );
}

export default MyApp;
