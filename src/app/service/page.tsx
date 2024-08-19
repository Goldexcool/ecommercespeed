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
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        // Simulate a delay for loading (e.g., fetching data)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 10000); // Set the loading time (e.g., 3 seconds)

        return () => clearTimeout(timer); // Cleanup on component unmount
    }, []);

    return (
        <section>
            {loading ? (
                <Loader /> // Show the loader while loading is true
            ) : (
                <>
                    <Header />
                    <RouteBg Bgtext='Our Services' />
                    <CardHoverEffectDemo />
                    <BackgroundBeamsDemo />
                    <PlaceholdersAndVanishInputDemo />
                    <Footer />
                </>
            )}
        </section>
    );
}

export default Services;
