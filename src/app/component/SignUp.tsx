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
      className="h-[23rem] flex flex-col justify-center items-center lg:px-[7rem] md:px-10 px-5 bg-black mt-[3rem]"
      data-aos="fade-up"
    >
      <h2
        className="mb-5 sm:mb-10 text-2xl text-center sm:text-5xl dark:text-white text-white mt-[4rem]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Signup for our newsletter to get updates, information, news, insights, or promotions.
      </h2>
      <div className='w-full flex flex-col items-center'>
        <form
          className="flex flex-col gap-4 items-center w-full max-w-lg"
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
          <div className='flex gap-5 items-center'>
            <a href="/">
              <button className='w-fit px-6 py-3 bg-mainColor hover:bg-saturated md:text-[1.1rem] rounded-[10px] text-[1rem] text-white font-[500]'>Sign Up →</button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
