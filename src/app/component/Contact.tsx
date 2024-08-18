"use client";
import React from "react";
import Image from "next/image";
import contactImage from "../../../public/contact-us-communication-support-service-assistance-concept_53876-128103.jpg";
import { Label } from "../component/ui/label";
import { Input } from "../component/ui/contact"; 
import { cn } from "@/lib/utils";

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-[7rem] md:px-10 px-5 mx-auto p-8 mt-[3rem]">
      {/* Left Section - Image */}
      <div className="flex justify-center items-center">
        <Image
          src={contactImage}
          alt="Contact us illustration"
          className="rounded-lg shadow-lg h-full w-full"
        //   width={500}
        //   height={500}
        />
      </div>

      {/* Right Section - Contact Form */}
      <div className="bg-white dark:bg-black p-8 rounded-lg shadow-input">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Get in Touch
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          We&apos;d love to hear from you. Please fill out the form below and we will
          get back to you as soon as possible.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" placeholder="John Doe" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="johndoe@example.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Your subject here" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              placeholder="Your message here..."
              rows={4}
              className="flex h-28 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-mainColor dark:to-darker to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
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
