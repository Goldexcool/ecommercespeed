"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d";
import Link from "next/link";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS styles

import consult from '../../../public/consult.avif';
import seo from '../../../public/seo.avif';
import socials from '../../../public/socials.avif';
import webdev from '../../../public/webdev.avif';

const cardData = [
  {
    title: "Consulting Services",
    description: "Harness the potential of your business with Ecommercetech's expert consultation services. Enhance performance, optimize efficiency, and reach new heights with personalized strategic guidance. #EcommercetechConsults",
    image: consult,
    link: "https://twitter.com/mannupaaji",
    linkText: "Learn more",
  },
  {
    title: "SEO Optimization",
    description: "Amplify your online presence with Ecommercetech's SEO services. Surge in rankings, propel traffic, and reign over search results. Unleash your digital potential with us! #EcommercetechSEO",
    image: seo,
    link: "https://twitter.com/mannupaaji",
    linkText: "Optimize now",
  },
  {
    title: "Web Development",
    description: "Transform your online presence with Ecommercetech's Website Development services. Sleek designs, seamless functionality, and user-friendly interfaces that captivate and convert. Elevate your digital experience now! #EcommercetechWeb",
    image: webdev,
    link: "https://twitter.com/mannupaaji",
    linkText: "Start now",
  },
];

export function ThreeDCardDemo() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
      easing: 'ease-in-out', // Easing function for animations
    });
  }, []);

  return (
    <section className="mt-[8rem] lg:px-[7rem] md:px-10 px-5" data-aos="fade-up">
      <div className="flex flex-col w-full justify-center items-center" data-aos="fade-down">
        <h1 className="md:text-[16px] text-[13px] text-mainColor font-bold">OUR FEATURED SERVICES</h1>
        <h2 className="md:text-[44.2px] text-[30px] text-black mb-[1rem] text-center">&quot;You bring the business, we bring the brilliance.&quot;</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
        {cardData.map((card, index) => (
          <CardContainer key={index} className="inter-var h-full" data-aos="zoom-in">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col justify-between">
              <div>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {card.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                >
                  {card.description}
                </CardItem>
              </div>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={card.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={card.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  {card.linkText} →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get started
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
