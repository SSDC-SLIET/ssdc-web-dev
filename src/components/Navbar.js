import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll', transitionNavbar);
    return () => window.addEventListener('scroll', transitionNavbar);
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="Logo"
          alt="Logo"
        />
        <img
          className="nav__avatar"
          src="Avatar"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
