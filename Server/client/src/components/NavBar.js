import React from "react";
import { Link } from "react-router-dom";


const NavBar = () =>{
  return(
  <nav>
  <div className="nav-wrapper #2979ff blue accent-3" >
    <Link to="/" className="anchor brand-logo center-align hoverable">Moti</Link>   
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li className="anchor hoverable"><Link to="/quotes">Quotes</Link ></li>
      <li className="anchor hoverable"><Link to="/signin">Sign In</Link ></li>
      <li className="anchor hoverable"><Link to="/signup">Sign Up</Link ></li>
      <li className="anchor hoverable"><Link to="/profile">Profile</Link ></li>
      <li className="anchor hoverable"><Link to="/create">Create Post</Link ></li>
    </ul>
  </div>
</nav>
  )
}

export default NavBar