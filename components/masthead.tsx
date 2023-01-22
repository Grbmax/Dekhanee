import React, { useRef, useContext, useState, useCallback } from "react";
import { ScrollContext } from "../utils/scroll-observer";
import Image from "next/image";
import s from '../styles/masthead.module.css'
import logo from '../public/assets/logo.jpg'
import { CgChevronDoubleDownO } from 'react-icons/cg'


const Masthehad: React.FC = () => {
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)
    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }


    return (
        <>

            <div id="home" ref={refContainer}
                className={`${s.mainbg} min-h-screen -z-40 flex flex-col items-center justify-center sticky top-0 `}
                style={{ transform: `translateY(-${progress * 20}vh)` }}>
                    
                <div className='m-12 text-center -z-10 p-8 backdrop-blur-sm  border-white '>
                    <span className=" text-black text-5xl md:text-7xl lg:text-8xl font-extrabold  "> ÆR REALTOR</span>
                    <p className=" text-xl md:text-2xl lg:text-3xl font-semibold ">Dream It. Build It.</p>
                </div>

                <CgChevronDoubleDownO className="text-5xl text-white rounded-full backdrop-blur-sm " />
            </div>
        </>
    )
}
export default Masthehad