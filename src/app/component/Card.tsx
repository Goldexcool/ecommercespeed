"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HoverEffect } from "../component/ui/CardHover";
import Button from "./Button";

export function CardHoverEffectDemo() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div 
      className="w-full lg:px-[7rem] md:px-10 px-5  bg-gray-100 mx-auto"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-2 items-center">
        <h1 
          className="text-[20px] font-[500] text-mainColor mt-[5rem]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our Services
        </h1>
        <h2 
          className="text-[30px] mb-2 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Connecting customers with your brand.
        </h2>
      </div>
      
      <HoverEffect 
        items={projects} 
        className=""
        data-aos="fade-up"
        data-aos-delay="600"
      />
    </div>
  );
}

export const projects = [
  {
    title: "Digital Marketing",
    description:
      "Miratech: Amplify your brand, soar online. Expert digital marketing, proven results",
    link: "https://www.instagram.com/ecommerce_speed",
  },
  {
    title: "Email Marketing",
    description:
      "Effortless email marketing for booming sales. Let Miratech weave your winning words.",
    link: "https://www.instagram.com/ecommerce_speed",
  },
  {
    title: "E-commerce",
    description:
      "Boost your ecommerce success with Miratech. Attract, engage, convert – effortlessly.",
    link: "https://www.instagram.com/ecommerce_speed",
  },
  {
    title: "PPC Management",
    description:
      "Get more leads, spend less. Miratech manages your PPC campaigns for results you can see.",
    link: "https://www.instagram.com/ecommerce_speed",
  },
  {
    title: "Content Marketing",
    description:
      "From blogs to website copy, Miratech writes content that gets results. Let’s tell your story.",
    link: "https://www.instagram.com/ecommerce_speed",
  },
  {
    title: "Inbound Marketing",
    description:
      "Inbound marketing that works. Miratech attracts your ideal customers, naturally.",
    link: "https://www.instagram.com/ecommerce_speed",
  },
];
