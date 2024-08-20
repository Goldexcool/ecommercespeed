"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../component/ui/ImageSlider";
import bg1 from '../../../public/bg-1.avif'
import bg2 from '../../../public/bg-2.avif'
import bg3 from '../../../public/bg-3.jpg'
import { TextGenerateEffectDemo } from "./TextGen";

export function Hero() {
    const images = [
        bg1,
        bg2,
        bg3,
    ];
    return (
        <ImagesSlider className="h-[40rem]" images={images.map(image => image.src)}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className="font-bold sm:text-[1.4rem] text-[1.3rem] md:text-[1.65rem] text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    <TextGenerateEffectDemo />
                    <div className="w-full mt-[0.3rem] text-center flex justify-center items-center">
                        <h1 className="w-[90%]">Transform Your eCommerce Experience with Data-Driven Strategies, Cutting-Edge Solutions, and Unmatched Expertise</h1>
                    </div>
                </motion.p>
                <button className="px-4 py-2 backdrop-blur-sm border bg-mainColor border-white text-white mx-auto text-center rounded-full relative mt-4">
                    <span>Explore Our Services →</span>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
            </motion.div>
        </ImagesSlider>
    );
}
