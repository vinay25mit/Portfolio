import React from 'react'
import Footer from '../components/Footer'

import  HeroImg  from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg heading="PROJECTS." text="Some of my Recent Work" />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project