import "./HeroImageStyle.css";
import React from "react";
import BackgroundSlider from "../lib/BackgroundSlider";
import { Link } from "react-router-dom";
import i1 from "./Assest/badmi.jpg";
// import i2 from './Assest/bolly.jpg'
import i3 from "./Assest/bollyball.jpg";
import i4 from "./Assest/f4.jpg";
import i5 from "./Assest/cricket.jpg";
import i6 from "./Assest/table.jpg";
import i7 from "./Assest/chess.jpg";
import Time from './Time.js'
const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <BackgroundSlider
          images={[i1, i5, i3, i4, i6, i7]}
          duration={3}
          transition={1}
        />
        {/* <img className="into-img" src={i4} alt="IntroImg"/>     */}
      </div>

      <div className="content">
        {/* <img
          src={"https://i.imgur.com/tIW34tf.png"}
          alt="Avtar"
          className="avtar"
        ></img> */}
        <p></p>
        <h1> UMANG' 2022</h1>
        <img className="data" src={"https://i.imgur.com/fnIUJxK.png"} alt='imghairebaba'></img>
        <h4>MIT,MUZAFFARPUR</h4>
        {/* <h2>REGISTER NOW</h2> */}
        <a href="https://forms.gle/HniKrDwCRTCxv9ve7" target="_blank" rel='noreferrer' className="btn">
          Accomodation
        </a>
        <Link to="/Project" className="btn">
          EVENTS
        </Link>
        <h4>Registration Closes in</h4>
        <h1 ><Time/></h1>
        {/* <a className="btn" href="https://drive.google.com/file/d/1Wiuct2nbAYB2ywommXIY7l9sjOl9F7UD/view?usp=share_link">RULES</a> */}
        {/* <Link to="/Contact" className="btn btn-light">Contact</Link> */}
        {/* <a className="btn" href="https://docs.google.com/document/d/1YE6LIQM2rabqaD_gV_07FWXMQ_oFV-Pg/edit?usp=share_link&ouid=110928713683485523457&rtpof=true&sd=true
">CONSENT</a> */}
{/* <a href="https://docs.google.com/document/d/1cJl48y2fznOCpsGHIrEoP5WvF_NCCKXy/edit?usp=share_link&ouid=110928713683485523457&rtpof=true&sd=true
" className="btn">DECLERATION</a> */}
      </div>
    </div>
  );
};

export default HeroImage;
