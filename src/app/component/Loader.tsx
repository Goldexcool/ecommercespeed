import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import Logo from '../../../public/Logoo__1_-removebg-preview.png';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
      {/* Logo */}
      <div className="mb-4">
        <Image src={Logo} alt="EcommerceSpeed Logo" width={400} height={700} />
      </div>
      
      {/* Tagline */}
      <h1 className="text-center text-lg font-semibold mb-6">
        Unleash the True Potential of Your Online Business with ecommercespeed...
      </h1>

      {/* Progress Bar */}
      <div className="w-3/4 bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Percentage */}
      <div className="text-center mt-2 font-medium">
        {progress}%
      </div>
    </div>
  );
}

export default Loader;
