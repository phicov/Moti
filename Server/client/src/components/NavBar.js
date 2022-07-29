import React from "react";
import { Link } from "react-router-dom";


const NavBar = () =>{
  return(
  <nav>
  <div className="nav-wrapper blue" >
    <Link to="/" className="brand-logo">Moti</Link>   
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/quotes">Quotes</Link ></li>
      <li><Link to="/login">Sign In</Link ></li>
      <li><Link to="/signup">Sign Up</Link ></li>
      <li><Link to="/profile">Profile</Link ></li>
    </ul>
  </div>
</nav>
  )
}

export default NavBar