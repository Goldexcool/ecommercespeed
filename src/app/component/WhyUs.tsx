"use client";
import React from "react";
import { BackgroundBeams } from "../component/ui/BackGroundBeams";
import { HoverEffect } from "../component/ui/CardHover";
import Button from "./Button";
import { Hover } from "./ui/Hover";

export function BackgroundBeamsDemo() {
    return (
        <div className="md:h-[40rem] h-[85rem] mb-[5rem] w-full rounded-md lg:px-[7rem] md:px-10 px-5 bg-black relative grid md:grid-cols-2 grid-cols-1 items-center justify-center antialiased ">
            <div className="w-full p-4  flex flex-col items-start gap-4 relative z-10 ">
                <h2 className="md:text-5xl text-3xl font-bold text-neutral-200">Why Choose Us</h2>
                <p className="md:text-xl text-[1rem] text-white">
                    Connecting people is our business.
                </p>
                <ul className="text-lg text-white list-disc">
                    <li>Innovation: Continuously pushing the boundaries to deliver cutting-edge solutions.</li>
                    <li>Integrity: Building trust through transparency and ethical practices.</li>
                    <li>Excellence: Striving for the highest standards in everything we do.</li>
                    <li>Customer Success: Prioritizing our clients&apos; growth and satisfaction above all else.</li>
                </ul>
                <div className='flex gap-5 items-center'>
                    <a href="/">
                        <button className='w-fit px-6 py-4 bg-mainColor hover:bg-saturated md:text-[1.1rem] rounded-[10px] text-[1rem] text-white font-[500]'>Get started  →</button>
                    </a>
                </div>
            </div>
            <div className="grid gap-2 w-full">
                <Hover items={projects} className="" />
            </div>
            <BackgroundBeams />
        </div>
    );
}

export const projects = [
    {
        title: "Digital Marketing",
        description:
            "Ecommercespeed: Amplify your brand, soar online. Expert digital marketing, proven results",
        link: "https://www.instagram.com/ecommerce_speed",
    },
    {
        title: "Email Marketing",
        description:
            "Effortless email marketing for booming sales. Let Ecommercespeed weave your winning words.",
        link: "https://www.instagram.com/ecommerce_speed",
    },
    {
        title: "E-commerce",
        description:
            "Boost your ecommerce success with Ecommercespeed. Attract, engage, convert – effortlessly.",
        link: "https://www.instagram.com/ecommerce_speed",
    },
    {
        title: "PPC Management",
        description:
            "Get more leads, spend less. Ecommercespeed manages your PPC campaigns for results you can see.",
        link: "https://www.instagram.com/ecommerce_speed",
    },
];

