import React from 'react'
import Header from './component/Navbar'
import { Hero } from './component/Hero'
import WhoWeAre from './component/Are'
import { ThreeDCardDemo } from './component/FeaturedSection'
import { DotBackgroundDemo } from './component/Communication'
import { CardHoverEffectDemo } from './component/Card'
import { BackgroundBeamsDemo } from './component/WhyUs'
import { InfiniteMovingCardsDemo } from './component/Testimonial'
import SpecialService from './component/SpecialServices'
import { PlaceholdersAndVanishInputDemo } from './component/SignUp'
import Footer from './component/Footer'
import { TabsDemo } from './component/PortfolioTab'

const Page = () => {
  return (
    <section>
      <Header />
      <Hero />
      <WhoWeAre />
      <ThreeDCardDemo />
      <DotBackgroundDemo />
      <CardHoverEffectDemo />
      <BackgroundBeamsDemo />
      <InfiniteMovingCardsDemo />
      <TabsDemo />
      <SpecialService />
      <PlaceholdersAndVanishInputDemo />
      <Footer />
    </section>
  )
}

export default Page
