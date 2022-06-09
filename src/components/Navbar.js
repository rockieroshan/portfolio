import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <navbar className="navbar_wrapper">
        <div className="logo">
          <img src={logo} alt="MyLogo" />
        </div>
        <ul className="navbar-list">
          <li>
            <a href onClick={() => window.scrollTo(0, 0, "smooth")}>
              home
            </a>
          </li>
          <li>
            <a href onClick={() => window.scrollTo(0, 660, "smooth")}>
              about
            </a>
          </li>
          <li>
            <a href onClick={() => window.scrollTo(0, 1270, "smooth")}>
              projects
            </a>
          </li>
          <li>
            <a href onClick={() => window.scrollTo(0, 1500, "smooth")}>
              contact
            </a>
          </li>
        </ul>
      </navbar>
    </header>
  );
};

export default Navbar;
