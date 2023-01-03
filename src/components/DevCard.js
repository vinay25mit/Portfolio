import React from 'react'
import './DevStyle.css'
import {FaLinkedin} from "react-icons/fa";
const DevCard = (props) => {
    return (
        <div className="Dev-card">
        <div className='dev-img-cont'>
        <img  className='dev-img' src={props.imgsrc} alt='Dev' />
        </div>
        <div className='dev-pro-details'>
           <center> <p className='Dev-name'>{props.text}</p></center>
           <a href={props.pink}>
            <FaLinkedin
              size={30}
              style={{ color: "#2e5041",marginBottom:"10px" }}
            />
          </a>
        </div>
    </div>
    )
}

export default DevCard