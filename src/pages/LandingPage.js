import React from 'react'
import About from '../components/About';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
         <Link to='./Dashboard' className='btn'>
          Dashboard
        </Link>
      <Hero />
      <About />
      <Services />
    </>
  )
}

export default LandingPage