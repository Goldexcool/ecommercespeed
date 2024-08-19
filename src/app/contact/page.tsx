"use client"
import React, { useState, useEffect } from 'react';
import { RouteBg } from '../component/ui/RouteBg';
import Header from '../component/Navbar';
import { PlaceholdersAndVanishInputDemo } from '../component/SignUp';
import Footer from '../component/Footer';
import { ThreeDCardDemo } from '../component/FeaturedSection';
import { ContactPage } from '../component/Contact';
import Loader from '../component/Loader'; 

const ContactPageDem = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <section>
            {loading ? (
                <Loader /> 
            ) : (
                <>
                    <Header />
                    <RouteBg Bgtext='Contact Us' />
                    <ThreeDCardDemo />
                    <ContactPage />
                    <PlaceholdersAndVanishInputDemo />
                    <Footer />
                </>
            )}
        </section>
    );
}

export default ContactPageDem;
