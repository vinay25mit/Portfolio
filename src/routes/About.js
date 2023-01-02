import React from 'react'
import AboutSec from '../components/AboutSec'
import Education from '../components/Education'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import HeroImage from "../components/HeroImage"

const About = () => {
  return (
    <div>
      <Navbar/> 
      <HeroImage/>
      {/* <HeroImg heading="About" text="I am a Competitive Programmer" /> */}
      {/* <HeroImage/> */}
      <AboutSec/>
      {/* <Education/> */}
      <Footer/>
    </div>
  )
}

export default About