import React from 'react'
import '../styles/projectcard.css'

const ProjectCard = (props) => {

  const handleGitHubClick = () => {
    window.open(props.github, '_blank')
  }
  const handleLinkClick = () => {
    window.open(props.link, '_blank')
  }

  return (
    <div className='project'>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <br />
      <p className='project-skill'>SKILLS: {props.skills}</p>
      <br/>
      <div>
        <button onClick={handleGitHubClick}>GitHub</button>
        <button onClick={handleLinkClick}>{props.name}</button>
      </div>
      <div className='project-image'>
        <img src={props.image} alt={props.name}/>
      </div>
    </div>
    
  )
}

export default ProjectCard