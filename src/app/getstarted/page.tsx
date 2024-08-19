import React from 'react'
import { RouteBg } from '../component/ui/RouteBg'
import Header from '../component/Navbar'
import { PlaceholdersAndVanishInputDemo } from '../component/SignUp'
import { DotBackgroundDemo } from '../component/Communication'
import Footer from '../component/Footer'
import { CardHoverEffectDemo } from '../component/Card'
import { BackgroundBeamsDemo } from '../component/WhyUs'
import { ContactPage } from '../component/Contact'
import { ThreeDCardDemo } from '../component/FeaturedSection'
import { ContactPageD } from '../component/GtHead'
import Faq from '../component/Faq'

const Services = () => {
    return (
        <section>
            <Header />
            <RouteBg Bgtext='Get Started' />
            <ContactPageD />
            <Faq />
            <PlaceholdersAndVanishInputDemo />
            <Footer />
        </section>
    )
}

export default Services