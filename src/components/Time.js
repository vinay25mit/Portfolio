import React from 'react'
import Countdown from "react-countdown";
import './TimeStyle.css'
// Random component
const Completionist = () => <span>CLOSED!</span>;

// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className='counter'>
        {days}:{hours}:{minutes}:{seconds}
      </div>
    );
  }
};
const Time = () => {
  return (
    <Countdown date={'2023-01-14T00:00:00'} renderer={renderer}>
     <Completionist />
  </Countdown>
  )
}

export default Time