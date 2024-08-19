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

const GetStarted = () => {

    return (
        <section>
            <Header />
            <RouteBg Bgtext='Get Started' />
            <ContactPageD />
            <Faq />
            <PlaceholdersAndVanishInputDemo />
            <Footer />
        </section>
    );
}

export default GetStarted;
