import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="terminal-bar">
      <Link to="/" className="username">lizbeth@localhost:</Link>
      <span className="nav-links"> ~ 
        <Link to="/about"> About Me </Link> | 
        <Link to="/projects"> Projects </Link> | 
        <Link to="/admin"> Post </Link> | 
        <Link to="/contact"> Contact </Link>
      </span>
    </div>
  );
}

export default Navbar;