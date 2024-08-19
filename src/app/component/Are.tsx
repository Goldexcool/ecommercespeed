"use client";
import React, { useEffect } from 'react';
import who from '../../../public/whoweare.avif';
import Image from 'next/image';
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const WhoWeAre = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
            easing: 'ease-in-out', 
        });
    }, []);

    return (
        <section className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 mx-auto lg:px-[7rem] md:px-10 px-5 mt-[6rem]' id='home'>
            <div className='flex flex-col justify-center items-start gap-2 md:order-1 order-2' data-aos="fade-up">
                <div>
                    <h1 className='text-black md:text-[1rem] text-[1.5rem] font-bold md:w-fit w-full'>
                        <span className='text-mainColor'>Who we are</span> 
                    </h1>
                    <h2 className='md:text-[3rem] text-[1.8rem] text-black font-bold'>
                        Creative solutions deliver profits to your door
                    </h2>
                </div>
                <div className='flex flex-col lg:text-[40px] text-[35px] text-main-color-black'>
                    <h3 className='text-[1rem]'>At ecommercespeed, we understand that the digital marketplace is constantly evolving. To thrive, you need a partner who not only keeps pace but leads the way. Our team of seasoned eCommerce experts is dedicated to helping your business achieve maximum growth, increased conversions, and unparalleled customer satisfaction. Whether you&apos;re just starting out or looking to scale, ecommercespeed provides the insights, tools, and support you need to succeed.</h3>
                </div>
                <div className='flex gap-5 items-center'>
                    <a href="/">
                        <Button text="Explore our services" />
                    </a>
                </div>
            </div>
            <Image src={who} alt='hero' className=' md:order-2 order-1 ' data-aos="fade-left" />
        </section>
    );
};

export default WhoWeAre;
