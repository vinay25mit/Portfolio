import React from 'react'
import './AchivCardStyle.css'
const AchivCard = (props) => {
    return (
        <div className="Achivement-card">
        <div className='img-cont'>
        <img  src={props.imgsrc} alt='Achivement' />
        </div>
        <div className='pro-details'>
            <p>{props.text}</p>
        </div>
    </div>
    )
}

export default AchivCard