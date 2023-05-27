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
      <p> Designed & Developed by Tenzin Tenkyong 2023</p>
    </div>
  );
};

export default Footer;