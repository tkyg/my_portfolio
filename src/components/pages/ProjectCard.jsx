import React from 'react'
import '../styles/projectcard.css'

const ProjectCard = (props) => {

  return (
    <div className='project'>
      <div className='project-content'>
        <div className='project-info'>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <br />
          <p className='project-skill'>SKILLS: {props.skills}</p>
          <br/>
          <div className='siteLink'>
            <a href={props.github} target='_blank' rel="noopener noreferrer">GITHUB</a>
            {props.link && <a href={props.link} target='_blank' rel="noopener noreferrer">{props.name}</a>}
          </div>
          </div>
        <div className='project-image'>
          <img src={props.image} alt={props.name}/>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard