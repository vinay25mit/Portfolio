import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import ProfileDetail from '../components/ProfileDetail'

const Profile = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="Profile" text="My Coding Profile ID's"/>
      <ProfileDetail/>
      <Footer/>
    </div>
  )
}
 
export default Profile