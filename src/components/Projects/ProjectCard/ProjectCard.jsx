import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({details}) => {
  return (
    <div className='project-card'>
      <h6>{details.name}</h6>
      <div className='project-desc'>{details.description}</div>
      <ul>
        {details.technologies.map((item)=>(
            <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectCard
