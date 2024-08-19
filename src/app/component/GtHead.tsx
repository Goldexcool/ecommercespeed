"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import contactImage from "../../../public/contact-us-communication-support-service-assistance-concept_53876-128103.jpg";
import { Label } from "../component/ui/label";
import { Input } from "../component/ui/contact"; 
import { cn } from "@/lib/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function ContactPageD() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="px-5 py-10 lg:px-[7rem] md:px-10 mt-[3rem] w-full ">
      <div className="flex justify-between md:flex-row flex-col mb-12 w-full items-start">
        <div className="md:w-1/2 w-full flex-col gap-2">
          <h1 className="text-3xl font-bold text-mainColor">
            ECOMMERCESPEED
          </h1>
          <div className="border-b-2 border-mainColor w-24 mt-1"></div>
          <h2 className="text-xl text-black mt-2">
            Alone we can do so little, together we can do so much.
          </h2>
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-[1rem] text-[.8rem] font-bold text-gray-800">
            Ecommercespeed was founded with a singular vision: to empower businesses to achieve their full potential in the eCommerce space. With years of experience under our belts and a proven track record of success, we are the go-to experts for businesses looking to thrive in the competitive online market. Our approach is simple yet effective—we combine industry-leading technology with a deep understanding of consumer behavior to deliver results that speak for themselves.
          </h1>
          <h2 className="text-xl font-semibold text-gray-600 mt-4">
            Ayodeji Rasaq
            <br />
            CEO Ecommercespeed
          </h2>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 w-full">

        {/* Right Section - Contact Form */}
        <div className="bg-white dark:bg-black p-8 rounded-lg shadow-input" data-aos="fade-left">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Get in Touch
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            We&apos;d love to hear from you. Please fill out the form below and we will
            get back to you as soon as possible.
          </p>

          <form className="my-8 " onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <LabelInputContainer data-aos="fade-up" data-aos-delay="200">
                <Label htmlFor="firstname">First Name</Label>
                <Input id="firstname" placeholder="John" type="text" />
              </LabelInputContainer>
              <LabelInputContainer data-aos="fade-up" data-aos-delay="400">
                <Label htmlFor="lastname">Last Name</Label>
                <Input id="lastname" placeholder="Doe" type="text" />
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="600">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="johndoe@example.com" type="email" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="800">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+1234567890" type="tel" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="1000">
              <Label htmlFor="address">Address Line 1</Label>
              <Input id="address" placeholder="123 Main St" type="text" />
            </LabelInputContainer>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <LabelInputContainer data-aos="fade-up" data-aos-delay="1200">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" type="text" />
              </LabelInputContainer>
              <LabelInputContainer data-aos="fade-up" data-aos-delay="1400">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="State" type="text" />
              </LabelInputContainer>
              <LabelInputContainer data-aos="fade-up" data-aos-delay="1600">
                <Label htmlFor="country">Country</Label>
                <select
                  id="country"
                  className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                >
                  <option value="">Select a country</option>
                  {/* Add more country options here */}
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  {/* ... */}
                </select>
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="1800">
              <Label htmlFor="contact-date">When is the best date to contact you?</Label>
              <Input id="contact-date" placeholder="YYYY-MM-DD" type="date" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="2000">
              <Label htmlFor="help">What can I help you with?</Label>
              <div className="flex flex-col space-y-2">
                <label>
                  <input type="radio" name="help" value="website-design" className="mr-2" />
                  Website Design
                </label>
                <label>
                  <input type="radio" name="help" value="social-media-management" className="mr-2" />
                  Social Media Management
                </label>
                <label>
                  <input type="radio" name="help" value="shopify" className="mr-2" />
                  Shopify
                </label>
                <label>
                  <input type="radio" name="help" value="seo" className="mr-2" />
                  SEO (Search Engine Optimization)
                </label>
                <label>
                  <input type="radio" name="help" value="digital-marketing" className="mr-2" />
                  Digital Marketing
                </label>
                <label>
                  <input type="radio" name="help" value="email-marketing" className="mr-2" />
                  Email Marketing
                </label>
                <label>
                  <input type="radio" name="help" value="content-marketing" className="mr-2" />
                  Content Marketing
                </label>
                <label>
                  <input type="radio" name="help" value="ecommerce" className="mr-2" />
                  E-commerce
                </label>
                <label>
                  <input type="radio" name="help" value="others" className="mr-2" />
                  Others
                </label>
                <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="2200">
                  <Label htmlFor="others">If Others, please specify:</Label>
                  <Input id="others" placeholder="Specify here" type="text" />
                </LabelInputContainer>
              </div>
            </LabelInputContainer>

            <LabelInputContainer className="mb-8" data-aos="fade-up" data-aos-delay="2400">
              <Label htmlFor="description">Describe what you need</Label>
              <textarea
                id="description"
                placeholder="Your message here..."
                rows={4}
                className="flex h-28 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-mainColor dark:to-darker to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              data-aos="fade-up"
              data-aos-delay="2600"
            >
              Send Message &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
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
