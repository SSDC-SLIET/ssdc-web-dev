import React, { useEffect, useState } from "react";
import "./style.css";
// import logo from '../public/ssdcLogo.jpg'

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    }
    else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.addEventListener('scroll', transitionNavbar);
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src={'https://raw.githubusercontent.com/Angad-Godara/ssdc-web-dev/main/public/ssdcLogo.jpg'}
        alt="Logo"
      />
      <div className="nav__elements">
        <div className="nav__element">Home</div>
        <div className="nav__element">Community</div>
        <div className="nav__element">Achievents</div>
        <div className="nav__element">Media</div>
        <div className="nav__element">Alumni</div>
        <div className="nav__element">About Us</div>
        <div className="nav__element">Contact Us</div>
      </div>
      <img
        className="nav__avatar"
        src={'https://avatars0.githubusercontent.com/u/33479836?v=4'}
        alt="Avatar"
      />

    </div>
  );
}

export default Navbar;
