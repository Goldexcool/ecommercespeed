"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import team1 from '../../../public/teamimg1.jpg';
import team2 from '../../../public/teamimg2.jpg';
import team3 from '../../../public/teamimg3.jpg';
import team4 from '../../../public/team4img.jpg';
import team5 from '../../../public/team5Img.jpg';
import team6 from '../../../public/Team6img.jpg';

const teamMembers = [
  { id: 1, name: 'John Doe', position: 'CEO', image: team1 },
  { id: 2, name: 'Jane Smith', position: 'CTO', image: team2 },
  { id: 3, name: 'Samuel Green', position: 'Lead Developer', image: team3 },
  { id: 4, name: 'Lisa White', position: 'Project Manager', image: team4 },
  { id: 5, name: 'Michael Brown', position: 'UI/UX Designer', image: team5 },
  { id: 6, name: 'Emily Johnson', position: 'Marketing Head', image: team6 },
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="relative bg-white shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={`${member.id * 100}`} // Stagger animation based on member ID
          >
            <Image
              src={member.image}
              alt={member.name}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4">
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
