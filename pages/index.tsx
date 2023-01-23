import type { NextPage } from "next";
import Link from "next/link";
import About from "./About";

import Header from "../components/Header";
import Navbar from "../components/Navbar";


const Home: NextPage = () => {
  return (
    <>
      <Header />
 
     
      <About />
      
      
    </>
  );
};

export default Home;
