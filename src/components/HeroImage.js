import "./HeroImageStyle.css"

import React from 'react'
import { Link } from "react-router-dom"
import pipo from './Assest/img.jpg'
import avtar from  './Assest/avtar.png'


const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={pipo} alt="IntroImg"/>    
        </div>
        <div className="content">
            <img src={avtar} alt="Avtar" className="avtar"></img>
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