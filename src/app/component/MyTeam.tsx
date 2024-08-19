"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import team1 from '../../../public/RkTeamLead.jpg';
import team2 from '../../../public/RkTeam1.jpg';
import team3 from '../../../public/resized.jpg';
import team4 from '../../../public/RkTeam3.jpg';
import team5 from '../../../public/Rk5.jpg';

const teamMembers = [
  { id: 1, name: 'Ayodeji Rasaq', position: 'Ecommercespeed C.E.O And Marketing Expert', image: team1 },
  { id: 2, name: 'Adeyemi Abdulquadri', position: 'Social media Manager', image: team2 },
  { id: 3, name: 'Bamgbose Ibrahim', position: 'Social media Marketer', image: team3 },
  { id: 4, name: 'Grace Fadare', position: 'Website design Expert', image: team4 },
  { id: 5, name: 'Alaba miracle ', position: 'Ads specialist', image: team5 },
];

const MyTeam = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="px-5 py-10 lg:px-[7rem] md:px-10 mt-[2rem]">
      <div className="text-center mb-12">
        <h1
          className="text-4xl font-bold text-gray-800"
          data-aos="fade-up"
        >
          Meet our team
        </h1>
        <h2
          className="text-xl text-gray-600 mt-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Teamwork makes the dream work
        </h2>
      </div>

      {/* CEO on top with more width */}
      <div
        className="flex justify-center mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl">
          <Image
            src={teamMembers[0].image}
            alt={teamMembers[0].name}
            layout="responsive"
            width={1200}
            height={700}
            className="object-cover"
          />
          <div className="p-6 text-center">
            <h1 className="text-2xl font-semibold text-gray-800">{teamMembers[0].name}</h1>
            <h2 className="text-gray-600">{teamMembers[0].position}</h2>
          </div>
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Other team members in two rows of two */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        {teamMembers.slice(1).map((member) => (
          <div
            key={member.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={`${member.id * 100}`} // Stagger animation based on member ID
          >
            <Image
              src={member.image}
              alt={member.name}
              className="w-full h-[560px] object-cover"
            />
            <div className="p-4 text-center">
              <h1 className="text-xl font-semibold text-gray-800">{member.name}</h1>
              <h2 className="text-gray-600">{member.position}</h2>
            </div>
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
