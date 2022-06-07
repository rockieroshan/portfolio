import React from 'react'
import './Project.css'
import cocktail from '../images/cocktails.png'
import crud from '../images/CRUD.png'
import todo from '../images/todo.png'

const Projects = () => {
  return (
    <section className='projects'>
      <h1>My Projects
        </h1>
        <div className="project-list">
          <div className='project-one'> 
          <img src={cocktail}alt="cocktails" />
          <h3>Cocktails</h3>
        

          <a href="https://cocktails-final.netlify.app/" target="blank">Details</a>
          
          </div>
          
          <div className='project-two'> 
          <img src={crud} alt="crud" />
          <h3>CRUD Operations</h3>
      

          <a href="https://react-posts-crud-operation.netlify.app/" target="blank">Details</a>
          
          </div>
      
          <div className='project-three'> 
          <img src={todo} alt="todo" />
          <h3>TODO list</h3>
          

          <a href="https://todo-gorcery-list.netlify.app/" target="blank">Details</a>
         
          </div>
        </div>
        </section>
  )
}

export default Projects