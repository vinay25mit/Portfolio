import React from "react";
import "./SkillsStyle.css";
const Skills = () => {
  return (
    <>
    <div className="timeline">
      <div className="timeline-event">
        <div className="timeline-indicator"></div>
        <h3>Master's Degree</h3>
        <p>Institution: XYZ University</p>
        <p>Field of Study: Computer Science</p>
      </div>
      <hr className="timeline-connector" />
      <div className="timeline-event">
        <div className="timeline-indicator"></div>
        <h3>Bachelor's Degree</h3>
        <p>Institution: ABC University</p>
        <p>Field of Study: Computer Science</p>
      </div>
      <hr className="timeline-connector" />
      </div>
    </>
  );
};

export default Skills;
