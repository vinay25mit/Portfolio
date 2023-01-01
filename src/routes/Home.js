import React from 'react'
import AboutSec from '../components/AboutSec.js'
import Achiv from '../components/Achiv.js'
import Education from '../components/Education.js'
import Footer from '../components/Footer.js'
import HeroImage from '../components/HeroImage.js'
import Navbar from '../components/Navbar.js'
import Skills from '../components/Skills.js'
import Work from '../components/Work.js'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <AboutSec/>
      <Education/>
      <Work/>
      <Achiv/>
      
      {/* <Skills/> */}
      <Footer/>
    </div>
  )
}

export default Home