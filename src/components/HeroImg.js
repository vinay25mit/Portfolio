import "./HeroImgStyle.css"

import React from 'react'

const HeroImg = ({heading,text}) => {
  return (
    <div className="hero-img">
        <div className="img-sec">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  );
};
export  default HeroImg;
