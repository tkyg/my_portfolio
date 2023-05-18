import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href="https://www.linkedin.com/in/tenzintenkyong/" target="_blank" rel="noopener noreferrer">
        
            <LinkedInIcon />
            <span>LinkedIn</span>
          
        </a>
        <a href="https://medium.com/@ttenkyong" target="_blank" rel="noopener noreferrer">
        
            <AutoStoriesIcon />
            <span>Medium</span>
          
        </a>
     
      </div>
    </div>
  )
}

export default Footer