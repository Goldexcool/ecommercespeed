"use client";
import React from "react";
import { InfiniteMovingCards } from "../component/ui/MovingCard";
import john from '../../../public/pexels-oleg-podlesnykh-11785442 1.svg'
import david from '../../../public/pexels-dziana-hasanbekava-7196344 1.svg'
import lee from '../../../public/pexels-dziana-hasanbekava-7196344 1.svg'
import andrew from '../../../public/andrew.svg'
import emily from '../../../public/emily.svg'
import Counter from "../component/ui/Counter";
import ryan from '../../../public/ryan.svg'


export function InfiniteMovingCardsDemo() {
    return (
        <div className="md:h-[40rem] h-[55rem] rounded-md flex flex-col antialiased bg-black mt-[4rem] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
            <div className="flex w-full justify-center items-center flex-col mt-[3rem]">
                <h1 className="md:text-5xl text-3xl text-center mb-[0.5rem] text-white uppercase font-bold">What my clients say</h1>
                <h2 className="md:text-2xl text-xl text-center mb-[2rem] text-white w-3/4 font-[600]">See what my clients have to say about working with me and the results I helped them achieve.</h2>
            </div>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
            {/* New Stats Section */}
            <div className="flex justify-between w-full lg:px-[7rem] md:px-10 px-5 md:mt-[4rem] mt-[4rem] gap-4 mb-[2rem] flex-wrap items-center">
                <div className="flex flex-col items-center justify-center">
                    <Counter end={1000} duration={3000} />
                    <span className="text-white md:text-xl text-[.9rem]">Happy Customers</span>
                </div>
                <hr className="h-[50px] border-l border-gray-400" />
                <div className="flex flex-col items-center">
                    <Counter end={700} duration={3000} />
                    <span className="text-white md:text-xl text-[.9rem]">Marketing Experts</span>
                </div>
                <hr className="h-[50px] border-l border-gray-400" />
                <div className="flex flex-col items-center">
                    <Counter end={800000} duration={3000} />
                    <span className="text-white md:text-xl text-[.9rem]">Leads Generated</span>
                </div>
                <hr className="h-[50px] border-l border-gray-400" />
                <div className="flex flex-col items-center">
                    <Counter end={7500000} duration={3000} />
                    <span className="text-white md:text-xl text-[.9rem]">Revenue Driven</span>
                </div>
            </div>
        </div>
    );
}

const testimonials = [
    {
        topText: "Exceptional Website Design and Development Services",
        quote:
            "Working with Ecommercespeed was a game-changer for our online presence. They delivered a modern, user-friendly website that perfectly aligns with our brand. The team's attention to detail and commitment to quality is unmatched.",
        name: "John Doe",
        image: john,
        title: "Marketing Manager, BrightSide Media",
    },
    {
        topText: "Top-notch SEO Optimization Services",
        quote:
            "Ecommercespeed helped us drastically improve our search engine rankings. Their expertise in SEO strategies has driven more organic traffic to our site, resulting in a significant boost in leads and sales.",
        name: "David Kim",
        image: david,
        title: "CEO, WebTech Solutions",
    },
    {
        topText: "Effective Digital Marketing Strategies",
        quote:
            "The digital marketing strategies implemented by Ecommercespeed have been instrumental in growing our business. Their data-driven approach and deep understanding of the market helped us reach a wider audience and increase our conversion rates.",
        name: "Karen Lee",
        image: lee,
        title: "Head of Marketing, GreenWave Digital",
    },
    {
        topText: "Innovative Email Marketing Campaigns",
        quote:
            "Our email marketing campaigns have seen a significant improvement since partnering with Ecommercespeed. Their innovative strategies and creative content have resulted in higher open rates and increased engagement.",
        name: "Andrew Thompson",
        image: andrew,
        title: "CMO, SwiftMail Solutions",
    },
    {
        topText: "Engaging Content Marketing Solutions",
        quote:
            "Ecommercespeed has transformed our content marketing efforts. Their ability to craft compelling content that resonates with our target audience has elevated our brand and driven meaningful engagement across all channels.",
        name: "Emily Davis",
        image: emily,
        title: "Content Strategist, BlueSky Communications",
    },
    {
        topText: "Comprehensive E-commerce Solutions",
        quote:
            "The e-commerce platform developed by Ecommercespeed has been a cornerstone of our online success. Their technical expertise and customer-centric approach ensured a seamless shopping experience for our customers.",
        name: "Ryan Chen",
        image: ryan,
        title: "Founder, RetailEdge Online",
    },
];

