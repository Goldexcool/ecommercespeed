"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import contactImage from "../../../public/contact-us-communication-support-service-assistance-concept_53876-128103.jpg";
import { Label } from "../component/ui/label";
import { Input } from "../component/ui/contact"; 
import { cn } from "@/lib/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-[7rem] md:px-10 px-5 mx-auto p-8 mt-[3rem]">
      {/* Left Section - Image */}
      <div className="flex justify-center items-center" data-aos="fade-right">
        <Image
          src={contactImage}
          alt="Contact us illustration"
          className="rounded-lg shadow-lg h-full w-full"
        />
      </div>

      {/* Right Section - Contact Form */}
      <div className="bg-white dark:bg-black p-8 rounded-lg shadow-input" data-aos="fade-left">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Get in Touch
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          We&apos;d love to hear from you. Please fill out the form below and we will
          get back to you as soon as possible.
        </p>

        <form
          className="my-8"
          action="https://formspree.io/f/xldrwkna"
          method="POST"
        >
          <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" name="fullname" placeholder="John Doe" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="400">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" placeholder="johndoe@example.com" type="email" required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="600">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="Your subject here" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8" data-aos="fade-up" data-aos-delay="800">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows={4}
              required
              className="flex h-28 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-mainColor dark:from-mainColor dark:to-darker to-saturated hover:bg-black block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
  