// import React from 'react'
// import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMedium } from '@fortawesome/free-brands-svg-icons';
// import './styles/footer.css'

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <div className='socialMedia'>
//         <a href="https://www.linkedin.com/in/tenzintenkyong/" target="_blank" rel="noopener noreferrer">
//           <LinkedInIcon className="linkedin-icon"/>
//           <span>LinkedIn</span>
//         </a>
//         <a href="https://medium.com/@ttenkyong" target="_blank" rel="noopener noreferrer">      
//           <FontAwesomeIcon icon={faMedium} className="medium-icon"/>
//           <span>Medium</span>         
//         </a>
//         <a href="https://github.com/tkyg" target="_blank" rel="noopener noreferrer">      
//           <GitHubIcon className="medium-icon"/>
//           <span>GitHub</span>         
//         </a>
//       </div>
//       <p> &copy; 2023 tenzin-tenkyong.herokuapp.com</p>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href="https://www.linkedin.com/in/tenzintenkyong/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
          <span>LINKEDIN</span>
        </a>
        <a href="https://github.com/tkyg" target="_blank" rel="noopener noreferrer">
          {/* <GitHubIcon className="github-icon" /> */}
          <i className="fa-brands fa-square-github"></i>
          <span>GITHUB</span>
        </a>
        <a href="https://medium.com/@ttenkyong" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-medium"></i>
          <span>MEDIUM</span>
        </a>
      </div>
      <p>&copy; Tenzin Tenkyong 2023</p>
    </div>
  );
};

export default Footer;