import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'


const Profile = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      {/* <HeroImg heading="Profile" text="My Coding Profile ID's"/> */}
      {/* <ProfileDetail/> */}
      <Footer/>
    </div>
  )
}
 
export default Profile