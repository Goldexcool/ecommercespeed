"use client"
import React, { useState, useEffect } from 'react';
import { RouteBg } from '../component/ui/RouteBg';
import Header from '../component/Navbar';
import WhoWeAre from '../component/Are';
import MyTeam from '../component/MyTeam';
import { PlaceholdersAndVanishInputDemo } from '../component/SignUp';
import { DotBackgroundDemo } from '../component/Communication';
import Footer from '../component/Footer';
import Loader from '../component/Loader'; 

const AboutUs = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <section>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <Header />
          <RouteBg Bgtext='About Us' />
          <WhoWeAre />
          <MyTeam />
          <DotBackgroundDemo />
          <PlaceholdersAndVanishInputDemo />
          <Footer />
        </>
      )}
    </section>
  );
};

export default AboutUs;
