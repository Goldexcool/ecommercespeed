import React from "react";
import Buttontwo from "./ui/Buttontwo";

export function DotBackgroundDemo() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-black dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center mt-[4rem]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 lg:px-[7rem] md:px-10 p-5 dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Content container */}
      <div className="relative z-20 flex flex-col lg:flex-row items-start justify-between w-full px-5 lg:px-[7rem] md:px-10">
        <div className="lg:w-3/4 w-full lg:mr-10 flex flex-col items-start space-y-6">
          <p className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Let us show you the power of marketing communication.
          </p>
          <p className="text-lg text-neutral-300">
          Ecommercespeed digital agency provides strategic planning that aligns with your business objectives. Let&apos;s get your business to the targeted level you always dreamed about with strategic and calculated digital measures that drive real sales.
          </p>
          <div className='flex gap-5 items-center'>
            <a href="/">
              <button className='w-fit px-6 py-4 bg-mainColor hover:bg-saturated md:text-[1.1rem] rounded-[10px] text-[1rem] text-white font-[500]'>Explore Our Services →</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
