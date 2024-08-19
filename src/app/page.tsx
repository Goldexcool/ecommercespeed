"use client"
import React, { useState, useEffect } from 'react';
import Header from './component/Navbar';
import { Hero } from './component/Hero';
import WhoWeAre from './component/Are';
import { ThreeDCardDemo } from './component/FeaturedSection';
import { DotBackgroundDemo } from './component/Communication';
import { CardHoverEffectDemo } from './component/Card';
import { BackgroundBeamsDemo } from './component/WhyUs';
import { InfiniteMovingCardsDemo } from './component/Testimonial';
import SpecialService from './component/SpecialServices';
import { PlaceholdersAndVanishInputDemo } from './component/SignUp';
import Footer from './component/Footer';
// import { TabsDemo } from './component/PortfolioTab';
import Loader from './component/Loader'; 

const Page = () => {
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
          <Hero />
          <WhoWeAre />
          <ThreeDCardDemo />
          <DotBackgroundDemo />
          <CardHoverEffectDemo />
          <BackgroundBeamsDemo />
          <InfiniteMovingCardsDemo />
          {/* <TabsDemo /> */}
          <SpecialService />
          <PlaceholdersAndVanishInputDemo />
          <Footer />
        </>
      )}
    </section>
  );
}

export default Page;
