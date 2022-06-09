import React from "react";
import "./Home.css";
import displayPicture from "../images/displayPicture.JPG";

const Home = () => {
  return (
    <section className="home">
      <div className="home-info">
        Hi, I'm Niranjan Sharma
        <span className="innerText">Front-End Developer</span>
        based in india
      </div>
      <div className="displayPicture">
        <img src={displayPicture} alt="DisplayPicture" />
      </div>
    </section>
  );
};

export default Home;
