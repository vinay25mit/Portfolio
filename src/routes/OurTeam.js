import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import HeroImage from "../components/HeroImage"
import Navbar from '../components/Navbar'
import Team from '../components/Team'
import Dev from '../components/Dev'
const OurTeam= () => {
  return (
    <div>
      <Navbar/>
      {/* <HeroImage/> */}
      <HeroImg heading="CORE TEAM"/>
      <Team/>
      <Dev/>
      <Footer/>
    </div>
  )
}

export default OurTeam