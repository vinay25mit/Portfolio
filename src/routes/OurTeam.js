import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import HeroImage from "../components/HeroImage"
import Navbar from '../components/Navbar'
import Achiv from '../components/Achiv'
import Dev from '../components/Dev'
const OurTeam= () => {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      {/* <HeroImg heading="Achivements" text="Some of My Achivements"/> */}
      <Achiv/>
      <Dev/>
      <Footer/>
    </div>
  )
}

export default OurTeam