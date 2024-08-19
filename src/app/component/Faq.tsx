"use client"
import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqs = [
        {
            question: "What does your eCommerce Strategy & Consulting service include?",
            answer: "Our eCommerce Strategy & Consulting service includes a comprehensive analysis of your business goals, market research, competitor analysis, and the development of a customized strategy to position your online store for success."
        },
        {
            question: "How do you approach Website Design & Development?",
            answer: "We specialize in creating visually appealing, responsive, and conversion-focused websites. Our team uses the latest technologies to ensure your website offers a seamless user experience across all devices and performs exceptionally well."
        },
        {
            question: "What is included in your Website SEO services?",
            answer: "Our Website SEO services include optimizing your website’s content, structure, and technical elements. We conduct in-depth keyword research, implement on-page and off-page strategies, and continuously monitor performance to improve your search engine rankings and attract quality traffic."
        },
        {
            question: "How can your Performance Marketing services help my business?",
            answer: "Our Performance Marketing services use a data-driven approach to maximize your marketing efforts. We specialize in PPC advertising, SEO, email marketing, and social media campaigns designed to increase visibility and drive sales."
        },
        {
            question: "What is Conversion Rate Optimization (CRO) and how can it benefit my business?",
            answer: "Conversion Rate Optimization (CRO) focuses on turning more visitors into customers. We analyze user behavior, conduct A/B testing, and implement proven tactics to improve your website’s conversion rates, ultimately boosting your bottom line."
        },
        {
            question: "What are Managed eCommerce Solutions and how do they work?",
            answer: "Our Managed eCommerce Solutions take care of the complexities of running an online store. We manage everything from inventory management and order fulfillment to customer service and technical support, allowing you to focus on growing your business."
        },
    ];

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4 border-b border-gray-300 pb-2">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFaq(index)}
                    >
                        <h2 className="text-xl font-medium">{faq.question}</h2>
                        <span className='md:text-[2rem] text-[1.5rem]'>{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    {activeIndex === index && (
                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Faq;
