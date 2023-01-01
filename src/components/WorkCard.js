import React from 'react'
import { NavLink } from 'react-router-dom'
import "./WorkCardStyle.css"
function WorkCard(props) {
    return (
        <div className="project-card">
        <img className='img_style' src={props.imgsrc} alt='project' />
        <h2 className='project-title'>{props.title}</h2>
        <div className='pro-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
                <a href={props.view} className='btn'>View</a>
                <a href={props.source} className='btn'>Source</a>
            </div>
        </div>
    </div>
    )
}

export default WorkCard