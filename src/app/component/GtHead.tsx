"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import contactImage from "../../../public/contact-us-communication-support-service-assistance-concept_53876-128103.jpg";
import { Label } from "../component/ui/label";
import { Input } from "../component/ui/contact";
import { cn } from "@/lib/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { db } from "../../../Firebase/initFirebase"; // Import Firebase config
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions


export function ContactPageD() {
  const initialFormData = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    contactDate: "",
    help: "",
    others: "",
    description: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      help: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "contactForm"), formData);
      console.log("Document written with ID: ", docRef.id);

      // Reset form data to initial values after successful submission
      setFormData(initialFormData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
                <Input id="firstname" placeholder="John" type="text" value={formData.firstname} onChange={handleChange} />
              </LabelInputContainer>
              <LabelInputContainer data-aos="fade-up" data-aos-delay="400">
                <Label htmlFor="lastname">Last Name</Label>
                <Input id="lastname" placeholder="Doe" type="text" value={formData.lastname} onChange={handleChange} />
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="600">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="johndoe@example.com" type="email" value={formData.email} onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="800">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+1234567890" type="tel" value={formData.phone} onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="1000">
              <Label htmlFor="address">Address Line 1</Label>
              <Input id="address" placeholder="123 Main St" type="text" value={formData.address} onChange={handleChange} />
            </LabelInputContainer>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <LabelInputContainer data-aos="fade-up" data-aos-delay="1200">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" type="text" value={formData.city} onChange={handleChange} />
              </LabelInputContainer>
              <LabelInputContainer data-aos="fade-up" data-aos-delay="1400">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="State" type="text" value={formData.state} onChange={handleChange} />
              </LabelInputContainer>
              <LabelInputContainer data-aos="fade-up" data-aos-delay="1600">
                <Label htmlFor="country">Country</Label>
                <select
                  id="country"
                  className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  {/* Add more country options here */}
                </select>
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="1800">
              <Label htmlFor="contact-date">When is the best date to contact you?</Label>
              <Input id="contact-date" placeholder="YYYY-MM-DD" type="date" value={formData.contactDate} onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="2000">
              <Label htmlFor="help">What do you need help with?</Label>
              <div className="flex flex-col gap-2">
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio text-mainColor" name="help" value="Website Design" checked={formData.help === 'Website Design'} onChange={handleRadioChange} />
                  <span className="ml-2 text-neutral-600 dark:text-neutral-300">Website Design</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio text-mainColor" name="help" value="SEO Optimization" checked={formData.help === 'SEO Optimization'} onChange={handleRadioChange} />
                  <span className="ml-2 text-neutral-600 dark:text-neutral-300">SEO Optimization</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio text-mainColor" name="help" value="Digital Marketing" checked={formData.help === 'Digital Marketing'} onChange={handleRadioChange} />
                  <span className="ml-2 text-neutral-600 dark:text-neutral-300">Digital Marketing</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio text-mainColor" name="help" value="Others" checked={formData.help === 'Others'} onChange={handleRadioChange} />
                  <span className="ml-2 text-neutral-600 dark:text-neutral-300"> Email Marketing</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio text-mainColor" name="help" value="Others" checked={formData.help === 'Others'} onChange={handleRadioChange} />
                  <span className="ml-2 text-neutral-600 dark:text-neutral-300"> Content Marketing</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio text-mainColor" name="help" value="Others" checked={formData.help === 'Others'} onChange={handleRadioChange} />
                  <span className="ml-2 text-neutral-600 dark:text-neutral-300">E-commerce</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio text-mainColor" name="help" value="Others" checked={formData.help === 'Others'} onChange={handleRadioChange} />
                  <span className="ml-2 text-neutral-600 dark:text-neutral-300">Others</span>
                </label>
                <LabelInputContainer data-aos="fade-up" data-aos-delay="1400">
                  <Label htmlFor="state">Other</Label>
                  <Input id="state" placeholder="specify service needed" type="text" value={formData.others} onChange={handleChange} />
                </LabelInputContainer>
              </div>
            </LabelInputContainer>

            {formData.help === 'Others' && (
              <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="2200">
                <Label htmlFor="others">Please specify</Label>
                <Input id="others" placeholder="Specify other help needed" type="text" value={formData.others} onChange={handleChange} />
              </LabelInputContainer>
            )}

            <LabelInputContainer className="mb-4" data-aos="fade-up" data-aos-delay="2400">
              <Label htmlFor="description">Brief description of the project</Label>
              <textarea
                id="description"
                rows={5}
                placeholder="Describe your project in a few words"
                className={cn(
                  "flex h-20 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600",
                )}
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </LabelInputContainer>

            <button
              type="submit"
              className="w-full h-10 text-white dark:text-white bg-mainColor dark:bg-mainColor rounded-lg font-medium hover:bg-black dark:hover:bg-mainColor-dark transition duration-200 ease-in-out"
              data-aos="fade-up" data-aos-delay="2600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function LabelInputContainer({ children, ...props }: any) {
  return (
    <div {...props}>
      {children}
    </div>
  );
}
