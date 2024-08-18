"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import who from '../../../public/whoweare.avif';
import Image from 'next/image';
import Button from './Button';
import { ButtonsCard } from './ui/Button';
import Counter from './ui/Counter';

const SpecialService = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <section 
            className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 mx-auto lg:px-[7rem] md:px-10 px-5 mt-[6rem] mb-[2rem] md:mb-[0rem]' 
            id='home'
        >
            <div 
                className='flex flex-col justify-center items-start gap-2 md:order-1 order-2'
                data-aos="fade-right"
            >
                <div>
                    <h1 className='text-black md:text-[1rem] text-[1.5rem] font-bold md:w-fit w-full'>
                        <span className='text-mainColor'>Special Service</span>
                    </h1>
                    <h2 className='md:text-[3rem] text-[1.8rem] text-black font-bold'>
                        Real people delivering real results.
                    </h2>
                </div>
                <ul className='flex flex-col lg:text-[40px] text-[35px] text-main-color-black'>
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
                        <Button text="Send me a proposal >" />
                    </a>
                </div>
            </div>

            <div 
                className='relative md:order-2 order-1'
                data-aos="fade-left"
            >
                <Image src={who} alt='hero' className='w-full h-auto' />
                <div 
                    className='absolute right-4 top-2 md:w-[200px] md:h-[200px] w-[150px] h-[150px] bg-darker flex flex-col justify-center items-center rounded-full text-center'
                    data-aos="zoom-in"
                    data-aos-delay="300"
                >
                    <Counter end={6500} duration={3000} />
                    <h2 className='text-white text-xl'>Lead Increase</h2>
                </div>
            </div>
        </section>
    );
}

export default SpecialService;
