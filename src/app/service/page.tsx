"use client"
import React, { useState, useEffect } from 'react';
import { RouteBg } from '../component/ui/RouteBg';
import Header from '../component/Navbar';
import { PlaceholdersAndVanishInputDemo } from '../component/SignUp';
import Footer from '../component/Footer';
import { CardHoverEffectDemo } from '../component/Card';
import { BackgroundBeamsDemo } from '../component/WhyUs';
import Loader from '../component/Loader'; // Import the Loader component

const Services = () => {

    return (
        <section>
            <Header />
            <RouteBg Bgtext='Our Services' />
            <CardHoverEffectDemo />
            <BackgroundBeamsDemo />
            <PlaceholdersAndVanishInputDemo />
            <Footer />
        </section>
    );
}

export default Services;
