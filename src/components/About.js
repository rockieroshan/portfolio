import React from "react";
import "./About.css";
import resume from "../documents/Niranjan-Resume.pdf";

const About = () => {
  return (
    <section className="about">
      <ul className="about-list">
        <li>
          <div className="aboutMe">About me</div>
        </li>
        <li>
          <div className="part1">
            Meticulous Front End Developer With Experience And Passion For
            Responsive Website Design And A Firm Believer In The Mobile-First
            Approach.
          </div>
        </li>
        <li>
          <div className="part2">
            My Passion Over JavaScript Makes It Easy To Troubleshoot Complex
            Problems Using Latest Best Practices Involving ES6 New Features.
          </div>
        </li>
        <li>
          <div className="part3">
            My Wide Working Experience In Multiple Companies Have Not Only
            Equipped Me With Working Knowledge On Front-End But Also Enhanced My
            Analytical And Reasoning Skills.
          </div>
        </li>
        <li className="download-wrapper">
          <a href={resume} className="download" download="Niranjan-Resume.pdf">
            Download CV
          </a>
        </li>
      </ul>
    </section>
  );
};

export default About;
