import React from 'react'; 

// navigation
import {NavLink} from "react-router-dom"


// css
import "../NavBar.css"

function NavBar() {
  return (
    <div>
      <NavLink to="/" className="navLink">Home</NavLink>
      <NavLink to="characters" className="navLink">Characters</NavLink>
      <NavLink to="medias" className="navLink">Medias</NavLink>
      <NavLink to="franchises" className="navLink">Franchises</NavLink>
    </div>
  )
}

export default NavBar