import React from 'react'
import './EducationStyle.css'

const EduCard = ({ icn, h2Text, text, date, year }) => {
    return (
        <div className="vertical-timeline-block">
           <div className="vertical-timeline-icon navy-bg">
                <i className={icn}></i>
            </div>
            <div className="vertical-timeline-content">
                <h2>{h2Text}</h2>
                <p>{text}
                </p>

                <span className="vertical-date"> {year} <br /> <small>{date}</small> </span>
            </div>             
         </div>
    )
}

export default EduCard