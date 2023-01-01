import React from 'react'
import EduCard from './EduCard'
import EducationData from './EducationData'
import './EducationStyle.css'


const Education = () => {
  return (
    <section id="education" className="timeline-a gray-section">
    <div className="timeline-container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="navy-line"></div>
                <h1>The Way I am</h1>
                <p>The hierarchy to my life. </p>
            </div>
        </div>
        <div className="row features-block">
           <div className="col-lg-12">
                <div id="vertical-timeline" className="vertical-container light-timeline center-orientation">
                {
                            EducationData.map((val,ind)=>{
                                return (
                                <EduCard
                                 key={ind}
                                 icn={val.icn}
                                 h2Text={val.h2Text}
                                 text={val.text}
                                 date={val.date}
                                 year={val.year}/>)
                            })
                        }
                </div>
            </div>

        </div>
    </div>

</section>
  )
}

export default Education