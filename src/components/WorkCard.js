import React from 'react'
// import { NavLink } from 'react-router-dom'
import "./WorkCardStyle.css"
function WorkCard(props) {
    return (
        <div className="project-card">
        <img className='event-img_style' src={props.imgsrc} alt='game' />
        <h2 className='project-title'>{props.title}</h2>
        <div className='pro-details'>
            {/* <p>{props.text}</p> */}
            <div className='pro-btns'>
                <a target="_blank" href={props.view} rel='noreferrer' className='btn'>Register</a>
                <a href={props.source} className='btn'>Rulebook</a>
            </div>
        </div>
    </div>
    )
}

export default WorkCard