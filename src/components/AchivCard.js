import React from 'react'
import './AchivCardStyle.css'
const AchivCard = (props) => {
    return (
        <div className="Achivement-card">
        <div className='img-cont'>
        <img  src={props.imgsrc} alt='Achivement' />
        </div>
        <div className='team-details'>
           <center> <p className='team-name'>{props.text}</p></center>
           
        </div>
    </div>
    )
}

export default AchivCard