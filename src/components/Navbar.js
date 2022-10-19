import React from 'react'
import "./style.css"

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="ul">
            <a href="/">Home</a>
        </div>
        <div className="ul">
            <a href="/">Team</a>
        </div>
        <div className="ul">
            <a href="/">Projects</a>
        </div>
        <div className="ul">
            <a href="/">About</a>
        </div>
    </div>
    </div>
  )
}

export default Navbar
