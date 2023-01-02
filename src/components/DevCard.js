import React from 'react'
import './DevStyle.css'
const DevCard = (props) => {
    return (
        <div className="Dev-card">
        <div className='dev-img-cont'>
        <img  src={props.imgsrc} alt='Dev' />
        </div>
        <div className='dev-pro-details'>
           <center> <p className='Dev-name'>{props.text}</p></center>
        </div>
    </div>
    )
}

export default DevCard