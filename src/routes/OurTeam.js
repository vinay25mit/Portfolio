import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Achiv from '../components/Achiv'
import ImgSlider from '../components/ImgSlider'
const OurTeam= () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="Achivements" text="Some of My Achivements"/>
      <Achiv/>
      <Footer/>
    </div>
  )
}

export default OurTeam