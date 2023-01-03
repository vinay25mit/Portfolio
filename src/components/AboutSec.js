import React from 'react'
import './AboutStyle.css'

function AboutSec() {
  return (
    <div className='about-cont'>
      {/* <h3 className='name'>WHAT WE ARE</h3> */}
      <h1 className='name'>ABOUT US</h1>
      <div className='detail-container'>
        <div className='about-sec'>
          <img className='logoimg' src='https://i.imgur.com/tIW34tf.png' alt='profile-pic'></img>
        </div>
        <div className='intro-sec'>
        <p>UMANG, one of the largest inter college sports fest awaited by sporting communities across the country.
        
        It is the
      annual sports meet of MIT Muzaffarpur being organised by MIT Sports Club. The much-anticipated fest is set to
      return again with the zeal to celebrate togetherness and unite people.
      </p> 
      <p>
      Students from over 40 colleges across the country come here to prove their might and get hands-on the muchcoveted trophy. Umang’22 celebrates its journey and take that spirit forward. Umang’22 is a place to revel in
        victory and learn from failures, an event that feels home while still meaning different things to different people.
      </p>
        </div>
      </div>

    </div>
  )
}

export default AboutSec