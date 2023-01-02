import "./HeroImageStyle.css"
import React from 'react'
import BackgroundSlider from '../lib/BackgroundSlider'
import { Link } from "react-router-dom"
import i1 from './Assest/badmi.jpg'
// import i2 from './Assest/bolly.jpg'
import i3 from './Assest/bollyball.jpg'
import i4 from './Assest/f4.jpg'
import i5 from './Assest/cricket.jpg'
import i6 from './Assest/table.jpg'
import i7 from './Assest/chess.jpg'

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
        <BackgroundSlider
  images={[i1,i5,i3,i4,i6,i7]}
  duration={8} transition={2} /> 
            {/* <img className="into-img" src={i4} alt="IntroImg"/>     */}
        </div>
        
        <div className="content">
            {/* <img src={avtar} alt="Avtar" className="avtar"></img> */}
            <p>HI, I'M A COMPETITIVE PROGRAMMER</p>
            <h1> React Developer.</h1>
            <Link to="/Achivement" className="btn">Achivement</Link>
            <Link to="/Project" className="btn">Project</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
        
    </div>
  )
}

export default HeroImage