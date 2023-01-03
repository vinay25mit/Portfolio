import React from 'react'
import './TeamCardStyle.css'
const TeamCard = (props) => {
    return (
        <div className="Team-card">
        <div className='img-cont'>
        <img  src={props.imgsrc} alt='Team' />
        </div>
        <div className='team-details'>
           <center> <p className='team-name'>{props.text}</p></center>
           
        </div>
    </div>
    )
}

export default TeamCard