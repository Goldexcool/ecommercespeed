import React from 'react'
import Image from "next/image";
import dynamic from "next/dynamic";
// import logo from '../../../public/Blue-Colorful-Phoenix-Digital-Studio-Logo-1.png'
import { FaLinkedinIn, FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="bg-[#160329] text-[#fff] py-8 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-between">
                    <div className="flex flex-col items-start md:items-start">
                        <a href='/'>
                            <div className="flex gap-[5px] cursor-pointer logo mb-[0.5rem]" >
                                <p className="text-[23px] font-[500] text-white">Ecommercespeed</p>
                            </div>
                        </a>
                        <ul className="space-y-2">
                            <li>Services</li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href=""></a>Contact Us</li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:items-start">
                        <h4 className="font-bold mb-2">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="/signup">Web Development</a></li>
                            <li><a href="/login">Seo Optimization</a></li>
                            <li><a href="/loginVendor">Video Marketing</a></li>
                        </ul>
                    </div>
                    {/* <div className="flex flex-col md:items-start">
              <h4 className="font-bold mb-2">Products</h4>
              <ul className="space-y-2">
                <li><a href='/category-products?category=shoes'>Shoes</a></li>
                <li><a href='/category-products?category=jewelry'>Jewelries</a></li>
                <li><a href='/category-products?category=gadgets'>Gadgets</a></li>
                <li><a href='/category-products?category=sports/fitness'>Sports/Fitness Products</a></li>
                <li><a href='/category-products?category=snacks'>Food</a></li>
                <li><a href='/category-products?category=clothes'>Clothes</a></li>
                <li>Books</li>
              </ul>
            </div> */}
                    <div className="flex flex-col md:items-start">
                        <h4 className="font-bold mb-2">Utility Pages</h4>
                        <ul className="space-y-2">
                            <li><a href='/category-products?category=graphics'>Graphics Design</a></li>
                            <li>404 Error Page</li>
                            <li>Password Protected</li>
                            <li>Style Guide</li>
                            <li>Licensing</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 w-fit">
                        <h4 className="font-bold text-xl mb-4 text-gray-800">Connect With Us</h4>
                        <ul className="space-y-4 w-fit">
                            <li>
                                <a href=''
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 group hover:bg-gray-100 p-2 rounded-md transition duration-300">
                                    <FaTwitter className="text-black text-xl group-hover:scale-110 transition duration-300" />
                                    <span className="text-gray-700 group-hover:text-gray-900">Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href=''
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 group hover:bg-gray-100 p-2 rounded-md transition duration-300">
                                    <FaFacebook className="text-black text-xl group-hover:scale-110 transition duration-300" />
                                    {/* <Image src={unitwitter} alt="Twitter" width={24} height={24} className='group-hover:scale-110 transition duration-300' /> */}
                                    <span className="text-gray-700 group-hover:text-gray-900">Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href=''
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 group hover:bg-gray-100 p-2 rounded-md transition duration-300">
                                    <FaLinkedinIn className="text-blue-600 text-xl group-hover:scale-110 transition duration-300" />
                                    <span className="text-gray-700 group-hover:text-gray-900">LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href=''
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 group hover:bg-gray-100 p-2 rounded-md transition duration-300">
                                    <FaInstagram className="text-black text-xl group-hover:scale-110 transition duration-300" />
                                    <span className="text-gray-700 group-hover:text-gray-900">Instagram</span>
                                </a>
                            </li>
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