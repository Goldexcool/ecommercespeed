"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import who from '../../../public/whoweare.avif';
import Image from 'next/image';
import Button from './Button';
import { ButtonsCard } from './ui/Button';
import Counter from './ui/Counter';
import Rk from '../../../public/RKKKK.jpg'

const SpecialService = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);
    const [count, setCount] = React.useState(0);
    useEffect(() => {
        if (count < 75) {
            const timer = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 50);

            // Cleanup function to clear the timer
            return () => clearInterval(timer);
        }
    }, [count]);

    return (
        <section
            className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 mx-auto lg:px-[7rem] md:px-10 px-5 md:mt-[6rem] mt-[15rem] mb-[2rem] md:mb-[0rem]'
            id='home'
        >
            <div
                className='flex flex-col justify-center items-start gap-6 md:order-1 order-2 h-full'
                data-aos="fade-right"
            >
                <div>
                    <h1 className='text-black md:text-[1rem] text-[1.5rem] font-bold md:w-fit w-full'>
                        <span className='text-mainColor text-[2rem]'>Special Service</span>
                    </h1>
                    <h2 className='md:text-[1.2rem] text-[1rem] text-black font-bold'>
                        Our team is made up of innovators, strategists, designers, and developers who are all passionate about eCommerce. We work closely with our clients to understand their unique challenges and goals, crafting customized solutions that drive real business results. At ecommercespeed, we don&apos;t just provide services; we build partnerships that last.
                    </h2>
                </div>
                <ul className='flex flex-col lg:text-[40px] text-[35px] text-main-color-black list-disc'>
                    <li className='text-[1rem]'>On-staff experts in marketing</li>
                    <li className='text-[1rem]'>Clear and concise reporting platform</li>
                    <li className='text-[1rem]'>Partner status with Google, Facebook, Bing and more</li>
                    <li className='text-[1rem]'>Dedicated account manager for each account</li>
                </ul>
                <div className='flex gap-5 items-center'>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className='border-2 border-black p-2'
                    />
                    <a href="/">
                        <button className="p-[10px] px-[15px] py-[10px] transition text-white duration-300 transform hover:bg-black bg-mainColor hover:text-white font-[500] text-[16px] border-2 rounded-[10px]">
                            Get Started
                        </button>
                    </a>
                </div>
            </div>

            <div
                className='relative md:order-2 order-1'
                data-aos="fade-left"
            >
                <Image src={Rk} alt='hero' className='w-full h-fit' />
                <div
                    className='absolute right-4 top-2 md:w-[200px] md:h-[200px] w-[150px] h-[150px] bg-darker flex flex-col justify-center items-center rounded-full text-center'
                    data-aos="zoom-in"
                    data-aos-delay="300"
                >
                    <h1 className='text-white text-[1.7rem] md:text-[3rem] font-bold'>{count}%</h1>
                    <h2 className='text-white text-xl'>Lead Increase</h2>
                </div>
            </div>
        </section>
    );
}

export default SpecialService;
