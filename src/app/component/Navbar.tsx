"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md';
import Button from './Button';
import Link from 'next/link';
import Logo from '../../../public/Red_Flat_Illustrative_Modern_Online_Shopping_Store_Logo__6_-removebg-preview.png'


const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleOpen = () => {
        setNavbarOpen(!navbarOpen);
    };
    const handleClose = () => {
        setNavbarOpen(false);
    };
    return (
        <header className="flex justify-center items-center w-full " >
            <div className="w-full bg-white left-0 right-0 ease-in-out duration-300 h-[100px] flex items-center">
                <div className="flex justify-between w-full items-center lg:px-12 px-2">
                    <Link href={'/'}>
                        <div className="flex gap-[5px] cursor-pointer " >
                            <Image src={Logo} alt='' width={250} height={500} />
                            {/* <p className="text-[23px] font-[500] text-white">Ecommercespeed</p> */}
                        </div>
                    </Link>

                    <div className="hidden lg:flex justify-between items-center lg:gap-[25px] xl:gap-[25px] text-white">
                        <Link href="/">
                            <div>
                                <a href="#home" className="text-[18px] font-[500] cursor-pointer text-mainColor hover:text-black">
                                    Home
                                </a>
                            </div>
                        </Link>
                        <Link href="/about">
                            <div className="flex items-center cursor-pointer">
                                <a href="#about" className="text-[18px] font-[500] cursor-pointer text-mainColor hover:text-black">About</a>
                            </div>
                        </Link>
                        <Link href="/service">
                            <div className="flex items-center cursor-pointer">
                                <a href="#service" className="text-[18px] font-[500] cursor-pointer text-mainColor hover:text-black">Services</a>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="flex items-center cursor-pointer">
                                <a href="#project" className="text-[18px] font-[500] cursor-pointer text-mainColor hover:text-black">Contact us</a>
                            </div>
                        </Link>


                        <Link href="/getstarted">
                            <div className="flex items-center cursor-pointer">
                                <a href="#project" className="text-[18px] font-[500] cursor-pointer text-mainColor hover:text-black">Get started</a>
                            </div>
                        </Link>
                        {/* <div className="flex items-center cursor-pointer">
                            <a href="#contact" className="text-[18px] font-[400] cursor-pointer hover:underline">Get started</a>
                        </div> */}
                    </div>
                    <div className="flex items-center gap-4 xl:gap-[25px] lg:gap-[30px]">
                        <div className="hidden lg:flex justify-center items-center gap-4 lg:gap-[85px]">
                            <div className="flex justify-center gap-2">
                                <button className="p-[10px] px-[15px] py-[10px] transition text-white duration-300 transform hover:bg-black bg-mainColor hover:text-white font-[500] text-[16px] border-2 rounded-[20px]">
                                    Get Started
                                </button>
                                {/* <Button text="Get Started" className="text-[22px]" /> */}
                            </div>
                        </div>
                        <MdMenu size={35} color="#000" className="ml-1 cursor-pointer lg:hidden block" onClick={handleOpen} />
                    </div>
                </div>
            </div>

            <div className={`hamburger-menu fixed top-0 right-0 h-full w-full z-40 bg-white transform transition-transform ease-in-out duration-300 ${navbarOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="close-button p-4 cursor-pointer absolute top-0 right-0">
                    <MdClose size={35} color="#fff" className="p-2 rounded-full w-10 bg-black h-10 flex items-center justify-center" onClick={handleOpen} />
                </div>
                <div className="menu flex flex-col gap-[20px] items-center justify-center p-6 h-[100vh]">
                    <ul className="text-[20px] text-center mt-10">
                        <a href="/" onClick={handleClose}>
                            <li className="text-black cursor-pointer font-[500] hover:scale-105 mt-10">Home</li>
                        </a>
                        <a href="/about" onClick={handleClose}>
                            <li className="text-black cursor-pointer font-[500] hover:scale-105 mt-10">About</li>
                        </a>
                        <a href="/service" onClick={handleClose}>
                            <li className="text-black cursor-pointer font-[500] hover:scale-105 mt-10">Services</li>
                        </a>
                        <a href="/contact" onClick={handleClose}>
                            <li className="text-black cursor-pointer font-[500] hover:scale-105 mt-10">Contact us</li>
                        </a>
                        <a href="/getstarted" onClick={handleClose}>
                            <li className="text-black cursor-pointer font-[500] hover:scale-105 mt-10">Get started</li>
                        </a>
                        {/* <a href="/" onClick={handleClose}>
                            <li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Get started</li>
                        </a> */}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header