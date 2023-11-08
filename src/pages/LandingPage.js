import React from 'react'
// import About from '../components/About';
import Hero from '../components/Hero';
import HowToSection from '../components/HowToSection';
import BenefitSection from '../components/BenefitSection';
import LandingSection from '../components/LandingSection';
import LandingSection1 from '../components/LandingSection1';
import LandingSection2 from '../components/LandingSection2';
import LandingSection3 from '../components/LandingSection3';
import { Typography } from '@mui/material';

const LandingPage = () => {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <BenefitSection />
      <Typography align='center' variant='h4'>In numbers</Typography>
      <LandingSection />
      <LandingSection1 />
      <LandingSection2 />
      <LandingSection3 />
      <HowToSection />
    </>
  )
}

export default LandingPage