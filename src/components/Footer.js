import "./FooterStyle.css";

import React from "react";
import { FaYoutube, FaFacebookSquare, FaMailBulk,FaInstagram} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="address">
            <h1>
              <center>Address</center>
            </h1>
            <ol>
              <li>
                <span>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <ul>
                  
                    <li> Muzaffarpur Institute Of Technology</li>
                    <li>Muzaffarpur,Bihar India</li>
                    <li>PIN-842003</li>
                  
                </ul>
              </li>

              <li>
                <span>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <ul>
                 
                    <li> Registration & Enquiry</li>
                    <li>+91-7561951533</li>
                    <li>+91-9660829159</li>
                    <li>+91-7273951360</li>
                  
                </ul>
              </li>
              {/* <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>

                <ul>
                  
                    <li> sportsclubmit@mitmuzaffarpur.org</li>
                 
                </ul>
              </li> */}
            </ol>
          </div>
          {/* <h1><center>Address</center></h1> */}
          {/* <br></br> */}
          {/* <iframe classNameName="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
            
        allowfullscreen=""
    
      ></iframe> */}
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.699481423482!2d85.36324091551246!3d26.14133979916126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10ba819d5e53%3A0x72af98e5f6deb67c!2sMIT%20Muzaffarpur!5e0!3m2!1sen!2sin!4v1672595970597!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div className="right">
          <a href="https://www.facebook.com/mitmsports">
            <FaFacebookSquare
              size={50}
              style={{ color: "#efeae2", marginRight: "2rem" }}
            />
          </a>

          <a href="mailto:sportsclubmit@mitmuzaffarpur.org">
            <FaMailBulk
              size={50}
              style={{ color: "#efeae2", marginRight: "2rem" }}
            />
          </a>
          <a href="https://www.instagram.com/mitsports_club/">
            <FaInstagram
              size={50}
              style={{ color: "#efeae2", marginRight: "2rem" }}
            />
          </a>

          <a href="https://youtube.com/@sportsclubmitm">
            <FaYoutube
              size={50}
              style={{ color: "#efeae2", marginRight: "2rem" }}
            />
          </a>
    
        </div>
      </div>
    </div>
  );
};

export default Footer;
