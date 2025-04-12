import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="terminal-bar">
      <div className="terminal-bar">
        <Link to="/" className="username">lizbeth@localhost:</Link>
        <span className="nav-links"> ~ 
            <Link to="/about"> About Me </Link> | 
            <Link to="/projects"> Projects </Link> | 
            <Link to="/build"> Build with me </Link> | 
            <Link to="/contact"> Contact </Link>
  </span>
</div>
      </div>

      <div className="hero-flex">
        <div className="image-side">
          <img src="/hello-world-banner.jpg" alt="Hello World by Lizbeth Vazquez" />
        </div>

        <div className="text-side">
          <p className="greeting">
            <span className="red-arrow">{">"}</span> <span className="white-text">Hello, I’m Lizbeth</span>
          </p>
        </div>
      </div>

      <div className="tags">
        <span>Full Stack Developer</span> 
        <span> Creative Thinker</span> 
        <span> Future Software Engineer</span>
      </div>
    </div>
  );
}

export default Home;