import "./HeroImgStyle.css"
import BackgroundSlider from "../lib/BackgroundSlider";
import { Link } from "react-router-dom";
import i1 from "./Assest/badmi.jpg";
import i2 from './Assest/b1.jpg'
import i3 from "./Assest/bollyball.jpg";
import i4 from "./Assest/f4.jpg";
import i5 from "./Assest/cricket.jpg";
import i6 from "./Assest/table.jpg";
import i7 from "./Assest/chess.jpg";
import i8 from "./Assest/foot.jpg"
import React from 'react'

const HeroImg = ({heading,text}) => {
  return (
    <div className="hero-img">
              <BackgroundSlider
          images={[i1,i2, i5,i8, i3, i4, i6, i7]}
          duration={3}
          transition={1}
        />
        <div className="img-sec">
            <h1>{heading}</h1>
            {/* <h2>{text}</h2> */}
        </div>
    </div>
  );
};
export  default HeroImg;
