import React from 'react'
import AboutSec from '../components/AboutSec'
import Education from '../components/Education'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/> 
      <HeroImg heading="About" text="I am a Competitive Programmer" />
      <AboutSec/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default About