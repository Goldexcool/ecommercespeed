"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PlaceholdersAndVanishInput } from "../component/ui/Placeholder";
import Button from "./Button";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Enter your email to stay updated",
    "What's your email address?",
    "Join our mailing list with your email",
    "Subscribe with your email",
    "Get the latest updates – enter your email",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

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
      className="h-[23rem] flex flex-col justify-center items-center lg:px-[7rem] md:px-10 px-5 bg-gray-100"
      data-aos="fade-up"
    >
      <h2 
        className="mb-5 sm:mb-10 text-2xl text-center sm:text-5xl dark:text-white text-black mt-[4rem]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Signup for our newsletter to get updates, information, news, insights, or promotions.
      </h2>
      <form 
        className="md:flex md:flex-row flex-col gap-4 items-center w-full max-w-lg justify-center"
        onSubmit={onSubmit}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-mainColor text-base"
        />
        <Button
          text="Sign Up" 
          className="w-full md:w-auto mt-[0.5rem] md:mt-0"
          data-aos="fade-up"
          data-aos-delay="600"
        />
      </form>
    </div>
  );
}
