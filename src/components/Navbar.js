import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css"

const Navbar = () => {
  return (
    <navbar className="navbar">
        <div className="logo"> 
      <img src={logo} alt="MyLogo" />
</div>
      <ul className="navbar-list">
        <li>
          <a href>home</a>
        </li>
        <li>
          <a href>about</a>
        </li>
        <li>
          <a href>projects</a>
        </li>
        <li>
          <a href>contact</a>
        </li>
      </ul>

    </navbar>
  );
};

export default Navbar;
