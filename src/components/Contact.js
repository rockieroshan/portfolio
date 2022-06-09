import React from "react";
import gmail from "../images/gmail.jpeg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import "./Contact.css";

const Contact = () => {
  return (
    <footer className="contact">
      <div className="contactMe">Contact me</div>
      <div className="links">
        <a href="mailto:niranjansharma1992@gmail.com">
          <img src={gmail} alt="gmail" />
        </a>
        <a
          href="https://www.linkedin.com/in/niranjan-sharma-subramanyam-b7851270"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/niranjan-sharma-s"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="GiHub" />
        </a>
      </div>
    </footer>
  );
};

export default Contact;
