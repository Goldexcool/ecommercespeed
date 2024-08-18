import React from 'react'
import { RouteBg } from '../component/ui/RouteBg'
import Header from '../component/Navbar'
import { PlaceholdersAndVanishInputDemo } from '../component/SignUp'
import { DotBackgroundDemo } from '../component/Communication'
import Footer from '../component/Footer'
import { CardHoverEffectDemo } from '../component/Card'
import { BackgroundBeamsDemo } from '../component/WhyUs'

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
    )
}

export default Services