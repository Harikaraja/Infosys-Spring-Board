import React from "react";
import { Link } from "react-router-dom";
const Navbar = ()=>{

    return(
        <nav class="navbar">
        <div class="brand-title">Motherhood Hospitals</div>
        <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="navbar-links">
          <ul>
            <li><Link to="/" class="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/forum">Forum</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;