import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './ImgSliderStyle.css'
function ImgSlider() {
  return (
    
    <Carousel className='ImgContainer' variant="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/sWA6vuw.png"
          alt="First slide"
        />
        <Carousel.Caption>
         
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/eFGpRWS.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>ICPC Kanpur-Mathura 2020</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/j0kEmf2.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>KickStart 2022</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
  );
}

export default ImgSlider;