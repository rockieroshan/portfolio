import React from 'react'
import "./About.css"
import resume from '../documents/Niranjan-Resume.pdf'

const About = () => {


  return (
    <section className='about'>
      <h1>about me</h1>
      <p>Meticulous Front end developer with experience and passion for responsive website design and a firm believer in the mobile-first approach.</p>
<p>  
My passion over JavaScript makes it easy to troubleshoot complex problems using latest best practices involving ES6 new features.
</p>
<p>   
My wide working experience in multiple companies have not only equipped me with working knowledge on Front-end but also enhanced my analytical and reasoning skills.
</p>


<a href={resume} download="Niranjan-Resume.pdf">Download CV</a>

    </section>
   
  )
}

export default About 