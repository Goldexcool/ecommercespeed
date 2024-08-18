"use client";
import React from "react";
import { BackgroundBeams } from "../component/ui/BackGroundBeams";
import { HoverEffect } from "../component/ui/CardHover";
import Button from "./Button";
import { Hover } from "./ui/Hover";

export function BackgroundBeamsDemo() {
    return (
        <div className="md:h-[40rem] h-[68rem] w-full rounded-md lg:px-[7rem] md:px-10 px-5 bg-darker relative grid md:grid-cols-2 grid-cols-1 items-center justify-center antialiased ">
            <div className="w-full p-4  flex flex-col items-start gap-2 relative z-10">
                <h2 className="text-3xl font-bold text-neutral-200">Why Choose Us</h2>
                <p className="text-lg text-neutral-400">
                    Connecting people is our business.
                </p><p className="text-sm text-neutral-500">
                    Thinking outside the box? We do too. We bring unconventional ideas,
                    fresh perspectives, and a relentless focus on innovation to every
                    project.
                </p><Button text="Get Started" className="mt-4" />
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
            "Miratech: Amplify your brand, soar online. Expert digital marketing, proven results",
        link: "https://stripe.com",
    },
    {
        title: "Email Marketing",
        description:
            "Effortless email marketing for booming sales. Let Miratech weave your winning words.",
        link: "https://netflix.com",
    },
    {
        title: "E-commerce",
        description:
            "Boost your ecommerce success with Miratech. Attract, engage, convert – effortlessly.",
        link: "https://google.com",
    },
    {
        title: "PPC Management",
        description:
            "Get more leads, spend less. Miratech manages your PPC campaigns for results you can see.",
        link: "https://meta.com",
    },
];

