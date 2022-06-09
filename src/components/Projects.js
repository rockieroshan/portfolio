import React from "react";
import "./Project.css";
import cocktail from "../images/cocktails.png";
import crud from "../images/CRUD.png";
import todo from "../images/todo.png";

const Projects = () => {
  return (
    <section className="projects">
      <div className="myProject">My Projects</div>
      <div className="project-list">
        <div className="project-one">
          <img src={cocktail} alt="cocktails" />
          <div className="title">Cocktails</div>
          <a href="https://cocktails-final.netlify.app/" target="blank">
            Details
          </a>
        </div>
        <div className="project-two">
          <img src={crud} alt="crud" />
          <div className="title">CRUD Operations</div>
          <a
            href="https://react-posts-crud-operation.netlify.app/"
            target="blank"
          >
            Details
          </a>
        </div>
        <div className="project-three">
          <img src={todo} alt="todo" />
          <div className="title">TODO list</div>
          <a href="https://todo-gorcery-list.netlify.app/" target="blank">
            Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
