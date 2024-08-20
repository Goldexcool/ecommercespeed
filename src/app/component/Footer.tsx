import React from 'react'
import Image from "next/image";
import dynamic from "next/dynamic";
import Logo from '../../../public/download (7).png'
import { IconContext } from "react-icons";
import { FaLinkedinIn, FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="bg-white text-[#000] py-8 px-4">
                <div className="lg:px-[7rem] md:px-10 px-5 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between md:place-items-center place-items-start">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex cursor-pointer top-1" >
                            <Image src={Logo} alt='' width={350} height={600} />
                        </div>
                        <ul className="space-y-2 mt-[1rem]">
                            <li>Ecommercespeed specializes in digital marketing, dedicated to enhancing your online visibility and expanding your business reach.</li>
                            <div className='flex gap-2 items-start mt-4'>
                                <a href="https://www.facebook.com/Ecommercespeed"><FaFacebook className="text-mainColor text-4xl group-hover:scale-110 text-center flex transition duration-300" /></a>
                                <a href='https://www.instagram.com/ecommerce_speed?igsh=MTU1NDUzbXB4MDh2eg%3D%3D&utm_source=qr'><FaInstagram className="text-mainColor text-4xl group-hover:scale-110 text-center flex transition duration-300" /></a>
                                <a href='https://wa.link/1opll3'><FaWhatsapp className="text-mainColor text-4xl group-hover:scale-110 text-center flex transition duration-300" /></a>
                            </div>

                        </ul>
                    </div>
                    <div className="flex flex-col md:items-start">
                        <h4 className="font-bold mb-2 text-[1.6rem] text-mainColor hover:text-black cursor-pointer ">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="/">Digital Marketing</a></li>
                            <li><a href="/">Social Marketing</a></li>
                            <li><a href="/">SEO Consultancy</a></li>
                            <li><a href="/">Web Design</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:items-start">
                        <h4 className="font-bold mb-2 text-[1.6rem] text-mainColor hover:text-black cursor-pointer">Support</h4>
                        <ul className="space-y-2">
                            <li><a href='/getstarted'>Help Center</a></li>
                            <li><a href='/getstarted'>FAQ</a></li>
                            <li><a href='/getstarted'>Send Ticket</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                        </ul>
                    </div>

                </div>
                <div className="mt-8 text-center">
                    &copy; 2024, All Rights Reserved EcommerceSpeed
                </div>
            </div>
        </div>
    )
}

export default Footer