import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectList } from './ProjectList'

const Projects = () => {
  return (
    <div className='projects'>
      {/* <h1>My Projects</h1> */}
      <div>
        {ProjectList.map((project, index) => {
          return (
            <ProjectCard 
              key={index} 
              name={project.name} 
              image={project.image} 
              description={project.description} 
              skills={project.skills}
              github={project.github}
              link={project.link}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Projects