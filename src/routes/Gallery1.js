import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import HeroImage from "../components/HeroImage"
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
const Gallery1= () => {
  return (
    <div>
      <Navbar/>
      {/* <HeroImage/> */}
      <HeroImg heading="GLIMPSE" />
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default Gallery1