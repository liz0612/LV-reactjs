import React from "react";
import "../style/About.scss";

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="timeline">

        <div className="timeline-row left">
          <div className="content">
            <h3>Code Ninjas</h3>
            <p>2018</p>
            <p>Where I began to learn to code</p>
          </div>
          <div className="dot"></div>
          <div></div>
        </div>

        <div className="timeline-row right">
          <div></div>
          <div className="dot"></div>
          <div className="content">
            <h3>Bootcamp</h3>
            <p>University of Miami</p>
            <p>Full Stack Developer certificate</p>
          </div>
        </div>

        <div className="timeline-row left">
          <div className="content">
            <h3>Florida State</h3>
            <p>University</p>
            <p>Studying Computer Science</p>
          </div>
          <div className="dot"></div>
          <div></div>
        </div>

      </div>
    </div>
  );
}

export default About;