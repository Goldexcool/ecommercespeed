"use client"
import React, { useState, useEffect } from 'react';
import { RouteBg } from '../component/ui/RouteBg';
import Header from '../component/Navbar';
import { PlaceholdersAndVanishInputDemo } from '../component/SignUp';
import { DotBackgroundDemo } from '../component/Communication';
import Footer from '../component/Footer';
import { CardHoverEffectDemo } from '../component/Card';
import { BackgroundBeamsDemo } from '../component/WhyUs';
import { ContactPage } from '../component/Contact';
import { ThreeDCardDemo } from '../component/FeaturedSection';
import { ContactPageD } from '../component/GtHead';
import Faq from '../component/Faq';
import Loader from '../component/Loader'; 

const GetStarted = () => {
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
                    <RouteBg Bgtext='Get Started' />
                    <ContactPageD />
                    <Faq />
                    <PlaceholdersAndVanishInputDemo />
                    <Footer />
                </>
            )}
        </section>
    );
}

export default GetStarted;
